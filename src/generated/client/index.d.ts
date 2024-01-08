/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model blogs
 *
 */
export type blogs = $Result.DefaultSelection<Prisma.$blogsPayload>;
/**
 * Model cards
 *
 */
export type cards = $Result.DefaultSelection<Prisma.$cardsPayload>;
/**
 * Model invoices
 *
 */
export type invoices = $Result.DefaultSelection<Prisma.$invoicesPayload>;
/**
 * Model migrations
 *
 */
export type migrations = $Result.DefaultSelection<Prisma.$migrationsPayload>;
/**
 * Model notifications
 *
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>;
/**
 * Model subscriptions
 *
 */
export type subscriptions = $Result.DefaultSelection<Prisma.$subscriptionsPayload>;
/**
 * Model user_social_providers
 *
 */
export type user_social_providers = $Result.DefaultSelection<Prisma.$user_social_providersPayload>;
/**
 * Model users
 *
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>;
/**
 * Model user_roles
 *
 */
export type user_roles = $Result.DefaultSelection<Prisma.$user_rolesPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const invoices_status: {
    COMPLETED: 'COMPLETED';
    PROCESSING: 'PROCESSING';
    FAILED: 'FAILED';
  };

  export type invoices_status = (typeof invoices_status)[keyof typeof invoices_status];

  export const subscriptions_status: {
    active: 'active';
    canceled: 'canceled';
    expired: 'expired';
    future: 'future';
    in_trial: 'in_trial';
    live: 'live';
  };

  export type subscriptions_status =
    (typeof subscriptions_status)[keyof typeof subscriptions_status];

  export const users_sex: {
    FEMALE: 'FEMALE';
    MALE: 'MALE';
    NO_APPLY: 'NO_APPLY';
  };

  export type users_sex = (typeof users_sex)[keyof typeof users_sex];

  export const roles: {
    SUPER_ADMINISTRATOR: 'SUPER_ADMINISTRATOR';
    ADMINISTRATOR: 'ADMINISTRATOR';
    USER: 'USER';
  };

  export type roles = (typeof roles)[keyof typeof roles];
}

export type invoices_status = $Enums.invoices_status;

export const invoices_status: typeof $Enums.invoices_status;

export type subscriptions_status = $Enums.subscriptions_status;

export const subscriptions_status: typeof $Enums.subscriptions_status;

export type users_sex = $Enums.users_sex;

export const users_sex: typeof $Enums.users_sex;

export type roles = $Enums.roles;

