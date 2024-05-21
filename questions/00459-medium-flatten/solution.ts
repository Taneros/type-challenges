type Flatten<T extends unknown[] = []> = T extends [infer F, ...infer R]
  ? [...(F extends unknown[] ? Flatten<F> : [F]), ...Flatten<R>]
  : []

type Flatten2<T extends unknown[]> = T extends [infer F, ...infer R] ? F extends unknown[] ? [...Flatten2<F>, ...Flatten2<R>] : [F, ...Flatten2<R>] : []
