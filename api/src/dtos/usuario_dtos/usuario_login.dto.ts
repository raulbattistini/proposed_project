import { UsuarioEntity } from "../../entities/usuario.entity";

type PayloadLoginUsuarioDto = Pick<UsuarioEntity, "id" | "email" | "senha">;
type ResponseLoginUsuarioDto = Omit<UsuarioEntity, "auditorias_realizadas"> & {
    token: string;
};

export { PayloadLoginUsuarioDto, ResponseLoginUsuarioDto };