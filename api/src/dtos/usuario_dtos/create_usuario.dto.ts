import { UsuarioEntity } from "../../entities/usuario.entity";

type PayloadCreateUsuario = Omit<UsuarioEntity, "id">;

type ResponseCreateUsuario = Omit<UsuarioEntity, "auditorias_realizadas">;

export { PayloadCreateUsuario, ResponseCreateUsuario };
