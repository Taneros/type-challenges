type Whitespace = ' ' | '\n' | '\t' | '\r'
type TrimLeft<S extends string> = S extends `${Whitespace}${infer Rest}`
  ? TrimLeft<Rest>
  : S