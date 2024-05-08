type TWhitespace = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${TWhitespace}${infer Middle}`
    ? Trim<Middle>
    : S extends `${infer Head}${TWhitespace}`
    ? Trim<Head>
    : S

type Whitespace = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${Whitespace}${infer Rest}` | `${infer Rest}${Whitespace}`
    ? `${Trim<Rest>}`
    : S
