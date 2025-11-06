import express from 'express';
import { register, login, registerSorteador } from '../controllers/userController.js';
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
    
    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const perfilUsuario = {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol 
    };

    res.json(perfilUsuario);

  } catch (err) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
});

export default router;