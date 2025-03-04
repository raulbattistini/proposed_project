import { ErrorLevelsEnum } from "../../enums/errors_enums/errors_levels.enum";
import { HttpLogger, pinoHttp } from "pino-http";

type LevelMap = Record<
    ErrorLevelsEnum,
    (obj: object, message?: string, args?: any[]) => void
>;
const PinoInstance = pinoHttp();
const levelMap = {

};

export { levelMap, LevelMap };