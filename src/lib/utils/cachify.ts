export default function cachify<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>();

  return (...args: any) => {
    const cacheKey: string = JSON.stringify(args);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const result = fn?.(...args);

    cache.set(cacheKey, result);

    return result;
  };
}
