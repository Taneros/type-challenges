type Awaited<T> = 
    T extends PromiseLike<infer R>
    ? Awaited<R>
    : T;

declare function PromiseAll<V extends Array<unknown>>(value: readonly [...V]):
    Promise<{
        [P in keyof T]: Awaited<T[P]>
    }>
    