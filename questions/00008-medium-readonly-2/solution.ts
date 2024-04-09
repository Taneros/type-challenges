
type MyReadonly2<T extends {}, K extends keyof T = keyof T> =
    {
        readonly [P in K]: T[P]
    }
    & {
        [P in keyof T as P extends K ? never : P]: T[P]
    }