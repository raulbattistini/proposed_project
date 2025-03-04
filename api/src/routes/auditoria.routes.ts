import { Router } from "express";

const auditoriaRoutes = Router();

auditoriaRoutes.get("/auditorias", (req, res) => {
    res.send("Auditando rotas");
});

export { auditoriaRoutes };