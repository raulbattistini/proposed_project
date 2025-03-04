import {
    BaseDefaultMessage,
    BaseMessageGetOne,
    BaseMessageGet,
} from "../global_get.dto";
import { UsuarioEntity } from "../../entities/usuario.entity";

type ResponseGetUsuariosDto = BaseMessageGet<UsuarioEntity>;

type ResponseFindUsuarioByIdDto = BaseMessageGetOne<UsuarioEntity>;

export { ResponseGetUsuariosDto, ResponseFindUsuarioByIdDto };