import express from 'express';
import profesorcontrolador from '../controladores/profesor.js';

const router = express.Router();

router.post('/', profesorcontrolador.crearProfesor);
router.get('/', profesorcontrolador.obtenerProfesores);
router.put('/:id', profesorcontrolador.actualizarProfesor);
router.delete('/:id', profesorcontrolador.eliminarProfesor);

export default router;
