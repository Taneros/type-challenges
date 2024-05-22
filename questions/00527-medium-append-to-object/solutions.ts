type Flatten<T> = { [P in keyof T]: T[P] }
type AppendToObject<T, U extends string, V> = Flatten<T & { [key in U]: V }>


type AppendToObject<T extends {}, U extends PropertyKey, V> = 
  {
    [K in keyof T | U]: (T & Record<U, V>)[K]
  }