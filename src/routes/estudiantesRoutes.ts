import { Router } from "express";
import EstudiantesController from "../controlles/estudiantes.controller";

const router = Router();

router.get('/', EstudiantesController.getEstudiantes)
router.post('/', EstudiantesController.postEstudiante)

export default router;