import express from 'express';
import { TareasRouter } from './tareas';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/tareas', TareasRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:5500`);
});
