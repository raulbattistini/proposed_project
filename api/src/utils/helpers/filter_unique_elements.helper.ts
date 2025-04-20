export default function getValues<T, K extends keyof T>(
   arr: T[],
   key: K,
): Array<NonNullable<T[K]>> {
   const unique = new Set<NonNullable<T[K]>>();

   for (const item of arr) {
      const value = item[key];
      if (value !== null && value !== undefined) {
         unique.add(value as NonNullable<T[K]>);
      }
   }

   return Array.from(unique);
}
