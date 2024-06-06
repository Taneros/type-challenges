type KebabCase<S extends string> = 
  S extends `${infer Head}${infer Tail}`
  ? Tail extends Uncapitalize<Tail>
    ? `${Lowercase<Head>}${KebabCase<Tail>}`
    : `${Lowercase<Head>}-${KebabCase<Tail>}`
  : S