type TupleToUnion<T extends unknown[]> = T[number]

type TupleToUnion<T> = T extends (infer R)[]
  ? R
  : never

type TupleToUnion<T> = T extends Array<infer Items>
  ? Items
  :
  never

type TupleToUnion<T> = T extends [infer Head, ...infer Tail]
  ? Head | TupleToUnion<Tail>
  :
  never     