import { Request, Response } from "express"
import { saveCalificacion } from "../services/calificaciones.service";



class CalificacionesController {

 async   postCalificacion(req: Request, res: Response){
        try {
            const {idEstudiante, calificacion, status} = req.body;

            const responseItem = await saveCalificacion({idEstudiante, calificacion, status});
            res.status(201).json(responseItem)
            
        } catch (error) {
            console.log('Error post calificaciones', error);
            res.status(500).send('Error post calificaciones')
        }
    }
}

export default new CalificacionesController();