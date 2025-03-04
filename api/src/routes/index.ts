import { Router } from "express";
import { auditoriaRoutes } from "./auditoria.routes";


const router = Router();

router.use("/auditoria", auditoriaRoutes);

export default router;