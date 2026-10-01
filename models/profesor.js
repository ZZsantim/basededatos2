import mongoose from 'mongoose';

const profesorSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true, lowercase: true },
  materias: [{ type: String, required: true, trim: true }]
}, { timestamps: true });

export default mongoose.model('Profesor', profesorSchema);
