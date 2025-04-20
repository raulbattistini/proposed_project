import {
   PayloadCreateDetalhamentoAuditoriaDto,
   ResponseCreateDetalhamentoAuditoriaDto,
} from "../../dtos/detalhamento_auditoria/create_detalhamentos_auditoria.dto";
import {
   ResponseFindDetalhamentoAuditoriaDto,
   ResponseGetDetalhamentosAuditoriaDto,
} from "../../dtos/detalhamento_auditoria/get_detalhamentos_auditoria.dto";
import { PayloadUpdateDetalhamentoAuditoriaDto } from "../../dtos/detalhamento_auditoria/update_detalhamentos_auditoria.dto";
import { BaseAppError } from "../../errors/global_error.error";
import { Either } from "../../globals/errors/left_right_either.error";

interface IDetalhamentoAuditoriaService {
   getDetalhamentosAuditoria: (
      page: number,
      amount: number,
   ) => Promise<Either<BaseAppError, ResponseGetDetalhamentosAuditoriaDto>>;
   findDetalhamentoAuditoriaById: (
      id: string,
   ) => Promise<Either<BaseAppError, ResponseFindDetalhamentoAuditoriaDto>>;
   createDetalhamentAuditoria: (
      payload: PayloadCreateDetalhamentoAuditoriaDto,
   ) => Promise<Either<BaseAppError, ResponseCreateDetalhamentoAuditoriaDto>>;
   updateDetalhamentoAuditoria: (
      payload: PayloadUpdateDetalhamentoAuditoriaDto,
   ) => Promise<Either<BaseAppError, void>>;
   deleteDetalhamentoAuditoria: (
      id: string,
   ) => Promise<Either<BaseAppError, void>>;
   archiveDetalhamentoAuditoria: (
      id: string,
   ) => Promise<Either<BaseAppError, void>>;
}

export default IDetalhamentoAuditoriaService;
