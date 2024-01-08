import { faker } from '@faker-js/faker';
import { PrismaClient, roles } from '../src/generated/client';

const prisma = new PrismaClient();

const _roles = [roles.SUPER_ADMINISTRATOR, roles.ADMINISTRATOR, roles.USER];
const createRoles = async () => {
  try {
    await prisma.user_roles.createMany({ data: _roles.map((role) => ({ name: role })) });
  } catch (e) {
    throw new Error('Error to create roles');
  }
};
const main = async () => {
  await createRoles();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
