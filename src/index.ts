import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { PrismaClient } from './generated/client';
import { authMutationResolvers } from './controllers/auth/auth.mutation.resolvers';
import { authTypeDefs } from './controllers/auth/auth.types';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { authQueryResolvers } from './controllers/auth/auth.query.resolvers';
import { authenticateMiddleware } from './middleware/authenticateMiddleware';
import { PORT } from './utils/constants';
import { authRouter } from './routes/auth.routes';
import { recaptchaMutationResolvers } from './controllers/recaptcha/recaptcha.mutation.resolvers';
import { recaptchaTypeDefs } from './controllers/recaptcha/recaptcha.types';
import bodyParser from 'body-parser';
import { graphqlUploadExpress, GraphQLUpload } from 'graphql-upload-ts';
import { userQueryResolvers } from './controllers/user/user.query.resolvers';
import { userMutationResolvers } from './controllers/user/user.mutation.resolvers';
import { userTypeDefs } from './controllers/user/user.types';

const app = express();

app.use('/auth', authRouter);


const httpServer = http.createServer(app);
const prisma = new PrismaClient();
const typeDefs = [userTypeDefs,authTypeDefs, recaptchaTypeDefs].toString();

const mutationResolvers = {
  ...authMutationResolvers,
  ...recaptchaMutationResolvers,
  ...userMutationResolvers,
};

const queryResolvers = {

  ...authQueryResolvers,
  ...userQueryResolvers,
};

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Upload: GraphQLUpload,
    Query: {
      ...queryResolvers,
    },
    Mutation: {
      ...mutationResolvers,
    },
  },
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

});

const main = async () => {
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    graphqlUploadExpress(),
    expressMiddleware(server, {
      context: async ({ req }) => ({
        prisma: prisma,
        userId: req && req.headers.authorization ? authenticateMiddleware(req) : null,
      }),
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));

  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
};

main();
