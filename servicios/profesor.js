import profesor from '../models/profesor.js';
import conectarDB from '../conexion.js';

conectarDB();
const crearProfesor = async (nombre, email, materias) => {
  try {
    const profesor = new Profesor({ nombre, email, materias });
    await profesor.save();
    console.log('Profesor creado:', profesor);
    return profesor;
  } catch (error) {
    throw new Error('Error al crear profesor: ' + error.message);
  }
};

const obtenerProfesores = async () => {
  try {
    const profesores = await Profesor.find();
    console.log('Profesores obtenidos:', profesores);
    return profesores;
  } catch (error) {
    throw new Error('Error al obtener profesores: ' + error.message);
  }
}

const actualizarProfesor = async (id, datosActualizados) => {
  try {
    const profesor = await Profesor.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (!profesor) {
        throw new Error('Profesor no encontrado');
    }
    return profesor;
  } catch (error) {
    throw new Error('Error al actualizar profesor: ' + error.message);
  }
}

const eliminarProfesor = async (id) => {
  try {
    const profesor = await Profesor.findByIdAndDelete(id);
    if (!profesor) {
        throw new Error('Profesor no encontrado');
    }
    return profesor;
  } catch (error) {
    throw new Error('Error al eliminar profesor: ' + error.message);
  }
}


export default { crearProfesor, obtenerProfesores, actualizarProfesor, eliminarProfesor };