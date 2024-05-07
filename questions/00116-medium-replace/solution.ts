
type Replace<S extends string, From extends string, To extends string> =
  From extends "" 
  ? S
  : S extends`${From}${infer Tail}`
  ? `${To}${Tail}`
  : S extends `${infer Head}${infer Tail}`
    ? `${Head}${Replace<Tail, From, To>}`
    : S
