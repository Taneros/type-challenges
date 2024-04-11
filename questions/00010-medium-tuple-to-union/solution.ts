type TupleToUnion<T extends unknown[]> = T[number] 

type TupleToUnion<T> = T extends (infer R)[] 
  ? R
    : never;