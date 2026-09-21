# 🏋️‍♂️ Workout Tracker API

API RESTful desarrollada en **Node.js** y **Express** para la gestión de usuarios, rutinas de entrenamiento, ejercicios y reportes de progreso. Proyecto diseñado bajo arquitectura **MVC** con enrutamiento versionado (`/api/v1`) y control de versiones guiado por la metodología **Gitflow**.

---

## 🛠️ Tecnologías Utilizadas

- **Entorno de ejecución:** Node.js
- **Framework backend:** Express.js
- **Gestión de variables de entorno:** dotenv
- **Seguridad y cabeceras:** CORS
- **Herramientas de desarrollo:** Nodemon
- **Control de versiones:** Git & GitHub

---

## 🚀 Instalación y Configuración Inicial

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/deossaandres170/workout-tracker.git](https://github.com/deossaandres170/workout-tracker.git)
   cd workout-tracker-api


## Instalar dependencias:

npm install

## 
## Configurar variables de entorno:

**Crea un archivo .env en la raíz con la siguiente estructura:**

DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
PORT=8000

## Iniciar en modo desarrollo:

npm run dev




## 📌 Tabla de Endpoints (`/api/v1`)

| Recurso | Método | Endpoint | Descripción | Estado HTTP |
| :--- | :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/api/v1/auth/register` | Registrar un nuevo usuario | `201 Created` / `400 Bad Request` |
| **Auth** | `POST` | `/api/v1/auth/login` | Autenticar credenciales y obtener acceso | `200 OK` / `400 Bad Request` |
| **Users** | `GET` | `/api/v1/users` | Listar todos los usuarios | `200 OK` |
| **Users** | `GET` | `/api/v1/users/:id` | Obtener un usuario por ID | `200 OK` / `404 Not Found` |
| **Users** | `PUT` | `/api/v1/users/:id` | Actualización completa de usuario | `200 OK` / `400 Bad Request` |
| **Users** | `PATCH` | `/api/v1/users/:id` | Actualización parcial de usuario | `200 OK` / `400 Bad Request` |
| **Users** | `DELETE` | `/api/v1/users/:id` | Eliminar un usuario | `204 No Content` |
| **Workouts** | `GET` | `/api/v1/workouts` | Listar rutinas (Soporta `?limit=N`) | `200 OK` |
| **Workouts** | `GET` | `/api/v1/workouts/:id` | Obtener rutina por ID | `200 OK` |
| **Workouts** | `POST` | `/api/v1/workouts` | Registrar nueva rutina | `201 Created` / `400 Bad Request` |
| **Workouts** | `DELETE` | `/api/v1/workouts/:id` | Eliminar rutina por ID | `204 No Content` / `404 Not Found` |
| **Exercises**| `GET` | `/api/v1/exercises` | Listar catálogo de ejercicios | `200 OK` |
| **Reports** | `GET` | `/api/v1/reports/progress`| Obtener reporte de progreso | `200 OK` |






## 🌳 Estrategia de Versionamiento (Gitflow)

El control de versiones del proyecto se organizó mediante la metodología Gitflow:

main: Alberga el código de producción etiquetado con versiones estables (v1.0.0).

develop: Rama de integración continua donde se consolidan las funcionalidades probadas.

feature/*: Ramas independientes para cada módulo del sistema (feat/users, feat/workouts, feature/auth, feature/reports, etc.).

release/*: Ramas de preparación para despliegue y etiquetado final.