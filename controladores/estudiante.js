import serviciosEstudiante from '../servicios/estudiante.js';

const crearEstudiante = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const estudiante = await serviciosEstudiante.crearEstudiante(nombre, email);
    res.status(201).json(estudiante);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const obtenerEstudiantes = async (req, res) => {
  try {
    const estudiantes = await serviciosEstudiante.obtenerEstudiantes();
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const actualizarEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    const estudiante = await serviciosEstudiante.actualizarEstudiante(id, datosActualizados);
    res.status(200).json(estudiante);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const eliminarEstudiante = async (req, res) => {
  try {
    const { id } = req.params; 
    const estudiante = await serviciosEstudiante.eliminarEstudiante(id);
    res.status(200).json({ message: 'Estudiante eliminado correctamente', estudiante });
  }
    catch (error) {
    res.status(400).json({ message: error.message });
    }
}

export default { crearEstudiante, obtenerEstudiantes, actualizarEstudiante, eliminarEstudiante };