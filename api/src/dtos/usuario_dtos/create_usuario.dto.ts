import { AuditoriaEntity } from "../../entities/auditoria.entity";
import { UsuarioEntity } from "../../entities/usuario.entity";
import { BaseDefaultMessage } from "../global_get.dto";

type PayloadCreateUsuario = Omit<
    UsuarioEntity,
    "id" | "auditorias_realizadas" | "permissoes"
>;

type ResponseCreateUsuario = BaseDefaultMessage &
    Omit<UsuarioEntity, "auditorias_realizadas">;

export { PayloadCreateUsuario, ResponseCreateUsuario };