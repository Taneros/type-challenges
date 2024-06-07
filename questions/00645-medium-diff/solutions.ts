type Cast<T, U> = T extends U ? T : U

type Difference<T, K, U> = T extends K ? T extends U ? never : T : T

// type Diff<A, B> = {
//   [K in keyof (A & B) as 
//     K extends keyof A 
//     ? K extends keyof B 
//       ? never : K : K]: K extends keyof B ? B[K] : A[Cast<K, keyof A>]
// }

type Diff<A, B> = {
  [K in keyof (A & B) as Difference<K, A, B>]: (A & B)[K]
}