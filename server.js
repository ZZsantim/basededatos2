require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cursosRouter = require('./routes/cursos');

const app = express();
app.use(express.json());

app.use('/cursos', cursosRouter);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API-REST-TRABAJO funcionando' });
});

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
  })
  .catch((error) => console.error('Error al conectar con MongoDB:', error.message));