export const roles: typeof $Enums.roles;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Blogs
 * const blogs = await prisma.blogs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Blogs
   * const blogs = await prisma.blogs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.blogs`: Exposes CRUD operations for the **blogs** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Blogs
   * const blogs = await prisma.blogs.findMany()
   * ```
   */
  get blogs(): Prisma.blogsDelegate<ExtArgs>;

  /**
   * `prisma.cards`: Exposes CRUD operations for the **cards** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cards
   * const cards = await prisma.cards.findMany()
   * ```
   */
  get cards(): Prisma.cardsDelegate<ExtArgs>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **invoices** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Invoices
   * const invoices = await prisma.invoices.findMany()
   * ```
   */
  get invoices(): Prisma.invoicesDelegate<ExtArgs>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Migrations
   * const migrations = await prisma.migrations.findMany()
   * ```
   */
  get migrations(): Prisma.migrationsDelegate<ExtArgs>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notifications.findMany()
   * ```
   */
  get notifications(): Prisma.notificationsDelegate<ExtArgs>;

  /**
   * `prisma.subscriptions`: Exposes CRUD operations for the **subscriptions** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscriptions
   * const subscriptions = await prisma.subscriptions.findMany()
   * ```
   */
  get subscriptions(): Prisma.subscriptionsDelegate<ExtArgs>;

  /**
   * `prisma.user_social_providers`: Exposes CRUD operations for the **user_social_providers** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_social_providers
   * const user_social_providers = await prisma.user_social_providers.findMany()
   * ```
   */
  get user_social_providers(): Prisma.user_social_providersDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.user_roles`: Exposes CRUD operations for the **user_roles** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_roles
   * const user_roles = await prisma.user_roles.findMany()
   * ```
   */
  get user_roles(): Prisma.user_rolesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
      ? False
      : T extends Uint8Array
        ? False
        : T extends BigInt
          ? False
          : T extends object
            ? True
            : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    blogs: 'blogs';
    cards: 'cards';
    invoices: 'invoices';
    migrations: 'migrations';
    notifications: 'notifications';
    subscriptions: 'subscriptions';
    user_social_providers: 'user_social_providers';
    users: 'users';
    user_roles: 'user_roles';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps:
        | 'blogs'
        | 'cards'
        | 'invoices'
        | 'migrations'
        | 'notifications'
        | 'subscriptions'
        | 'user_social_providers'
        | 'users'
        | 'user_roles';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      blogs: {
        payload: Prisma.$blogsPayload<ExtArgs>;
        fields: Prisma.blogsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.blogsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.blogsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>;
          };
          findFirst: {
            args: Prisma.blogsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.blogsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>;
          };
          findMany: {
            args: Prisma.blogsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>[];
          };
          create: {
            args: Prisma.blogsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>;
          };
          createMany: {
            args: Prisma.blogsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.blogsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>;
          };
          update: {
            args: Prisma.blogsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>;
          };
          deleteMany: {
            args: Prisma.blogsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.blogsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.blogsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>;
          };
          aggregate: {
            args: Prisma.BlogsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBlogs>;
          };
          groupBy: {
            args: Prisma.blogsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BlogsGroupByOutputType>[];
          };
          count: {
            args: Prisma.blogsCountArgs<ExtArgs>;
            result: $Utils.Optional<BlogsCountAggregateOutputType> | number;
          };
        };
      };
      cards: {
        payload: Prisma.$cardsPayload<ExtArgs>;
        fields: Prisma.cardsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.cardsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cardsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.cardsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>;
          };
          findFirst: {
            args: Prisma.cardsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cardsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.cardsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>;
          };
          findMany: {
            args: Prisma.cardsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>[];
          };
          create: {
            args: Prisma.cardsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>;
          };
          createMany: {
            args: Prisma.cardsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.cardsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>;
          };
          update: {
            args: Prisma.cardsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>;
          };
          deleteMany: {
            args: Prisma.cardsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.cardsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.cardsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>;
          };
          aggregate: {
            args: Prisma.CardsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCards>;
          };
          groupBy: {
            args: Prisma.cardsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CardsGroupByOutputType>[];
          };
          count: {
            args: Prisma.cardsCountArgs<ExtArgs>;
            result: $Utils.Optional<CardsCountAggregateOutputType> | number;
          };
        };
      };
      invoices: {
        payload: Prisma.$invoicesPayload<ExtArgs>;
        fields: Prisma.invoicesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.invoicesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>;
          };
          findFirst: {
            args: Prisma.invoicesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>;
          };
          findMany: {
            args: Prisma.invoicesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[];
          };
          create: {
            args: Prisma.invoicesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>;
          };
          createMany: {
            args: Prisma.invoicesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.invoicesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>;
          };
          update: {
            args: Prisma.invoicesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>;
          };
          deleteMany: {
            args: Prisma.invoicesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.invoicesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.invoicesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>;
          };
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInvoices>;
          };
          groupBy: {
            args: Prisma.invoicesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InvoicesGroupByOutputType>[];
          };
          count: {
            args: Prisma.invoicesCountArgs<ExtArgs>;
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number;
          };
        };
      };
      migrations: {
        payload: Prisma.$migrationsPayload<ExtArgs>;
        fields: Prisma.migrationsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.migrationsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>;
          };
          findFirst: {
            args: Prisma.migrationsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>;
          };
          findMany: {
            args: Prisma.migrationsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[];
          };
          create: {
            args: Prisma.migrationsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>;
          };
          createMany: {
            args: Prisma.migrationsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.migrationsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>;
          };
          update: {
            args: Prisma.migrationsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>;
          };
          deleteMany: {
            args: Prisma.migrationsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.migrationsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.migrationsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>;
          };
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMigrations>;
          };
          groupBy: {
            args: Prisma.migrationsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MigrationsGroupByOutputType>[];
          };
          count: {
            args: Prisma.migrationsCountArgs<ExtArgs>;
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number;
          };
        };
      };
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>;
        fields: Prisma.notificationsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>;
          };
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>;
          };
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[];
          };
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>;
          };
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>;
          };
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>;
          };
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>;
          };
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNotifications>;
          };
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NotificationsGroupByOutputType>[];
          };
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>;
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number;
          };
        };
      };
      subscriptions: {
        payload: Prisma.$subscriptionsPayload<ExtArgs>;
        fields: Prisma.subscriptionsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.subscriptionsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.subscriptionsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
          };
          findFirst: {
            args: Prisma.subscriptionsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.subscriptionsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
          };
          findMany: {
            args: Prisma.subscriptionsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[];
          };
          create: {
            args: Prisma.subscriptionsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
          };
          createMany: {
            args: Prisma.subscriptionsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.subscriptionsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
          };
          update: {
            args: Prisma.subscriptionsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
          };
          deleteMany: {
            args: Prisma.subscriptionsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.subscriptionsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.subscriptionsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
          };
          aggregate: {
            args: Prisma.SubscriptionsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscriptions>;
          };
          groupBy: {
            args: Prisma.subscriptionsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionsGroupByOutputType>[];
          };
          count: {
            args: Prisma.subscriptionsCountArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionsCountAggregateOutputType> | number;
          };
        };
      };
      user_social_providers: {
        payload: Prisma.$user_social_providersPayload<ExtArgs>;
        fields: Prisma.user_social_providersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.user_social_providersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_social_providersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.user_social_providersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_social_providersPayload>;
          };
          findFirst: {
            args: Prisma.user_social_providersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_social_providersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.user_social_providersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_social_providersPayload>;
          };
          findMany: {
            args: Prisma.user_social_providersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_social_providersPayload>[];
          };
          create: {
            args: Prisma.user_social_providersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_social_providersPayload>;
          };
          createMany: {
            args: Prisma.user_social_providersCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.user_social_providersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_social_providersPayload>;
          };
          update: {
            args: Prisma.user_social_providersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_social_providersPayload>;
          };
          deleteMany: {
            args: Prisma.user_social_providersDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.user_social_providersUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.user_social_providersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_social_providersPayload>;
          };
          aggregate: {
            args: Prisma.User_social_providersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_social_providers>;
          };
          groupBy: {
            args: Prisma.user_social_providersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_social_providersGroupByOutputType>[];
          };
          count: {
            args: Prisma.user_social_providersCountArgs<ExtArgs>;
            result: $Utils.Optional<User_social_providersCountAggregateOutputType> | number;
          };
        };
      };
      users: {
        payload: Prisma.$usersPayload<ExtArgs>;
        fields: Prisma.usersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[];
          };
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUsers>;
          };
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UsersGroupByOutputType>[];
          };
          count: {
            args: Prisma.usersCountArgs<ExtArgs>;
            result: $Utils.Optional<UsersCountAggregateOutputType> | number;
          };
        };
      };
      user_roles: {
        payload: Prisma.$user_rolesPayload<ExtArgs>;
        fields: Prisma.user_rolesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.user_rolesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>;
          };
          findFirst: {
            args: Prisma.user_rolesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>;
          };
          findMany: {
            args: Prisma.user_rolesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
          };
          create: {
            args: Prisma.user_rolesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>;
          };
          createMany: {
            args: Prisma.user_rolesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.user_rolesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>;
          };
          update: {
            args: Prisma.user_rolesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>;
          };
          deleteMany: {
            args: Prisma.user_rolesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.user_rolesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.user_rolesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>;
          };
          aggregate: {
            args: Prisma.User_rolesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_roles>;
          };
          groupBy: {
            args: Prisma.user_rolesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_rolesGroupByOutputType>[];
          };
          count: {
            args: Prisma.user_rolesCountArgs<ExtArgs>;
            result: $Utils.Optional<User_rolesCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type User_rolesCountOutputType
   */

  export type User_rolesCountOutputType = {
    users: number;
  };

  export type User_rolesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | User_rolesCountOutputTypeCountUsersArgs;
  };

  // Custom InputTypes

  /**
   * User_rolesCountOutputType without action
   */
  export type User_rolesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User_rolesCountOutputType
     */
    select?: User_rolesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * User_rolesCountOutputType without action
   */
  export type User_rolesCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: usersWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model blogs
   */

  export type AggregateBlogs = {
    _count: BlogsCountAggregateOutputType | null;
    _avg: BlogsAvgAggregateOutputType | null;
    _sum: BlogsSumAggregateOutputType | null;
    _min: BlogsMinAggregateOutputType | null;
    _max: BlogsMaxAggregateOutputType | null;
  };

  export type BlogsAvgAggregateOutputType = {
    id: number | null;
  };

  export type BlogsSumAggregateOutputType = {
    id: bigint | null;
  };

  export type BlogsMinAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BlogsMaxAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BlogsCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BlogsAvgAggregateInputType = {
    id?: true;
  };

  export type BlogsSumAggregateInputType = {
    id?: true;
  };

  export type BlogsMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BlogsMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BlogsCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BlogsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which blogs to aggregate.
     */
    where?: blogsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: blogsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned blogs
     **/
    _count?: true | BlogsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BlogsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BlogsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BlogsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BlogsMaxAggregateInputType;
  };

  export type GetBlogsAggregateType<T extends BlogsAggregateArgs> = {
    [P in keyof T & keyof AggregateBlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogs[P]>
      : GetScalarType<T[P], AggregateBlogs[P]>;
  };

  export type blogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: blogsWhereInput;
      orderBy?: blogsOrderByWithAggregationInput | blogsOrderByWithAggregationInput[];
      by: BlogsScalarFieldEnum[] | BlogsScalarFieldEnum;
      having?: blogsScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: BlogsCountAggregateInputType | true;
      _avg?: BlogsAvgAggregateInputType;
      _sum?: BlogsSumAggregateInputType;
      _min?: BlogsMinAggregateInputType;
      _max?: BlogsMaxAggregateInputType;
    };

  export type BlogsGroupByOutputType = {
    id: bigint;
    created_at: Date | null;
    updated_at: Date | null;
    _count: BlogsCountAggregateOutputType | null;
    _avg: BlogsAvgAggregateOutputType | null;
    _sum: BlogsSumAggregateOutputType | null;
    _min: BlogsMinAggregateOutputType | null;
    _max: BlogsMaxAggregateOutputType | null;
  };

  type GetBlogsGroupByPayload<T extends blogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogsGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BlogsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BlogsGroupByOutputType[P]>
          : GetScalarType<T[P], BlogsGroupByOutputType[P]>;
      }
    >
  >;

  export type blogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['blogs']
    >;

  export type blogsSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $blogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'blogs';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs['result']['blogs']
    >;
    composites: {};
  };

  type blogsGetPayload<S extends boolean | null | undefined | blogsDefaultArgs> = $Result.GetResult<
    Prisma.$blogsPayload,
    S
  >;

  type blogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    blogsFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BlogsCountAggregateInputType | true;
  };

  export interface blogsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blogs']; meta: { name: 'blogs' } };
    /**
     * Find zero or one Blogs that matches the filter.
     * @param {blogsFindUniqueArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends blogsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, blogsFindUniqueArgs<ExtArgs>>,
    ): Prisma__blogsClient<
      $Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Blogs that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {blogsFindUniqueOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends blogsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blogsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__blogsClient<
      $Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends blogsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, blogsFindFirstArgs<ExtArgs>>,
    ): Prisma__blogsClient<
      $Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Blogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends blogsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blogsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__blogsClient<
      $Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blogs.findMany()
     *
     * // Get first 10 Blogs
     * const blogs = await prisma.blogs.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const blogsWithIdOnly = await prisma.blogs.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends blogsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blogsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Blogs.
     * @param {blogsCreateArgs} args - Arguments to create a Blogs.
     * @example
     * // Create one Blogs
     * const Blogs = await prisma.blogs.create({
     *   data: {
     *     // ... data to create a Blogs
     *   }
     * })
     *
     **/
    create<T extends blogsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, blogsCreateArgs<ExtArgs>>,
    ): Prisma__blogsClient<
      $Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Blogs.
     *     @param {blogsCreateManyArgs} args - Arguments to create many Blogs.
     *     @example
     *     // Create many Blogs
     *     const blogs = await prisma.blogs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends blogsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blogsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Blogs.
     * @param {blogsDeleteArgs} args - Arguments to delete one Blogs.
     * @example
     * // Delete one Blogs
     * const Blogs = await prisma.blogs.delete({
     *   where: {
     *     // ... filter to delete one Blogs
     *   }
     * })
     *
     **/
    delete<T extends blogsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, blogsDeleteArgs<ExtArgs>>,
    ): Prisma__blogsClient<
      $Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Blogs.
     * @param {blogsUpdateArgs} args - Arguments to update one Blogs.
     * @example
     * // Update one Blogs
     * const blogs = await prisma.blogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends blogsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, blogsUpdateArgs<ExtArgs>>,
    ): Prisma__blogsClient<
      $Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Blogs.
     * @param {blogsDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends blogsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blogsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends blogsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, blogsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Blogs.
     * @param {blogsUpsertArgs} args - Arguments to update or create a Blogs.
     * @example
     * // Update or create a Blogs
     * const blogs = await prisma.blogs.upsert({
     *   create: {
     *     // ... data to create a Blogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogs we want to update
     *   }
     * })
     **/
    upsert<T extends blogsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, blogsUpsertArgs<ExtArgs>>,
    ): Prisma__blogsClient<
      $Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blogs.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
     **/
    count<T extends blogsCountArgs>(
      args?: Subset<T, blogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BlogsAggregateArgs>(
      args: Subset<T, BlogsAggregateArgs>,
    ): Prisma.PrismaPromise<GetBlogsAggregateType<T>>;

    /**
     * Group by Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends blogsGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blogsGroupByArgs['orderBy'] }
        : { orderBy?: blogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, blogsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the blogs model
     */
    readonly fields: blogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blogsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the blogs model
   */
  interface blogsFieldRefs {
    readonly id: FieldRef<'blogs', 'BigInt'>;
    readonly created_at: FieldRef<'blogs', 'DateTime'>;
    readonly updated_at: FieldRef<'blogs', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * blogs findUnique
   */
  export type blogsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null;
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput;
  };

  /**
   * blogs findUniqueOrThrow
   */
  export type blogsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null;
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput;
  };

  /**
   * blogs findFirst
   */
  export type blogsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null;
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[];
  };

  /**
   * blogs findFirstOrThrow
   */
  export type blogsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null;
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[];
  };

  /**
   * blogs findMany
   */
  export type blogsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null;
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing blogs.
     */
    cursor?: blogsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blogs.
     */
    skip?: number;
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[];
  };

  /**
   * blogs create
   */
  export type blogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the blogs
       */
      select?: blogsSelect<ExtArgs> | null;
      /**
       * The data needed to create a blogs.
       */
      data?: XOR<blogsCreateInput, blogsUncheckedCreateInput>;
    };

  /**
   * blogs createMany
   */
  export type blogsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many blogs.
     */
    data: blogsCreateManyInput | blogsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * blogs update
   */
  export type blogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the blogs
       */
      select?: blogsSelect<ExtArgs> | null;
      /**
       * The data needed to update a blogs.
       */
      data: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>;
      /**
       * Choose, which blogs to update.
       */
      where: blogsWhereUniqueInput;
    };

  /**
   * blogs updateMany
   */
  export type blogsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update blogs.
     */
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyInput>;
    /**
     * Filter which blogs to update
     */
    where?: blogsWhereInput;
  };

  /**
   * blogs upsert
   */
  export type blogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the blogs
       */
      select?: blogsSelect<ExtArgs> | null;
      /**
       * The filter to search for the blogs to update in case it exists.
       */
      where: blogsWhereUniqueInput;
      /**
       * In case the blogs found by the `where` argument doesn't exist, create a new blogs with this data.
       */
      create: XOR<blogsCreateInput, blogsUncheckedCreateInput>;
      /**
       * In case the blogs was found with the provided `where` argument, update it with this data.
       */
      update: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>;
    };

  /**
   * blogs delete
   */
  export type blogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the blogs
       */
      select?: blogsSelect<ExtArgs> | null;
      /**
       * Filter which blogs to delete.
       */
      where: blogsWhereUniqueInput;
    };

  /**
   * blogs deleteMany
   */
  export type blogsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which blogs to delete
     */
    where?: blogsWhereInput;
  };

  /**
   * blogs without action
   */
  export type blogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the blogs
       */
      select?: blogsSelect<ExtArgs> | null;
    };

  /**
   * Model cards
   */

  export type AggregateCards = {
    _count: CardsCountAggregateOutputType | null;
    _avg: CardsAvgAggregateOutputType | null;
    _sum: CardsSumAggregateOutputType | null;
    _min: CardsMinAggregateOutputType | null;
    _max: CardsMaxAggregateOutputType | null;
  };

  export type CardsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
  };

  export type CardsSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
  };

  export type CardsMinAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    credit_card_number: string | null;
    expiration_year: string | null;
    expiration_month: string | null;
    brand: string | null;
    card_holder_name: string | null;
    customer_card_id: string | null;
    user_id: bigint | null;
    primary: boolean | null;
  };

  export type CardsMaxAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    credit_card_number: string | null;
    expiration_year: string | null;
    expiration_month: string | null;
    brand: string | null;
    card_holder_name: string | null;
    customer_card_id: string | null;
    user_id: bigint | null;
    primary: boolean | null;
  };

  export type CardsCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    credit_card_number: number;
    expiration_year: number;
    expiration_month: number;
    brand: number;
    card_holder_name: number;
    customer_card_id: number;
    user_id: number;
    primary: number;
    _all: number;
  };

  export type CardsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type CardsSumAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type CardsMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    credit_card_number?: true;
    expiration_year?: true;
    expiration_month?: true;
    brand?: true;
    card_holder_name?: true;
    customer_card_id?: true;
    user_id?: true;
    primary?: true;
  };

  export type CardsMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    credit_card_number?: true;
    expiration_year?: true;
    expiration_month?: true;
    brand?: true;
    card_holder_name?: true;
    customer_card_id?: true;
    user_id?: true;
    primary?: true;
  };

  export type CardsCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    credit_card_number?: true;
    expiration_year?: true;
    expiration_month?: true;
    brand?: true;
    card_holder_name?: true;
    customer_card_id?: true;
    user_id?: true;
    primary?: true;
    _all?: true;
  };

  export type CardsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which cards to aggregate.
     */
    where?: cardsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cards to fetch.
     */
    orderBy?: cardsOrderByWithRelationInput | cardsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: cardsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cards
     **/
    _count?: true | CardsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CardsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CardsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CardsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CardsMaxAggregateInputType;
  };

  export type GetCardsAggregateType<T extends CardsAggregateArgs> = {
    [P in keyof T & keyof AggregateCards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCards[P]>
      : GetScalarType<T[P], AggregateCards[P]>;
  };

  export type cardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: cardsWhereInput;
      orderBy?: cardsOrderByWithAggregationInput | cardsOrderByWithAggregationInput[];
      by: CardsScalarFieldEnum[] | CardsScalarFieldEnum;
      having?: cardsScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: CardsCountAggregateInputType | true;
      _avg?: CardsAvgAggregateInputType;
      _sum?: CardsSumAggregateInputType;
      _min?: CardsMinAggregateInputType;
      _max?: CardsMaxAggregateInputType;
    };

  export type CardsGroupByOutputType = {
    id: bigint;
    created_at: Date | null;
    updated_at: Date | null;
    credit_card_number: string | null;
    expiration_year: string | null;
    expiration_month: string | null;
    brand: string | null;
    card_holder_name: string | null;
    customer_card_id: string | null;
    user_id: bigint | null;
    primary: boolean;
    _count: CardsCountAggregateOutputType | null;
    _avg: CardsAvgAggregateOutputType | null;
    _sum: CardsSumAggregateOutputType | null;
    _min: CardsMinAggregateOutputType | null;
    _max: CardsMaxAggregateOutputType | null;
  };

  type GetCardsGroupByPayload<T extends cardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardsGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CardsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CardsGroupByOutputType[P]>
          : GetScalarType<T[P], CardsGroupByOutputType[P]>;
      }
    >
  >;

  export type cardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        credit_card_number?: boolean;
        expiration_year?: boolean;
        expiration_month?: boolean;
        brand?: boolean;
        card_holder_name?: boolean;
        customer_card_id?: boolean;
        user_id?: boolean;
        primary?: boolean;
      },
      ExtArgs['result']['cards']
    >;

  export type cardsSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    credit_card_number?: boolean;
    expiration_year?: boolean;
    expiration_month?: boolean;
    brand?: boolean;
    card_holder_name?: boolean;
    customer_card_id?: boolean;
    user_id?: boolean;
    primary?: boolean;
  };

  export type $cardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'cards';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        created_at: Date | null;
        updated_at: Date | null;
        credit_card_number: string | null;
        expiration_year: string | null;
        expiration_month: string | null;
        brand: string | null;
        card_holder_name: string | null;
        customer_card_id: string | null;
        user_id: bigint | null;
        primary: boolean;
      },
      ExtArgs['result']['cards']
    >;
    composites: {};
  };

  type cardsGetPayload<S extends boolean | null | undefined | cardsDefaultArgs> = $Result.GetResult<
    Prisma.$cardsPayload,
    S
  >;

  type cardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    cardsFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CardsCountAggregateInputType | true;
  };

  export interface cardsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cards']; meta: { name: 'cards' } };
    /**
     * Find zero or one Cards that matches the filter.
     * @param {cardsFindUniqueArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends cardsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cardsFindUniqueArgs<ExtArgs>>,
    ): Prisma__cardsClient<
      $Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Cards that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {cardsFindUniqueOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends cardsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cardsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__cardsClient<
      $Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsFindFirstArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends cardsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cardsFindFirstArgs<ExtArgs>>,
    ): Prisma__cardsClient<
      $Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Cards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsFindFirstOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends cardsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cardsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__cardsClient<
      $Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.cards.findMany()
     *
     * // Get first 10 Cards
     * const cards = await prisma.cards.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cardsWithIdOnly = await prisma.cards.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends cardsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cardsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Cards.
     * @param {cardsCreateArgs} args - Arguments to create a Cards.
     * @example
     * // Create one Cards
     * const Cards = await prisma.cards.create({
     *   data: {
     *     // ... data to create a Cards
     *   }
     * })
     *
     **/
    create<T extends cardsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cardsCreateArgs<ExtArgs>>,
    ): Prisma__cardsClient<
      $Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Cards.
     *     @param {cardsCreateManyArgs} args - Arguments to create many Cards.
     *     @example
     *     // Create many Cards
     *     const cards = await prisma.cards.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends cardsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cardsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Cards.
     * @param {cardsDeleteArgs} args - Arguments to delete one Cards.
     * @example
     * // Delete one Cards
     * const Cards = await prisma.cards.delete({
     *   where: {
     *     // ... filter to delete one Cards
     *   }
     * })
     *
     **/
    delete<T extends cardsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cardsDeleteArgs<ExtArgs>>,
    ): Prisma__cardsClient<
      $Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Cards.
     * @param {cardsUpdateArgs} args - Arguments to update one Cards.
     * @example
     * // Update one Cards
     * const cards = await prisma.cards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends cardsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cardsUpdateArgs<ExtArgs>>,
    ): Prisma__cardsClient<
      $Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Cards.
     * @param {cardsDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.cards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends cardsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cardsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const cards = await prisma.cards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends cardsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cardsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Cards.
     * @param {cardsUpsertArgs} args - Arguments to update or create a Cards.
     * @example
     * // Update or create a Cards
     * const cards = await prisma.cards.upsert({
     *   create: {
     *     // ... data to create a Cards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cards we want to update
     *   }
     * })
     **/
    upsert<T extends cardsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cardsUpsertArgs<ExtArgs>>,
    ): Prisma__cardsClient<
      $Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.cards.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
     **/
    count<T extends cardsCountArgs>(
      args?: Subset<T, cardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CardsAggregateArgs>(
      args: Subset<T, CardsAggregateArgs>,
    ): Prisma.PrismaPromise<GetCardsAggregateType<T>>;

    /**
     * Group by Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends cardsGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cardsGroupByArgs['orderBy'] }
        : { orderBy?: cardsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, cardsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cards model
     */
    readonly fields: cardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cardsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the cards model
   */
  interface cardsFieldRefs {
    readonly id: FieldRef<'cards', 'BigInt'>;
    readonly created_at: FieldRef<'cards', 'DateTime'>;
    readonly updated_at: FieldRef<'cards', 'DateTime'>;
    readonly credit_card_number: FieldRef<'cards', 'String'>;
    readonly expiration_year: FieldRef<'cards', 'String'>;
    readonly expiration_month: FieldRef<'cards', 'String'>;
    readonly brand: FieldRef<'cards', 'String'>;
    readonly card_holder_name: FieldRef<'cards', 'String'>;
    readonly customer_card_id: FieldRef<'cards', 'String'>;
    readonly user_id: FieldRef<'cards', 'BigInt'>;
    readonly primary: FieldRef<'cards', 'Boolean'>;
  }

  // Custom InputTypes

  /**
   * cards findUnique
   */
  export type cardsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null;
    /**
     * Filter, which cards to fetch.
     */
    where: cardsWhereUniqueInput;
  };

  /**
   * cards findUniqueOrThrow
   */
  export type cardsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null;
    /**
     * Filter, which cards to fetch.
     */
    where: cardsWhereUniqueInput;
  };

  /**
   * cards findFirst
   */
  export type cardsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null;
    /**
     * Filter, which cards to fetch.
     */
    where?: cardsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cards to fetch.
     */
    orderBy?: cardsOrderByWithRelationInput | cardsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cards.
     */
    cursor?: cardsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[];
  };

  /**
   * cards findFirstOrThrow
   */
  export type cardsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null;
    /**
     * Filter, which cards to fetch.
     */
    where?: cardsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cards to fetch.
     */
    orderBy?: cardsOrderByWithRelationInput | cardsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cards.
     */
    cursor?: cardsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[];
  };

  /**
   * cards findMany
   */
  export type cardsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null;
    /**
     * Filter, which cards to fetch.
     */
    where?: cardsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cards to fetch.
     */
    orderBy?: cardsOrderByWithRelationInput | cardsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cards.
     */
    cursor?: cardsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cards.
     */
    skip?: number;
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[];
  };

  /**
   * cards create
   */
  export type cardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the cards
       */
      select?: cardsSelect<ExtArgs> | null;
      /**
       * The data needed to create a cards.
       */
      data?: XOR<cardsCreateInput, cardsUncheckedCreateInput>;
    };

  /**
   * cards createMany
   */
  export type cardsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many cards.
     */
    data: cardsCreateManyInput | cardsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * cards update
   */
  export type cardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the cards
       */
      select?: cardsSelect<ExtArgs> | null;
      /**
       * The data needed to update a cards.
       */
      data: XOR<cardsUpdateInput, cardsUncheckedUpdateInput>;
      /**
       * Choose, which cards to update.
       */
      where: cardsWhereUniqueInput;
    };

  /**
   * cards updateMany
   */
  export type cardsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update cards.
     */
    data: XOR<cardsUpdateManyMutationInput, cardsUncheckedUpdateManyInput>;
    /**
     * Filter which cards to update
     */
    where?: cardsWhereInput;
  };

  /**
   * cards upsert
   */
  export type cardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the cards
       */
      select?: cardsSelect<ExtArgs> | null;
      /**
       * The filter to search for the cards to update in case it exists.
       */
      where: cardsWhereUniqueInput;
      /**
       * In case the cards found by the `where` argument doesn't exist, create a new cards with this data.
       */
      create: XOR<cardsCreateInput, cardsUncheckedCreateInput>;
      /**
       * In case the cards was found with the provided `where` argument, update it with this data.
       */
      update: XOR<cardsUpdateInput, cardsUncheckedUpdateInput>;
    };

  /**
   * cards delete
   */
  export type cardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the cards
       */
      select?: cardsSelect<ExtArgs> | null;
      /**
       * Filter which cards to delete.
       */
      where: cardsWhereUniqueInput;
    };

  /**
   * cards deleteMany
   */
  export type cardsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which cards to delete
     */
    where?: cardsWhereInput;
  };

  /**
   * cards without action
   */
  export type cardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the cards
       */
      select?: cardsSelect<ExtArgs> | null;
    };

  /**
   * Model invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null;
    _avg: InvoicesAvgAggregateOutputType | null;
    _sum: InvoicesSumAggregateOutputType | null;
    _min: InvoicesMinAggregateOutputType | null;
    _max: InvoicesMaxAggregateOutputType | null;
  };

  export type InvoicesAvgAggregateOutputType = {
    id: number | null;
    total: number | null;
    user_id: number | null;
    subscription_id: number | null;
  };

  export type InvoicesSumAggregateOutputType = {
    id: bigint | null;
    total: number | null;
    user_id: bigint | null;
    subscription_id: bigint | null;
  };

  export type InvoicesMinAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    payment_method: string | null;
    transaction_id: string | null;
    total: number | null;
    status: $Enums.invoices_status | null;
    user_id: bigint | null;
    subscription_id: bigint | null;
  };

  export type InvoicesMaxAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    payment_method: string | null;
    transaction_id: string | null;
    total: number | null;
    status: $Enums.invoices_status | null;
    user_id: bigint | null;
    subscription_id: bigint | null;
  };

  export type InvoicesCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    payment_method: number;
    transaction_id: number;
    total: number;
    status: number;
    user_id: number;
    subscription_id: number;
    _all: number;
  };

  export type InvoicesAvgAggregateInputType = {
    id?: true;
    total?: true;
    user_id?: true;
    subscription_id?: true;
  };

  export type InvoicesSumAggregateInputType = {
    id?: true;
    total?: true;
    user_id?: true;
    subscription_id?: true;
  };

  export type InvoicesMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    payment_method?: true;
    transaction_id?: true;
    total?: true;
    status?: true;
    user_id?: true;
    subscription_id?: true;
  };

  export type InvoicesMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    payment_method?: true;
    transaction_id?: true;
    total?: true;
    status?: true;
    user_id?: true;
    subscription_id?: true;
  };

  export type InvoicesCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    payment_method?: true;
    transaction_id?: true;
    total?: true;
    status?: true;
    user_id?: true;
    subscription_id?: true;
    _all?: true;
  };

  export type InvoicesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which invoices to aggregate.
     */
    where?: invoicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: invoicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned invoices
     **/
    _count?: true | InvoicesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InvoicesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InvoicesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InvoicesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InvoicesMaxAggregateInputType;
  };

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>;
  };

  export type invoicesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: invoicesWhereInput;
    orderBy?: invoicesOrderByWithAggregationInput | invoicesOrderByWithAggregationInput[];
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum;
    having?: invoicesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoicesCountAggregateInputType | true;
    _avg?: InvoicesAvgAggregateInputType;
    _sum?: InvoicesSumAggregateInputType;
    _min?: InvoicesMinAggregateInputType;
    _max?: InvoicesMaxAggregateInputType;
  };

  export type InvoicesGroupByOutputType = {
    id: bigint;
    created_at: Date | null;
    updated_at: Date | null;
    payment_method: string | null;
    transaction_id: string | null;
    total: number;
    status: $Enums.invoices_status;
    user_id: bigint | null;
    subscription_id: bigint | null;
    _count: InvoicesCountAggregateOutputType | null;
    _avg: InvoicesAvgAggregateOutputType | null;
    _sum: InvoicesSumAggregateOutputType | null;
    _min: InvoicesMinAggregateOutputType | null;
    _max: InvoicesMaxAggregateOutputType | null;
  };

  type GetInvoicesGroupByPayload<T extends invoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InvoicesGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
          : GetScalarType<T[P], InvoicesGroupByOutputType[P]>;
      }
    >
  >;

  export type invoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        payment_method?: boolean;
        transaction_id?: boolean;
        total?: boolean;
        status?: boolean;
        user_id?: boolean;
        subscription_id?: boolean;
      },
      ExtArgs['result']['invoices']
    >;

  export type invoicesSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    payment_method?: boolean;
    transaction_id?: boolean;
    total?: boolean;
    status?: boolean;
    user_id?: boolean;
    subscription_id?: boolean;
  };

  export type $invoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'invoices';
      objects: {};
      scalars: $Extensions.GetPayloadResult<
        {
          id: bigint;
          created_at: Date | null;
          updated_at: Date | null;
          payment_method: string | null;
          transaction_id: string | null;
          total: number;
          status: $Enums.invoices_status;
          user_id: bigint | null;
          subscription_id: bigint | null;
        },
        ExtArgs['result']['invoices']
      >;
      composites: {};
    };

  type invoicesGetPayload<S extends boolean | null | undefined | invoicesDefaultArgs> =
    $Result.GetResult<Prisma.$invoicesPayload, S>;

  type invoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    invoicesFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: InvoicesCountAggregateInputType | true;
  };

  export interface invoicesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['invoices'];
      meta: { name: 'invoices' };
    };
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {invoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends invoicesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, invoicesFindUniqueArgs<ExtArgs>>,
    ): Prisma__invoicesClient<
      $Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Invoices that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {invoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends invoicesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__invoicesClient<
      $Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends invoicesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicesFindFirstArgs<ExtArgs>>,
    ): Prisma__invoicesClient<
      $Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends invoicesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__invoicesClient<
      $Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     *
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends invoicesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Invoices.
     * @param {invoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     *
     **/
    create<T extends invoicesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, invoicesCreateArgs<ExtArgs>>,
    ): Prisma__invoicesClient<
      $Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Invoices.
     *     @param {invoicesCreateManyArgs} args - Arguments to create many Invoices.
     *     @example
     *     // Create many Invoices
     *     const invoices = await prisma.invoices.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends invoicesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Invoices.
     * @param {invoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     *
     **/
    delete<T extends invoicesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, invoicesDeleteArgs<ExtArgs>>,
    ): Prisma__invoicesClient<
      $Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Invoices.
     * @param {invoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends invoicesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, invoicesUpdateArgs<ExtArgs>>,
    ): Prisma__invoicesClient<
      $Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Invoices.
     * @param {invoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends invoicesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends invoicesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, invoicesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Invoices.
     * @param {invoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     **/
    upsert<T extends invoicesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, invoicesUpsertArgs<ExtArgs>>,
    ): Prisma__invoicesClient<
      $Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
     **/
    count<T extends invoicesCountArgs>(
      args?: Subset<T, invoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InvoicesAggregateArgs>(
      args: Subset<T, InvoicesAggregateArgs>,
    ): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>;

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends invoicesGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicesGroupByArgs['orderBy'] }
        : { orderBy?: invoicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, invoicesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the invoices model
     */
    readonly fields: invoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the invoices model
   */
  interface invoicesFieldRefs {
    readonly id: FieldRef<'invoices', 'BigInt'>;
    readonly created_at: FieldRef<'invoices', 'DateTime'>;
    readonly updated_at: FieldRef<'invoices', 'DateTime'>;
    readonly payment_method: FieldRef<'invoices', 'String'>;
    readonly transaction_id: FieldRef<'invoices', 'String'>;
    readonly total: FieldRef<'invoices', 'Float'>;
    readonly status: FieldRef<'invoices', 'invoices_status'>;
    readonly user_id: FieldRef<'invoices', 'BigInt'>;
    readonly subscription_id: FieldRef<'invoices', 'BigInt'>;
  }

  // Custom InputTypes

  /**
   * invoices findUnique
   */
  export type invoicesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput;
  };

  /**
   * invoices findUniqueOrThrow
   */
  export type invoicesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput;
  };

  /**
   * invoices findFirst
   */
  export type invoicesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[];
  };

  /**
   * invoices findFirstOrThrow
   */
  export type invoicesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[];
  };

  /**
   * invoices findMany
   */
  export type invoicesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing invoices.
     */
    cursor?: invoicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[];
  };

  /**
   * invoices create
   */
  export type invoicesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
    /**
     * The data needed to create a invoices.
     */
    data: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>;
  };

  /**
   * invoices createMany
   */
  export type invoicesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * invoices update
   */
  export type invoicesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
    /**
     * The data needed to update a invoices.
     */
    data: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>;
    /**
     * Choose, which invoices to update.
     */
    where: invoicesWhereUniqueInput;
  };

  /**
   * invoices updateMany
   */
  export type invoicesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>;
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput;
  };

  /**
   * invoices upsert
   */
  export type invoicesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
    /**
     * The filter to search for the invoices to update in case it exists.
     */
    where: invoicesWhereUniqueInput;
    /**
     * In case the invoices found by the `where` argument doesn't exist, create a new invoices with this data.
     */
    create: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>;
    /**
     * In case the invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>;
  };

  /**
   * invoices delete
   */
  export type invoicesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
    /**
     * Filter which invoices to delete.
     */
    where: invoicesWhereUniqueInput;
  };

  /**
   * invoices deleteMany
   */
  export type invoicesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which invoices to delete
     */
    where?: invoicesWhereInput;
  };

  /**
   * invoices without action
   */
  export type invoicesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null;
  };

  /**
   * Model migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null;
    _avg: MigrationsAvgAggregateOutputType | null;
    _sum: MigrationsSumAggregateOutputType | null;
    _min: MigrationsMinAggregateOutputType | null;
    _max: MigrationsMaxAggregateOutputType | null;
  };

  export type MigrationsAvgAggregateOutputType = {
    id: number | null;
    batch: number | null;
  };

  export type MigrationsSumAggregateOutputType = {
    id: number | null;
    batch: number | null;
  };

  export type MigrationsMinAggregateOutputType = {
    id: number | null;
    migration: string | null;
    batch: number | null;
  };

  export type MigrationsMaxAggregateOutputType = {
    id: number | null;
    migration: string | null;
    batch: number | null;
  };

  export type MigrationsCountAggregateOutputType = {
    id: number;
    migration: number;
    batch: number;
    _all: number;
  };

  export type MigrationsAvgAggregateInputType = {
    id?: true;
    batch?: true;
  };

  export type MigrationsSumAggregateInputType = {
    id?: true;
    batch?: true;
  };

  export type MigrationsMinAggregateInputType = {
    id?: true;
    migration?: true;
    batch?: true;
  };

  export type MigrationsMaxAggregateInputType = {
    id?: true;
    migration?: true;
    batch?: true;
  };

  export type MigrationsCountAggregateInputType = {
    id?: true;
    migration?: true;
    batch?: true;
    _all?: true;
  };

  export type MigrationsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` migrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned migrations
     **/
    _count?: true | MigrationsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MigrationsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MigrationsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MigrationsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MigrationsMaxAggregateInputType;
  };

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
    [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>;
  };

  export type migrationsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: migrationsWhereInput;
    orderBy?: migrationsOrderByWithAggregationInput | migrationsOrderByWithAggregationInput[];
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum;
    having?: migrationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MigrationsCountAggregateInputType | true;
    _avg?: MigrationsAvgAggregateInputType;
    _sum?: MigrationsSumAggregateInputType;
    _min?: MigrationsMinAggregateInputType;
    _max?: MigrationsMaxAggregateInputType;
  };

  export type MigrationsGroupByOutputType = {
    id: number;
    migration: string;
    batch: number;
    _count: MigrationsCountAggregateOutputType | null;
    _avg: MigrationsAvgAggregateOutputType | null;
    _sum: MigrationsSumAggregateOutputType | null;
    _min: MigrationsMinAggregateOutputType | null;
    _max: MigrationsMaxAggregateOutputType | null;
  };

  type GetMigrationsGroupByPayload<T extends migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MigrationsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
          : GetScalarType<T[P], MigrationsGroupByOutputType[P]>;
      }
    >
  >;

  export type migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        migration?: boolean;
        batch?: boolean;
      },
      ExtArgs['result']['migrations']
    >;

  export type migrationsSelectScalar = {
    id?: boolean;
    migration?: boolean;
    batch?: boolean;
  };

  export type $migrationsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'migrations';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        migration: string;
        batch: number;
      },
      ExtArgs['result']['migrations']
    >;
    composites: {};
  };

  type migrationsGetPayload<S extends boolean | null | undefined | migrationsDefaultArgs> =
    $Result.GetResult<Prisma.$migrationsPayload, S>;

  type migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<migrationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MigrationsCountAggregateInputType | true;
    };

  export interface migrationsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['migrations'];
      meta: { name: 'migrations' };
    };
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends migrationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsFindUniqueArgs<ExtArgs>>,
    ): Prisma__migrationsClient<
      $Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Migrations that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__migrationsClient<
      $Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends migrationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsFindFirstArgs<ExtArgs>>,
    ): Prisma__migrationsClient<
      $Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__migrationsClient<
      $Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     *
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends migrationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     *
     **/
    create<T extends migrationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsCreateArgs<ExtArgs>>,
    ): Prisma__migrationsClient<
      $Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Migrations.
     *     @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     *     @example
     *     // Create many Migrations
     *     const migrations = await prisma.migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends migrationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     *
     **/
    delete<T extends migrationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsDeleteArgs<ExtArgs>>,
    ): Prisma__migrationsClient<
      $Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends migrationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsUpdateArgs<ExtArgs>>,
    ): Prisma__migrationsClient<
      $Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends migrationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends migrationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
     **/
    upsert<T extends migrationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsUpsertArgs<ExtArgs>>,
    ): Prisma__migrationsClient<
      $Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
     **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MigrationsAggregateArgs>(
      args: Subset<T, MigrationsAggregateArgs>,
    ): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>;

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends migrationsGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: migrationsGroupByArgs['orderBy'] }
        : { orderBy?: migrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, migrationsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the migrations model
     */
    readonly fields: migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__migrationsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the migrations model
   */
  interface migrationsFieldRefs {
    readonly id: FieldRef<'migrations', 'Int'>;
    readonly migration: FieldRef<'migrations', 'String'>;
    readonly batch: FieldRef<'migrations', 'Int'>;
  }

  // Custom InputTypes

  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput;
  };

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput;
  };

  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` migrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[];
  };

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` migrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[];
  };

  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` migrations.
     */
    skip?: number;
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[];
  };

  /**
   * migrations create
   */
  export type migrationsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>;
  };

  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * migrations update
   */
  export type migrationsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>;
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput;
  };

  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>;
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput;
  };

  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput;
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>;
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>;
  };

  /**
   * migrations delete
   */
  export type migrationsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput;
  };

  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput;
  };

  /**
   * migrations without action
   */
  export type migrationsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null;
  };

  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null;
    _avg: NotificationsAvgAggregateOutputType | null;
    _sum: NotificationsSumAggregateOutputType | null;
    _min: NotificationsMinAggregateOutputType | null;
    _max: NotificationsMaxAggregateOutputType | null;
  };

  export type NotificationsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
  };

  export type NotificationsSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
  };

  export type NotificationsMinAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    message: string | null;
    user_id: bigint | null;
  };

  export type NotificationsMaxAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    message: string | null;
    user_id: bigint | null;
  };

  export type NotificationsCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    message: number;
    user_id: number;
    _all: number;
  };

  export type NotificationsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type NotificationsSumAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type NotificationsMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    message?: true;
    user_id?: true;
  };

  export type NotificationsMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    message?: true;
    user_id?: true;
  };

  export type NotificationsCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    message?: true;
    user_id?: true;
    _all?: true;
  };

  export type NotificationsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned notifications
     **/
    _count?: true | NotificationsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: NotificationsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: NotificationsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NotificationsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NotificationsMaxAggregateInputType;
  };

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
    [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>;
  };

  export type notificationsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: notificationsWhereInput;
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[];
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum;
    having?: notificationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationsCountAggregateInputType | true;
    _avg?: NotificationsAvgAggregateInputType;
    _sum?: NotificationsSumAggregateInputType;
    _min?: NotificationsMinAggregateInputType;
    _max?: NotificationsMaxAggregateInputType;
  };

  export type NotificationsGroupByOutputType = {
    id: bigint;
    created_at: Date | null;
    updated_at: Date | null;
    message: string;
    user_id: bigint | null;
    _count: NotificationsCountAggregateOutputType | null;
    _avg: NotificationsAvgAggregateOutputType | null;
    _sum: NotificationsSumAggregateOutputType | null;
    _min: NotificationsMinAggregateOutputType | null;
    _max: NotificationsMaxAggregateOutputType | null;
  };

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> & {
        [P in keyof T & keyof NotificationsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
          : GetScalarType<T[P], NotificationsGroupByOutputType[P]>;
      }
    >
  >;

  export type notificationsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      message?: boolean;
      user_id?: boolean;
    },
    ExtArgs['result']['notifications']
  >;

  export type notificationsSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    message?: boolean;
    user_id?: boolean;
  };

  export type $notificationsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'notifications';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        created_at: Date | null;
        updated_at: Date | null;
        message: string;
        user_id: bigint | null;
      },
      ExtArgs['result']['notifications']
    >;
    composites: {};
  };

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> =
    $Result.GetResult<Prisma.$notificationsPayload, S>;

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationsCountAggregateInputType | true;
    };

  export interface notificationsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['notifications'];
      meta: { name: 'notifications' };
    };
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends notificationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>,
    ): Prisma__notificationsClient<
      $Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Notifications that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__notificationsClient<
      $Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends notificationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>,
    ): Prisma__notificationsClient<
      $Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__notificationsClient<
      $Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     *
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends notificationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     *
     **/
    create<T extends notificationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>,
    ): Prisma__notificationsClient<
      $Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Notifications.
     *     @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notifications = await prisma.notifications.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends notificationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     *
     **/
    delete<T extends notificationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>,
    ): Prisma__notificationsClient<
      $Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends notificationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>,
    ): Prisma__notificationsClient<
      $Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends notificationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends notificationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     **/
    upsert<T extends notificationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>,
    ): Prisma__notificationsClient<
      $Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
     **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends NotificationsAggregateArgs>(
      args: Subset<T, NotificationsAggregateArgs>,
    ): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>;

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetNotificationsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the notifications model
     */
    readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<'notifications', 'BigInt'>;
    readonly created_at: FieldRef<'notifications', 'DateTime'>;
    readonly updated_at: FieldRef<'notifications', 'DateTime'>;
    readonly message: FieldRef<'notifications', 'String'>;
    readonly user_id: FieldRef<'notifications', 'BigInt'>;
  }

  // Custom InputTypes

  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput;
  };

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput;
  };

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[];
  };

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[];
  };

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` notifications.
     */
    skip?: number;
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[];
  };

  /**
   * notifications create
   */
  export type notificationsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>;
  };

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>;
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput;
  };

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>;
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput;
  };

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput;
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>;
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>;
  };

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput;
  };

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput;
  };

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null;
  };

  /**
   * Model subscriptions
   */

  export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null;
    _avg: SubscriptionsAvgAggregateOutputType | null;
    _sum: SubscriptionsSumAggregateOutputType | null;
    _min: SubscriptionsMinAggregateOutputType | null;
    _max: SubscriptionsMaxAggregateOutputType | null;
  };

  export type SubscriptionsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
  };

  export type SubscriptionsSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
  };

  export type SubscriptionsMinAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    name: string | null;
    description: string | null;
    start_date: string | null;
    end_date: string | null;
    user_id: bigint | null;
    subscription_id: string | null;
    status: $Enums.subscriptions_status | null;
  };

  export type SubscriptionsMaxAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    name: string | null;
    description: string | null;
    start_date: string | null;
    end_date: string | null;
    user_id: bigint | null;
    subscription_id: string | null;
    status: $Enums.subscriptions_status | null;
  };

  export type SubscriptionsCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    name: number;
    description: number;
    start_date: number;
    end_date: number;
    user_id: number;
    subscription_id: number;
    status: number;
    _all: number;
  };

  export type SubscriptionsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type SubscriptionsSumAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type SubscriptionsMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    subscription_id?: true;
    status?: true;
  };

  export type SubscriptionsMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    subscription_id?: true;
    status?: true;
  };

  export type SubscriptionsCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    subscription_id?: true;
    status?: true;
    _all?: true;
  };

  export type SubscriptionsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which subscriptions to aggregate.
     */
    where?: subscriptionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: subscriptionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned subscriptions
     **/
    _count?: true | SubscriptionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubscriptionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubscriptionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionsMaxAggregateInputType;
  };

  export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptions[P]>
      : GetScalarType<T[P], AggregateSubscriptions[P]>;
  };

  export type subscriptionsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: subscriptionsWhereInput;
    orderBy?: subscriptionsOrderByWithAggregationInput | subscriptionsOrderByWithAggregationInput[];
    by: SubscriptionsScalarFieldEnum[] | SubscriptionsScalarFieldEnum;
    having?: subscriptionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionsCountAggregateInputType | true;
    _avg?: SubscriptionsAvgAggregateInputType;
    _sum?: SubscriptionsSumAggregateInputType;
    _min?: SubscriptionsMinAggregateInputType;
    _max?: SubscriptionsMaxAggregateInputType;
  };

  export type SubscriptionsGroupByOutputType = {
    id: bigint;
    created_at: Date | null;
    updated_at: Date | null;
    name: string | null;
    description: string | null;
    start_date: string | null;
    end_date: string | null;
    user_id: bigint | null;
    subscription_id: string | null;
    status: $Enums.subscriptions_status;
    _count: SubscriptionsCountAggregateOutputType | null;
    _avg: SubscriptionsAvgAggregateOutputType | null;
    _sum: SubscriptionsSumAggregateOutputType | null;
    _min: SubscriptionsMinAggregateOutputType | null;
    _max: SubscriptionsMaxAggregateOutputType | null;
  };

  type GetSubscriptionsGroupByPayload<T extends subscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionsGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SubscriptionsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
          : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>;
      }
    >
  >;

  export type subscriptionsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      name?: boolean;
      description?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      user_id?: boolean;
      subscription_id?: boolean;
      status?: boolean;
    },
    ExtArgs['result']['subscriptions']
  >;

  export type subscriptionsSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    name?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    user_id?: boolean;
    subscription_id?: boolean;
    status?: boolean;
  };

  export type $subscriptionsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'subscriptions';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        created_at: Date | null;
        updated_at: Date | null;
        name: string | null;
        description: string | null;
        start_date: string | null;
        end_date: string | null;
        user_id: bigint | null;
        subscription_id: string | null;
        status: $Enums.subscriptions_status;
      },
      ExtArgs['result']['subscriptions']
    >;
    composites: {};
  };

  type subscriptionsGetPayload<S extends boolean | null | undefined | subscriptionsDefaultArgs> =
    $Result.GetResult<Prisma.$subscriptionsPayload, S>;

  type subscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subscriptionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionsCountAggregateInputType | true;
    };

  export interface subscriptionsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['subscriptions'];
      meta: { name: 'subscriptions' };
    };
    /**
     * Find zero or one Subscriptions that matches the filter.
     * @param {subscriptionsFindUniqueArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends subscriptionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsFindUniqueArgs<ExtArgs>>,
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Subscriptions that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {subscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends subscriptionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends subscriptionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsFindFirstArgs<ExtArgs>>,
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends subscriptionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany()
     *
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends subscriptionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Subscriptions.
     * @param {subscriptionsCreateArgs} args - Arguments to create a Subscriptions.
     * @example
     * // Create one Subscriptions
     * const Subscriptions = await prisma.subscriptions.create({
     *   data: {
     *     // ... data to create a Subscriptions
     *   }
     * })
     *
     **/
    create<T extends subscriptionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsCreateArgs<ExtArgs>>,
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Subscriptions.
     *     @param {subscriptionsCreateManyArgs} args - Arguments to create many Subscriptions.
     *     @example
     *     // Create many Subscriptions
     *     const subscriptions = await prisma.subscriptions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends subscriptionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Subscriptions.
     * @param {subscriptionsDeleteArgs} args - Arguments to delete one Subscriptions.
     * @example
     * // Delete one Subscriptions
     * const Subscriptions = await prisma.subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Subscriptions
     *   }
     * })
     *
     **/
    delete<T extends subscriptionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsDeleteArgs<ExtArgs>>,
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Subscriptions.
     * @param {subscriptionsUpdateArgs} args - Arguments to update one Subscriptions.
     * @example
     * // Update one Subscriptions
     * const subscriptions = await prisma.subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends subscriptionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsUpdateArgs<ExtArgs>>,
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Subscriptions.
     * @param {subscriptionsDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends subscriptionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends subscriptionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Subscriptions.
     * @param {subscriptionsUpsertArgs} args - Arguments to update or create a Subscriptions.
     * @example
     * // Update or create a Subscriptions
     * const subscriptions = await prisma.subscriptions.upsert({
     *   create: {
     *     // ... data to create a Subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptions we want to update
     *   }
     * })
     **/
    upsert<T extends subscriptionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsUpsertArgs<ExtArgs>>,
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscriptions.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
     **/
    count<T extends subscriptionsCountArgs>(
      args?: Subset<T, subscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriptionsAggregateArgs>(
      args: Subset<T, SubscriptionsAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>;

    /**
     * Group by Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends subscriptionsGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: subscriptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, subscriptionsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSubscriptionsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the subscriptions model
     */
    readonly fields: subscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptionsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the subscriptions model
   */
  interface subscriptionsFieldRefs {
    readonly id: FieldRef<'subscriptions', 'BigInt'>;
    readonly created_at: FieldRef<'subscriptions', 'DateTime'>;
    readonly updated_at: FieldRef<'subscriptions', 'DateTime'>;
    readonly name: FieldRef<'subscriptions', 'String'>;
    readonly description: FieldRef<'subscriptions', 'String'>;
    readonly start_date: FieldRef<'subscriptions', 'String'>;
    readonly end_date: FieldRef<'subscriptions', 'String'>;
    readonly user_id: FieldRef<'subscriptions', 'BigInt'>;
    readonly subscription_id: FieldRef<'subscriptions', 'String'>;
    readonly status: FieldRef<'subscriptions', 'subscriptions_status'>;
  }

  // Custom InputTypes

  /**
   * subscriptions findUnique
   */
  export type subscriptionsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput;
  };

  /**
   * subscriptions findUniqueOrThrow
   */
  export type subscriptionsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput;
  };

  /**
   * subscriptions findFirst
   */
  export type subscriptionsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[];
  };

  /**
   * subscriptions findFirstOrThrow
   */
  export type subscriptionsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[];
  };

  /**
   * subscriptions findMany
   */
  export type subscriptionsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[];
  };

  /**
   * subscriptions create
   */
  export type subscriptionsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
    /**
     * The data needed to create a subscriptions.
     */
    data: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>;
  };

  /**
   * subscriptions createMany
   */
  export type subscriptionsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionsCreateManyInput | subscriptionsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * subscriptions update
   */
  export type subscriptionsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
    /**
     * The data needed to update a subscriptions.
     */
    data: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>;
    /**
     * Choose, which subscriptions to update.
     */
    where: subscriptionsWhereUniqueInput;
  };

  /**
   * subscriptions updateMany
   */
  export type subscriptionsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyInput>;
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionsWhereInput;
  };

  /**
   * subscriptions upsert
   */
  export type subscriptionsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
    /**
     * The filter to search for the subscriptions to update in case it exists.
     */
    where: subscriptionsWhereUniqueInput;
    /**
     * In case the subscriptions found by the `where` argument doesn't exist, create a new subscriptions with this data.
     */
    create: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>;
    /**
     * In case the subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>;
  };

  /**
   * subscriptions delete
   */
  export type subscriptionsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
    /**
     * Filter which subscriptions to delete.
     */
    where: subscriptionsWhereUniqueInput;
  };

  /**
   * subscriptions deleteMany
   */
  export type subscriptionsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which subscriptions to delete
     */
    where?: subscriptionsWhereInput;
  };

  /**
   * subscriptions without action
   */
  export type subscriptionsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null;
  };

  /**
   * Model user_social_providers
   */

  export type AggregateUser_social_providers = {
    _count: User_social_providersCountAggregateOutputType | null;
    _avg: User_social_providersAvgAggregateOutputType | null;
    _sum: User_social_providersSumAggregateOutputType | null;
    _min: User_social_providersMinAggregateOutputType | null;
    _max: User_social_providersMaxAggregateOutputType | null;
  };

  export type User_social_providersAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
  };

  export type User_social_providersSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
  };

  export type User_social_providersMinAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    provider: string | null;
    user_id: bigint | null;
    url_register: string | null;
    provider_id: string | null;
  };

  export type User_social_providersMaxAggregateOutputType = {
    id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    provider: string | null;
    user_id: bigint | null;
    url_register: string | null;
    provider_id: string | null;
  };

  export type User_social_providersCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    provider: number;
    user_id: number;
    url_register: number;
    provider_id: number;
    _all: number;
  };

  export type User_social_providersAvgAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type User_social_providersSumAggregateInputType = {
    id?: true;
    user_id?: true;
  };

  export type User_social_providersMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    provider?: true;
    user_id?: true;
    url_register?: true;
    provider_id?: true;
  };

  export type User_social_providersMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    provider?: true;
    user_id?: true;
    url_register?: true;
    provider_id?: true;
  };

  export type User_social_providersCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    provider?: true;
    user_id?: true;
    url_register?: true;
    provider_id?: true;
    _all?: true;
  };

  export type User_social_providersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which user_social_providers to aggregate.
     */
    where?: user_social_providersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_social_providers to fetch.
     */
    orderBy?:
      | user_social_providersOrderByWithRelationInput
      | user_social_providersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: user_social_providersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_social_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_social_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned user_social_providers
     **/
    _count?: true | User_social_providersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: User_social_providersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: User_social_providersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_social_providersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_social_providersMaxAggregateInputType;
  };

  export type GetUser_social_providersAggregateType<T extends User_social_providersAggregateArgs> =
    {
      [P in keyof T & keyof AggregateUser_social_providers]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateUser_social_providers[P]>
        : GetScalarType<T[P], AggregateUser_social_providers[P]>;
    };

  export type user_social_providersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_social_providersWhereInput;
    orderBy?:
      | user_social_providersOrderByWithAggregationInput
      | user_social_providersOrderByWithAggregationInput[];
    by: User_social_providersScalarFieldEnum[] | User_social_providersScalarFieldEnum;
    having?: user_social_providersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_social_providersCountAggregateInputType | true;
    _avg?: User_social_providersAvgAggregateInputType;
    _sum?: User_social_providersSumAggregateInputType;
    _min?: User_social_providersMinAggregateInputType;
    _max?: User_social_providersMaxAggregateInputType;
  };

  export type User_social_providersGroupByOutputType = {
    id: bigint;
    created_at: Date | null;
    updated_at: Date | null;
    provider: string;
    user_id: bigint;
    url_register: string;
    provider_id: string | null;
    _count: User_social_providersCountAggregateOutputType | null;
    _avg: User_social_providersAvgAggregateOutputType | null;
    _sum: User_social_providersSumAggregateOutputType | null;
    _min: User_social_providersMinAggregateOutputType | null;
    _max: User_social_providersMaxAggregateOutputType | null;
  };

  type GetUser_social_providersGroupByPayload<T extends user_social_providersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<User_social_providersGroupByOutputType, T['by']> & {
          [P in keyof T & keyof User_social_providersGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_social_providersGroupByOutputType[P]>
            : GetScalarType<T[P], User_social_providersGroupByOutputType[P]>;
        }
      >
    >;

  export type user_social_providersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      provider?: boolean;
      user_id?: boolean;
      url_register?: boolean;
      provider_id?: boolean;
    },
    ExtArgs['result']['user_social_providers']
  >;

  export type user_social_providersSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    provider?: boolean;
    user_id?: boolean;
    url_register?: boolean;
    provider_id?: boolean;
  };

  export type $user_social_providersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'user_social_providers';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        created_at: Date | null;
        updated_at: Date | null;
        provider: string;
        user_id: bigint;
        url_register: string;
        provider_id: string | null;
      },
      ExtArgs['result']['user_social_providers']
    >;
    composites: {};
  };

  type user_social_providersGetPayload<
    S extends boolean | null | undefined | user_social_providersDefaultArgs,
  > = $Result.GetResult<Prisma.$user_social_providersPayload, S>;

  type user_social_providersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<user_social_providersFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: User_social_providersCountAggregateInputType | true;
  };

  export interface user_social_providersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['user_social_providers'];
      meta: { name: 'user_social_providers' };
    };
    /**
     * Find zero or one User_social_providers that matches the filter.
     * @param {user_social_providersFindUniqueArgs} args - Arguments to find a User_social_providers
     * @example
     * // Get one User_social_providers
     * const user_social_providers = await prisma.user_social_providers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends user_social_providersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_social_providersFindUniqueArgs<ExtArgs>>,
    ): Prisma__user_social_providersClient<
      $Result.GetResult<Prisma.$user_social_providersPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User_social_providers that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {user_social_providersFindUniqueOrThrowArgs} args - Arguments to find a User_social_providers
     * @example
     * // Get one User_social_providers
     * const user_social_providers = await prisma.user_social_providers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends user_social_providersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_social_providersFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__user_social_providersClient<
      $Result.GetResult<Prisma.$user_social_providersPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User_social_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_social_providersFindFirstArgs} args - Arguments to find a User_social_providers
     * @example
     * // Get one User_social_providers
     * const user_social_providers = await prisma.user_social_providers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends user_social_providersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_social_providersFindFirstArgs<ExtArgs>>,
    ): Prisma__user_social_providersClient<
      $Result.GetResult<Prisma.$user_social_providersPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User_social_providers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_social_providersFindFirstOrThrowArgs} args - Arguments to find a User_social_providers
     * @example
     * // Get one User_social_providers
     * const user_social_providers = await prisma.user_social_providers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends user_social_providersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_social_providersFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__user_social_providersClient<
      $Result.GetResult<Prisma.$user_social_providersPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more User_social_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_social_providersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_social_providers
     * const user_social_providers = await prisma.user_social_providers.findMany()
     *
     * // Get first 10 User_social_providers
     * const user_social_providers = await prisma.user_social_providers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const user_social_providersWithIdOnly = await prisma.user_social_providers.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends user_social_providersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_social_providersFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$user_social_providersPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a User_social_providers.
     * @param {user_social_providersCreateArgs} args - Arguments to create a User_social_providers.
     * @example
     * // Create one User_social_providers
     * const User_social_providers = await prisma.user_social_providers.create({
     *   data: {
     *     // ... data to create a User_social_providers
     *   }
     * })
     *
     **/
    create<T extends user_social_providersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_social_providersCreateArgs<ExtArgs>>,
    ): Prisma__user_social_providersClient<
      $Result.GetResult<Prisma.$user_social_providersPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many User_social_providers.
     *     @param {user_social_providersCreateManyArgs} args - Arguments to create many User_social_providers.
     *     @example
     *     // Create many User_social_providers
     *     const user_social_providers = await prisma.user_social_providers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends user_social_providersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_social_providersCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User_social_providers.
     * @param {user_social_providersDeleteArgs} args - Arguments to delete one User_social_providers.
     * @example
     * // Delete one User_social_providers
     * const User_social_providers = await prisma.user_social_providers.delete({
     *   where: {
     *     // ... filter to delete one User_social_providers
     *   }
     * })
     *
     **/
    delete<T extends user_social_providersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_social_providersDeleteArgs<ExtArgs>>,
    ): Prisma__user_social_providersClient<
      $Result.GetResult<Prisma.$user_social_providersPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User_social_providers.
     * @param {user_social_providersUpdateArgs} args - Arguments to update one User_social_providers.
     * @example
     * // Update one User_social_providers
     * const user_social_providers = await prisma.user_social_providers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends user_social_providersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_social_providersUpdateArgs<ExtArgs>>,
    ): Prisma__user_social_providersClient<
      $Result.GetResult<Prisma.$user_social_providersPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more User_social_providers.
     * @param {user_social_providersDeleteManyArgs} args - Arguments to filter User_social_providers to delete.
     * @example
     * // Delete a few User_social_providers
     * const { count } = await prisma.user_social_providers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends user_social_providersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_social_providersDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_social_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_social_providersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_social_providers
     * const user_social_providers = await prisma.user_social_providers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends user_social_providersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_social_providersUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User_social_providers.
     * @param {user_social_providersUpsertArgs} args - Arguments to update or create a User_social_providers.
     * @example
     * // Update or create a User_social_providers
     * const user_social_providers = await prisma.user_social_providers.upsert({
     *   create: {
     *     // ... data to create a User_social_providers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_social_providers we want to update
     *   }
     * })
     **/
    upsert<T extends user_social_providersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_social_providersUpsertArgs<ExtArgs>>,
    ): Prisma__user_social_providersClient<
      $Result.GetResult<Prisma.$user_social_providersPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of User_social_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_social_providersCountArgs} args - Arguments to filter User_social_providers to count.
     * @example
     * // Count the number of User_social_providers
     * const count = await prisma.user_social_providers.count({
     *   where: {
     *     // ... the filter for the User_social_providers we want to count
     *   }
     * })
     **/
    count<T extends user_social_providersCountArgs>(
      args?: Subset<T, user_social_providersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_social_providersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_social_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_social_providersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends User_social_providersAggregateArgs>(
      args: Subset<T, User_social_providersAggregateArgs>,
    ): Prisma.PrismaPromise<GetUser_social_providersAggregateType<T>>;

    /**
     * Group by User_social_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_social_providersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends user_social_providersGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_social_providersGroupByArgs['orderBy'] }
        : { orderBy?: user_social_providersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, user_social_providersGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUser_social_providersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user_social_providers model
     */
    readonly fields: user_social_providersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_social_providers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_social_providersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user_social_providers model
   */
  interface user_social_providersFieldRefs {
    readonly id: FieldRef<'user_social_providers', 'BigInt'>;
    readonly created_at: FieldRef<'user_social_providers', 'DateTime'>;
    readonly updated_at: FieldRef<'user_social_providers', 'DateTime'>;
    readonly provider: FieldRef<'user_social_providers', 'String'>;
    readonly user_id: FieldRef<'user_social_providers', 'BigInt'>;
    readonly url_register: FieldRef<'user_social_providers', 'String'>;
    readonly provider_id: FieldRef<'user_social_providers', 'String'>;
  }

  // Custom InputTypes

  /**
   * user_social_providers findUnique
   */
  export type user_social_providersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
    /**
     * Filter, which user_social_providers to fetch.
     */
    where: user_social_providersWhereUniqueInput;
  };

  /**
   * user_social_providers findUniqueOrThrow
   */
  export type user_social_providersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
    /**
     * Filter, which user_social_providers to fetch.
     */
    where: user_social_providersWhereUniqueInput;
  };

  /**
   * user_social_providers findFirst
   */
  export type user_social_providersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
    /**
     * Filter, which user_social_providers to fetch.
     */
    where?: user_social_providersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_social_providers to fetch.
     */
    orderBy?:
      | user_social_providersOrderByWithRelationInput
      | user_social_providersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_social_providers.
     */
    cursor?: user_social_providersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_social_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_social_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_social_providers.
     */
    distinct?: User_social_providersScalarFieldEnum | User_social_providersScalarFieldEnum[];
  };

  /**
   * user_social_providers findFirstOrThrow
   */
  export type user_social_providersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
    /**
     * Filter, which user_social_providers to fetch.
     */
    where?: user_social_providersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_social_providers to fetch.
     */
    orderBy?:
      | user_social_providersOrderByWithRelationInput
      | user_social_providersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_social_providers.
     */
    cursor?: user_social_providersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_social_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_social_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_social_providers.
     */
    distinct?: User_social_providersScalarFieldEnum | User_social_providersScalarFieldEnum[];
  };

  /**
   * user_social_providers findMany
   */
  export type user_social_providersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
    /**
     * Filter, which user_social_providers to fetch.
     */
    where?: user_social_providersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_social_providers to fetch.
     */
    orderBy?:
      | user_social_providersOrderByWithRelationInput
      | user_social_providersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing user_social_providers.
     */
    cursor?: user_social_providersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_social_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_social_providers.
     */
    skip?: number;
    distinct?: User_social_providersScalarFieldEnum | User_social_providersScalarFieldEnum[];
  };

  /**
   * user_social_providers create
   */
  export type user_social_providersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
    /**
     * The data needed to create a user_social_providers.
     */
    data: XOR<user_social_providersCreateInput, user_social_providersUncheckedCreateInput>;
  };

  /**
   * user_social_providers createMany
   */
  export type user_social_providersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many user_social_providers.
     */
    data: user_social_providersCreateManyInput | user_social_providersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user_social_providers update
   */
  export type user_social_providersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
    /**
     * The data needed to update a user_social_providers.
     */
    data: XOR<user_social_providersUpdateInput, user_social_providersUncheckedUpdateInput>;
    /**
     * Choose, which user_social_providers to update.
     */
    where: user_social_providersWhereUniqueInput;
  };

  /**
   * user_social_providers updateMany
   */
  export type user_social_providersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update user_social_providers.
     */
    data: XOR<
      user_social_providersUpdateManyMutationInput,
      user_social_providersUncheckedUpdateManyInput
    >;
    /**
     * Filter which user_social_providers to update
     */
    where?: user_social_providersWhereInput;
  };

  /**
   * user_social_providers upsert
   */
  export type user_social_providersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
    /**
     * The filter to search for the user_social_providers to update in case it exists.
     */
    where: user_social_providersWhereUniqueInput;
    /**
     * In case the user_social_providers found by the `where` argument doesn't exist, create a new user_social_providers with this data.
     */
    create: XOR<user_social_providersCreateInput, user_social_providersUncheckedCreateInput>;
    /**
     * In case the user_social_providers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_social_providersUpdateInput, user_social_providersUncheckedUpdateInput>;
  };

  /**
   * user_social_providers delete
   */
  export type user_social_providersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
    /**
     * Filter which user_social_providers to delete.
     */
    where: user_social_providersWhereUniqueInput;
  };

  /**
   * user_social_providers deleteMany
   */
  export type user_social_providersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which user_social_providers to delete
     */
    where?: user_social_providersWhereInput;
  };

  /**
   * user_social_providers without action
   */
  export type user_social_providersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_social_providers
     */
    select?: user_social_providersSelect<ExtArgs> | null;
  };

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  export type UsersAvgAggregateOutputType = {
    id: number | null;
    role_id: number | null;
  };

  export type UsersSumAggregateOutputType = {
    id: number | null;
    role_id: number | null;
  };

  export type UsersMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    email_verified_at: Date | null;
    password: string | null;
    remember_token: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    avatar: string | null;
    sex: $Enums.users_sex | null;
    birthday: string | null;
    role_id: number | null;
  };

  export type UsersMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    email_verified_at: Date | null;
    password: string | null;
    remember_token: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    avatar: string | null;
    sex: $Enums.users_sex | null;
    birthday: string | null;
    role_id: number | null;
  };

  export type UsersCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    email_verified_at: number;
    password: number;
    remember_token: number;
    created_at: number;
    updated_at: number;
    avatar: number;
    sex: number;
    birthday: number;
    role_id: number;
    _all: number;
  };

  export type UsersAvgAggregateInputType = {
    id?: true;
    role_id?: true;
  };

  export type UsersSumAggregateInputType = {
    id?: true;
    role_id?: true;
  };

  export type UsersMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    email_verified_at?: true;
    password?: true;
    remember_token?: true;
    created_at?: true;
    updated_at?: true;
    avatar?: true;
    sex?: true;
    birthday?: true;
    role_id?: true;
  };

  export type UsersMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    email_verified_at?: true;
    password?: true;
    remember_token?: true;
    created_at?: true;
    updated_at?: true;
    avatar?: true;
    sex?: true;
    birthday?: true;
    role_id?: true;
  };

  export type UsersCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    email_verified_at?: true;
    password?: true;
    remember_token?: true;
    created_at?: true;
    updated_at?: true;
    avatar?: true;
    sex?: true;
    birthday?: true;
    role_id?: true;
    _all?: true;
  };

  export type UsersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UsersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UsersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UsersMaxAggregateInputType;
  };

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>;
  };

  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: usersWhereInput;
      orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[];
      by: UsersScalarFieldEnum[] | UsersScalarFieldEnum;
      having?: usersScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: UsersCountAggregateInputType | true;
      _avg?: UsersAvgAggregateInputType;
      _sum?: UsersSumAggregateInputType;
      _min?: UsersMinAggregateInputType;
      _max?: UsersMaxAggregateInputType;
    };

  export type UsersGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    email_verified_at: Date | null;
    password: string;
    remember_token: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    avatar: string | null;
    sex: $Enums.users_sex;
    birthday: string | null;
    role_id: number | null;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UsersGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
          : GetScalarType<T[P], UsersGroupByOutputType[P]>;
      }
    >
  >;

  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        email?: boolean;
        email_verified_at?: boolean;
        password?: boolean;
        remember_token?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        avatar?: boolean;
        sex?: boolean;
        birthday?: boolean;
        role_id?: boolean;
        role?: boolean | users$roleArgs<ExtArgs>;
      },
      ExtArgs['result']['users']
    >;

  export type usersSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    email_verified_at?: boolean;
    password?: boolean;
    remember_token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    avatar?: boolean;
    sex?: boolean;
    birthday?: boolean;
    role_id?: boolean;
  };

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | users$roleArgs<ExtArgs>;
  };

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'users';
    objects: {
      role: Prisma.$user_rolesPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        email_verified_at: Date | null;
        password: string;
        remember_token: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        avatar: string | null;
        sex: $Enums.users_sex;
        birthday: string | null;
        role_id: number | null;
      },
      ExtArgs['result']['users']
    >;
    composites: {};
  };

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<
    Prisma.$usersPayload,
    S
  >;

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    usersFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UsersCountAggregateInputType | true;
  };

  export interface usersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users']; meta: { name: 'users' } };
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UsersAggregateArgs>(
      args: Subset<T, UsersAggregateArgs>,
    ): Prisma.PrismaPromise<GetUsersAggregateType<T>>;

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the users model
     */
    readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends users$roleArgs<ExtArgs> = {}>(
      args?: Subset<T, users$roleArgs<ExtArgs>>,
    ): Prisma__user_rolesClient<
      $Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<'users', 'Int'>;
    readonly name: FieldRef<'users', 'String'>;
    readonly email: FieldRef<'users', 'String'>;
    readonly email_verified_at: FieldRef<'users', 'DateTime'>;
    readonly password: FieldRef<'users', 'String'>;
    readonly remember_token: FieldRef<'users', 'String'>;
    readonly created_at: FieldRef<'users', 'DateTime'>;
    readonly updated_at: FieldRef<'users', 'DateTime'>;
    readonly avatar: FieldRef<'users', 'String'>;
    readonly sex: FieldRef<'users', 'users_sex'>;
    readonly birthday: FieldRef<'users', 'String'>;
    readonly role_id: FieldRef<'users', 'Int'>;
  }

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * users findMany
   */
  export type usersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the users
       */
      select?: usersSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: usersInclude<ExtArgs> | null;
      /**
       * The data needed to create a users.
       */
      data: XOR<usersCreateInput, usersUncheckedCreateInput>;
    };

  /**
   * users createMany
   */
  export type usersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the users
       */
      select?: usersSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: usersInclude<ExtArgs> | null;
      /**
       * The data needed to update a users.
       */
      data: XOR<usersUpdateInput, usersUncheckedUpdateInput>;
      /**
       * Choose, which users to update.
       */
      where: usersWhereUniqueInput;
    };

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: usersWhereInput;
  };

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the users
       */
      select?: usersSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: usersInclude<ExtArgs> | null;
      /**
       * The filter to search for the users to update in case it exists.
       */
      where: usersWhereUniqueInput;
      /**
       * In case the users found by the `where` argument doesn't exist, create a new users with this data.
       */
      create: XOR<usersCreateInput, usersUncheckedCreateInput>;
      /**
       * In case the users was found with the provided `where` argument, update it with this data.
       */
      update: XOR<usersUpdateInput, usersUncheckedUpdateInput>;
    };

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the users
       */
      select?: usersSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: usersInclude<ExtArgs> | null;
      /**
       * Filter which users to delete.
       */
      where: usersWhereUniqueInput;
    };

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput;
  };

  /**
   * users.role
   */
  export type users$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    where?: user_rolesWhereInput;
  };

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the users
       */
      select?: usersSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: usersInclude<ExtArgs> | null;
    };

  /**
   * Model user_roles
   */

  export type AggregateUser_roles = {
    _count: User_rolesCountAggregateOutputType | null;
    _avg: User_rolesAvgAggregateOutputType | null;
    _sum: User_rolesSumAggregateOutputType | null;
    _min: User_rolesMinAggregateOutputType | null;
    _max: User_rolesMaxAggregateOutputType | null;
  };

  export type User_rolesAvgAggregateOutputType = {
    id: number | null;
  };

  export type User_rolesSumAggregateOutputType = {
    id: number | null;
  };

  export type User_rolesMinAggregateOutputType = {
    id: number | null;
    name: $Enums.roles | null;
  };

  export type User_rolesMaxAggregateOutputType = {
    id: number | null;
    name: $Enums.roles | null;
  };

  export type User_rolesCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type User_rolesAvgAggregateInputType = {
    id?: true;
  };

  export type User_rolesSumAggregateInputType = {
    id?: true;
  };

  export type User_rolesMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type User_rolesMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type User_rolesCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type User_rolesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which user_roles to aggregate.
     */
    where?: user_rolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: user_rolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned user_roles
     **/
    _count?: true | User_rolesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: User_rolesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: User_rolesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_rolesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_rolesMaxAggregateInputType;
  };

  export type GetUser_rolesAggregateType<T extends User_rolesAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_roles[P]>
      : GetScalarType<T[P], AggregateUser_roles[P]>;
  };

  export type user_rolesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_rolesWhereInput;
    orderBy?: user_rolesOrderByWithAggregationInput | user_rolesOrderByWithAggregationInput[];
    by: User_rolesScalarFieldEnum[] | User_rolesScalarFieldEnum;
    having?: user_rolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_rolesCountAggregateInputType | true;
    _avg?: User_rolesAvgAggregateInputType;
    _sum?: User_rolesSumAggregateInputType;
    _min?: User_rolesMinAggregateInputType;
    _max?: User_rolesMaxAggregateInputType;
  };

  export type User_rolesGroupByOutputType = {
    id: number;
    name: $Enums.roles;
    _count: User_rolesCountAggregateOutputType | null;
    _avg: User_rolesAvgAggregateOutputType | null;
    _sum: User_rolesSumAggregateOutputType | null;
    _min: User_rolesMinAggregateOutputType | null;
    _max: User_rolesMaxAggregateOutputType | null;
  };

  type GetUser_rolesGroupByPayload<T extends user_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_rolesGroupByOutputType, T['by']> & {
        [P in keyof T & keyof User_rolesGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
          : GetScalarType<T[P], User_rolesGroupByOutputType[P]>;
      }
    >
  >;

  export type user_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        users?: boolean | user_roles$usersArgs<ExtArgs>;
        _count?: boolean | User_rolesCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['user_roles']
    >;

  export type user_rolesSelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type user_rolesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | user_roles$usersArgs<ExtArgs>;
    _count?: boolean | User_rolesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $user_rolesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'user_roles';
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: $Enums.roles;
      },
      ExtArgs['result']['user_roles']
    >;
    composites: {};
  };

  type user_rolesGetPayload<S extends boolean | null | undefined | user_rolesDefaultArgs> =
    $Result.GetResult<Prisma.$user_rolesPayload, S>;

  type user_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_rolesCountAggregateInputType | true;
    };

  export interface user_rolesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['user_roles'];
      meta: { name: 'user_roles' };
    };
    /**
     * Find zero or one User_roles that matches the filter.
     * @param {user_rolesFindUniqueArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends user_rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesFindUniqueArgs<ExtArgs>>,
    ): Prisma__user_rolesClient<
      $Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User_roles that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {user_rolesFindUniqueOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends user_rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__user_rolesClient<
      $Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends user_rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindFirstArgs<ExtArgs>>,
    ): Prisma__user_rolesClient<
      $Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends user_rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__user_rolesClient<
      $Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_roles.findMany()
     *
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_roles.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const user_rolesWithIdOnly = await prisma.user_roles.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends user_rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User_roles.
     * @param {user_rolesCreateArgs} args - Arguments to create a User_roles.
     * @example
     * // Create one User_roles
     * const User_roles = await prisma.user_roles.create({
     *   data: {
     *     // ... data to create a User_roles
     *   }
     * })
     *
     **/
    create<T extends user_rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesCreateArgs<ExtArgs>>,
    ): Prisma__user_rolesClient<
      $Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many User_roles.
     *     @param {user_rolesCreateManyArgs} args - Arguments to create many User_roles.
     *     @example
     *     // Create many User_roles
     *     const user_roles = await prisma.user_roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends user_rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User_roles.
     * @param {user_rolesDeleteArgs} args - Arguments to delete one User_roles.
     * @example
     * // Delete one User_roles
     * const User_roles = await prisma.user_roles.delete({
     *   where: {
     *     // ... filter to delete one User_roles
     *   }
     * })
     *
     **/
    delete<T extends user_rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesDeleteArgs<ExtArgs>>,
    ): Prisma__user_rolesClient<
      $Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User_roles.
     * @param {user_rolesUpdateArgs} args - Arguments to update one User_roles.
     * @example
     * // Update one User_roles
     * const user_roles = await prisma.user_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends user_rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesUpdateArgs<ExtArgs>>,
    ): Prisma__user_rolesClient<
      $Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more User_roles.
     * @param {user_rolesDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends user_rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_rolesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_roles = await prisma.user_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends user_rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User_roles.
     * @param {user_rolesUpsertArgs} args - Arguments to update or create a User_roles.
     * @example
     * // Update or create a User_roles
     * const user_roles = await prisma.user_roles.upsert({
     *   create: {
     *     // ... data to create a User_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_roles we want to update
     *   }
     * })
     **/
    upsert<T extends user_rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_rolesUpsertArgs<ExtArgs>>,
    ): Prisma__user_rolesClient<
      $Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_roles.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
     **/
    count<T extends user_rolesCountArgs>(
      args?: Subset<T, user_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_rolesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends User_rolesAggregateArgs>(
      args: Subset<T, User_rolesAggregateArgs>,
    ): Prisma.PrismaPromise<GetUser_rolesAggregateType<T>>;

    /**
     * Group by User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends user_rolesGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_rolesGroupByArgs['orderBy'] }
        : { orderBy?: user_rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, user_rolesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUser_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user_roles model
     */
    readonly fields: user_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_rolesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends user_roles$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, user_roles$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user_roles model
   */
  interface user_rolesFieldRefs {
    readonly id: FieldRef<'user_roles', 'Int'>;
    readonly name: FieldRef<'user_roles', 'roles'>;
  }

  // Custom InputTypes

  /**
   * user_roles findUnique
   */
  export type user_rolesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput;
  };

  /**
   * user_roles findUniqueOrThrow
   */
  export type user_rolesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput;
  };

  /**
   * user_roles findFirst
   */
  export type user_rolesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[];
  };

  /**
   * user_roles findFirstOrThrow
   */
  export type user_rolesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[];
  };

  /**
   * user_roles findMany
   */
  export type user_rolesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing user_roles.
     */
    cursor?: user_rolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[];
  };

  /**
   * user_roles create
   */
  export type user_rolesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    /**
     * The data needed to create a user_roles.
     */
    data: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>;
  };

  /**
   * user_roles createMany
   */
  export type user_rolesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many user_roles.
     */
    data: user_rolesCreateManyInput | user_rolesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user_roles update
   */
  export type user_rolesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    /**
     * The data needed to update a user_roles.
     */
    data: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>;
    /**
     * Choose, which user_roles to update.
     */
    where: user_rolesWhereUniqueInput;
  };

  /**
   * user_roles updateMany
   */
  export type user_rolesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyInput>;
    /**
     * Filter which user_roles to update
     */
    where?: user_rolesWhereInput;
  };

  /**
   * user_roles upsert
   */
  export type user_rolesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    /**
     * The filter to search for the user_roles to update in case it exists.
     */
    where: user_rolesWhereUniqueInput;
    /**
     * In case the user_roles found by the `where` argument doesn't exist, create a new user_roles with this data.
     */
    create: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>;
    /**
     * In case the user_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>;
  };

  /**
   * user_roles delete
   */
  export type user_rolesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
    /**
     * Filter which user_roles to delete.
     */
    where: user_rolesWhereUniqueInput;
  };

  /**
   * user_roles deleteMany
   */
  export type user_rolesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_rolesWhereInput;
  };

  /**
   * user_roles.users
   */
  export type user_roles$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null;
    where?: usersWhereInput;
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    cursor?: usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * user_roles without action
   */
  export type user_rolesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_rolesInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BlogsScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BlogsScalarFieldEnum =
    (typeof BlogsScalarFieldEnum)[keyof typeof BlogsScalarFieldEnum];

  export const CardsScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
    credit_card_number: 'credit_card_number';
    expiration_year: 'expiration_year';
    expiration_month: 'expiration_month';
    brand: 'brand';
    card_holder_name: 'card_holder_name';
    customer_card_id: 'customer_card_id';
    user_id: 'user_id';
    primary: 'primary';
  };

  export type CardsScalarFieldEnum =
    (typeof CardsScalarFieldEnum)[keyof typeof CardsScalarFieldEnum];

  export const InvoicesScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
    payment_method: 'payment_method';
    transaction_id: 'transaction_id';
    total: 'total';
    status: 'status';
    user_id: 'user_id';
    subscription_id: 'subscription_id';
  };

  export type InvoicesScalarFieldEnum =
    (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum];

  export const MigrationsScalarFieldEnum: {
    id: 'id';
    migration: 'migration';
    batch: 'batch';
  };

  export type MigrationsScalarFieldEnum =
    (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum];

  export const NotificationsScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
    message: 'message';
    user_id: 'user_id';
  };

  export type NotificationsScalarFieldEnum =
    (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum];

  export const SubscriptionsScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
    name: 'name';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    user_id: 'user_id';
    subscription_id: 'subscription_id';
    status: 'status';
  };

  export type SubscriptionsScalarFieldEnum =
    (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum];

  export const User_social_providersScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
    provider: 'provider';
    user_id: 'user_id';
    url_register: 'url_register';
    provider_id: 'provider_id';
  };

  export type User_social_providersScalarFieldEnum =
    (typeof User_social_providersScalarFieldEnum)[keyof typeof User_social_providersScalarFieldEnum];

  export const UsersScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    email_verified_at: 'email_verified_at';
    password: 'password';
    remember_token: 'remember_token';
    created_at: 'created_at';
    updated_at: 'updated_at';
    avatar: 'avatar';
    sex: 'sex';
    birthday: 'birthday';
    role_id: 'role_id';
  };

  export type UsersScalarFieldEnum =
    (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];

  export const User_rolesScalarFieldEnum: {
    id: 'id';
    name: 'name';
  };

  export type User_rolesScalarFieldEnum =
    (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'invoices_status'
   */
  export type Enuminvoices_statusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'invoices_status'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'subscriptions_status'
   */
  export type Enumsubscriptions_statusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'subscriptions_status'
  >;

  /**
   * Reference to a field of type 'users_sex'
   */
  export type Enumusers_sexFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'users_sex'
  >;

  /**
   * Reference to a field of type 'roles'
   */
  export type EnumrolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'roles'>;

  /**
   * Deep Input Types
   */

  export type blogsWhereInput = {
    AND?: blogsWhereInput | blogsWhereInput[];
    OR?: blogsWhereInput[];
    NOT?: blogsWhereInput | blogsWhereInput[];
    id?: BigIntFilter<'blogs'> | bigint | number;
    created_at?: DateTimeNullableFilter<'blogs'> | Date | string | null;
    updated_at?: DateTimeNullableFilter<'blogs'> | Date | string | null;
  };

  export type blogsOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
  };

  export type blogsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: blogsWhereInput | blogsWhereInput[];
      OR?: blogsWhereInput[];
      NOT?: blogsWhereInput | blogsWhereInput[];
      created_at?: DateTimeNullableFilter<'blogs'> | Date | string | null;
      updated_at?: DateTimeNullableFilter<'blogs'> | Date | string | null;
    },
    'id'
  >;

  export type blogsOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: blogsCountOrderByAggregateInput;
    _avg?: blogsAvgOrderByAggregateInput;
    _max?: blogsMaxOrderByAggregateInput;
    _min?: blogsMinOrderByAggregateInput;
    _sum?: blogsSumOrderByAggregateInput;
  };

  export type blogsScalarWhereWithAggregatesInput = {
    AND?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[];
    OR?: blogsScalarWhereWithAggregatesInput[];
    NOT?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'blogs'> | bigint | number;
    created_at?: DateTimeNullableWithAggregatesFilter<'blogs'> | Date | string | null;
    updated_at?: DateTimeNullableWithAggregatesFilter<'blogs'> | Date | string | null;
  };

  export type cardsWhereInput = {
    AND?: cardsWhereInput | cardsWhereInput[];
    OR?: cardsWhereInput[];
    NOT?: cardsWhereInput | cardsWhereInput[];
    id?: BigIntFilter<'cards'> | bigint | number;
    created_at?: DateTimeNullableFilter<'cards'> | Date | string | null;
    updated_at?: DateTimeNullableFilter<'cards'> | Date | string | null;
    credit_card_number?: StringNullableFilter<'cards'> | string | null;
    expiration_year?: StringNullableFilter<'cards'> | string | null;
    expiration_month?: StringNullableFilter<'cards'> | string | null;
    brand?: StringNullableFilter<'cards'> | string | null;
    card_holder_name?: StringNullableFilter<'cards'> | string | null;
    customer_card_id?: StringNullableFilter<'cards'> | string | null;
    user_id?: BigIntNullableFilter<'cards'> | bigint | number | null;
    primary?: BoolFilter<'cards'> | boolean;
  };

  export type cardsOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    credit_card_number?: SortOrderInput | SortOrder;
    expiration_year?: SortOrderInput | SortOrder;
    expiration_month?: SortOrderInput | SortOrder;
    brand?: SortOrderInput | SortOrder;
    card_holder_name?: SortOrderInput | SortOrder;
    customer_card_id?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    primary?: SortOrder;
  };

  export type cardsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: cardsWhereInput | cardsWhereInput[];
      OR?: cardsWhereInput[];
      NOT?: cardsWhereInput | cardsWhereInput[];
      created_at?: DateTimeNullableFilter<'cards'> | Date | string | null;
      updated_at?: DateTimeNullableFilter<'cards'> | Date | string | null;
      credit_card_number?: StringNullableFilter<'cards'> | string | null;
      expiration_year?: StringNullableFilter<'cards'> | string | null;
      expiration_month?: StringNullableFilter<'cards'> | string | null;
      brand?: StringNullableFilter<'cards'> | string | null;
      card_holder_name?: StringNullableFilter<'cards'> | string | null;
      customer_card_id?: StringNullableFilter<'cards'> | string | null;
      user_id?: BigIntNullableFilter<'cards'> | bigint | number | null;
      primary?: BoolFilter<'cards'> | boolean;
    },
    'id'
  >;

  export type cardsOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    credit_card_number?: SortOrderInput | SortOrder;
    expiration_year?: SortOrderInput | SortOrder;
    expiration_month?: SortOrderInput | SortOrder;
    brand?: SortOrderInput | SortOrder;
    card_holder_name?: SortOrderInput | SortOrder;
    customer_card_id?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    primary?: SortOrder;
    _count?: cardsCountOrderByAggregateInput;
    _avg?: cardsAvgOrderByAggregateInput;
    _max?: cardsMaxOrderByAggregateInput;
    _min?: cardsMinOrderByAggregateInput;
    _sum?: cardsSumOrderByAggregateInput;
  };

  export type cardsScalarWhereWithAggregatesInput = {
    AND?: cardsScalarWhereWithAggregatesInput | cardsScalarWhereWithAggregatesInput[];
    OR?: cardsScalarWhereWithAggregatesInput[];
    NOT?: cardsScalarWhereWithAggregatesInput | cardsScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'cards'> | bigint | number;
    created_at?: DateTimeNullableWithAggregatesFilter<'cards'> | Date | string | null;
    updated_at?: DateTimeNullableWithAggregatesFilter<'cards'> | Date | string | null;
    credit_card_number?: StringNullableWithAggregatesFilter<'cards'> | string | null;
    expiration_year?: StringNullableWithAggregatesFilter<'cards'> | string | null;
    expiration_month?: StringNullableWithAggregatesFilter<'cards'> | string | null;
    brand?: StringNullableWithAggregatesFilter<'cards'> | string | null;
    card_holder_name?: StringNullableWithAggregatesFilter<'cards'> | string | null;
    customer_card_id?: StringNullableWithAggregatesFilter<'cards'> | string | null;
    user_id?: BigIntNullableWithAggregatesFilter<'cards'> | bigint | number | null;
    primary?: BoolWithAggregatesFilter<'cards'> | boolean;
  };

  export type invoicesWhereInput = {
    AND?: invoicesWhereInput | invoicesWhereInput[];
    OR?: invoicesWhereInput[];
    NOT?: invoicesWhereInput | invoicesWhereInput[];
    id?: BigIntFilter<'invoices'> | bigint | number;
    created_at?: DateTimeNullableFilter<'invoices'> | Date | string | null;
    updated_at?: DateTimeNullableFilter<'invoices'> | Date | string | null;
    payment_method?: StringNullableFilter<'invoices'> | string | null;
    transaction_id?: StringNullableFilter<'invoices'> | string | null;
    total?: FloatFilter<'invoices'> | number;
    status?: Enuminvoices_statusFilter<'invoices'> | $Enums.invoices_status;
    user_id?: BigIntNullableFilter<'invoices'> | bigint | number | null;
    subscription_id?: BigIntNullableFilter<'invoices'> | bigint | number | null;
  };

  export type invoicesOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    transaction_id?: SortOrderInput | SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrderInput | SortOrder;
    subscription_id?: SortOrderInput | SortOrder;
  };

  export type invoicesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: invoicesWhereInput | invoicesWhereInput[];
      OR?: invoicesWhereInput[];
      NOT?: invoicesWhereInput | invoicesWhereInput[];
      created_at?: DateTimeNullableFilter<'invoices'> | Date | string | null;
      updated_at?: DateTimeNullableFilter<'invoices'> | Date | string | null;
      payment_method?: StringNullableFilter<'invoices'> | string | null;
      transaction_id?: StringNullableFilter<'invoices'> | string | null;
      total?: FloatFilter<'invoices'> | number;
      status?: Enuminvoices_statusFilter<'invoices'> | $Enums.invoices_status;
      user_id?: BigIntNullableFilter<'invoices'> | bigint | number | null;
      subscription_id?: BigIntNullableFilter<'invoices'> | bigint | number | null;
    },
    'id'
  >;

  export type invoicesOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    transaction_id?: SortOrderInput | SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrderInput | SortOrder;
    subscription_id?: SortOrderInput | SortOrder;
    _count?: invoicesCountOrderByAggregateInput;
    _avg?: invoicesAvgOrderByAggregateInput;
    _max?: invoicesMaxOrderByAggregateInput;
    _min?: invoicesMinOrderByAggregateInput;
    _sum?: invoicesSumOrderByAggregateInput;
  };

  export type invoicesScalarWhereWithAggregatesInput = {
    AND?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[];
    OR?: invoicesScalarWhereWithAggregatesInput[];
    NOT?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'invoices'> | bigint | number;
    created_at?: DateTimeNullableWithAggregatesFilter<'invoices'> | Date | string | null;
    updated_at?: DateTimeNullableWithAggregatesFilter<'invoices'> | Date | string | null;
    payment_method?: StringNullableWithAggregatesFilter<'invoices'> | string | null;
    transaction_id?: StringNullableWithAggregatesFilter<'invoices'> | string | null;
    total?: FloatWithAggregatesFilter<'invoices'> | number;
    status?: Enuminvoices_statusWithAggregatesFilter<'invoices'> | $Enums.invoices_status;
    user_id?: BigIntNullableWithAggregatesFilter<'invoices'> | bigint | number | null;
    subscription_id?: BigIntNullableWithAggregatesFilter<'invoices'> | bigint | number | null;
  };

  export type migrationsWhereInput = {
    AND?: migrationsWhereInput | migrationsWhereInput[];
    OR?: migrationsWhereInput[];
    NOT?: migrationsWhereInput | migrationsWhereInput[];
    id?: IntFilter<'migrations'> | number;
    migration?: StringFilter<'migrations'> | string;
    batch?: IntFilter<'migrations'> | number;
  };

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder;
    migration?: SortOrder;
    batch?: SortOrder;
  };

  export type migrationsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: migrationsWhereInput | migrationsWhereInput[];
      OR?: migrationsWhereInput[];
      NOT?: migrationsWhereInput | migrationsWhereInput[];
      migration?: StringFilter<'migrations'> | string;
      batch?: IntFilter<'migrations'> | number;
    },
    'id'
  >;

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder;
    migration?: SortOrder;
    batch?: SortOrder;
    _count?: migrationsCountOrderByAggregateInput;
    _avg?: migrationsAvgOrderByAggregateInput;
    _max?: migrationsMaxOrderByAggregateInput;
    _min?: migrationsMinOrderByAggregateInput;
    _sum?: migrationsSumOrderByAggregateInput;
  };

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[];
    OR?: migrationsScalarWhereWithAggregatesInput[];
    NOT?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'migrations'> | number;
    migration?: StringWithAggregatesFilter<'migrations'> | string;
    batch?: IntWithAggregatesFilter<'migrations'> | number;
  };

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[];
    OR?: notificationsWhereInput[];
    NOT?: notificationsWhereInput | notificationsWhereInput[];
    id?: BigIntFilter<'notifications'> | bigint | number;
    created_at?: DateTimeNullableFilter<'notifications'> | Date | string | null;
    updated_at?: DateTimeNullableFilter<'notifications'> | Date | string | null;
    message?: StringFilter<'notifications'> | string;
    user_id?: BigIntNullableFilter<'notifications'> | bigint | number | null;
  };

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    message?: SortOrder;
    user_id?: SortOrderInput | SortOrder;
  };

  export type notificationsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: notificationsWhereInput | notificationsWhereInput[];
      OR?: notificationsWhereInput[];
      NOT?: notificationsWhereInput | notificationsWhereInput[];
      created_at?: DateTimeNullableFilter<'notifications'> | Date | string | null;
      updated_at?: DateTimeNullableFilter<'notifications'> | Date | string | null;
      message?: StringFilter<'notifications'> | string;
      user_id?: BigIntNullableFilter<'notifications'> | bigint | number | null;
    },
    'id'
  >;

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    message?: SortOrder;
    user_id?: SortOrderInput | SortOrder;
    _count?: notificationsCountOrderByAggregateInput;
    _avg?: notificationsAvgOrderByAggregateInput;
    _max?: notificationsMaxOrderByAggregateInput;
    _min?: notificationsMinOrderByAggregateInput;
    _sum?: notificationsSumOrderByAggregateInput;
  };

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?:
      | notificationsScalarWhereWithAggregatesInput
      | notificationsScalarWhereWithAggregatesInput[];
    OR?: notificationsScalarWhereWithAggregatesInput[];
    NOT?:
      | notificationsScalarWhereWithAggregatesInput
      | notificationsScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'notifications'> | bigint | number;
    created_at?: DateTimeNullableWithAggregatesFilter<'notifications'> | Date | string | null;
    updated_at?: DateTimeNullableWithAggregatesFilter<'notifications'> | Date | string | null;
    message?: StringWithAggregatesFilter<'notifications'> | string;
    user_id?: BigIntNullableWithAggregatesFilter<'notifications'> | bigint | number | null;
  };

  export type subscriptionsWhereInput = {
    AND?: subscriptionsWhereInput | subscriptionsWhereInput[];
    OR?: subscriptionsWhereInput[];
    NOT?: subscriptionsWhereInput | subscriptionsWhereInput[];
    id?: BigIntFilter<'subscriptions'> | bigint | number;
    created_at?: DateTimeNullableFilter<'subscriptions'> | Date | string | null;
    updated_at?: DateTimeNullableFilter<'subscriptions'> | Date | string | null;
    name?: StringNullableFilter<'subscriptions'> | string | null;
    description?: StringNullableFilter<'subscriptions'> | string | null;
    start_date?: StringNullableFilter<'subscriptions'> | string | null;
    end_date?: StringNullableFilter<'subscriptions'> | string | null;
    user_id?: BigIntNullableFilter<'subscriptions'> | bigint | number | null;
    subscription_id?: StringNullableFilter<'subscriptions'> | string | null;
    status?: Enumsubscriptions_statusFilter<'subscriptions'> | $Enums.subscriptions_status;
  };

  export type subscriptionsOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    subscription_id?: SortOrderInput | SortOrder;
    status?: SortOrder;
  };

  export type subscriptionsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: subscriptionsWhereInput | subscriptionsWhereInput[];
      OR?: subscriptionsWhereInput[];
      NOT?: subscriptionsWhereInput | subscriptionsWhereInput[];
      created_at?: DateTimeNullableFilter<'subscriptions'> | Date | string | null;
      updated_at?: DateTimeNullableFilter<'subscriptions'> | Date | string | null;
      name?: StringNullableFilter<'subscriptions'> | string | null;
      description?: StringNullableFilter<'subscriptions'> | string | null;
      start_date?: StringNullableFilter<'subscriptions'> | string | null;
      end_date?: StringNullableFilter<'subscriptions'> | string | null;
      user_id?: BigIntNullableFilter<'subscriptions'> | bigint | number | null;
      subscription_id?: StringNullableFilter<'subscriptions'> | string | null;
      status?: Enumsubscriptions_statusFilter<'subscriptions'> | $Enums.subscriptions_status;
    },
    'id'
  >;

  export type subscriptionsOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    subscription_id?: SortOrderInput | SortOrder;
    status?: SortOrder;
    _count?: subscriptionsCountOrderByAggregateInput;
    _avg?: subscriptionsAvgOrderByAggregateInput;
    _max?: subscriptionsMaxOrderByAggregateInput;
    _min?: subscriptionsMinOrderByAggregateInput;
    _sum?: subscriptionsSumOrderByAggregateInput;
  };

  export type subscriptionsScalarWhereWithAggregatesInput = {
    AND?:
      | subscriptionsScalarWhereWithAggregatesInput
      | subscriptionsScalarWhereWithAggregatesInput[];
    OR?: subscriptionsScalarWhereWithAggregatesInput[];
    NOT?:
      | subscriptionsScalarWhereWithAggregatesInput
      | subscriptionsScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'subscriptions'> | bigint | number;
    created_at?: DateTimeNullableWithAggregatesFilter<'subscriptions'> | Date | string | null;
    updated_at?: DateTimeNullableWithAggregatesFilter<'subscriptions'> | Date | string | null;
    name?: StringNullableWithAggregatesFilter<'subscriptions'> | string | null;
    description?: StringNullableWithAggregatesFilter<'subscriptions'> | string | null;
    start_date?: StringNullableWithAggregatesFilter<'subscriptions'> | string | null;
    end_date?: StringNullableWithAggregatesFilter<'subscriptions'> | string | null;
    user_id?: BigIntNullableWithAggregatesFilter<'subscriptions'> | bigint | number | null;
    subscription_id?: StringNullableWithAggregatesFilter<'subscriptions'> | string | null;
    status?:
      | Enumsubscriptions_statusWithAggregatesFilter<'subscriptions'>
      | $Enums.subscriptions_status;
  };

  export type user_social_providersWhereInput = {
    AND?: user_social_providersWhereInput | user_social_providersWhereInput[];
    OR?: user_social_providersWhereInput[];
    NOT?: user_social_providersWhereInput | user_social_providersWhereInput[];
    id?: BigIntFilter<'user_social_providers'> | bigint | number;
    created_at?: DateTimeNullableFilter<'user_social_providers'> | Date | string | null;
    updated_at?: DateTimeNullableFilter<'user_social_providers'> | Date | string | null;
    provider?: StringFilter<'user_social_providers'> | string;
    user_id?: BigIntFilter<'user_social_providers'> | bigint | number;
    url_register?: StringFilter<'user_social_providers'> | string;
    provider_id?: StringNullableFilter<'user_social_providers'> | string | null;
  };

  export type user_social_providersOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    provider?: SortOrder;
    user_id?: SortOrder;
    url_register?: SortOrder;
    provider_id?: SortOrderInput | SortOrder;
  };

  export type user_social_providersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: user_social_providersWhereInput | user_social_providersWhereInput[];
      OR?: user_social_providersWhereInput[];
      NOT?: user_social_providersWhereInput | user_social_providersWhereInput[];
      created_at?: DateTimeNullableFilter<'user_social_providers'> | Date | string | null;
      updated_at?: DateTimeNullableFilter<'user_social_providers'> | Date | string | null;
      provider?: StringFilter<'user_social_providers'> | string;
      user_id?: BigIntFilter<'user_social_providers'> | bigint | number;
      url_register?: StringFilter<'user_social_providers'> | string;
      provider_id?: StringNullableFilter<'user_social_providers'> | string | null;
    },
    'id'
  >;

  export type user_social_providersOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    provider?: SortOrder;
    user_id?: SortOrder;
    url_register?: SortOrder;
    provider_id?: SortOrderInput | SortOrder;
    _count?: user_social_providersCountOrderByAggregateInput;
    _avg?: user_social_providersAvgOrderByAggregateInput;
    _max?: user_social_providersMaxOrderByAggregateInput;
    _min?: user_social_providersMinOrderByAggregateInput;
    _sum?: user_social_providersSumOrderByAggregateInput;
  };

  export type user_social_providersScalarWhereWithAggregatesInput = {
    AND?:
      | user_social_providersScalarWhereWithAggregatesInput
      | user_social_providersScalarWhereWithAggregatesInput[];
    OR?: user_social_providersScalarWhereWithAggregatesInput[];
    NOT?:
      | user_social_providersScalarWhereWithAggregatesInput
      | user_social_providersScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'user_social_providers'> | bigint | number;
    created_at?:
      | DateTimeNullableWithAggregatesFilter<'user_social_providers'>
      | Date
      | string
      | null;
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<'user_social_providers'>
      | Date
      | string
      | null;
    provider?: StringWithAggregatesFilter<'user_social_providers'> | string;
    user_id?: BigIntWithAggregatesFilter<'user_social_providers'> | bigint | number;
    url_register?: StringWithAggregatesFilter<'user_social_providers'> | string;
    provider_id?: StringNullableWithAggregatesFilter<'user_social_providers'> | string | null;
  };

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[];
    OR?: usersWhereInput[];
    NOT?: usersWhereInput | usersWhereInput[];
    id?: IntFilter<'users'> | number;
    name?: StringFilter<'users'> | string;
    email?: StringFilter<'users'> | string;
    email_verified_at?: DateTimeNullableFilter<'users'> | Date | string | null;
    password?: StringFilter<'users'> | string;
    remember_token?: StringNullableFilter<'users'> | string | null;
    created_at?: DateTimeNullableFilter<'users'> | Date | string | null;
    updated_at?: DateTimeNullableFilter<'users'> | Date | string | null;
    avatar?: StringNullableFilter<'users'> | string | null;
    sex?: Enumusers_sexFilter<'users'> | $Enums.users_sex;
    birthday?: StringNullableFilter<'users'> | string | null;
    role_id?: IntNullableFilter<'users'> | number | null;
    role?: XOR<User_rolesNullableRelationFilter, user_rolesWhereInput> | null;
  };

  export type usersOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    email_verified_at?: SortOrderInput | SortOrder;
    password?: SortOrder;
    remember_token?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    avatar?: SortOrderInput | SortOrder;
    sex?: SortOrder;
    birthday?: SortOrderInput | SortOrder;
    role_id?: SortOrderInput | SortOrder;
    role?: user_rolesOrderByWithRelationInput;
  };

  export type usersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: usersWhereInput | usersWhereInput[];
      OR?: usersWhereInput[];
      NOT?: usersWhereInput | usersWhereInput[];
      name?: StringFilter<'users'> | string;
      email_verified_at?: DateTimeNullableFilter<'users'> | Date | string | null;
      password?: StringFilter<'users'> | string;
      remember_token?: StringNullableFilter<'users'> | string | null;
      created_at?: DateTimeNullableFilter<'users'> | Date | string | null;
      updated_at?: DateTimeNullableFilter<'users'> | Date | string | null;
      avatar?: StringNullableFilter<'users'> | string | null;
      sex?: Enumusers_sexFilter<'users'> | $Enums.users_sex;
      birthday?: StringNullableFilter<'users'> | string | null;
      role_id?: IntNullableFilter<'users'> | number | null;
      role?: XOR<User_rolesNullableRelationFilter, user_rolesWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    email_verified_at?: SortOrderInput | SortOrder;
    password?: SortOrder;
    remember_token?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    avatar?: SortOrderInput | SortOrder;
    sex?: SortOrder;
    birthday?: SortOrderInput | SortOrder;
    role_id?: SortOrderInput | SortOrder;
    _count?: usersCountOrderByAggregateInput;
    _avg?: usersAvgOrderByAggregateInput;
    _max?: usersMaxOrderByAggregateInput;
    _min?: usersMinOrderByAggregateInput;
    _sum?: usersSumOrderByAggregateInput;
  };

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[];
    OR?: usersScalarWhereWithAggregatesInput[];
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'users'> | number;
    name?: StringWithAggregatesFilter<'users'> | string;
    email?: StringWithAggregatesFilter<'users'> | string;
    email_verified_at?: DateTimeNullableWithAggregatesFilter<'users'> | Date | string | null;
    password?: StringWithAggregatesFilter<'users'> | string;
    remember_token?: StringNullableWithAggregatesFilter<'users'> | string | null;
    created_at?: DateTimeNullableWithAggregatesFilter<'users'> | Date | string | null;
    updated_at?: DateTimeNullableWithAggregatesFilter<'users'> | Date | string | null;
    avatar?: StringNullableWithAggregatesFilter<'users'> | string | null;
    sex?: Enumusers_sexWithAggregatesFilter<'users'> | $Enums.users_sex;
    birthday?: StringNullableWithAggregatesFilter<'users'> | string | null;
    role_id?: IntNullableWithAggregatesFilter<'users'> | number | null;
  };

  export type user_rolesWhereInput = {
    AND?: user_rolesWhereInput | user_rolesWhereInput[];
    OR?: user_rolesWhereInput[];
    NOT?: user_rolesWhereInput | user_rolesWhereInput[];
    id?: IntFilter<'user_roles'> | number;
    name?: EnumrolesFilter<'user_roles'> | $Enums.roles;
    users?: UsersListRelationFilter;
  };

  export type user_rolesOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    users?: usersOrderByRelationAggregateInput;
  };

  export type user_rolesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: user_rolesWhereInput | user_rolesWhereInput[];
      OR?: user_rolesWhereInput[];
      NOT?: user_rolesWhereInput | user_rolesWhereInput[];
      name?: EnumrolesFilter<'user_roles'> | $Enums.roles;
      users?: UsersListRelationFilter;
    },
    'id'
  >;

  export type user_rolesOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    _count?: user_rolesCountOrderByAggregateInput;
    _avg?: user_rolesAvgOrderByAggregateInput;
    _max?: user_rolesMaxOrderByAggregateInput;
    _min?: user_rolesMinOrderByAggregateInput;
    _sum?: user_rolesSumOrderByAggregateInput;
  };

  export type user_rolesScalarWhereWithAggregatesInput = {
    AND?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[];
    OR?: user_rolesScalarWhereWithAggregatesInput[];
    NOT?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'user_roles'> | number;
    name?: EnumrolesWithAggregatesFilter<'user_roles'> | $Enums.roles;
  };

  export type blogsCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type blogsUncheckedCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type blogsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type blogsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type blogsCreateManyInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type blogsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type blogsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
  };

  export type cardsCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    credit_card_number?: string | null;
    expiration_year?: string | null;
    expiration_month?: string | null;
    brand?: string | null;
    card_holder_name?: string | null;
    customer_card_id?: string | null;
    user_id?: bigint | number | null;
    primary?: boolean;
  };

  export type cardsUncheckedCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    credit_card_number?: string | null;
    expiration_year?: string | null;
    expiration_month?: string | null;
    brand?: string | null;
    card_holder_name?: string | null;
    customer_card_id?: string | null;
    user_id?: bigint | number | null;
    primary?: boolean;
  };

  export type cardsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    credit_card_number?: NullableStringFieldUpdateOperationsInput | string | null;
    expiration_year?: NullableStringFieldUpdateOperationsInput | string | null;
    expiration_month?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    card_holder_name?: NullableStringFieldUpdateOperationsInput | string | null;
    customer_card_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type cardsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    credit_card_number?: NullableStringFieldUpdateOperationsInput | string | null;
    expiration_year?: NullableStringFieldUpdateOperationsInput | string | null;
    expiration_month?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    card_holder_name?: NullableStringFieldUpdateOperationsInput | string | null;
    customer_card_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type cardsCreateManyInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    credit_card_number?: string | null;
    expiration_year?: string | null;
    expiration_month?: string | null;
    brand?: string | null;
    card_holder_name?: string | null;
    customer_card_id?: string | null;
    user_id?: bigint | number | null;
    primary?: boolean;
  };

  export type cardsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    credit_card_number?: NullableStringFieldUpdateOperationsInput | string | null;
    expiration_year?: NullableStringFieldUpdateOperationsInput | string | null;
    expiration_month?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    card_holder_name?: NullableStringFieldUpdateOperationsInput | string | null;
    customer_card_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type cardsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    credit_card_number?: NullableStringFieldUpdateOperationsInput | string | null;
    expiration_year?: NullableStringFieldUpdateOperationsInput | string | null;
    expiration_month?: NullableStringFieldUpdateOperationsInput | string | null;
    brand?: NullableStringFieldUpdateOperationsInput | string | null;
    card_holder_name?: NullableStringFieldUpdateOperationsInput | string | null;
    customer_card_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type invoicesCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    payment_method?: string | null;
    transaction_id?: string | null;
    total: number;
    status?: $Enums.invoices_status;
    user_id?: bigint | number | null;
    subscription_id?: bigint | number | null;
  };

  export type invoicesUncheckedCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    payment_method?: string | null;
    transaction_id?: string | null;
    total: number;
    status?: $Enums.invoices_status;
    user_id?: bigint | number | null;
    subscription_id?: bigint | number | null;
  };

  export type invoicesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: FloatFieldUpdateOperationsInput | number;
    status?: Enuminvoices_statusFieldUpdateOperationsInput | $Enums.invoices_status;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subscription_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
  };

  export type invoicesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: FloatFieldUpdateOperationsInput | number;
    status?: Enuminvoices_statusFieldUpdateOperationsInput | $Enums.invoices_status;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subscription_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
  };

  export type invoicesCreateManyInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    payment_method?: string | null;
    transaction_id?: string | null;
    total: number;
    status?: $Enums.invoices_status;
    user_id?: bigint | number | null;
    subscription_id?: bigint | number | null;
  };

  export type invoicesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: FloatFieldUpdateOperationsInput | number;
    status?: Enuminvoices_statusFieldUpdateOperationsInput | $Enums.invoices_status;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subscription_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
  };

  export type invoicesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null;
    total?: FloatFieldUpdateOperationsInput | number;
    status?: Enuminvoices_statusFieldUpdateOperationsInput | $Enums.invoices_status;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subscription_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
  };

  export type migrationsCreateInput = {
    migration: string;
    batch: number;
  };

  export type migrationsUncheckedCreateInput = {
    id?: number;
    migration: string;
    batch: number;
  };

  export type migrationsUpdateInput = {
    migration?: StringFieldUpdateOperationsInput | string;
    batch?: IntFieldUpdateOperationsInput | number;
  };

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    migration?: StringFieldUpdateOperationsInput | string;
    batch?: IntFieldUpdateOperationsInput | number;
  };

  export type migrationsCreateManyInput = {
    id?: number;
    migration: string;
    batch: number;
  };

  export type migrationsUpdateManyMutationInput = {
    migration?: StringFieldUpdateOperationsInput | string;
    batch?: IntFieldUpdateOperationsInput | number;
  };

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    migration?: StringFieldUpdateOperationsInput | string;
    batch?: IntFieldUpdateOperationsInput | number;
  };

  export type notificationsCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    message: string;
    user_id?: bigint | number | null;
  };

  export type notificationsUncheckedCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    message: string;
    user_id?: bigint | number | null;
  };

  export type notificationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: StringFieldUpdateOperationsInput | string;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
  };

  export type notificationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: StringFieldUpdateOperationsInput | string;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
  };

  export type notificationsCreateManyInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    message: string;
    user_id?: bigint | number | null;
  };

  export type notificationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: StringFieldUpdateOperationsInput | string;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
  };

  export type notificationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: StringFieldUpdateOperationsInput | string;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
  };

  export type subscriptionsCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    name?: string | null;
    description?: string | null;
    start_date?: string | null;
    end_date?: string | null;
    user_id?: bigint | number | null;
    subscription_id?: string | null;
    status: $Enums.subscriptions_status;
  };

  export type subscriptionsUncheckedCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    name?: string | null;
    description?: string | null;
    start_date?: string | null;
    end_date?: string | null;
    user_id?: bigint | number | null;
    subscription_id?: string | null;
    status: $Enums.subscriptions_status;
  };

  export type subscriptionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableStringFieldUpdateOperationsInput | string | null;
    end_date?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: Enumsubscriptions_statusFieldUpdateOperationsInput | $Enums.subscriptions_status;
  };

  export type subscriptionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableStringFieldUpdateOperationsInput | string | null;
    end_date?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: Enumsubscriptions_statusFieldUpdateOperationsInput | $Enums.subscriptions_status;
  };

  export type subscriptionsCreateManyInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    name?: string | null;
    description?: string | null;
    start_date?: string | null;
    end_date?: string | null;
    user_id?: bigint | number | null;
    subscription_id?: string | null;
    status: $Enums.subscriptions_status;
  };

  export type subscriptionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableStringFieldUpdateOperationsInput | string | null;
    end_date?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: Enumsubscriptions_statusFieldUpdateOperationsInput | $Enums.subscriptions_status;
  };

  export type subscriptionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableStringFieldUpdateOperationsInput | string | null;
    end_date?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: Enumsubscriptions_statusFieldUpdateOperationsInput | $Enums.subscriptions_status;
  };

  export type user_social_providersCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    provider?: string;
    user_id?: bigint | number;
    url_register: string;
    provider_id?: string | null;
  };

  export type user_social_providersUncheckedCreateInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    provider?: string;
    user_id?: bigint | number;
    url_register: string;
    provider_id?: string | null;
  };

  export type user_social_providersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    url_register?: StringFieldUpdateOperationsInput | string;
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type user_social_providersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    url_register?: StringFieldUpdateOperationsInput | string;
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type user_social_providersCreateManyInput = {
    id?: bigint | number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    provider?: string;
    user_id?: bigint | number;
    url_register: string;
    provider_id?: string | null;
  };

  export type user_social_providersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    url_register?: StringFieldUpdateOperationsInput | string;
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type user_social_providersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    url_register?: StringFieldUpdateOperationsInput | string;
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type usersCreateInput = {
    name: string;
    email: string;
    email_verified_at?: Date | string | null;
    password?: string;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    avatar?: string | null;
    sex?: $Enums.users_sex;
    birthday?: string | null;
    role?: user_rolesCreateNestedOneWithoutUsersInput;
  };

  export type usersUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    email_verified_at?: Date | string | null;
    password?: string;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    avatar?: string | null;
    sex?: $Enums.users_sex;
    birthday?: string | null;
    role_id?: number | null;
  };

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    sex?: Enumusers_sexFieldUpdateOperationsInput | $Enums.users_sex;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: user_rolesUpdateOneWithoutUsersNestedInput;
  };

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    sex?: Enumusers_sexFieldUpdateOperationsInput | $Enums.users_sex;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type usersCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    email_verified_at?: Date | string | null;
    password?: string;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    avatar?: string | null;
    sex?: $Enums.users_sex;
    birthday?: string | null;
    role_id?: number | null;
  };

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    sex?: Enumusers_sexFieldUpdateOperationsInput | $Enums.users_sex;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    sex?: Enumusers_sexFieldUpdateOperationsInput | $Enums.users_sex;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type user_rolesCreateInput = {
    name: $Enums.roles;
    users?: usersCreateNestedManyWithoutRoleInput;
  };

  export type user_rolesUncheckedCreateInput = {
    id?: number;
    name: $Enums.roles;
    users?: usersUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type user_rolesUpdateInput = {
    name?: EnumrolesFieldUpdateOperationsInput | $Enums.roles;
    users?: usersUpdateManyWithoutRoleNestedInput;
  };

  export type user_rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: EnumrolesFieldUpdateOperationsInput | $Enums.roles;
    users?: usersUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type user_rolesCreateManyInput = {
    id?: number;
    name: $Enums.roles;
  };

  export type user_rolesUpdateManyMutationInput = {
    name?: EnumrolesFieldUpdateOperationsInput | $Enums.roles;
  };

  export type user_rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: EnumrolesFieldUpdateOperationsInput | $Enums.roles;
  };

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[];
    notIn?: bigint[] | number[];
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type blogsCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type blogsAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type blogsMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type blogsMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type blogsSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[];
    notIn?: bigint[] | number[];
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedBigIntFilter<$PrismaModel>;
    _min?: NestedBigIntFilter<$PrismaModel>;
    _max?: NestedBigIntFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | null;
    notIn?: bigint[] | number[] | null;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type cardsCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    credit_card_number?: SortOrder;
    expiration_year?: SortOrder;
    expiration_month?: SortOrder;
    brand?: SortOrder;
    card_holder_name?: SortOrder;
    customer_card_id?: SortOrder;
    user_id?: SortOrder;
    primary?: SortOrder;
  };

  export type cardsAvgOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type cardsMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    credit_card_number?: SortOrder;
    expiration_year?: SortOrder;
    expiration_month?: SortOrder;
    brand?: SortOrder;
    card_holder_name?: SortOrder;
    customer_card_id?: SortOrder;
    user_id?: SortOrder;
    primary?: SortOrder;
  };

  export type cardsMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    credit_card_number?: SortOrder;
    expiration_year?: SortOrder;
    expiration_month?: SortOrder;
    brand?: SortOrder;
    card_holder_name?: SortOrder;
    customer_card_id?: SortOrder;
    user_id?: SortOrder;
    primary?: SortOrder;
  };

  export type cardsSumOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | null;
    notIn?: bigint[] | number[] | null;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedBigIntNullableFilter<$PrismaModel>;
    _min?: NestedBigIntNullableFilter<$PrismaModel>;
    _max?: NestedBigIntNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type Enuminvoices_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.invoices_status | Enuminvoices_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.invoices_status[];
    notIn?: $Enums.invoices_status[];
    not?: NestedEnuminvoices_statusFilter<$PrismaModel> | $Enums.invoices_status;
  };

  export type invoicesCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment_method?: SortOrder;
    transaction_id?: SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    subscription_id?: SortOrder;
  };

  export type invoicesAvgOrderByAggregateInput = {
    id?: SortOrder;
    total?: SortOrder;
    user_id?: SortOrder;
    subscription_id?: SortOrder;
  };

  export type invoicesMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment_method?: SortOrder;
    transaction_id?: SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    subscription_id?: SortOrder;
  };

  export type invoicesMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment_method?: SortOrder;
    transaction_id?: SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    subscription_id?: SortOrder;
  };

  export type invoicesSumOrderByAggregateInput = {
    id?: SortOrder;
    total?: SortOrder;
    user_id?: SortOrder;
    subscription_id?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type Enuminvoices_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.invoices_status | Enuminvoices_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.invoices_status[];
    notIn?: $Enums.invoices_status[];
    not?: NestedEnuminvoices_statusWithAggregatesFilter<$PrismaModel> | $Enums.invoices_status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnuminvoices_statusFilter<$PrismaModel>;
    _max?: NestedEnuminvoices_statusFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder;
    migration?: SortOrder;
    batch?: SortOrder;
  };

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder;
    batch?: SortOrder;
  };

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder;
    migration?: SortOrder;
    batch?: SortOrder;
  };

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder;
    migration?: SortOrder;
    batch?: SortOrder;
  };

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder;
    batch?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    message?: SortOrder;
    user_id?: SortOrder;
  };

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    message?: SortOrder;
    user_id?: SortOrder;
  };

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    message?: SortOrder;
    user_id?: SortOrder;
  };

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type Enumsubscriptions_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptions_status | Enumsubscriptions_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.subscriptions_status[];
    notIn?: $Enums.subscriptions_status[];
    not?: NestedEnumsubscriptions_statusFilter<$PrismaModel> | $Enums.subscriptions_status;
  };

  export type subscriptionsCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    subscription_id?: SortOrder;
    status?: SortOrder;
  };

  export type subscriptionsAvgOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type subscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    subscription_id?: SortOrder;
    status?: SortOrder;
  };

  export type subscriptionsMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    subscription_id?: SortOrder;
    status?: SortOrder;
  };

  export type subscriptionsSumOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type Enumsubscriptions_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptions_status | Enumsubscriptions_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.subscriptions_status[];
    notIn?: $Enums.subscriptions_status[];
    not?:
      | NestedEnumsubscriptions_statusWithAggregatesFilter<$PrismaModel>
      | $Enums.subscriptions_status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumsubscriptions_statusFilter<$PrismaModel>;
    _max?: NestedEnumsubscriptions_statusFilter<$PrismaModel>;
  };

  export type user_social_providersCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    provider?: SortOrder;
    user_id?: SortOrder;
    url_register?: SortOrder;
    provider_id?: SortOrder;
  };

  export type user_social_providersAvgOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type user_social_providersMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    provider?: SortOrder;
    user_id?: SortOrder;
    url_register?: SortOrder;
    provider_id?: SortOrder;
  };

  export type user_social_providersMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    provider?: SortOrder;
    user_id?: SortOrder;
    url_register?: SortOrder;
    provider_id?: SortOrder;
  };

  export type user_social_providersSumOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
  };

  export type Enumusers_sexFilter<$PrismaModel = never> = {
    equals?: $Enums.users_sex | Enumusers_sexFieldRefInput<$PrismaModel>;
    in?: $Enums.users_sex[];
    notIn?: $Enums.users_sex[];
    not?: NestedEnumusers_sexFilter<$PrismaModel> | $Enums.users_sex;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type User_rolesNullableRelationFilter = {
    is?: user_rolesWhereInput | null;
    isNot?: user_rolesWhereInput | null;
  };

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    email_verified_at?: SortOrder;
    password?: SortOrder;
    remember_token?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    avatar?: SortOrder;
    sex?: SortOrder;
    birthday?: SortOrder;
    role_id?: SortOrder;
  };

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder;
    role_id?: SortOrder;
  };

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    email_verified_at?: SortOrder;
    password?: SortOrder;
    remember_token?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    avatar?: SortOrder;
    sex?: SortOrder;
    birthday?: SortOrder;
    role_id?: SortOrder;
  };

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    email_verified_at?: SortOrder;
    password?: SortOrder;
    remember_token?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    avatar?: SortOrder;
    sex?: SortOrder;
    birthday?: SortOrder;
    role_id?: SortOrder;
  };

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder;
    role_id?: SortOrder;
  };

  export type Enumusers_sexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_sex | Enumusers_sexFieldRefInput<$PrismaModel>;
    in?: $Enums.users_sex[];
    notIn?: $Enums.users_sex[];
    not?: NestedEnumusers_sexWithAggregatesFilter<$PrismaModel> | $Enums.users_sex;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumusers_sexFilter<$PrismaModel>;
    _max?: NestedEnumusers_sexFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type EnumrolesFilter<$PrismaModel = never> = {
    equals?: $Enums.roles | EnumrolesFieldRefInput<$PrismaModel>;
    in?: $Enums.roles[];
    notIn?: $Enums.roles[];
    not?: NestedEnumrolesFilter<$PrismaModel> | $Enums.roles;
  };

  export type UsersListRelationFilter = {
    every?: usersWhereInput;
    some?: usersWhereInput;
    none?: usersWhereInput;
  };

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type user_rolesCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type user_rolesAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type user_rolesMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type user_rolesMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type user_rolesSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type EnumrolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roles | EnumrolesFieldRefInput<$PrismaModel>;
    in?: $Enums.roles[];
    notIn?: $Enums.roles[];
    not?: NestedEnumrolesWithAggregatesFilter<$PrismaModel> | $Enums.roles;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumrolesFilter<$PrismaModel>;
    _max?: NestedEnumrolesFilter<$PrismaModel>;
  };

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type Enuminvoices_statusFieldUpdateOperationsInput = {
    set?: $Enums.invoices_status;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type Enumsubscriptions_statusFieldUpdateOperationsInput = {
    set?: $Enums.subscriptions_status;
  };

  export type user_rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput;
    connect?: user_rolesWhereUniqueInput;
  };

  export type Enumusers_sexFieldUpdateOperationsInput = {
    set?: $Enums.users_sex;
  };

  export type user_rolesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsersInput;
    upsert?: user_rolesUpsertWithoutUsersInput;
    disconnect?: user_rolesWhereInput | boolean;
    delete?: user_rolesWhereInput | boolean;
    connect?: user_rolesWhereUniqueInput;
    update?: XOR<
      XOR<user_rolesUpdateToOneWithWhereWithoutUsersInput, user_rolesUpdateWithoutUsersInput>,
      user_rolesUncheckedUpdateWithoutUsersInput
    >;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type usersCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
      | usersCreateWithoutRoleInput[]
      | usersUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[];
    createMany?: usersCreateManyRoleInputEnvelope;
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[];
  };

  export type usersUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
      | usersCreateWithoutRoleInput[]
      | usersUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[];
    createMany?: usersCreateManyRoleInputEnvelope;
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[];
  };

  export type EnumrolesFieldUpdateOperationsInput = {
    set?: $Enums.roles;
  };

  export type usersUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
      | usersCreateWithoutRoleInput[]
      | usersUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[];
    upsert?:
      | usersUpsertWithWhereUniqueWithoutRoleInput
      | usersUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: usersCreateManyRoleInputEnvelope;
    set?: usersWhereUniqueInput | usersWhereUniqueInput[];
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[];
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[];
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[];
    update?:
      | usersUpdateWithWhereUniqueWithoutRoleInput
      | usersUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | usersUpdateManyWithWhereWithoutRoleInput
      | usersUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[];
  };

  export type usersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
      | usersCreateWithoutRoleInput[]
      | usersUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[];
    upsert?:
      | usersUpsertWithWhereUniqueWithoutRoleInput
      | usersUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: usersCreateManyRoleInputEnvelope;
    set?: usersWhereUniqueInput | usersWhereUniqueInput[];
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[];
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[];
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[];
    update?:
      | usersUpdateWithWhereUniqueWithoutRoleInput
      | usersUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | usersUpdateManyWithWhereWithoutRoleInput
      | usersUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[];
  };

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[];
    notIn?: bigint[] | number[];
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[];
    notIn?: bigint[] | number[];
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedBigIntFilter<$PrismaModel>;
    _min?: NestedBigIntFilter<$PrismaModel>;
    _max?: NestedBigIntFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | null;
    notIn?: bigint[] | number[] | null;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | null;
    notIn?: bigint[] | number[] | null;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedBigIntNullableFilter<$PrismaModel>;
    _min?: NestedBigIntNullableFilter<$PrismaModel>;
    _max?: NestedBigIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnuminvoices_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.invoices_status | Enuminvoices_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.invoices_status[];
    notIn?: $Enums.invoices_status[];
    not?: NestedEnuminvoices_statusFilter<$PrismaModel> | $Enums.invoices_status;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedEnuminvoices_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.invoices_status | Enuminvoices_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.invoices_status[];
    notIn?: $Enums.invoices_status[];
    not?: NestedEnuminvoices_statusWithAggregatesFilter<$PrismaModel> | $Enums.invoices_status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnuminvoices_statusFilter<$PrismaModel>;
    _max?: NestedEnuminvoices_statusFilter<$PrismaModel>;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedEnumsubscriptions_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptions_status | Enumsubscriptions_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.subscriptions_status[];
    notIn?: $Enums.subscriptions_status[];
    not?: NestedEnumsubscriptions_statusFilter<$PrismaModel> | $Enums.subscriptions_status;
  };

  export type NestedEnumsubscriptions_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptions_status | Enumsubscriptions_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.subscriptions_status[];
    notIn?: $Enums.subscriptions_status[];
    not?:
      | NestedEnumsubscriptions_statusWithAggregatesFilter<$PrismaModel>
      | $Enums.subscriptions_status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumsubscriptions_statusFilter<$PrismaModel>;
    _max?: NestedEnumsubscriptions_statusFilter<$PrismaModel>;
  };

  export type NestedEnumusers_sexFilter<$PrismaModel = never> = {
    equals?: $Enums.users_sex | Enumusers_sexFieldRefInput<$PrismaModel>;
    in?: $Enums.users_sex[];
    notIn?: $Enums.users_sex[];
    not?: NestedEnumusers_sexFilter<$PrismaModel> | $Enums.users_sex;
  };

  export type NestedEnumusers_sexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_sex | Enumusers_sexFieldRefInput<$PrismaModel>;
    in?: $Enums.users_sex[];
    notIn?: $Enums.users_sex[];
    not?: NestedEnumusers_sexWithAggregatesFilter<$PrismaModel> | $Enums.users_sex;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumusers_sexFilter<$PrismaModel>;
    _max?: NestedEnumusers_sexFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedEnumrolesFilter<$PrismaModel = never> = {
    equals?: $Enums.roles | EnumrolesFieldRefInput<$PrismaModel>;
    in?: $Enums.roles[];
    notIn?: $Enums.roles[];
    not?: NestedEnumrolesFilter<$PrismaModel> | $Enums.roles;
  };

  export type NestedEnumrolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roles | EnumrolesFieldRefInput<$PrismaModel>;
    in?: $Enums.roles[];
    notIn?: $Enums.roles[];
    not?: NestedEnumrolesWithAggregatesFilter<$PrismaModel> | $Enums.roles;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumrolesFilter<$PrismaModel>;
    _max?: NestedEnumrolesFilter<$PrismaModel>;
  };

  export type user_rolesCreateWithoutUsersInput = {
    name: $Enums.roles;
  };

  export type user_rolesUncheckedCreateWithoutUsersInput = {
    id?: number;
    name: $Enums.roles;
  };

  export type user_rolesCreateOrConnectWithoutUsersInput = {
    where: user_rolesWhereUniqueInput;
    create: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>;
  };

  export type user_rolesUpsertWithoutUsersInput = {
    update: XOR<user_rolesUpdateWithoutUsersInput, user_rolesUncheckedUpdateWithoutUsersInput>;
    create: XOR<user_rolesCreateWithoutUsersInput, user_rolesUncheckedCreateWithoutUsersInput>;
    where?: user_rolesWhereInput;
  };

  export type user_rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_rolesWhereInput;
    data: XOR<user_rolesUpdateWithoutUsersInput, user_rolesUncheckedUpdateWithoutUsersInput>;
  };

  export type user_rolesUpdateWithoutUsersInput = {
    name?: EnumrolesFieldUpdateOperationsInput | $Enums.roles;
  };

  export type user_rolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: EnumrolesFieldUpdateOperationsInput | $Enums.roles;
  };

  export type usersCreateWithoutRoleInput = {
    name: string;
    email: string;
    email_verified_at?: Date | string | null;
    password?: string;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    avatar?: string | null;
    sex?: $Enums.users_sex;
    birthday?: string | null;
  };

  export type usersUncheckedCreateWithoutRoleInput = {
    id?: number;
    name: string;
    email: string;
    email_verified_at?: Date | string | null;
    password?: string;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    avatar?: string | null;
    sex?: $Enums.users_sex;
    birthday?: string | null;
  };

  export type usersCreateOrConnectWithoutRoleInput = {
    where: usersWhereUniqueInput;
    create: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>;
  };

  export type usersCreateManyRoleInputEnvelope = {
    data: usersCreateManyRoleInput | usersCreateManyRoleInput[];
    skipDuplicates?: boolean;
  };

  export type usersUpsertWithWhereUniqueWithoutRoleInput = {
    where: usersWhereUniqueInput;
    update: XOR<usersUpdateWithoutRoleInput, usersUncheckedUpdateWithoutRoleInput>;
    create: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>;
  };

  export type usersUpdateWithWhereUniqueWithoutRoleInput = {
    where: usersWhereUniqueInput;
    data: XOR<usersUpdateWithoutRoleInput, usersUncheckedUpdateWithoutRoleInput>;
  };

  export type usersUpdateManyWithWhereWithoutRoleInput = {
    where: usersScalarWhereInput;
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRoleInput>;
  };

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[];
    OR?: usersScalarWhereInput[];
    NOT?: usersScalarWhereInput | usersScalarWhereInput[];
    id?: IntFilter<'users'> | number;
    name?: StringFilter<'users'> | string;
    email?: StringFilter<'users'> | string;
    email_verified_at?: DateTimeNullableFilter<'users'> | Date | string | null;
    password?: StringFilter<'users'> | string;
    remember_token?: StringNullableFilter<'users'> | string | null;
    created_at?: DateTimeNullableFilter<'users'> | Date | string | null;
    updated_at?: DateTimeNullableFilter<'users'> | Date | string | null;
    avatar?: StringNullableFilter<'users'> | string | null;
    sex?: Enumusers_sexFilter<'users'> | $Enums.users_sex;
    birthday?: StringNullableFilter<'users'> | string | null;
    role_id?: IntNullableFilter<'users'> | number | null;
  };

  export type usersCreateManyRoleInput = {
    id?: number;
    name: string;
    email: string;
    email_verified_at?: Date | string | null;
    password?: string;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    avatar?: string | null;
    sex?: $Enums.users_sex;
    birthday?: string | null;
  };

  export type usersUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    sex?: Enumusers_sexFieldUpdateOperationsInput | $Enums.users_sex;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type usersUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    sex?: Enumusers_sexFieldUpdateOperationsInput | $Enums.users_sex;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type usersUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    sex?: Enumusers_sexFieldUpdateOperationsInput | $Enums.users_sex;
    birthday?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use User_rolesCountOutputTypeDefaultArgs instead
   */
  export type User_rolesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = User_rolesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use blogsDefaultArgs instead
   */
  export type blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    blogsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use cardsDefaultArgs instead
   */
  export type cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    cardsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use invoicesDefaultArgs instead
   */
  export type invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    invoicesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use migrationsDefaultArgs instead
   */
  export type migrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    migrationsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use notificationsDefaultArgs instead
   */
  export type notificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = notificationsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use subscriptionsDefaultArgs instead
   */
  export type subscriptionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = subscriptionsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use user_social_providersDefaultArgs instead
   */
  export type user_social_providersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = user_social_providersDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use usersDefaultArgs instead
   */
  export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    usersDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use user_rolesDefaultArgs instead
   */
  export type user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    user_rolesDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
