import serviciosprofesor from '../servicios/profesor.js';
    
const crearProfesor = async (req, res) => {
  try {
    const { nombre, email, materias } = req.body;
    const profesor = await serviciosprofesor.crearProfesor(nombre, email, materias);
    res.status(201).json(profesor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const obtenerProfesores = async (req, res) => {
  try {
    const profesores = await serviciosprofesor.obtenerProfesores();
    res.status(200).json(profesores);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const actualizarProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    const profesor = await serviciosprofesor.actualizarProfesor(id, datosActualizados);
    res.status(200).json(profesor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const eliminarProfesor = async (req, res) => {
  try {
    const { id } = req.params; 
    const profesor = await serviciosprofesor.eliminarProfesor(id);
    res.status(200).json({ message: 'Profesor eliminado correctamente', profesor });
  }
    catch (error) {
    res.status(400).json({ message: error.message });
    }
}

export default { crearProfesor, obtenerProfesores, actualizarProfesor, eliminarProfesor };