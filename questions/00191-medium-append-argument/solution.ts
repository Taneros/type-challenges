type AppendArgument<Fn extends Function, A extends unknown> = Fn extends (...args: infer Args) => infer Return
  ? (...args: [...Args, A]) => Return
  : never