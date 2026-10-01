import mongoose from 'mongoose';

const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true, lowercase: true }
}, { timestamps: true });

export default mongoose.model('Estudiante', estudianteSchema);