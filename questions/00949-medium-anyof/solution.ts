/* _____________ Your Code Here _____________ */
type Falsy = Record<string, never> | [] | 0 | '' | null | undefined | false

type AnyOf<T extends unknown[]> =
  T extends [infer Head, ...infer Rest]
  ? Head extends Falsy
  ? AnyOf<Rest>
  : true
  : false


type IsTruthy<T> = T extends Falsy ? false : true

type AnyOf<T extends unknown[]> = IsTruthy<T[number]> extends false ? false : true