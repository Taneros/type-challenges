type Cast<T, U> = T extends U ? T : U;

type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[Cast<K, keyof  F>] 
}


type Merge <A, B> = {
  [K in keyof (A & B)]: K extends keyof B ? B[K] : A[Cast<K, keyof A>]
}


type Merge <A extends Record<PropertyKey, unknown>, B extends Record<PropertyKey, unknown>> = {
  [K in keyof (A & B)]: K extends keyof B ? B[K] : A[K]
}