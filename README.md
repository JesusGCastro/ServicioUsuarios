# ServicioUsuarios

Microservicio encargado de la gestión de usuarios dentro de una arquitectura basada en microservicios para una aplicación de sorteos.  
Este servicio permite el **registro** e **inicio de sesión** de usuarios, utilizando autenticación mediante **JSON Web Tokens (JWT)** y almacenamiento en **PostgreSQL**.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|-----------|-----|
| Node.js | Entorno de ejecución del backend |
| Express | Framework para construir la API REST |
| PostgreSQL | Base de datos relacional |
| Sequelize | ORM para manejar PostgreSQL |
| bcrypt | Encriptación de contraseñas |
| JWT (jsonwebtoken) | Manejo de autenticación |

---

## Instalación y configuración

### 1. Clonar el repositorio:
```bash
git clone <URL-del-repositorio>
cd ServicioUsuarios
```

### 2. Instalar dependencias:
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
PORT=3000
DATABASE_URL=postgresql://postgres:tu_password@localhost:5432/usuarios_db (O url de bd)
```

### 4. Ejecutar el microservicio: (local)
```bash
node src/server.js
```

