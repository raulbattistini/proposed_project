import { ValidationError } from "../../errors/client_errors/four_xx.error";
import { BaseAppError } from "../../errors/global_error.error";
import {
   Either,
   left,
   right,
} from "../../globals/errors/left_right_either.error";

// signature: accepts an array(list) of T and K keyof T, where T is an object extending typeorm default generic entity manager and K is a property of the given entity as arguments which type is a number and returning either an error or the sumup of the values present in the array of T
export default function aggregateValue<T, V = number>(
   array: T[],
   propExtractor: (item: T) => V,
): Either<BaseAppError, V> {
   let tmpSet: Set<V> = new Set();
   let finalValue;
   for (const item of array) {
      const value = propExtractor(item);
      tmpSet.add(value);
   }
   let sum = sumUpSet(tmpSet);
   if (sum.isLeft()) {
      return left(sum.value);
   }
   finalValue = sum.value;
   return right(finalValue as V);
}

function sumUpSet<T = number>(set: Set<T>): Either<ValidationError, number> {
   let finalValue = 0;
   for (let item of set) {
      if (typeof item === "number") {
         finalValue += item;
      }
      return left(new ValidationError("400", "type must be number"));
   }
   return right(finalValue);
}
