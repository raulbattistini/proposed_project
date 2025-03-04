import { z } from "zod";

const ZodErrorStatusEnum = z.enum(["error", "timeout"]);

export type ZodErrorStatusEnum = z.infer<typeof ZodErrorStatusEnum>;
export default ZodErrorStatusEnum;
// or use zod to create schemas and enums etc like the filter function uin the other apiErrorStatus