"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tareas_1 = require("./tareas");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api/tareas', tareas_1.TareasRouter);
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
