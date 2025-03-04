import { z } from "zod";
const acaoEfetuadaEnum = z.enum(["Criacao", "Alteracao", "Delecao"]);

export type AcaoEfetuadaEnum = z.infer<typeof acaoEfetuadaEnum>;

export default acaoEfetuadaEnum;