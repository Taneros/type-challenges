type Last<T extends unknown[]> = T['length'] extends [0]['length']
  ? T[0]
  : T extends [any, ...any, infer Last]
  ? Last
  : never

  type Last<T extends unknown[]> = T extends [...infer Head, infer I]
  ? I
  : never

type Last<T extends any[]> = [any, ...T][T['length']]