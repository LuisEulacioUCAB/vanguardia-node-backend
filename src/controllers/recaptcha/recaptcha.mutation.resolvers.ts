import { ContextResolver } from '../../utils/types';
import { RecaptchaArgs } from './recaptcha.types';
import { checkRecaptcha } from './recaptcha.actions';


const recaptcha = async (
  parent: any,
  args: RecaptchaArgs,
  context: ContextResolver,
) => {

  const recaptcha = await checkRecaptcha(args.token as string);

  if (!recaptcha.success) throw Error('Tenemos problemas para validar');

  const user = await context.prisma.users.findUnique({ where: { email: args.email } });

  return {
    success: !!user,
  };
};

export const recaptchaMutationResolvers = {
  recaptcha,
};