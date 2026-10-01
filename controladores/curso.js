import servicioscurso from '../servicios/curso.js';

const crearCurso = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const curso = await servicioscurso.crearCurso(nombre, descripcion);
    res.status(201).json(curso);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const obtenerCursos = async (req, res) => {
  try {
    const cursos = await servicioscurso.obtenerCursos();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const actualizarCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    const curso = await servicioscurso.actualizarCurso(id, datosActualizados);
    res.status(200).json(curso);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const eliminarCurso = async (req, res) => {
  try {
    const { id } = req.params; 
    const curso = await servicioscurso.eliminarCurso(id);
    res.status(200).json({ message: 'Curso eliminado correctamente', curso });
  }
    catch (error) {
    res.status(400).json({ message: error.message });
    }
}

export default { crearCurso, obtenerCursos, actualizarCurso, eliminarCurso };