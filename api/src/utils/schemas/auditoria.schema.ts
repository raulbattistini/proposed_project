import { z } from "zod";
import acaoEfetuadaEnum, {
    AcaoEfetuadaEnum,
} from "../../enums/acao_efetuada.enum";
import DetalhamentoAuditoriaSchema from "./detalhamento_auditoria.schema";

const acaoEfetuadasTipos = Object.values(acaoEfetuadaEnum).join(", ");

const AuditoriaSchema = z.object({
    id: z
        .string()
        .uuid()
        .nonempty("É necessário prover um ID para a auditoria."),
    itens: z
        .string()
        .array()
        .nonempty("É necessário haver um produto para se fazer a auditoria.")
        .or(
            z.string().nonempty("É necesśario prover um Produto na auditoria.")
        ),
    acao_efetuada: z
        .string()
        .refine(
            (value) =>
                Object.values(acaoEfetuadaEnum).includes(
                    value as AcaoEfetuadaEnum
                ),
            {
                message: `As categorias devem ser dos tipos ${acaoEfetuadasTipos}`,
            }
        ),
    data_de_audicao: z.date().default(new Date()),
    nome_do_auditor: z
        .string()
        .nonempty("É necessário prover o nome do auditor."),
    detalhamento_auditoria: DetalhamentoAuditoriaSchema,
});

export default AuditoriaSchema;