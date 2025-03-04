import { z } from "zod";

const DetalhamentoAuditoriaSchema = z.object({
    id: z
        .string()
        .uuid()
        .nonempty("É necessário prover um ID para a auditoria."),
    nome_do_produto: z
        .string()
        .nonempty(
            "É necessário prover o nome do produto da auditoria detalhado em questão"
        ),
    valor_anterior: z
        .number()
        .nonnegative("O valor prévio do produto precisa ser positivo"),
    valor_atual: z
        .number()
        .nonnegative("O valor atual do produto precisa ser positivo"),
    observacoes_adicionais: z.string().optional(),
});

export default DetalhamentoAuditoriaSchema;