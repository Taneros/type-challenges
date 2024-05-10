type Permutation<T, Acc = T> = [T] extends [never]
  ? []
  : Acc extends T
    ? [Acc, ...Permutation<Exclude<T, Acc>>]
    : []