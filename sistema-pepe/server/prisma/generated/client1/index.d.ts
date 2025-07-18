
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DocumentType
 * 
 */
export type DocumentType = $Result.DefaultSelection<Prisma.$DocumentTypePayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DocumentTypes
 * const documentTypes = await prisma.documentType.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DocumentTypes
   * const documentTypes = await prisma.documentType.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.documentType`: Exposes CRUD operations for the **DocumentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentTypes
    * const documentTypes = await prisma.documentType.findMany()
    * ```
    */
  get documentType(): Prisma.DocumentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DocumentType: 'DocumentType',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "documentType" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DocumentType: {
        payload: Prisma.$DocumentTypePayload<ExtArgs>
        fields: Prisma.DocumentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          findFirst: {
            args: Prisma.DocumentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          findMany: {
            args: Prisma.DocumentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          create: {
            args: Prisma.DocumentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          createMany: {
            args: Prisma.DocumentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          delete: {
            args: Prisma.DocumentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          update: {
            args: Prisma.DocumentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          deleteMany: {
            args: Prisma.DocumentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          upsert: {
            args: Prisma.DocumentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          aggregate: {
            args: Prisma.DocumentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentType>
          }
          groupBy: {
            args: Prisma.DocumentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    documentType?: DocumentTypeOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DocumentTypeCountOutputType
   */

  export type DocumentTypeCountOutputType = {
    users: number
  }

  export type DocumentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DocumentTypeCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeCountOutputType
     */
    select?: DocumentTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DocumentType
   */

  export type AggregateDocumentType = {
    _count: DocumentTypeCountAggregateOutputType | null
    _avg: DocumentTypeAvgAggregateOutputType | null
    _sum: DocumentTypeSumAggregateOutputType | null
    _min: DocumentTypeMinAggregateOutputType | null
    _max: DocumentTypeMaxAggregateOutputType | null
  }

  export type DocumentTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type DocumentTypeSumAggregateOutputType = {
    id: number | null
  }

  export type DocumentTypeMinAggregateOutputType = {
    id: number | null
    typeName: string | null
  }

  export type DocumentTypeMaxAggregateOutputType = {
    id: number | null
    typeName: string | null
  }

  export type DocumentTypeCountAggregateOutputType = {
    id: number
    typeName: number
    _all: number
  }


  export type DocumentTypeAvgAggregateInputType = {
    id?: true
  }

  export type DocumentTypeSumAggregateInputType = {
    id?: true
  }

  export type DocumentTypeMinAggregateInputType = {
    id?: true
    typeName?: true
  }

  export type DocumentTypeMaxAggregateInputType = {
    id?: true
    typeName?: true
  }

  export type DocumentTypeCountAggregateInputType = {
    id?: true
    typeName?: true
    _all?: true
  }

  export type DocumentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentType to aggregate.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentTypes
    **/
    _count?: true | DocumentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentTypeMaxAggregateInputType
  }

  export type GetDocumentTypeAggregateType<T extends DocumentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentType[P]>
      : GetScalarType<T[P], AggregateDocumentType[P]>
  }




  export type DocumentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTypeWhereInput
    orderBy?: DocumentTypeOrderByWithAggregationInput | DocumentTypeOrderByWithAggregationInput[]
    by: DocumentTypeScalarFieldEnum[] | DocumentTypeScalarFieldEnum
    having?: DocumentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentTypeCountAggregateInputType | true
    _avg?: DocumentTypeAvgAggregateInputType
    _sum?: DocumentTypeSumAggregateInputType
    _min?: DocumentTypeMinAggregateInputType
    _max?: DocumentTypeMaxAggregateInputType
  }

  export type DocumentTypeGroupByOutputType = {
    id: number
    typeName: string
    _count: DocumentTypeCountAggregateOutputType | null
    _avg: DocumentTypeAvgAggregateOutputType | null
    _sum: DocumentTypeSumAggregateOutputType | null
    _min: DocumentTypeMinAggregateOutputType | null
    _max: DocumentTypeMaxAggregateOutputType | null
  }

  type GetDocumentTypeGroupByPayload<T extends DocumentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentTypeGroupByOutputType[P]>
        }
      >
    >


  export type DocumentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
    users?: boolean | DocumentType$usersArgs<ExtArgs>
    _count?: boolean | DocumentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectScalar = {
    id?: boolean
    typeName?: boolean
  }

  export type DocumentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "typeName", ExtArgs["result"]["documentType"]>
  export type DocumentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DocumentType$usersArgs<ExtArgs>
    _count?: boolean | DocumentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentType"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      typeName: string
    }, ExtArgs["result"]["documentType"]>
    composites: {}
  }

  type DocumentTypeGetPayload<S extends boolean | null | undefined | DocumentTypeDefaultArgs> = $Result.GetResult<Prisma.$DocumentTypePayload, S>

  type DocumentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentTypeCountAggregateInputType | true
    }

  export interface DocumentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentType'], meta: { name: 'DocumentType' } }
    /**
     * Find zero or one DocumentType that matches the filter.
     * @param {DocumentTypeFindUniqueArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentTypeFindUniqueArgs>(args: SelectSubset<T, DocumentTypeFindUniqueArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentTypeFindUniqueOrThrowArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindFirstArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentTypeFindFirstArgs>(args?: SelectSubset<T, DocumentTypeFindFirstArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindFirstOrThrowArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentTypes
     * const documentTypes = await prisma.documentType.findMany()
     * 
     * // Get first 10 DocumentTypes
     * const documentTypes = await prisma.documentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentTypeFindManyArgs>(args?: SelectSubset<T, DocumentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentType.
     * @param {DocumentTypeCreateArgs} args - Arguments to create a DocumentType.
     * @example
     * // Create one DocumentType
     * const DocumentType = await prisma.documentType.create({
     *   data: {
     *     // ... data to create a DocumentType
     *   }
     * })
     * 
     */
    create<T extends DocumentTypeCreateArgs>(args: SelectSubset<T, DocumentTypeCreateArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentTypes.
     * @param {DocumentTypeCreateManyArgs} args - Arguments to create many DocumentTypes.
     * @example
     * // Create many DocumentTypes
     * const documentType = await prisma.documentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentTypeCreateManyArgs>(args?: SelectSubset<T, DocumentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentTypes and returns the data saved in the database.
     * @param {DocumentTypeCreateManyAndReturnArgs} args - Arguments to create many DocumentTypes.
     * @example
     * // Create many DocumentTypes
     * const documentType = await prisma.documentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentTypes and only return the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentType.
     * @param {DocumentTypeDeleteArgs} args - Arguments to delete one DocumentType.
     * @example
     * // Delete one DocumentType
     * const DocumentType = await prisma.documentType.delete({
     *   where: {
     *     // ... filter to delete one DocumentType
     *   }
     * })
     * 
     */
    delete<T extends DocumentTypeDeleteArgs>(args: SelectSubset<T, DocumentTypeDeleteArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentType.
     * @param {DocumentTypeUpdateArgs} args - Arguments to update one DocumentType.
     * @example
     * // Update one DocumentType
     * const documentType = await prisma.documentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentTypeUpdateArgs>(args: SelectSubset<T, DocumentTypeUpdateArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentTypes.
     * @param {DocumentTypeDeleteManyArgs} args - Arguments to filter DocumentTypes to delete.
     * @example
     * // Delete a few DocumentTypes
     * const { count } = await prisma.documentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentTypeDeleteManyArgs>(args?: SelectSubset<T, DocumentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentTypes
     * const documentType = await prisma.documentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentTypeUpdateManyArgs>(args: SelectSubset<T, DocumentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypes and returns the data updated in the database.
     * @param {DocumentTypeUpdateManyAndReturnArgs} args - Arguments to update many DocumentTypes.
     * @example
     * // Update many DocumentTypes
     * const documentType = await prisma.documentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentTypes and only return the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentType.
     * @param {DocumentTypeUpsertArgs} args - Arguments to update or create a DocumentType.
     * @example
     * // Update or create a DocumentType
     * const documentType = await prisma.documentType.upsert({
     *   create: {
     *     // ... data to create a DocumentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentType we want to update
     *   }
     * })
     */
    upsert<T extends DocumentTypeUpsertArgs>(args: SelectSubset<T, DocumentTypeUpsertArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeCountArgs} args - Arguments to filter DocumentTypes to count.
     * @example
     * // Count the number of DocumentTypes
     * const count = await prisma.documentType.count({
     *   where: {
     *     // ... the filter for the DocumentTypes we want to count
     *   }
     * })
    **/
    count<T extends DocumentTypeCountArgs>(
      args?: Subset<T, DocumentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentTypeAggregateArgs>(args: Subset<T, DocumentTypeAggregateArgs>): Prisma.PrismaPromise<GetDocumentTypeAggregateType<T>>

    /**
     * Group by DocumentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeGroupByArgs} args - Group by arguments.
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
      T extends DocumentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentTypeGroupByArgs['orderBy'] }
        : { orderBy?: DocumentTypeGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentType model
   */
  readonly fields: DocumentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends DocumentType$usersArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentType model
   */
  interface DocumentTypeFieldRefs {
    readonly id: FieldRef<"DocumentType", 'Int'>
    readonly typeName: FieldRef<"DocumentType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentType findUnique
   */
  export type DocumentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType findUniqueOrThrow
   */
  export type DocumentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType findFirst
   */
  export type DocumentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypes.
     */
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType findFirstOrThrow
   */
  export type DocumentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypes.
     */
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType findMany
   */
  export type DocumentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTypes to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType create
   */
  export type DocumentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentType.
     */
    data: XOR<DocumentTypeCreateInput, DocumentTypeUncheckedCreateInput>
  }

  /**
   * DocumentType createMany
   */
  export type DocumentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentTypes.
     */
    data: DocumentTypeCreateManyInput | DocumentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentType createManyAndReturn
   */
  export type DocumentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentTypes.
     */
    data: DocumentTypeCreateManyInput | DocumentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentType update
   */
  export type DocumentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentType.
     */
    data: XOR<DocumentTypeUpdateInput, DocumentTypeUncheckedUpdateInput>
    /**
     * Choose, which DocumentType to update.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType updateMany
   */
  export type DocumentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentTypes.
     */
    data: XOR<DocumentTypeUpdateManyMutationInput, DocumentTypeUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypes to update
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to update.
     */
    limit?: number
  }

  /**
   * DocumentType updateManyAndReturn
   */
  export type DocumentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * The data used to update DocumentTypes.
     */
    data: XOR<DocumentTypeUpdateManyMutationInput, DocumentTypeUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypes to update
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to update.
     */
    limit?: number
  }

  /**
   * DocumentType upsert
   */
  export type DocumentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentType to update in case it exists.
     */
    where: DocumentTypeWhereUniqueInput
    /**
     * In case the DocumentType found by the `where` argument doesn't exist, create a new DocumentType with this data.
     */
    create: XOR<DocumentTypeCreateInput, DocumentTypeUncheckedCreateInput>
    /**
     * In case the DocumentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentTypeUpdateInput, DocumentTypeUncheckedUpdateInput>
  }

  /**
   * DocumentType delete
   */
  export type DocumentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter which DocumentType to delete.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType deleteMany
   */
  export type DocumentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTypes to delete
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to delete.
     */
    limit?: number
  }

  /**
   * DocumentType.users
   */
  export type DocumentType$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * DocumentType without action
   */
  export type DocumentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    documentTypeId: number | null
    age: number | null
  }

  export type UsersSumAggregateOutputType = {
    documentTypeId: number | null
    age: number | null
  }

  export type UsersMinAggregateOutputType = {
    documentId: string | null
    name: string | null
    documentTypeId: number | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    age: number | null
  }

  export type UsersMaxAggregateOutputType = {
    documentId: string | null
    name: string | null
    documentTypeId: number | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    age: number | null
  }

  export type UsersCountAggregateOutputType = {
    documentId: number
    name: number
    documentTypeId: number
    email: number
    password: number
    phone: number
    address: number
    age: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    documentTypeId?: true
    age?: true
  }

  export type UsersSumAggregateInputType = {
    documentTypeId?: true
    age?: true
  }

  export type UsersMinAggregateInputType = {
    documentId?: true
    name?: true
    documentTypeId?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    age?: true
  }

  export type UsersMaxAggregateInputType = {
    documentId?: true
    name?: true
    documentTypeId?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    age?: true
  }

  export type UsersCountAggregateInputType = {
    documentId?: true
    name?: true
    documentTypeId?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    age?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    documentId: string
    name: string
    documentTypeId: number
    email: string
    password: string
    phone: string
    address: string
    age: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    name?: boolean
    documentTypeId?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    age?: boolean
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    name?: boolean
    documentTypeId?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    age?: boolean
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    name?: boolean
    documentTypeId?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    age?: boolean
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    documentId?: boolean
    name?: boolean
    documentTypeId?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    age?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"documentId" | "name" | "documentTypeId" | "email" | "password" | "phone" | "address" | "age", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      documentType: Prisma.$DocumentTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      documentId: string
      name: string
      documentTypeId: number
      email: string
      password: string
      phone: string
      address: string
      age: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `documentId`
     * const usersWithDocumentIdOnly = await prisma.users.findMany({ select: { documentId: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `documentId`
     * const usersWithDocumentIdOnly = await prisma.users.createManyAndReturn({
     *   select: { documentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `documentId`
     * const usersWithDocumentIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { documentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentType<T extends DocumentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTypeDefaultArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly documentId: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly documentTypeId: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly address: FieldRef<"Users", 'String'>
    readonly age: FieldRef<"Users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DocumentTypeScalarFieldEnum: {
    id: 'id',
    typeName: 'typeName'
  };

  export type DocumentTypeScalarFieldEnum = (typeof DocumentTypeScalarFieldEnum)[keyof typeof DocumentTypeScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    documentId: 'documentId',
    name: 'name',
    documentTypeId: 'documentTypeId',
    email: 'email',
    password: 'password',
    phone: 'phone',
    address: 'address',
    age: 'age'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DocumentTypeWhereInput = {
    AND?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    OR?: DocumentTypeWhereInput[]
    NOT?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    id?: IntFilter<"DocumentType"> | number
    typeName?: StringFilter<"DocumentType"> | string
    users?: UsersListRelationFilter
  }

  export type DocumentTypeOrderByWithRelationInput = {
    id?: SortOrder
    typeName?: SortOrder
    users?: UsersOrderByRelationAggregateInput
  }

  export type DocumentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    typeName?: string
    AND?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    OR?: DocumentTypeWhereInput[]
    NOT?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    users?: UsersListRelationFilter
  }, "id" | "typeName">

  export type DocumentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    typeName?: SortOrder
    _count?: DocumentTypeCountOrderByAggregateInput
    _avg?: DocumentTypeAvgOrderByAggregateInput
    _max?: DocumentTypeMaxOrderByAggregateInput
    _min?: DocumentTypeMinOrderByAggregateInput
    _sum?: DocumentTypeSumOrderByAggregateInput
  }

  export type DocumentTypeScalarWhereWithAggregatesInput = {
    AND?: DocumentTypeScalarWhereWithAggregatesInput | DocumentTypeScalarWhereWithAggregatesInput[]
    OR?: DocumentTypeScalarWhereWithAggregatesInput[]
    NOT?: DocumentTypeScalarWhereWithAggregatesInput | DocumentTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentType"> | number
    typeName?: StringWithAggregatesFilter<"DocumentType"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    documentId?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    documentTypeId?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    age?: IntFilter<"Users"> | number
    documentType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    documentId?: SortOrder
    name?: SortOrder
    documentTypeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    age?: SortOrder
    documentType?: DocumentTypeOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    documentId?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    documentTypeId?: IntFilter<"Users"> | number
    password?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    age?: IntFilter<"Users"> | number
    documentType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
  }, "documentId" | "email">

  export type UsersOrderByWithAggregationInput = {
    documentId?: SortOrder
    name?: SortOrder
    documentTypeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    age?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    documentId?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    documentTypeId?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    address?: StringWithAggregatesFilter<"Users"> | string
    age?: IntWithAggregatesFilter<"Users"> | number
  }

  export type DocumentTypeCreateInput = {
    typeName: string
    users?: UsersCreateNestedManyWithoutDocumentTypeInput
  }

  export type DocumentTypeUncheckedCreateInput = {
    id?: number
    typeName: string
    users?: UsersUncheckedCreateNestedManyWithoutDocumentTypeInput
  }

  export type DocumentTypeUpdateInput = {
    typeName?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateManyWithoutDocumentTypeNestedInput
  }

  export type DocumentTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    users?: UsersUncheckedUpdateManyWithoutDocumentTypeNestedInput
  }

  export type DocumentTypeCreateManyInput = {
    id?: number
    typeName: string
  }

  export type DocumentTypeUpdateManyMutationInput = {
    typeName?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    documentId: string
    name: string
    email: string
    password: string
    phone: string
    address: string
    age: number
    documentType: DocumentTypeCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    documentId: string
    name: string
    documentTypeId: number
    email: string
    password: string
    phone: string
    address: string
    age: number
  }

  export type UsersUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    documentType?: DocumentTypeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    documentTypeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateManyInput = {
    documentId: string
    name: string
    documentTypeId: number
    email: string
    password: string
    phone: string
    address: string
    age: number
  }

  export type UsersUpdateManyMutationInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
  }

  export type UsersUncheckedUpdateManyInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    documentTypeId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
  }

  export type DocumentTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
  }

  export type DocumentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
  }

  export type DocumentTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DocumentTypeScalarRelationFilter = {
    is?: DocumentTypeWhereInput
    isNot?: DocumentTypeWhereInput
  }

  export type UsersCountOrderByAggregateInput = {
    documentId?: SortOrder
    name?: SortOrder
    documentTypeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    age?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    documentTypeId?: SortOrder
    age?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    documentId?: SortOrder
    name?: SortOrder
    documentTypeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    age?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    documentId?: SortOrder
    name?: SortOrder
    documentTypeId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    age?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    documentTypeId?: SortOrder
    age?: SortOrder
  }

  export type UsersCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<UsersCreateWithoutDocumentTypeInput, UsersUncheckedCreateWithoutDocumentTypeInput> | UsersCreateWithoutDocumentTypeInput[] | UsersUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutDocumentTypeInput | UsersCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: UsersCreateManyDocumentTypeInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<UsersCreateWithoutDocumentTypeInput, UsersUncheckedCreateWithoutDocumentTypeInput> | UsersCreateWithoutDocumentTypeInput[] | UsersUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutDocumentTypeInput | UsersCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: UsersCreateManyDocumentTypeInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsersUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<UsersCreateWithoutDocumentTypeInput, UsersUncheckedCreateWithoutDocumentTypeInput> | UsersCreateWithoutDocumentTypeInput[] | UsersUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutDocumentTypeInput | UsersCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutDocumentTypeInput | UsersUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: UsersCreateManyDocumentTypeInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutDocumentTypeInput | UsersUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutDocumentTypeInput | UsersUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUncheckedUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<UsersCreateWithoutDocumentTypeInput, UsersUncheckedCreateWithoutDocumentTypeInput> | UsersCreateWithoutDocumentTypeInput[] | UsersUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutDocumentTypeInput | UsersCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutDocumentTypeInput | UsersUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: UsersCreateManyDocumentTypeInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutDocumentTypeInput | UsersUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutDocumentTypeInput | UsersUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type DocumentTypeCreateNestedOneWithoutUsersInput = {
    create?: XOR<DocumentTypeCreateWithoutUsersInput, DocumentTypeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutUsersInput
    connect?: DocumentTypeWhereUniqueInput
  }

  export type DocumentTypeUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutUsersInput, DocumentTypeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutUsersInput
    upsert?: DocumentTypeUpsertWithoutUsersInput
    connect?: DocumentTypeWhereUniqueInput
    update?: XOR<XOR<DocumentTypeUpdateToOneWithWhereWithoutUsersInput, DocumentTypeUpdateWithoutUsersInput>, DocumentTypeUncheckedUpdateWithoutUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsersCreateWithoutDocumentTypeInput = {
    documentId: string
    name: string
    email: string
    password: string
    phone: string
    address: string
    age: number
  }

  export type UsersUncheckedCreateWithoutDocumentTypeInput = {
    documentId: string
    name: string
    email: string
    password: string
    phone: string
    address: string
    age: number
  }

  export type UsersCreateOrConnectWithoutDocumentTypeInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDocumentTypeInput, UsersUncheckedCreateWithoutDocumentTypeInput>
  }

  export type UsersCreateManyDocumentTypeInputEnvelope = {
    data: UsersCreateManyDocumentTypeInput | UsersCreateManyDocumentTypeInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutDocumentTypeInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutDocumentTypeInput, UsersUncheckedUpdateWithoutDocumentTypeInput>
    create: XOR<UsersCreateWithoutDocumentTypeInput, UsersUncheckedCreateWithoutDocumentTypeInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutDocumentTypeInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutDocumentTypeInput, UsersUncheckedUpdateWithoutDocumentTypeInput>
  }

  export type UsersUpdateManyWithWhereWithoutDocumentTypeInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutDocumentTypeInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    documentId?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    documentTypeId?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    age?: IntFilter<"Users"> | number
  }

  export type DocumentTypeCreateWithoutUsersInput = {
    typeName: string
  }

  export type DocumentTypeUncheckedCreateWithoutUsersInput = {
    id?: number
    typeName: string
  }

  export type DocumentTypeCreateOrConnectWithoutUsersInput = {
    where: DocumentTypeWhereUniqueInput
    create: XOR<DocumentTypeCreateWithoutUsersInput, DocumentTypeUncheckedCreateWithoutUsersInput>
  }

  export type DocumentTypeUpsertWithoutUsersInput = {
    update: XOR<DocumentTypeUpdateWithoutUsersInput, DocumentTypeUncheckedUpdateWithoutUsersInput>
    create: XOR<DocumentTypeCreateWithoutUsersInput, DocumentTypeUncheckedCreateWithoutUsersInput>
    where?: DocumentTypeWhereInput
  }

  export type DocumentTypeUpdateToOneWithWhereWithoutUsersInput = {
    where?: DocumentTypeWhereInput
    data: XOR<DocumentTypeUpdateWithoutUsersInput, DocumentTypeUncheckedUpdateWithoutUsersInput>
  }

  export type DocumentTypeUpdateWithoutUsersInput = {
    typeName?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentTypeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateManyDocumentTypeInput = {
    documentId: string
    name: string
    email: string
    password: string
    phone: string
    address: string
    age: number
  }

  export type UsersUpdateWithoutDocumentTypeInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
  }

  export type UsersUncheckedUpdateWithoutDocumentTypeInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
  }

  export type UsersUncheckedUpdateManyWithoutDocumentTypeInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}