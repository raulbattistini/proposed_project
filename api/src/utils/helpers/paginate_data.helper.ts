import { PaginatedResultDto } from "../../dtos/global_pagination.dto";

export default function paginate<T>(
   items: T[],
   currentPage: number,
   perPage: number,
): PaginatedResultDto<T> {
   const totalItems = items.length;
   const totalPages = Math.ceil(totalItems / perPage);
   const offset = (currentPage - 1) * perPage;

   const data = items.slice(offset, offset + perPage);

   return {
      data,
      currentPage,
      perPage,
      totalItems,
      totalPages,
   };
}
