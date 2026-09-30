require('dotenv').config();
const mongoose = require('mongoose');
const Curso = require('./models/curso');

const persona = (nombre) => ({
  nombre,
  email: nombre.toLowerCase().replace(/ /g, '.') + '@correo.com'
});

const cursos = [
  ['Bases de Datos', 'Modelado y consultas con MongoDB', 'Carlos Pérez', ['Ana Gómez', 'Luis Ramírez', 'Sofía Torres']],
  ['Programación Web', 'HTML, CSS y JavaScript', 'María López', ['Juan Díaz', 'Camila Rojas', 'Pedro Castro']],
  ['Estructuras de Datos', 'Listas, pilas, colas y árboles', 'Andrés Molina', ['Laura Vargas', 'Diego Herrera', 'Valentina Ruiz']],
  ['Ingeniería de Software', 'Metodologías ágiles y ciclo de vida', 'Paula Jiménez', ['Mateo Silva', 'Isabella Mora', 'Sebastián Peña']],
  ['Redes de Computadores', 'Protocolos y arquitectura de redes', 'Jorge Ortiz', ['Daniela Cruz', 'Felipe Rincón', 'Natalia Gil']],
  ['Sistemas Operativos', 'Procesos, memoria y archivos', 'Marta Suárez', ['Alejandro Duarte', 'Juliana Beltrán', 'Nicolás Parra']],
  ['Inteligencia Artificial', 'Introducción al aprendizaje automático', 'Ricardo Mejía', ['Carolina Ávila', 'Santiago Ponce', 'Mariana León']],
  ['Ciberseguridad', 'Fundamentos de seguridad informática', 'Elena Navarro', ['David Salazar', 'Paola Cortés', 'Tomás Acosta']],
  ['Desarrollo Móvil', 'Aplicaciones para Android e iOS', 'Héctor Vega', ['Lucía Montoya', 'Esteban Ríos', 'Gabriela Nieto']],
  ['Arquitectura de Software', 'Patrones y buenas prácticas de diseño', 'Sandra Quintero', ['Kevin Barrera', 'Melissa Cardona', 'Julián Osorio']]
].map(([nombre, descripcion, profesor, estudiantes]) => ({
  nombre,
  descripcion,
  profesor: persona(profesor),
  estudiantes: estudiantes.map(persona)
}));

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Curso.deleteMany({});
    const creados = await Curso.insertMany(cursos);
    console.log(`Se insertaron ${creados.length} cursos`);
  } catch (error) {
    console.error('Error en el seed:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
