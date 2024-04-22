type Pop<T extends any[]> = T['length'] extends []['length']
    ? []
    : T extends [...infer Head, unknown]
    ? Head
    : never


type Pop<T extends any[]> = T extends [...infer Head, unknown]
    ? Head
    : []
