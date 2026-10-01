import express from 'express';
import cursocontrolador from '../controladores/curso.js';

const router = express.Router();

router.post('/', cursocontrolador.crearCurso);
router.get('/', cursocontrolador.obtenerCursos);
router.put('/:id', cursocontrolador.actualizarCurso);
router.delete('/:id', cursocontrolador.eliminarCurso);

export default router;
