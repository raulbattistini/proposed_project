import { BaseDefaultMessage } from "../global_get.dto";
import { UsuarioEntity } from "../../entities/usuario.entity";
import { AuditoriaEntity } from "../../entities/auditoria.entity";

type PayloadUpdateUsuarioDto = Pick<
    UsuarioEntity,
    "auditorias_realizadas" | "id"
> &
    Pick<AuditoriaEntity, "nome_do_auditor">;

type ResponseUpdateUsuarioDto = BaseDefaultMessage & Omit<UsuarioEntity, "id">;

export { PayloadUpdateUsuarioDto, ResponseUpdateUsuarioDto };