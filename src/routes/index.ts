import { Router } from "express";
import calificacionesRoutes from './calificacionesRoutes'
import estudiantesRoutes from './estudiantesRoutes'



const router = Router();

router.use('/estudiantes', estudiantesRoutes)
router.use('/calificaciones', calificacionesRoutes)

export default router;