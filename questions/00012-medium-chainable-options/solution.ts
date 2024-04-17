type Chainable<T = {}> = {
    option<
      K extends PropertyKey,
      V
    >(
      key: K extends keyof T 
        ? V extends T[K]
          ? never
          : K
        : K,
      value: V
      ): Chainable<{[P in keyof T as P extends K ? never : P]: T[P]} & Record<K,V>>
    get(): T
  }