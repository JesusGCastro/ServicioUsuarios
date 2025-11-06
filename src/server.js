import app from './app.js';
import sequelize from './config/db.js';
import User from './models/user.js'; // IMPORTANTE: para que cree la tabla

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conectado a PostgreSQL');
    return sequelize.sync({ alter: true }); // Crea o actualiza tablas
  })
  .then(() => {
    console.log('Modelos sincronizados con la BD');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => console.error('Error de conexión:', err));