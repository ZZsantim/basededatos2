import curso from '../models/curso.js';
import conectarDB from '../conexion.js';

conectarDB();
const crearCurso = async (nombre, descripcion) => {
  try {
    const curso = new Curso({ nombre, descripcion });
    await curso.save();
    console.log('Curso creado:', curso);
    return curso;
  } catch (error) {
    throw new Error('Error al crear curso: ' + error.message);
  }
};

const obtenerCursos = async () => {
  try {
    const cursos = await Curso.find();
    console.log('Cursos obtenidos:', cursos);
    return cursos;
  } catch (error) {
    throw new Error('Error al obtener cursos: ' + error.message);
  }
}

const actualizarCurso = async (id, datosActualizados) => {
  try {
    const curso = await Curso.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (!curso) {
        throw new Error('Curso no encontrado');
    }
    return curso;
  } catch (error) {
    throw new Error('Error al actualizar curso: ' + error.message);
  }
}

const eliminarCurso = async (id) => {
  try {
    const curso = await Curso.findByIdAndDelete(id);
    if (!curso) {
        throw new Error('Curso no encontrado');
    }
    return curso;
  } catch (error) {
    throw new Error('Error al eliminar curso: ' + error.message);
  }
}


export default { crearCurso, obtenerCursos, actualizarCurso, eliminarCurso };