import { Request, Response } from "express"
import { getAllEstudiantes, createEstudiante } from "../services/estudiantes.service";



class EstudiantesController {

 async  getEstudiantes(req: Request, res: Response){
        try {

            const estudiantes = await getAllEstudiantes();
            res.status(200).json(estudiantes)
            
        } catch (error) {
            console.log('Error get estudiantes', error);
            
            res.status(500).send('Error get estudiantes')
        }
    }

    async postEstudiante(req: Request, res: Response){
        try {
            const {nombre, edad, status} = req.body;

            const responseItem = await createEstudiante({nombre, edad, status});
            res.status(201).json(responseItem)
        } catch (error) {
            console.log('Error postEstudiante', error);
            
            res.status(500).send('Error postEstudiante')
        }
    }
}

export default new EstudiantesController();