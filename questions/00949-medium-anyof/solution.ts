/* _____________ Your Code Here _____________ */
type Falsy = Record<string, never> | [] | 0 | '' | null | undefined | false

type AnyOf<T extends unknown[]> = 
  T extends [infer Head, ...infer Rest]
  ? Head extends Falsy
    ? AnyOf<Rest>
    : true
  : false
