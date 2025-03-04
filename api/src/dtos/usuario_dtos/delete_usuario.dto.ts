import { UsuarioEntity } from "../../entities/usuario.entity";
import { BaseDefaultMessage } from "../global_get.dto";

type ResponseArchiveUsuario = BaseDefaultMessage & Omit<UsuarioEntity, "id">;

export { ResponseArchiveUsuario };