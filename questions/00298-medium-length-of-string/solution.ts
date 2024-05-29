type LengthOfString<S extends string, Acc extends string[] = []> = S extends ''
  ? Acc['length']
  : S extends `${infer Head}${infer Rest}`
  ? LengthOfString<Rest, [...Acc, Head]>
  : never

type LengthOfStringS<S extends string, Acc extends string[] = []> = S extends ''
  ? Acc['length']
  : S extends `${string}${infer Rest}`
  ? LengthOfStringS<Rest, [...Acc, string]>
  : never

type LengthOfString<S extends string, Acc extends unknown[] = []> = S['length'] extends []['length']
  ? []['length']
  : S extends `${infer L}${infer R}`
  ? LengthOfString<R, [L, ...Acc]>
  : Acc['length']

type LengthOfString<S extends string, Acc extends unknown[] = []> =
  S extends `${infer Head}${infer Tail}`
  ? LengthOfString<Tail, [...Acc, Head]>
  : Acc['length']

type LengthOfString<S extends string, Acc extends string[] = []> = S extends `${string}${infer R}`
  ? LengthOfString<R, [...Acc, string]>
  : Acc['length']