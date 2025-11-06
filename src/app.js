import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'  
}));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Montar rutas
app.use('/api/users', userRoutes);

export default app;
