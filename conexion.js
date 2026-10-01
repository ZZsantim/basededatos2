import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/colegio");
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1);
  }
};

export default conectarDB;