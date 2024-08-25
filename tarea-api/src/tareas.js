"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareasRouter = void 0;
const express_1 = require("express");
let tareas = [];
let nextid = 1;
const TareasRouter = (0, express_1.Router)();
exports.TareasRouter = TareasRouter;
//Obtener todas las tareas
TareasRouter.get('/', (req, res) => {
    res.json(tareas);
});
//Crear una nueva tarea
TareasRouter.post('/', (req, res) => {
    const { descripcion } = req.body;
    if (!descripcion) {
        return res.status(400).json({ mensaje: 'La descripcion es obligatoria' });
    }
    const nuevaTarea = { id: nextid++, descripcion };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});
//Actualizar una tarea existente
TareasRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    const tarea = tareas.find(t => t.id === parseInt(id));
    if (!tarea) {
        return res.status(404).json({ mensaje: 'Tareas no encontrada' });
    }
    if (descripcion) {
        tarea.descripcion = descripcion;
    }
    res.json(tarea);
});
//Eliminar una tarea
TareasRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    tareas = tareas.filter(t => t.id !== parseInt(id));
    res.status(204).send();
});
