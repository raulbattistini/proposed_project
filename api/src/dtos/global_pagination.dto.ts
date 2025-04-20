export type PaginatedResultDto<T> = {
   data: T[];
   currentPage: number;
   perPage: number;
   totalItems: number;
   totalPages: number;
};
