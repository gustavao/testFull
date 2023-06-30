import Calificaciones from "../models/calificaciones";


const saveCalificacion = async (item:any) => {
    const responseInsert = await Calificaciones.create(item)
return responseInsert;
}

export {saveCalificacion};