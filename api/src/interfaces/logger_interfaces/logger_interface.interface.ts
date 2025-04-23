import { ErrorLevelsEnum } from "../../enums/errors_enums/errors_levels.enum";

interface LoggerInterface {
   handle: (
      obj: object,
      level: ErrorLevelsEnum,
      message?: string,
      ...args: any[]
   ) => void;
}

export default LoggerInterface;
