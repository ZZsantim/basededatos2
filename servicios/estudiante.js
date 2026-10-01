import Estudiante from '../models/estudiante.js';
import conectarDB from '../conexion.js';

conectarDB();
const crearEstudiante = async (nombre, email) => {
  try {
    const estudiante = new Estudiante({ nombre, email });
    await estudiante.save();
    console.log('Estudiante creado:', estudiante);
    return estudiante;
  } catch (error) {
    throw new Error('Error al crear estudiante: ' + error.message);
  }
};

const obtenerEstudiantes = async () => {
  try {
    const estudiantes = await Estudiante.find();
    console.log('Estudiantes obtenidos:', estudiantes);
    return estudiantes;
  } catch (error) {
    throw new Error('Error al obtener estudiantes: ' + error.message);
  }
}

const actualizarEstudiante = async (id, datosActualizados) => {
  try {
    const estudiante = await Estudiante.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (!estudiante) {
        throw new Error('Estudiante no encontrado');
    }
    return estudiante;
  } catch (error) {
    throw new Error('Error al actualizar estudiante: ' + error.message);
  }
}

const eliminarEstudiante = async (id) => {
  try {
    const estudiante = await Estudiante.findByIdAndDelete(id);
    if (!estudiante) {
        throw new Error('Estudiante no encontrado');
    }
    return estudiante;
  } catch (error) {
    throw new Error('Error al eliminar estudiante: ' + error.message);
  }
}


export default { crearEstudiante, obtenerEstudiantes, actualizarEstudiante, eliminarEstudiante };