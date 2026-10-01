import express from 'express';
import estudianteControlador from '../controladores/estudiante.js';

const router = express.Router();

router.post('/', estudianteControlador.crearEstudiante);
router.get('/', estudianteControlador.obtenerEstudiantes);
router.put('/:id', estudianteControlador.actualizarEstudiante);
router.delete('/:id', estudianteControlador.eliminarEstudiante);

export default router;
