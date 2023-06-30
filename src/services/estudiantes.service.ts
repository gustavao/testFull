import Estudiantes from "../models/estudiantes";


const getAllEstudiantes = async () => {
    const responseItem = await Estudiantes.findAll({
        include: 'calificaciones'
    });
return responseItem;
}

const createEstudiante = async (item:any) => {
    const responseInsert = await Estudiantes.create(item)
return responseInsert;
}

export {getAllEstudiantes, createEstudiante};