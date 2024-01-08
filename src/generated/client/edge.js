Object.defineProperty(exports, '__esModule', { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge');

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: '5.7.1',
  engine: '0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5',
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
});

exports.Prisma.BlogsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
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
  primary: 'primary',
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
  subscription_id: 'subscription_id',
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch',
};

exports.Prisma.NotificationsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  message: 'message',
  user_id: 'user_id',
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
  status: 'status',
};

exports.Prisma.User_social_providersScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  provider: 'provider',
  user_id: 'user_id',
  url_register: 'url_register',
  provider_id: 'provider_id',
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
  role_id: 'role_id',
};

exports.Prisma.User_rolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last',
};
exports.invoices_status = exports.$Enums.invoices_status = {
  COMPLETED: 'COMPLETED',
  PROCESSING: 'PROCESSING',
  FAILED: 'FAILED',
};

exports.subscriptions_status = exports.$Enums.subscriptions_status = {
  active: 'active',
  canceled: 'canceled',
  expired: 'expired',
  future: 'future',
  in_trial: 'in_trial',
  live: 'live',
};

exports.users_sex = exports.$Enums.users_sex = {
  FEMALE: 'FEMALE',
  MALE: 'MALE',
  NO_APPLY: 'NO_APPLY',
};

exports.roles = exports.$Enums.roles = {
  SUPER_ADMINISTRATOR: 'SUPER_ADMINISTRATOR',
  ADMINISTRATOR: 'ADMINISTRATOR',
  USER: 'USER',
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
  user_roles: 'user_roles',
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value:
        'C:\\Users\\luise\\OneDrive\\Escritorio\\vanguardia-node-backend\\src\\generated\\client',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'windows',
        native: true,
      },
    ],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: '../../../.env',
    schemaEnvPath: '../../../.env',
  },
  relativePath: '../../../prisma',
  clientVersion: '5.7.1',
  engineVersion: '0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5',
  datasourceNames: ['db'],
  activeProvider: 'mysql',
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'DATABASE_URL',
        value: null,
      },
    },
  },
  inlineSchema:
    'Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9zcmMvZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIGJsb2dzIHsKICBpZCAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCgwKQp9Cgptb2RlbCBjYXJkcyB7CiAgaWQgICAgICAgICAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICB1cGRhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoMCkKICBjcmVkaXRfY2FyZF9udW1iZXIgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBleHBpcmF0aW9uX3llYXIgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBleHBpcmF0aW9uX21vbnRoICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBicmFuZCAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBjYXJkX2hvbGRlcl9uYW1lICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBjdXN0b21lcl9jYXJkX2lkICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICB1c2VyX2lkICAgICAgICAgICAgQmlnSW50PyAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIHByaW1hcnkgICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpCn0KCm1vZGVsIGludm9pY2VzIHsKICBpZCAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICAgICBEYXRlVGltZT8gICAgICAgQGRiLlRpbWVzdGFtcCgwKQogIHBheW1lbnRfbWV0aG9kICBTdHJpbmc/ICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIHRyYW5zYWN0aW9uX2lkICBTdHJpbmc/ICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIHRvdGFsICAgICAgICAgICBGbG9hdAogIHN0YXR1cyAgICAgICAgICBpbnZvaWNlc19zdGF0dXMgQGRlZmF1bHQoUFJPQ0VTU0lORykKICB1c2VyX2lkICAgICAgICAgQmlnSW50PyAgICAgICAgIEBkYi5VbnNpZ25lZEJpZ0ludAogIHN1YnNjcmlwdGlvbl9pZCBCaWdJbnQ/ICAgICAgICAgQGRiLlVuc2lnbmVkQmlnSW50Cn0KCm1vZGVsIG1pZ3JhdGlvbnMgewogIGlkICAgICAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgbWlncmF0aW9uIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgYmF0Y2ggICAgIEludAp9Cgptb2RlbCBub3RpZmljYXRpb25zIHsKICBpZCAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuVW5zaWduZWRCaWdJbnQKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDUpCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCg1KQogIG1lc3NhZ2UgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NSkKICB1c2VyX2lkICAgIEJpZ0ludD8gICBAZGIuVW5zaWduZWRCaWdJbnQKfQoKbW9kZWwgc3Vic2NyaXB0aW9ucyB7CiAgaWQgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5VbnNpZ25lZEJpZ0ludAogIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuVGltZXN0YW1wKDApCiAgdXBkYXRlZF9hdCAgICAgIERhdGVUaW1lPyAgICAgICAgICAgIEBkYi5UaW1lc3RhbXAoMCkKICBuYW1lICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIGRlc2NyaXB0aW9uICAgICBTdHJpbmc/ICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgc3RhcnRfZGF0ZSAgICAgIFN0cmluZz8gICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1NSkKICBlbmRfZGF0ZSAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIHVzZXJfaWQgICAgICAgICBCaWdJbnQ/ICAgICAgICAgICAgICBAZGIuVW5zaWduZWRCaWdJbnQKICBzdWJzY3JpcHRpb25faWQgU3RyaW5nPyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIHN0YXR1cyAgICAgICAgICBzdWJzY3JpcHRpb25zX3N0YXR1cwp9Cgptb2RlbCB1c2VyX3NvY2lhbF9wcm92aWRlcnMgewogIGlkICAgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkQmlnSW50CiAgY3JlYXRlZF9hdCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcCgwKQogIHVwZGF0ZWRfYXQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXAoMCkKICBwcm92aWRlciAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCJTWVNURU0iKSBAZGIuVmFyQ2hhcigyNTUpCiAgdXNlcl9pZCAgICAgIEJpZ0ludCAgICBAZGVmYXVsdCgwKSBAZGIuVW5zaWduZWRCaWdJbnQKICB1cmxfcmVnaXN0ZXIgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NSkKICBwcm92aWRlcl9pZCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgdXNlcnMgewogIGlkICAgICAgICAgICAgICAgIEludCAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgICAgICAgICAgU3RyaW5nICAgICAgQGRiLlRleHQKICBlbWFpbCAgICAgICAgICAgICBTdHJpbmcgICAgICBAdW5pcXVlKG1hcDogInVzZXJzX2VtYWlsX3VuaXF1ZSIpIEBkYi5WYXJDaGFyKDI1NSkKICBlbWFpbF92ZXJpZmllZF9hdCBEYXRlVGltZT8gICBAZGIuVGltZXN0YW1wKDApCiAgcGFzc3dvcmQgICAgICAgICAgU3RyaW5nICAgICAgQGRlZmF1bHQoIiIpIEBkYi5WYXJDaGFyKDI1NSkKICByZW1lbWJlcl90b2tlbiAgICBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcigxMDApCiAgY3JlYXRlZF9hdCAgICAgICAgRGF0ZVRpbWU/ICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXAoKQogIHVwZGF0ZWRfYXQgICAgICAgIERhdGVUaW1lPyAgIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wKDApCiAgYXZhdGFyICAgICAgICAgICAgU3RyaW5nPyAgICAgQGRiLkxvbmdUZXh0CiAgc2V4ICAgICAgICAgICAgICAgdXNlcnNfc2V4ICAgQGRlZmF1bHQoTk9fQVBQTFkpCiAgYmlydGhkYXkgICAgICAgICAgU3RyaW5nPyAgICAgQGRiLlZhckNoYXIoMjU1KQogIHJvbGUgICAgICAgICAgICAgIHVzZXJfcm9sZXM/IEByZWxhdGlvbihmaWVsZHM6IFtyb2xlX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICByb2xlX2lkICAgICAgICAgICBJbnQ/Cn0KCm1vZGVsIHVzZXJfcm9sZXMgewogIGlkICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICByb2xlcwogIHVzZXJzIHVzZXJzW10KfQoKZW51bSBpbnZvaWNlc19zdGF0dXMgewogIENPTVBMRVRFRAogIFBST0NFU1NJTkcKICBGQUlMRUQKfQoKZW51bSBzdWJzY3JpcHRpb25zX3N0YXR1cyB7CiAgYWN0aXZlCiAgY2FuY2VsZWQKICBleHBpcmVkCiAgZnV0dXJlCiAgaW5fdHJpYWwKICBsaXZlCn0KCmVudW0gdXNlcnNfc2V4IHsKICBGRU1BTEUKICBNQUxFCiAgTk9fQVBQTFkKfQoKZW51bSByb2xlcyB7CiAgU1VQRVJfQURNSU5JU1RSQVRPUgogIEFETUlOSVNUUkFUT1IKICBVU0VSCn0K',
  inlineSchemaHash: '20d938b2e726eae7932daf085dc3f07458ce63d3f179012dc6f56fe1a975befe',
};
config.dirname = '/';

