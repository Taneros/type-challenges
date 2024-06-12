type KebabCase<S extends string> = 
  S extends `${infer Head}${infer Tail}`
  ? Tail extends Uncapitalize<Tail>
    ? `${Lowercase<Head>}${KebabCase<Tail>}`
    : `${Lowercase<Head>}-${KebabCase<Tail>}`
  : S

  type KebabCase<S> = 
  S extends `${infer Head}${infer Tail}`
    ? `${Uncapitalize<Head>}${Tail extends Uncapitalize<Tail> ? "" : "-"}${KebabCase<Tail>}`
    : ""
  