
type DeepReadonly<T> =
  {
    readonly [K in keyof T]: T[K] extends object
    ? T[K] extends Function
    ?
    T[K]
    : DeepReadonly<T[K]>
    : T[K]
  }

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<any, any>
  ? T[K] extends Function
  ? T[K]
  : DeepReadonly<T[K]>
  : T[K]
}

type DeepReadonly<T> = T extends Function
  ? T
  : T extends Object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T


type DeepReadonly<T> = T extends never
  ? T
  : keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> }