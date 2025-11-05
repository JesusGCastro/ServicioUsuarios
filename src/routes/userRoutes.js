import express from 'express';
import { register, login } from '../controllers/userController.js';
import { auth } from '../middleware/auth.js';
import User from '../models/user.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Ruta protegida
router.get('/perfil', auth, async (req, res) => {
  try {
    const usuario = await User.findByPk(req.userId);
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
});

export default router;
