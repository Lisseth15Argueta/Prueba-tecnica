import {  Router, Request, Response, response } from "express";
import { request } from "http";
//Base de datos en memoria
interface Tarea{
    id: number;
    descripcion: string;
}

let tareas: Tarea[] = [];
let nextid = 1;

const TareasRouter = Router();

//Obtener todas las tareas
TareasRouter.get('/' , (req: Request, res: Response) => {
    res.json(tareas);
});

//Crear una nueva tarea
TareasRouter.post('/', (req: Request, res: Response) =>{
    const {descripcion} = req.body;
    if(!descripcion){
        return res.status(400).json({mensaje: 'La descripcion es obligatoria'});
    }

    const nuevaTarea = {id: nextid++, descripcion};
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
})

//Actualizar una tarea existente
TareasRouter.put('/:id', (req: Request, res: Response) =>{
    const{id} = req.params;
    const {descripcion} = req.body;
    const tarea = tareas.find(t => t.id === parseInt(id));
    if (!tarea){
        return res.status(404).json({mensaje: 'Tareas no encontrada'});
    }
    if (descripcion) {
        tarea.descripcion = descripcion;
      }
      res.json(tarea);
});

//Eliminar una tarea
TareasRouter.delete('/:id', (req: Request, res: Response) =>{
    const {id} = req.params;
    tareas = tareas.filter(t=> t.id !== parseInt(id));
    res.status(204).send();
});

export {TareasRouter};