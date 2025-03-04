import {
    ZodErrorStatusEnum,
} from "../enums/errors_enums/errors_status.enum";

class BaseAppError extends Error {
    public readonly statusCode: string;
    public readonly status: ZodErrorStatusEnum;
    public readonly isOperational: boolean;
    constructor(statusCode: string, status: ZodErrorStatusEnum, isOperational: boolean, message?: string) {
        super(message);
        this.statusCode = statusCode;
        this.status = status;
        this.isOperational = isOperational;

        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

export { BaseAppError };