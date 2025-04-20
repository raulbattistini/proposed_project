import { UsuarioEntity } from "../../entities/usuario.entity";

type ResponseArchiveUsuario = Omit<
   UsuarioEntity,
   "id" | "auditorias_realizadas"
>;

export { ResponseArchiveUsuario };
