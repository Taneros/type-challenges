type LookUp<U extends {type: PropertyKey}, T extends PropertyKey> =  {
    [K in T]:  U extends {type: T} ? U : never }[T]
 