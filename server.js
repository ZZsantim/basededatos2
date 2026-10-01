import express from 'express';
import estudianteRouter from './routes/estudiantes.js';
import profesorRouter from './routes/profesores.js';
import cursoRouter from './routes/cursos.js';


const app = express();
app.use(express.json());
app.use('/profesores', profesorRouter);
app.use('/cursos', cursoRouter);
app.use('/estudiantes', estudianteRouter);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API-REST-TRABAJO funcionando' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
