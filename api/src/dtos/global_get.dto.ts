interface BaseMessageGet<T> {
    pageSize: number;
    pageNumber: number;
    totalItems: number;
    data: T[];
}

interface BaseMessageGetOne<T> {
    data: T;
}

interface BaseDefaultMessage {
    message: string;
    status: boolean;
    code?: number;
}

export { BaseMessageGet, BaseMessageGetOne, BaseDefaultMessage };