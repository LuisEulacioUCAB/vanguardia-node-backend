import { users } from '../../generated/client';
import { ContextResolver } from '../../utils/types';
import { createUploadStream } from '../../utils/s3';
import stream from 'node:stream';
import { DO_SPACES_ROUTE } from '../../utils/constants';
import moment from 'moment';
import { UpdateUserArgs } from './user.types';

/**
 * Update user and upload file to s3.
 *
 * @param {any}parent - Any params.
 * @param {ChangePasswordArgs}args - Change  password args.
 * @param {ContextResolver}context - Prisma Resolver.
 * @returns {users} - Return payload data.
 */
export const updateUser = async (
  parent: any,
  args: UpdateUserArgs,
  context: ContextResolver,
): Promise<users> => {
  console.log('args', args);
  const { user, file } = args.data;

  const data = {
    ...user,
  };

  let result;

  if (file) {
    try {

      const { createReadStream, filename } = await file;
      const _stream = createReadStream();
      const body = new stream.PassThrough();
      _stream.pipe(body);
      result = await createUploadStream(`${DO_SPACES_ROUTE}/${user.id}/${filename}`, body);

    } catch (error) {
      throw new Error('Tenemos problema para actualizar el usuario');
    }

    data.avatar = result?.Location as string;
  }


  let updateUser;

  data.updated_at = moment().toDate();

  try {
    updateUser = await context.prisma.users.update({
      data,
      where: {
        email: user.email as string,
      },
    });

  } catch (e) {

    throw new Error('Tenemos problema para actualizar el usuario');

  }

  return updateUser;
};
export const userMutationResolvers = {
  updateUser,
};