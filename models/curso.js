const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String }
});

const cursoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  profesor: { type: personaSchema, required: true },
  estudiantes: [personaSchema]
}, { timestamps: true });

module.exports = mongoose.model('Curso', cursoSchema);
