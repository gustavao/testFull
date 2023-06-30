import { Router } from "express";
import CalificacionesController from "../controlles/calificaciones.controller";


const router = Router();


router.post('/', CalificacionesController.postCalificacion);

export default router;