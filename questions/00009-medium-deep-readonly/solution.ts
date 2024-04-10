type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends Record<any, any> 
        ? T[K] extends Function
            ? T[K]
             : DeepReadonly<T[K]>
              : T[K]
}