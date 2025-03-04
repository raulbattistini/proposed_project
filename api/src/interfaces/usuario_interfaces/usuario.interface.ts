import { ResponseArchiveUsuario } from "../../dtos/usuario_dtos/delete_usuario.dto";
import {
    ResponseFindUsuarioByIdDto,
    ResponseGetUsuariosDto,
} from "../../dtos/usuario_dtos/get_usuario.dto";
import {
    PayloadCreateUsuario,
    ResponseCreateUsuario,
} from "../../dtos/usuario_dtos/create_usuario.dto";
import {
    PayloadUpdateUsuarioDto,
    ResponseUpdateUsuarioDto,
} from "../../dtos/usuario_dtos/update_usuario.dto";
import {
    PayloadLoginUsuarioDto,
    ResponseLoginUsuarioDto,
} from "../../dtos/usuario_dtos/usuario_login.dto";
import {
    PayloadRegisterUsuarioDto,
    ResponseRegisterUsuarioDto,
} from "../../dtos/usuario_dtos/usuario_register.dto";

interface UsuarioInterface {
    getUsers: (page: number, amount: number) => Promise<ResponseGetUsuariosDto>;
    findUserById: (id: string) => Promise<ResponseFindUsuarioByIdDto>;
    createUsuario: (
        payload: PayloadCreateUsuario
    ) => Promise<ResponseCreateUsuario>;
    updateUser: (
        payload: PayloadUpdateUsuarioDto
    ) => Promise<ResponseUpdateUsuarioDto>;
    deleteUser: (id: string) => Promise<void>;
    archiveUser: (id: string) => Promise<ResponseArchiveUsuario>;
    loginUsuario: (
        payload: PayloadLoginUsuarioDto
    ) => Promise<ResponseLoginUsuarioDto>;
    registerUsuario: (
        payload: PayloadRegisterUsuarioDto
    ) => Promise<ResponseRegisterUsuarioDto>;
}

export { UsuarioInterface };