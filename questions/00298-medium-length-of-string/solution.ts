type LengthOfString<S extends string, Acc extends string[] = []> = S extends ''
  ? Acc['length']
  : S extends `${infer Head}${infer Rest}`
    ? LengthOfString<Rest, [...Acc, Head]>
    : never; 
type LengthOfStringS<S extends string, Acc extends string[] = []> = S extends ''
  ? Acc['length']
  : S extends `${string}${infer Rest}`
    ? LengthOfStringS<Rest, [...Acc, string]>
    : never; 