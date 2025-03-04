import { Request, Response, NextFunction } from "express";
import { BaseAppError } from "../errors/global_error.error";
import { DEFAULT_STATUS_CODE } from "../globals/global_error.global";
import AppLogger from "../utils/logger/pino_logger.util";
import { errorLevelsEnum } from "../enums/errors_enums/errors_levels.enum";
import { INTERNAL_SERVER_ERROR_OBJ } from "../globals/errors/global_http_error.global";

class baseErrorMiddleware {
    private AppLoggerUtil: AppLogger; 
    constructor() {
        this.AppLoggerUtil = new AppLogger();
    }
    async handle(err: Error, req: Request, res: Response, next: NextFunction) {
        try {
            if (err instanceof BaseAppError) {
                return res.status(err.statusCode).json({
                    message: err.message,
                    status: err.status,
                });
            }

            this.AppLoggerUtil.handle(INTERNAL_SERVER_ERROR_OBJ, errorLevelsEnum.Values.ERROR);

            return res.status(DEFAULT_STATUS_CODE).json(INTERNAL_SERVER_ERROR_OBJ);
        } catch (error: any) {}
    }
}

export { baseErrorMiddleware };