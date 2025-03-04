import { z } from "zod";

const permissoesUsuarioEnum = z.enum(["ADM", "Estoque"]);
export type PermissoesUsuarioEnum = z.infer<typeof permissoesUsuarioEnum>;
export default permissoesUsuarioEnum;