import { HttpLogger, pinoHttp as pinoLog } from "pino-http";
import { ErrorLevelsEnum } from "../../enums/errors_enums/errors_levels.enum";

class AppLogger {
    private readonly PinoInstance: HttpLogger;
    private readonly levelMap: Record<
        ErrorLevelsEnum,
        (obj: object, message?: string, ...args: any) => void
    >;
    constructor() {
        this.PinoInstance = pinoLog();
        this.levelMap = {
            DEBUG: this.PinoInstance.logger.debug.bind(
                this.PinoInstance.logger
            ),
            INFO: this.PinoInstance.logger.info.bind(this.PinoInstance.logger),
            ERROR: this.PinoInstance.logger.error.bind(
                this.PinoInstance.logger
            ),
            WARN: this.PinoInstance.logger.warn.bind(this.PinoInstance.logger),
            FATAL: this.PinoInstance.logger.fatal.bind(
                this.PinoInstance.logger
            ),
        };
    }

    handle(
        obj: object,
        level: ErrorLevelsEnum,
        message?: string,
        ...args: any[]
    ) {
        (this.levelMap[level] || this.levelMap.ERROR)(obj, message, args);
    }
}

export default AppLogger;