import { z } from "zod";
import permissoesUsuarioEnum, {
    PermissoesUsuarioEnum,
} from "../../enums/usuarios_permissoes.enum";

const userPermissoes = Object.values(permissoesUsuarioEnum).join(", ");

const UserSchema = z.object({
    id: z.string().uuid().nonempty("É necessário prover um ID"),
    nome: z.string().nonempty("É preciso prover um nome."),
    permissoes: z
        .string()
        .refine(
            (value) =>
                Object.values(permissoesUsuarioEnum).includes(
                    value as PermissoesUsuarioEnum
                ),
            {
                message: `As permissões permitidas são ${userPermissoes} `,
            }
        ),
    email: z.string().nonempty("É necessário prover um email."),
    senha: z.string().nonempty("É necessário prover uma senha."),
    ativo: z.boolean().default(true),
});

export default UserSchema;