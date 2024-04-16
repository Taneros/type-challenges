type MyOmit<T extends {}, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
}


///

type MyExlude<A, B> = A extends B ? never : A

type MyOmit<T extends {}, K extends keyof T> = {
    [P in MyExlude<keyof T, K>]: T[P]
}
