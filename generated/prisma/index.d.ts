
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
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model MagicItem
 * 
 */
export type MagicItem = $Result.DefaultSelection<Prisma.$MagicItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MagicItemType: {
  WEAPON: 'WEAPON',
  ARMOUR: 'ARMOUR',
  AMULET: 'AMULET'
};

export type MagicItemType = (typeof MagicItemType)[keyof typeof MagicItemType]


export const Class: {
  WARRIOR: 'WARRIOR',
  MAGE: 'MAGE',
  ARCHER: 'ARCHER',
  ROGUE: 'ROGUE',
  BARD: 'BARD'
};

export type Class = (typeof Class)[keyof typeof Class]

}

export type MagicItemType = $Enums.MagicItemType

export const MagicItemType: typeof $Enums.MagicItemType

export type Class = $Enums.Class

export const Class: typeof $Enums.Class

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Characters
 * const characters = await prisma.character.findMany()
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
   * // Fetch zero or more Characters
   * const characters = await prisma.character.findMany()
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
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.magicItem`: Exposes CRUD operations for the **MagicItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MagicItems
    * const magicItems = await prisma.magicItem.findMany()
    * ```
    */
  get magicItem(): Prisma.MagicItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Character: 'Character',
    MagicItem: 'MagicItem'
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
      modelProps: "character" | "magicItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      MagicItem: {
        payload: Prisma.$MagicItemPayload<ExtArgs>
        fields: Prisma.MagicItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MagicItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MagicItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          findFirst: {
            args: Prisma.MagicItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MagicItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          findMany: {
            args: Prisma.MagicItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>[]
          }
          create: {
            args: Prisma.MagicItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          createMany: {
            args: Prisma.MagicItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MagicItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>[]
          }
          delete: {
            args: Prisma.MagicItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          update: {
            args: Prisma.MagicItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          deleteMany: {
            args: Prisma.MagicItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MagicItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MagicItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>[]
          }
          upsert: {
            args: Prisma.MagicItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          aggregate: {
            args: Prisma.MagicItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMagicItem>
          }
          groupBy: {
            args: Prisma.MagicItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MagicItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MagicItemCountArgs<ExtArgs>
            result: $Utils.Optional<MagicItemCountAggregateOutputType> | number
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
    character?: CharacterOmit
    magicItem?: MagicItemOmit
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
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    magic_items: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    magic_items?: boolean | CharacterCountOutputTypeCountMagic_itemsArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountMagic_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MagicItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    level: number | null
    strength: number | null
    defense: number | null
  }

  export type CharacterSumAggregateOutputType = {
    level: number | null
    strength: number | null
    defense: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    name: string | null
    nickname: string | null
    class: $Enums.Class | null
    level: number | null
    strength: number | null
    defense: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nickname: string | null
    class: $Enums.Class | null
    level: number | null
    strength: number | null
    defense: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    name: number
    nickname: number
    class: number
    level: number
    strength: number
    defense: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    level?: true
    strength?: true
    defense?: true
  }

  export type CharacterSumAggregateInputType = {
    level?: true
    strength?: true
    defense?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    class?: true
    level?: true
    strength?: true
    defense?: true
    created_at?: true
    updated_at?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    class?: true
    level?: true
    strength?: true
    defense?: true
    created_at?: true
    updated_at?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    class?: true
    level?: true
    strength?: true
    defense?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: string
    name: string
    nickname: string
    class: $Enums.Class
    level: number
    strength: number
    defense: number
    created_at: Date
    updated_at: Date
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickname?: boolean
    class?: boolean
    level?: boolean
    strength?: boolean
    defense?: boolean
    created_at?: boolean
    updated_at?: boolean
    magic_items?: boolean | Character$magic_itemsArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickname?: boolean
    class?: boolean
    level?: boolean
    strength?: boolean
    defense?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickname?: boolean
    class?: boolean
    level?: boolean
    strength?: boolean
    defense?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    name?: boolean
    nickname?: boolean
    class?: boolean
    level?: boolean
    strength?: boolean
    defense?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nickname" | "class" | "level" | "strength" | "defense" | "created_at" | "updated_at", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    magic_items?: boolean | Character$magic_itemsArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      magic_items: Prisma.$MagicItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nickname: string
      class: $Enums.Class
      level: number
      strength: number
      defense: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
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
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    magic_items<T extends Character$magic_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Character$magic_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'String'>
    readonly name: FieldRef<"Character", 'String'>
    readonly nickname: FieldRef<"Character", 'String'>
    readonly class: FieldRef<"Character", 'Class'>
    readonly level: FieldRef<"Character", 'Int'>
    readonly strength: FieldRef<"Character", 'Int'>
    readonly defense: FieldRef<"Character", 'Int'>
    readonly created_at: FieldRef<"Character", 'DateTime'>
    readonly updated_at: FieldRef<"Character", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.magic_items
   */
  export type Character$magic_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    where?: MagicItemWhereInput
    orderBy?: MagicItemOrderByWithRelationInput | MagicItemOrderByWithRelationInput[]
    cursor?: MagicItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MagicItemScalarFieldEnum | MagicItemScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model MagicItem
   */

  export type AggregateMagicItem = {
    _count: MagicItemCountAggregateOutputType | null
    _avg: MagicItemAvgAggregateOutputType | null
    _sum: MagicItemSumAggregateOutputType | null
    _min: MagicItemMinAggregateOutputType | null
    _max: MagicItemMaxAggregateOutputType | null
  }

  export type MagicItemAvgAggregateOutputType = {
    strength: number | null
    defense: number | null
  }

  export type MagicItemSumAggregateOutputType = {
    strength: number | null
    defense: number | null
  }

  export type MagicItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    strength: number | null
    defense: number | null
    type: $Enums.MagicItemType | null
    created_at: Date | null
    updated_at: Date | null
    character_id: string | null
  }

  export type MagicItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    strength: number | null
    defense: number | null
    type: $Enums.MagicItemType | null
    created_at: Date | null
    updated_at: Date | null
    character_id: string | null
  }

  export type MagicItemCountAggregateOutputType = {
    id: number
    name: number
    strength: number
    defense: number
    type: number
    created_at: number
    updated_at: number
    character_id: number
    _all: number
  }


  export type MagicItemAvgAggregateInputType = {
    strength?: true
    defense?: true
  }

  export type MagicItemSumAggregateInputType = {
    strength?: true
    defense?: true
  }

  export type MagicItemMinAggregateInputType = {
    id?: true
    name?: true
    strength?: true
    defense?: true
    type?: true
    created_at?: true
    updated_at?: true
    character_id?: true
  }

  export type MagicItemMaxAggregateInputType = {
    id?: true
    name?: true
    strength?: true
    defense?: true
    type?: true
    created_at?: true
    updated_at?: true
    character_id?: true
  }

  export type MagicItemCountAggregateInputType = {
    id?: true
    name?: true
    strength?: true
    defense?: true
    type?: true
    created_at?: true
    updated_at?: true
    character_id?: true
    _all?: true
  }

  export type MagicItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MagicItem to aggregate.
     */
    where?: MagicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicItems to fetch.
     */
    orderBy?: MagicItemOrderByWithRelationInput | MagicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MagicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MagicItems
    **/
    _count?: true | MagicItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MagicItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MagicItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MagicItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MagicItemMaxAggregateInputType
  }

  export type GetMagicItemAggregateType<T extends MagicItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMagicItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMagicItem[P]>
      : GetScalarType<T[P], AggregateMagicItem[P]>
  }




  export type MagicItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MagicItemWhereInput
    orderBy?: MagicItemOrderByWithAggregationInput | MagicItemOrderByWithAggregationInput[]
    by: MagicItemScalarFieldEnum[] | MagicItemScalarFieldEnum
    having?: MagicItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MagicItemCountAggregateInputType | true
    _avg?: MagicItemAvgAggregateInputType
    _sum?: MagicItemSumAggregateInputType
    _min?: MagicItemMinAggregateInputType
    _max?: MagicItemMaxAggregateInputType
  }

  export type MagicItemGroupByOutputType = {
    id: string
    name: string
    strength: number
    defense: number
    type: $Enums.MagicItemType
    created_at: Date
    updated_at: Date
    character_id: string | null
    _count: MagicItemCountAggregateOutputType | null
    _avg: MagicItemAvgAggregateOutputType | null
    _sum: MagicItemSumAggregateOutputType | null
    _min: MagicItemMinAggregateOutputType | null
    _max: MagicItemMaxAggregateOutputType | null
  }

  type GetMagicItemGroupByPayload<T extends MagicItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MagicItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MagicItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MagicItemGroupByOutputType[P]>
            : GetScalarType<T[P], MagicItemGroupByOutputType[P]>
        }
      >
    >


  export type MagicItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    strength?: boolean
    defense?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    character_id?: boolean
    Character?: boolean | MagicItem$CharacterArgs<ExtArgs>
  }, ExtArgs["result"]["magicItem"]>

  export type MagicItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    strength?: boolean
    defense?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    character_id?: boolean
    Character?: boolean | MagicItem$CharacterArgs<ExtArgs>
  }, ExtArgs["result"]["magicItem"]>

  export type MagicItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    strength?: boolean
    defense?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    character_id?: boolean
    Character?: boolean | MagicItem$CharacterArgs<ExtArgs>
  }, ExtArgs["result"]["magicItem"]>

  export type MagicItemSelectScalar = {
    id?: boolean
    name?: boolean
    strength?: boolean
    defense?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    character_id?: boolean
  }

  export type MagicItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "strength" | "defense" | "type" | "created_at" | "updated_at" | "character_id", ExtArgs["result"]["magicItem"]>
  export type MagicItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | MagicItem$CharacterArgs<ExtArgs>
  }
  export type MagicItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | MagicItem$CharacterArgs<ExtArgs>
  }
  export type MagicItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | MagicItem$CharacterArgs<ExtArgs>
  }

  export type $MagicItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MagicItem"
    objects: {
      Character: Prisma.$CharacterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      strength: number
      defense: number
      type: $Enums.MagicItemType
      created_at: Date
      updated_at: Date
      character_id: string | null
    }, ExtArgs["result"]["magicItem"]>
    composites: {}
  }

  type MagicItemGetPayload<S extends boolean | null | undefined | MagicItemDefaultArgs> = $Result.GetResult<Prisma.$MagicItemPayload, S>

  type MagicItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MagicItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MagicItemCountAggregateInputType | true
    }

  export interface MagicItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MagicItem'], meta: { name: 'MagicItem' } }
    /**
     * Find zero or one MagicItem that matches the filter.
     * @param {MagicItemFindUniqueArgs} args - Arguments to find a MagicItem
     * @example
     * // Get one MagicItem
     * const magicItem = await prisma.magicItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MagicItemFindUniqueArgs>(args: SelectSubset<T, MagicItemFindUniqueArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MagicItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MagicItemFindUniqueOrThrowArgs} args - Arguments to find a MagicItem
     * @example
     * // Get one MagicItem
     * const magicItem = await prisma.magicItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MagicItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MagicItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MagicItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemFindFirstArgs} args - Arguments to find a MagicItem
     * @example
     * // Get one MagicItem
     * const magicItem = await prisma.magicItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MagicItemFindFirstArgs>(args?: SelectSubset<T, MagicItemFindFirstArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MagicItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemFindFirstOrThrowArgs} args - Arguments to find a MagicItem
     * @example
     * // Get one MagicItem
     * const magicItem = await prisma.magicItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MagicItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MagicItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MagicItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MagicItems
     * const magicItems = await prisma.magicItem.findMany()
     * 
     * // Get first 10 MagicItems
     * const magicItems = await prisma.magicItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const magicItemWithIdOnly = await prisma.magicItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MagicItemFindManyArgs>(args?: SelectSubset<T, MagicItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MagicItem.
     * @param {MagicItemCreateArgs} args - Arguments to create a MagicItem.
     * @example
     * // Create one MagicItem
     * const MagicItem = await prisma.magicItem.create({
     *   data: {
     *     // ... data to create a MagicItem
     *   }
     * })
     * 
     */
    create<T extends MagicItemCreateArgs>(args: SelectSubset<T, MagicItemCreateArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MagicItems.
     * @param {MagicItemCreateManyArgs} args - Arguments to create many MagicItems.
     * @example
     * // Create many MagicItems
     * const magicItem = await prisma.magicItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MagicItemCreateManyArgs>(args?: SelectSubset<T, MagicItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MagicItems and returns the data saved in the database.
     * @param {MagicItemCreateManyAndReturnArgs} args - Arguments to create many MagicItems.
     * @example
     * // Create many MagicItems
     * const magicItem = await prisma.magicItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MagicItems and only return the `id`
     * const magicItemWithIdOnly = await prisma.magicItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MagicItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MagicItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MagicItem.
     * @param {MagicItemDeleteArgs} args - Arguments to delete one MagicItem.
     * @example
     * // Delete one MagicItem
     * const MagicItem = await prisma.magicItem.delete({
     *   where: {
     *     // ... filter to delete one MagicItem
     *   }
     * })
     * 
     */
    delete<T extends MagicItemDeleteArgs>(args: SelectSubset<T, MagicItemDeleteArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MagicItem.
     * @param {MagicItemUpdateArgs} args - Arguments to update one MagicItem.
     * @example
     * // Update one MagicItem
     * const magicItem = await prisma.magicItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MagicItemUpdateArgs>(args: SelectSubset<T, MagicItemUpdateArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MagicItems.
     * @param {MagicItemDeleteManyArgs} args - Arguments to filter MagicItems to delete.
     * @example
     * // Delete a few MagicItems
     * const { count } = await prisma.magicItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MagicItemDeleteManyArgs>(args?: SelectSubset<T, MagicItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MagicItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MagicItems
     * const magicItem = await prisma.magicItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MagicItemUpdateManyArgs>(args: SelectSubset<T, MagicItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MagicItems and returns the data updated in the database.
     * @param {MagicItemUpdateManyAndReturnArgs} args - Arguments to update many MagicItems.
     * @example
     * // Update many MagicItems
     * const magicItem = await prisma.magicItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MagicItems and only return the `id`
     * const magicItemWithIdOnly = await prisma.magicItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MagicItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MagicItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MagicItem.
     * @param {MagicItemUpsertArgs} args - Arguments to update or create a MagicItem.
     * @example
     * // Update or create a MagicItem
     * const magicItem = await prisma.magicItem.upsert({
     *   create: {
     *     // ... data to create a MagicItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MagicItem we want to update
     *   }
     * })
     */
    upsert<T extends MagicItemUpsertArgs>(args: SelectSubset<T, MagicItemUpsertArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MagicItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemCountArgs} args - Arguments to filter MagicItems to count.
     * @example
     * // Count the number of MagicItems
     * const count = await prisma.magicItem.count({
     *   where: {
     *     // ... the filter for the MagicItems we want to count
     *   }
     * })
    **/
    count<T extends MagicItemCountArgs>(
      args?: Subset<T, MagicItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MagicItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MagicItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MagicItemAggregateArgs>(args: Subset<T, MagicItemAggregateArgs>): Prisma.PrismaPromise<GetMagicItemAggregateType<T>>

    /**
     * Group by MagicItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemGroupByArgs} args - Group by arguments.
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
      T extends MagicItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MagicItemGroupByArgs['orderBy'] }
        : { orderBy?: MagicItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MagicItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMagicItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MagicItem model
   */
  readonly fields: MagicItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MagicItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MagicItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Character<T extends MagicItem$CharacterArgs<ExtArgs> = {}>(args?: Subset<T, MagicItem$CharacterArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MagicItem model
   */
  interface MagicItemFieldRefs {
    readonly id: FieldRef<"MagicItem", 'String'>
    readonly name: FieldRef<"MagicItem", 'String'>
    readonly strength: FieldRef<"MagicItem", 'Int'>
    readonly defense: FieldRef<"MagicItem", 'Int'>
    readonly type: FieldRef<"MagicItem", 'MagicItemType'>
    readonly created_at: FieldRef<"MagicItem", 'DateTime'>
    readonly updated_at: FieldRef<"MagicItem", 'DateTime'>
    readonly character_id: FieldRef<"MagicItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MagicItem findUnique
   */
  export type MagicItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    /**
     * Filter, which MagicItem to fetch.
     */
    where: MagicItemWhereUniqueInput
  }

  /**
   * MagicItem findUniqueOrThrow
   */
  export type MagicItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    /**
     * Filter, which MagicItem to fetch.
     */
    where: MagicItemWhereUniqueInput
  }

  /**
   * MagicItem findFirst
   */
  export type MagicItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    /**
     * Filter, which MagicItem to fetch.
     */
    where?: MagicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicItems to fetch.
     */
    orderBy?: MagicItemOrderByWithRelationInput | MagicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MagicItems.
     */
    cursor?: MagicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MagicItems.
     */
    distinct?: MagicItemScalarFieldEnum | MagicItemScalarFieldEnum[]
  }

  /**
   * MagicItem findFirstOrThrow
   */
  export type MagicItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    /**
     * Filter, which MagicItem to fetch.
     */
    where?: MagicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicItems to fetch.
     */
    orderBy?: MagicItemOrderByWithRelationInput | MagicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MagicItems.
     */
    cursor?: MagicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MagicItems.
     */
    distinct?: MagicItemScalarFieldEnum | MagicItemScalarFieldEnum[]
  }

  /**
   * MagicItem findMany
   */
  export type MagicItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    /**
     * Filter, which MagicItems to fetch.
     */
    where?: MagicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicItems to fetch.
     */
    orderBy?: MagicItemOrderByWithRelationInput | MagicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MagicItems.
     */
    cursor?: MagicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicItems.
     */
    skip?: number
    distinct?: MagicItemScalarFieldEnum | MagicItemScalarFieldEnum[]
  }

  /**
   * MagicItem create
   */
  export type MagicItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MagicItem.
     */
    data: XOR<MagicItemCreateInput, MagicItemUncheckedCreateInput>
  }

  /**
   * MagicItem createMany
   */
  export type MagicItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MagicItems.
     */
    data: MagicItemCreateManyInput | MagicItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MagicItem createManyAndReturn
   */
  export type MagicItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * The data used to create many MagicItems.
     */
    data: MagicItemCreateManyInput | MagicItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MagicItem update
   */
  export type MagicItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MagicItem.
     */
    data: XOR<MagicItemUpdateInput, MagicItemUncheckedUpdateInput>
    /**
     * Choose, which MagicItem to update.
     */
    where: MagicItemWhereUniqueInput
  }

  /**
   * MagicItem updateMany
   */
  export type MagicItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MagicItems.
     */
    data: XOR<MagicItemUpdateManyMutationInput, MagicItemUncheckedUpdateManyInput>
    /**
     * Filter which MagicItems to update
     */
    where?: MagicItemWhereInput
    /**
     * Limit how many MagicItems to update.
     */
    limit?: number
  }

  /**
   * MagicItem updateManyAndReturn
   */
  export type MagicItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * The data used to update MagicItems.
     */
    data: XOR<MagicItemUpdateManyMutationInput, MagicItemUncheckedUpdateManyInput>
    /**
     * Filter which MagicItems to update
     */
    where?: MagicItemWhereInput
    /**
     * Limit how many MagicItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MagicItem upsert
   */
  export type MagicItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MagicItem to update in case it exists.
     */
    where: MagicItemWhereUniqueInput
    /**
     * In case the MagicItem found by the `where` argument doesn't exist, create a new MagicItem with this data.
     */
    create: XOR<MagicItemCreateInput, MagicItemUncheckedCreateInput>
    /**
     * In case the MagicItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MagicItemUpdateInput, MagicItemUncheckedUpdateInput>
  }

  /**
   * MagicItem delete
   */
  export type MagicItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
    /**
     * Filter which MagicItem to delete.
     */
    where: MagicItemWhereUniqueInput
  }

  /**
   * MagicItem deleteMany
   */
  export type MagicItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MagicItems to delete
     */
    where?: MagicItemWhereInput
    /**
     * Limit how many MagicItems to delete.
     */
    limit?: number
  }

  /**
   * MagicItem.Character
   */
  export type MagicItem$CharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
  }

  /**
   * MagicItem without action
   */
  export type MagicItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicItemInclude<ExtArgs> | null
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


  export const CharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nickname: 'nickname',
    class: 'class',
    level: 'level',
    strength: 'strength',
    defense: 'defense',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const MagicItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    strength: 'strength',
    defense: 'defense',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at',
    character_id: 'character_id'
  };

  export type MagicItemScalarFieldEnum = (typeof MagicItemScalarFieldEnum)[keyof typeof MagicItemScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Class'
   */
  export type EnumClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Class'>
    


  /**
   * Reference to a field of type 'Class[]'
   */
  export type ListEnumClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Class[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MagicItemType'
   */
  export type EnumMagicItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MagicItemType'>
    


  /**
   * Reference to a field of type 'MagicItemType[]'
   */
  export type ListEnumMagicItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MagicItemType[]'>
    


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


  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    nickname?: StringFilter<"Character"> | string
    class?: EnumClassFilter<"Character"> | $Enums.Class
    level?: IntFilter<"Character"> | number
    strength?: IntFilter<"Character"> | number
    defense?: IntFilter<"Character"> | number
    created_at?: DateTimeFilter<"Character"> | Date | string
    updated_at?: DateTimeFilter<"Character"> | Date | string
    magic_items?: MagicItemListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    class?: SortOrder
    level?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    magic_items?: MagicItemOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    name?: StringFilter<"Character"> | string
    nickname?: StringFilter<"Character"> | string
    class?: EnumClassFilter<"Character"> | $Enums.Class
    level?: IntFilter<"Character"> | number
    strength?: IntFilter<"Character"> | number
    defense?: IntFilter<"Character"> | number
    created_at?: DateTimeFilter<"Character"> | Date | string
    updated_at?: DateTimeFilter<"Character"> | Date | string
    magic_items?: MagicItemListRelationFilter
  }, "id">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    class?: SortOrder
    level?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Character"> | string
    name?: StringWithAggregatesFilter<"Character"> | string
    nickname?: StringWithAggregatesFilter<"Character"> | string
    class?: EnumClassWithAggregatesFilter<"Character"> | $Enums.Class
    level?: IntWithAggregatesFilter<"Character"> | number
    strength?: IntWithAggregatesFilter<"Character"> | number
    defense?: IntWithAggregatesFilter<"Character"> | number
    created_at?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Character"> | Date | string
  }

  export type MagicItemWhereInput = {
    AND?: MagicItemWhereInput | MagicItemWhereInput[]
    OR?: MagicItemWhereInput[]
    NOT?: MagicItemWhereInput | MagicItemWhereInput[]
    id?: StringFilter<"MagicItem"> | string
    name?: StringFilter<"MagicItem"> | string
    strength?: IntFilter<"MagicItem"> | number
    defense?: IntFilter<"MagicItem"> | number
    type?: EnumMagicItemTypeFilter<"MagicItem"> | $Enums.MagicItemType
    created_at?: DateTimeFilter<"MagicItem"> | Date | string
    updated_at?: DateTimeFilter<"MagicItem"> | Date | string
    character_id?: StringNullableFilter<"MagicItem"> | string | null
    Character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
  }

  export type MagicItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    character_id?: SortOrderInput | SortOrder
    Character?: CharacterOrderByWithRelationInput
  }

  export type MagicItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MagicItemWhereInput | MagicItemWhereInput[]
    OR?: MagicItemWhereInput[]
    NOT?: MagicItemWhereInput | MagicItemWhereInput[]
    name?: StringFilter<"MagicItem"> | string
    strength?: IntFilter<"MagicItem"> | number
    defense?: IntFilter<"MagicItem"> | number
    type?: EnumMagicItemTypeFilter<"MagicItem"> | $Enums.MagicItemType
    created_at?: DateTimeFilter<"MagicItem"> | Date | string
    updated_at?: DateTimeFilter<"MagicItem"> | Date | string
    character_id?: StringNullableFilter<"MagicItem"> | string | null
    Character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
  }, "id">

  export type MagicItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    character_id?: SortOrderInput | SortOrder
    _count?: MagicItemCountOrderByAggregateInput
    _avg?: MagicItemAvgOrderByAggregateInput
    _max?: MagicItemMaxOrderByAggregateInput
    _min?: MagicItemMinOrderByAggregateInput
    _sum?: MagicItemSumOrderByAggregateInput
  }

  export type MagicItemScalarWhereWithAggregatesInput = {
    AND?: MagicItemScalarWhereWithAggregatesInput | MagicItemScalarWhereWithAggregatesInput[]
    OR?: MagicItemScalarWhereWithAggregatesInput[]
    NOT?: MagicItemScalarWhereWithAggregatesInput | MagicItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MagicItem"> | string
    name?: StringWithAggregatesFilter<"MagicItem"> | string
    strength?: IntWithAggregatesFilter<"MagicItem"> | number
    defense?: IntWithAggregatesFilter<"MagicItem"> | number
    type?: EnumMagicItemTypeWithAggregatesFilter<"MagicItem"> | $Enums.MagicItemType
    created_at?: DateTimeWithAggregatesFilter<"MagicItem"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MagicItem"> | Date | string
    character_id?: StringNullableWithAggregatesFilter<"MagicItem"> | string | null
  }

  export type CharacterCreateInput = {
    id?: string
    name: string
    nickname: string
    class: $Enums.Class
    level?: number
    strength: number
    defense: number
    created_at?: Date | string
    updated_at?: Date | string
    magic_items?: MagicItemCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    name: string
    nickname: string
    class: $Enums.Class
    level?: number
    strength: number
    defense: number
    created_at?: Date | string
    updated_at?: Date | string
    magic_items?: MagicItemUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    level?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    magic_items?: MagicItemUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    level?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    magic_items?: MagicItemUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: string
    name: string
    nickname: string
    class: $Enums.Class
    level?: number
    strength: number
    defense: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    level?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    level?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicItemCreateInput = {
    id?: string
    name: string
    strength: number
    defense: number
    type: $Enums.MagicItemType
    created_at?: Date | string
    updated_at?: Date | string
    Character?: CharacterCreateNestedOneWithoutMagic_itemsInput
  }

  export type MagicItemUncheckedCreateInput = {
    id?: string
    name: string
    strength: number
    defense: number
    type: $Enums.MagicItemType
    created_at?: Date | string
    updated_at?: Date | string
    character_id?: string | null
  }

  export type MagicItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    type?: EnumMagicItemTypeFieldUpdateOperationsInput | $Enums.MagicItemType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Character?: CharacterUpdateOneWithoutMagic_itemsNestedInput
  }

  export type MagicItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    type?: EnumMagicItemTypeFieldUpdateOperationsInput | $Enums.MagicItemType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    character_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MagicItemCreateManyInput = {
    id?: string
    name: string
    strength: number
    defense: number
    type: $Enums.MagicItemType
    created_at?: Date | string
    updated_at?: Date | string
    character_id?: string | null
  }

  export type MagicItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    type?: EnumMagicItemTypeFieldUpdateOperationsInput | $Enums.MagicItemType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    type?: EnumMagicItemTypeFieldUpdateOperationsInput | $Enums.MagicItemType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    character_id?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumClassFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel>
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    not?: NestedEnumClassFilter<$PrismaModel> | $Enums.Class
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MagicItemListRelationFilter = {
    every?: MagicItemWhereInput
    some?: MagicItemWhereInput
    none?: MagicItemWhereInput
  }

  export type MagicItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    class?: SortOrder
    level?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    level?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    class?: SortOrder
    level?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    class?: SortOrder
    level?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    level?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
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

  export type EnumClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel>
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    not?: NestedEnumClassWithAggregatesFilter<$PrismaModel> | $Enums.Class
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassFilter<$PrismaModel>
    _max?: NestedEnumClassFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMagicItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MagicItemType | EnumMagicItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MagicItemType[] | ListEnumMagicItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MagicItemType[] | ListEnumMagicItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMagicItemTypeFilter<$PrismaModel> | $Enums.MagicItemType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CharacterNullableScalarRelationFilter = {
    is?: CharacterWhereInput | null
    isNot?: CharacterWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MagicItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    character_id?: SortOrder
  }

  export type MagicItemAvgOrderByAggregateInput = {
    strength?: SortOrder
    defense?: SortOrder
  }

  export type MagicItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    character_id?: SortOrder
  }

  export type MagicItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    defense?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    character_id?: SortOrder
  }

  export type MagicItemSumOrderByAggregateInput = {
    strength?: SortOrder
    defense?: SortOrder
  }

  export type EnumMagicItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MagicItemType | EnumMagicItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MagicItemType[] | ListEnumMagicItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MagicItemType[] | ListEnumMagicItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMagicItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.MagicItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMagicItemTypeFilter<$PrismaModel>
    _max?: NestedEnumMagicItemTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MagicItemCreateNestedManyWithoutCharacterInput = {
    create?: XOR<MagicItemCreateWithoutCharacterInput, MagicItemUncheckedCreateWithoutCharacterInput> | MagicItemCreateWithoutCharacterInput[] | MagicItemUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: MagicItemCreateOrConnectWithoutCharacterInput | MagicItemCreateOrConnectWithoutCharacterInput[]
    createMany?: MagicItemCreateManyCharacterInputEnvelope
    connect?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
  }

  export type MagicItemUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<MagicItemCreateWithoutCharacterInput, MagicItemUncheckedCreateWithoutCharacterInput> | MagicItemCreateWithoutCharacterInput[] | MagicItemUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: MagicItemCreateOrConnectWithoutCharacterInput | MagicItemCreateOrConnectWithoutCharacterInput[]
    createMany?: MagicItemCreateManyCharacterInputEnvelope
    connect?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumClassFieldUpdateOperationsInput = {
    set?: $Enums.Class
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MagicItemUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<MagicItemCreateWithoutCharacterInput, MagicItemUncheckedCreateWithoutCharacterInput> | MagicItemCreateWithoutCharacterInput[] | MagicItemUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: MagicItemCreateOrConnectWithoutCharacterInput | MagicItemCreateOrConnectWithoutCharacterInput[]
    upsert?: MagicItemUpsertWithWhereUniqueWithoutCharacterInput | MagicItemUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: MagicItemCreateManyCharacterInputEnvelope
    set?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
    disconnect?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
    delete?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
    connect?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
    update?: MagicItemUpdateWithWhereUniqueWithoutCharacterInput | MagicItemUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: MagicItemUpdateManyWithWhereWithoutCharacterInput | MagicItemUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: MagicItemScalarWhereInput | MagicItemScalarWhereInput[]
  }

  export type MagicItemUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<MagicItemCreateWithoutCharacterInput, MagicItemUncheckedCreateWithoutCharacterInput> | MagicItemCreateWithoutCharacterInput[] | MagicItemUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: MagicItemCreateOrConnectWithoutCharacterInput | MagicItemCreateOrConnectWithoutCharacterInput[]
    upsert?: MagicItemUpsertWithWhereUniqueWithoutCharacterInput | MagicItemUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: MagicItemCreateManyCharacterInputEnvelope
    set?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
    disconnect?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
    delete?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
    connect?: MagicItemWhereUniqueInput | MagicItemWhereUniqueInput[]
    update?: MagicItemUpdateWithWhereUniqueWithoutCharacterInput | MagicItemUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: MagicItemUpdateManyWithWhereWithoutCharacterInput | MagicItemUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: MagicItemScalarWhereInput | MagicItemScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutMagic_itemsInput = {
    create?: XOR<CharacterCreateWithoutMagic_itemsInput, CharacterUncheckedCreateWithoutMagic_itemsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutMagic_itemsInput
    connect?: CharacterWhereUniqueInput
  }

  export type EnumMagicItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.MagicItemType
  }

  export type CharacterUpdateOneWithoutMagic_itemsNestedInput = {
    create?: XOR<CharacterCreateWithoutMagic_itemsInput, CharacterUncheckedCreateWithoutMagic_itemsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutMagic_itemsInput
    upsert?: CharacterUpsertWithoutMagic_itemsInput
    disconnect?: CharacterWhereInput | boolean
    delete?: CharacterWhereInput | boolean
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutMagic_itemsInput, CharacterUpdateWithoutMagic_itemsInput>, CharacterUncheckedUpdateWithoutMagic_itemsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedEnumClassFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel>
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    not?: NestedEnumClassFilter<$PrismaModel> | $Enums.Class
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel>
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel>
    not?: NestedEnumClassWithAggregatesFilter<$PrismaModel> | $Enums.Class
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassFilter<$PrismaModel>
    _max?: NestedEnumClassFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMagicItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MagicItemType | EnumMagicItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MagicItemType[] | ListEnumMagicItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MagicItemType[] | ListEnumMagicItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMagicItemTypeFilter<$PrismaModel> | $Enums.MagicItemType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumMagicItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MagicItemType | EnumMagicItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MagicItemType[] | ListEnumMagicItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MagicItemType[] | ListEnumMagicItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMagicItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.MagicItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMagicItemTypeFilter<$PrismaModel>
    _max?: NestedEnumMagicItemTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MagicItemCreateWithoutCharacterInput = {
    id?: string
    name: string
    strength: number
    defense: number
    type: $Enums.MagicItemType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MagicItemUncheckedCreateWithoutCharacterInput = {
    id?: string
    name: string
    strength: number
    defense: number
    type: $Enums.MagicItemType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MagicItemCreateOrConnectWithoutCharacterInput = {
    where: MagicItemWhereUniqueInput
    create: XOR<MagicItemCreateWithoutCharacterInput, MagicItemUncheckedCreateWithoutCharacterInput>
  }

  export type MagicItemCreateManyCharacterInputEnvelope = {
    data: MagicItemCreateManyCharacterInput | MagicItemCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type MagicItemUpsertWithWhereUniqueWithoutCharacterInput = {
    where: MagicItemWhereUniqueInput
    update: XOR<MagicItemUpdateWithoutCharacterInput, MagicItemUncheckedUpdateWithoutCharacterInput>
    create: XOR<MagicItemCreateWithoutCharacterInput, MagicItemUncheckedCreateWithoutCharacterInput>
  }

  export type MagicItemUpdateWithWhereUniqueWithoutCharacterInput = {
    where: MagicItemWhereUniqueInput
    data: XOR<MagicItemUpdateWithoutCharacterInput, MagicItemUncheckedUpdateWithoutCharacterInput>
  }

  export type MagicItemUpdateManyWithWhereWithoutCharacterInput = {
    where: MagicItemScalarWhereInput
    data: XOR<MagicItemUpdateManyMutationInput, MagicItemUncheckedUpdateManyWithoutCharacterInput>
  }

  export type MagicItemScalarWhereInput = {
    AND?: MagicItemScalarWhereInput | MagicItemScalarWhereInput[]
    OR?: MagicItemScalarWhereInput[]
    NOT?: MagicItemScalarWhereInput | MagicItemScalarWhereInput[]
    id?: StringFilter<"MagicItem"> | string
    name?: StringFilter<"MagicItem"> | string
    strength?: IntFilter<"MagicItem"> | number
    defense?: IntFilter<"MagicItem"> | number
    type?: EnumMagicItemTypeFilter<"MagicItem"> | $Enums.MagicItemType
    created_at?: DateTimeFilter<"MagicItem"> | Date | string
    updated_at?: DateTimeFilter<"MagicItem"> | Date | string
    character_id?: StringNullableFilter<"MagicItem"> | string | null
  }

  export type CharacterCreateWithoutMagic_itemsInput = {
    id?: string
    name: string
    nickname: string
    class: $Enums.Class
    level?: number
    strength: number
    defense: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CharacterUncheckedCreateWithoutMagic_itemsInput = {
    id?: string
    name: string
    nickname: string
    class: $Enums.Class
    level?: number
    strength: number
    defense: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CharacterCreateOrConnectWithoutMagic_itemsInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutMagic_itemsInput, CharacterUncheckedCreateWithoutMagic_itemsInput>
  }

  export type CharacterUpsertWithoutMagic_itemsInput = {
    update: XOR<CharacterUpdateWithoutMagic_itemsInput, CharacterUncheckedUpdateWithoutMagic_itemsInput>
    create: XOR<CharacterCreateWithoutMagic_itemsInput, CharacterUncheckedCreateWithoutMagic_itemsInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutMagic_itemsInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutMagic_itemsInput, CharacterUncheckedUpdateWithoutMagic_itemsInput>
  }

  export type CharacterUpdateWithoutMagic_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    level?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateWithoutMagic_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    class?: EnumClassFieldUpdateOperationsInput | $Enums.Class
    level?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicItemCreateManyCharacterInput = {
    id?: string
    name: string
    strength: number
    defense: number
    type: $Enums.MagicItemType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MagicItemUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    type?: EnumMagicItemTypeFieldUpdateOperationsInput | $Enums.MagicItemType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicItemUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    type?: EnumMagicItemTypeFieldUpdateOperationsInput | $Enums.MagicItemType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicItemUncheckedUpdateManyWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    type?: EnumMagicItemTypeFieldUpdateOperationsInput | $Enums.MagicItemType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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