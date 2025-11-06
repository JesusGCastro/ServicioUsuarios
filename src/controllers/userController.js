import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const register = async (req, res) => {
  try {
    const { nombre, correo, contrasenia } = req.body;

    const hashedPassword = await bcrypt.hash(contrasenia, 10);

    const user = await User.create({
      nombre,
      correo,
      contrasenia: hashedPassword
    });

    res.status(201).json({ message: 'Usuario registrado correctamente', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar usuario', detalle: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { correo, contrasenia } = req.body;

    const user = await User.findOne({ where: { correo } });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const isValid = await bcrypt.compare(contrasenia, user.contrasenia);
    if (!isValid) return res.status(401).json({ error: 'Contraseña incorrecta' });

    //Inlcusión del rol en el token JWT
    const token = jwt.sign({ id: user.id, rol: user.rol }, 'secreto', { expiresIn: '1h' });
    
    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión', detalle: error.message });
  }
};