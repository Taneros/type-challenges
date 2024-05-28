type StringToUnion<T extends string> = T extends `${infer F}${infer U}`
  ? F | StringToUnion<U>
  : never