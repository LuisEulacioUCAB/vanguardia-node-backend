
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BlogsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CardsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  credit_card_number: 'credit_card_number',
  expiration_year: 'expiration_year',
  expiration_month: 'expiration_month',
  brand: 'brand',
  card_holder_name: 'card_holder_name',
  customer_card_id: 'customer_card_id',
  user_id: 'user_id',
  primary: 'primary'
};

exports.Prisma.InvoicesScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  payment_method: 'payment_method',
  transaction_id: 'transaction_id',
  total: 'total',
  status: 'status',
  user_id: 'user_id',
  subscription_id: 'subscription_id'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  message: 'message',
  user_id: 'user_id'
};

exports.Prisma.SubscriptionsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  name: 'name',
  description: 'description',
  start_date: 'start_date',
  end_date: 'end_date',
  user_id: 'user_id',
  subscription_id: 'subscription_id',
  status: 'status'
};

exports.Prisma.User_social_providersScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  provider: 'provider',
  user_id: 'user_id',
  url_register: 'url_register',
  provider_id: 'provider_id'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  email_verified_at: 'email_verified_at',
  password: 'password',
  remember_token: 'remember_token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  avatar: 'avatar',
  sex: 'sex',
  birthday: 'birthday',
  role_id: 'role_id'
};

exports.Prisma.Password_resetScalarFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  expired_at: 'expired_at'
};

exports.Prisma.User_rolesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.invoices_status = exports.$Enums.invoices_status = {
  COMPLETED: 'COMPLETED',
  PROCESSING: 'PROCESSING',
  FAILED: 'FAILED'
};

exports.subscriptions_status = exports.$Enums.subscriptions_status = {
  active: 'active',
  canceled: 'canceled',
  expired: 'expired',
  future: 'future',
  in_trial: 'in_trial',
  live: 'live'
};

exports.social_providers = exports.$Enums.social_providers = {
  SYSTEM: 'SYSTEM',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  APPLE: 'APPLE'
};

exports.users_sex = exports.$Enums.users_sex = {
  FEMALE: 'FEMALE',
  MALE: 'MALE',
  NO_APPLY: 'NO_APPLY'
};

exports.roles = exports.$Enums.roles = {
  SUPER_ADMINISTRATOR: 'SUPER_ADMINISTRATOR',
  ADMINISTRATOR: 'ADMINISTRATOR',
  USER: 'USER',
  EDITOR: 'EDITOR'
};

exports.Prisma.ModelName = {
  blogs: 'blogs',
  cards: 'cards',
  invoices: 'invoices',
  migrations: 'migrations',
  notifications: 'notifications',
  subscriptions: 'subscriptions',
  user_social_providers: 'user_social_providers',
  users: 'users',
  password_reset: 'password_reset',
  user_roles: 'user_roles'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
