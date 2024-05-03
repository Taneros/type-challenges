type Awaited<T> =
    T extends PromiseLike<infer R>
    ? Awaited<R>
    : T

declare function PromiseAll<V extends unknown[]>(values: readonly [...V]): Promise<{
    [P in keyof V]: Awaited<V[P]>
}>