config.runtimeDataModel = JSON.parse(
  '{"models":{"blogs":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"cards":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"credit_card_number","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"expiration_year","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"expiration_month","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"brand","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"card_holder_name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"customer_card_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"primary","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"invoices":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"payment_method","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"transaction_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"total","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"invoices_status","default":"PROCESSING","isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"subscription_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"migrations":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"migration","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"batch","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"notifications":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"message","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"subscriptions":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"start_date","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"end_date","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"subscription_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"subscriptions_status","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"user_social_providers":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"provider","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"SYSTEM","isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":"0","isGenerated":false,"isUpdatedAt":false},{"name":"url_register","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"provider_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"users":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email_verified_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"","isGenerated":false,"isUpdatedAt":false},{"name":"remember_token","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"avatar","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"sex","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"users_sex","default":"NO_APPLY","isGenerated":false,"isUpdatedAt":false},{"name":"birthday","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"user_roles","relationName":"user_rolesTousers","relationFromFields":["role_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"role_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"user_roles":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"roles","isGenerated":false,"isUpdatedAt":false},{"name":"users","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"users","relationName":"user_rolesTousers","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"invoices_status":{"values":[{"name":"COMPLETED","dbName":null},{"name":"PROCESSING","dbName":null},{"name":"FAILED","dbName":null}],"dbName":null},"subscriptions_status":{"values":[{"name":"active","dbName":null},{"name":"canceled","dbName":null},{"name":"expired","dbName":null},{"name":"future","dbName":null},{"name":"in_trial","dbName":null},{"name":"live","dbName":null}],"dbName":null},"users_sex":{"values":[{"name":"FEMALE","dbName":null},{"name":"MALE","dbName":null},{"name":"NO_APPLY","dbName":null}],"dbName":null},"roles":{"values":[{"name":"SUPER_ADMINISTRATOR","dbName":null},{"name":"ADMINISTRATOR","dbName":null},{"name":"USER","dbName":null}],"dbName":null}},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.getQueryEngineWasmModule = undefined;

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL:
      (typeof globalThis !== 'undefined' && globalThis['DATABASE_URL']) ||
      (typeof process !== 'undefined' && process.env && process.env.DATABASE_URL) ||
      undefined,
  },
});

if (
  (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
  (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
  undefined
) {
  Debug.enable(
    (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
      (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
      undefined,
  );
}

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
