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

const app = express();

const httpServer = http.createServer(app);
const port = process.env.PORT || 8080;
const prisma = new PrismaClient();
const typeDefs = [authTypeDefs].toString();

const mutationResolvers = {
  ...authMutationResolvers,
};

const queryResolvers = {
  ...authQueryResolvers,
};

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      ...queryResolvers,
    },
    Mutation: {
      ...mutationResolvers,
    },
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const main = async () => {
  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>({
      origin: '*',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Authorization', 'Content-Type'],
      maxAge: 86400,
    }),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({
        prisma: prisma,
        userId: req && req.headers.authorization ? authenticateMiddleware(req) : null,
      }),
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
};

main();
