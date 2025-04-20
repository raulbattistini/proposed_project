import { z } from "zod";

const ErrorLevelsEnum = z.enum(["INFO", "ERROR", "WARN", "DEBUG", "FATAL"]);

export type ErrorLevelsEnum = z.infer<typeof ErrorLevelsEnum>;

export default ErrorLevelsEnum;
