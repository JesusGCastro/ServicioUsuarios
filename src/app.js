import express from 'express';
import userRoutes from './routes/userRoutes.js';
import sequelize from './config/db.js';

const app = express();
app.use(express.json());

// 👇 Aquí montas las rutas
app.use('/api/users', userRoutes);

sequelize.authenticate()
  .then(() => console.log('Conectado a PostgreSQL'))
  .catch(err => console.error('Error de conexión:', err));

export default app;
