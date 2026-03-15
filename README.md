# Rick & Morty App

[🇪🇸 Español](#-español) | [🇬🇧 English](#-english)

---

## 🇪🇸 Español

### Resumen del Proyecto
Aplicación full-stack de Rick & Morty que permite buscar, visualizar y gestionar personajes favoritos utilizando la API oficial de Rick and Morty.

### Stack Tecnológico
- **Cliente:** React 18, Redux, React Router DOM, CSS Modules
- **Servidor:** Express, Axios, CORS, Morgan
- **Testing:** Jest, Supertest

### Estructura del Proyecto
```
rick_and_morty/
├── Client/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── about/About.jsx
│   │   │   ├── card/Card.jsx + Card.module.css
│   │   │   ├── cards/Cards.jsx + Cards.module.css
│   │   │   ├── detail/Detail.jsx + Detail.module.css
│   │   │   ├── error404/Error404.jsx + Error404.module.css
│   │   │   ├── favorites/Favorites.jsx
│   │   │   ├── form/Form.jsx + Validation.js
│   │   │   ├── nav/Nav.jsx
│   │   │   └── searchBar/SearchBar.jsx + SearchBar.module.css
│   │   └── redux/
│   │       ├── actions.js
│   │       ├── actions-types.js
│   │       ├── reducer.js
│   │       └── store.js
│   └── package.json
├── Server/
│   ├── src/
│   │   ├── app.js
│   │   ├── index.js
│   │   ├── controllers/
│   │   │   ├── getCharById.js
│   │   │   ├── login.js
│   │   │   └── handleFavorites.js
│   │   ├── routes/index.js
│   │   └── utils/users.js
│   ├── test/index.test.js
│   └── package.json
└── README.md
```

### Instrucciones de Configuración
1. Clonar el repositorio.
2. **Servidor:**
   ```bash
   cd Server
   npm install
   npm start
   ```
   El servidor corre en el puerto **3001**.
3. **Cliente:**
   ```bash
   cd Client
   npm install
   npm start
   ```
   El cliente corre en el puerto **3000**.
4. **Tests:**
   ```bash
   cd Server
   npm test
   ```
   Se incluyen 9 tests integrados.

### Credenciales de Acceso
- **Email:** `ejemplo@gmail.com`
- **Password:** `1ABcde`

### API
Se utiliza la [Rick and Morty API](https://rickandmortyapi.com/), que cuenta con un total de 826 personajes.

### Funcionalidades
- Autenticación de usuario (login/logout).
- Búsqueda de personajes por ID.
- Botón para obtener un personaje aleatorio.
- Vista detallada de cada personaje.
- Gestión de favoritos (agregar/eliminar) mediante Redux.
- Filtrado de favoritos por género (Male, Female, Genderless, Unknown).
- Ordenamiento de favoritos (Ascendente/Descendente).
- Prevención de personajes duplicados en la lista.
- Página de error 404 personalizada.
- Sección "About" con información del proyecto.

### Errores Corregidos
Se solucionaron un total de 18 bugs distribuidos en las siguientes fases:

- **Fase 1 (Servidor):**
  - Corregido el orden de los parámetros `(res, req)` en 4 funciones controladoras.
  - Modularización del servidor mediante la separación de `app.js`.
  - Corrección de error tipográfico en `package.json` y adición de dependencias de test faltantes.
  - Creación y configuración de la suite de tests.
- **Fase 2 (Cliente):**
  - Solucionado bucle recursivo en el componente `Form`.
  - Corrección en el cierre de sesión y gestión de estado en `Nav`.
  - Ajuste de la lógica booleana en `setAccess`.
  - Corrección de la validación de email que se encontraba invertida.
  - Arreglo de error tipográfico en el filtro de género de `Favorites` y su funcionalidad de toggle.
  - Renombrado de propiedad en el estado del reducer para mayor claridad.
  - Eliminación de datos no serializables en las acciones de Redux.
- **Fase 3 (Funcionalidades):**
  - Implementación del componente `Error404` y su respectiva ruta.
  - Adición del botón de personaje aleatorio.
  - Implementación de lógica para prevenir personajes duplicados.

### Notas de Arquitectura
- **Patrón Container-Presentational:** Separación de la lógica de los componentes visuales.
- **Redux:** Utilizado para el manejo del estado global de los favoritos.
- **Express REST API:** Actúa como proxy para las peticiones a la API externa.
- **CSS Modules:** Estilos encapsulados por componente para evitar colisiones.

### Endpoints del Servidor
- `GET /rickandmorty/character/:id` — Obtener personaje por ID.
- `GET /rickandmorty/login?email=&password=` — Login de usuario.
- `POST /rickandmorty/fav` — Agregar personaje a favoritos.
- `DELETE /rickandmorty/fav/:id` — Eliminar personaje de favoritos.
- `GET /rickandmorty/fav` — Obtener lista completa de favoritos.

---

## 🇬🇧 English

### Project Overview
A full-stack Rick & Morty application that allows users to search, view, and manage favorite characters using the official Rick and Morty API.

### Tech Stack
- **Client:** React 18, Redux, React Router DOM, CSS Modules
- **Server:** Express, Axios, CORS, Morgan
- **Testing:** Jest, Supertest

### Project Structure
```
rick_and_morty/
├── Client/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── about/About.jsx
│   │   │   ├── card/Card.jsx + Card.module.css
│   │   │   ├── cards/Cards.jsx + Cards.module.css
│   │   │   ├── detail/Detail.jsx + Detail.module.css
│   │   │   ├── error404/Error404.jsx + Error404.module.css
│   │   │   ├── favorites/Favorites.jsx
│   │   │   ├── form/Form.jsx + Validation.js
│   │   │   ├── nav/Nav.jsx
│   │   │   └── searchBar/SearchBar.jsx + SearchBar.module.css
│   │   └── redux/
│   │       ├── actions.js
│   │       ├── actions-types.js
│   │       ├── reducer.js
│   │       └── store.js
│   └── package.json
├── Server/
│   ├── src/
│   │   ├── app.js
│   │   ├── index.js
│   │   ├── controllers/
│   │   │   ├── getCharById.js
│   │   │   ├── login.js
│   │   │   └── handleFavorites.js
│   │   ├── routes/index.js
│   │   └── utils/users.js
│   ├── test/index.test.js
│   └── package.json
└── README.md
```

### Setup Instructions
1. Clone the repository.
2. **Server:**
   ```bash
   cd Server
   npm install
   npm start
   ```
   The server runs on port **3001**.
3. **Client:**
   ```bash
   cd Client
   npm install
   npm start
   ```
   The client runs on port **3000**.
4. **Tests:**
   ```bash
   cd Server
   npm test
   ```
   Includes 9 integrated tests.

### Login Credentials
- **Email:** `ejemplo@gmail.com`
- **Password:** `1ABcde`

### API
Powered by the [Rick and Morty API](https://rickandmortyapi.com/), featuring 826 characters.

### Features
- User authentication (login/logout).
- Character search by ID.
- Random character button.
- Detailed character view.
- Add/remove favorites using Redux.
- Filter favorites by gender (Male, Female, Genderless, Unknown).
- Sort favorites (Ascending/Descending).
- Duplicate character prevention.
- Custom 404 error page.
- About page.

### Bugs Fixed
A total of 18 bugs were fixed across the following phases:

- **Phase 1 (Server):**
  - Fixed `(res, req)` parameter order in 4 controller functions.
  - Modularized the server by separating `app.js`.
  - Fixed `package.json` typo and added missing test dependencies.
  - Created and configured the test suite.
- **Phase 2 (Client):**
  - Fixed recursive loop in the `Form` component.
  - Fixed logout and state management in `Nav`.
  - Corrected boolean logic in `setAccess`.
  - Fixed inverted email validation logic.
  - Fixed gender filter typo in `Favorites` and its toggle functionality.
  - Renamed state property in the reducer for better clarity.
  - Removed non-serializable data from Redux actions.
- **Phase 3 (Features):**
  - Created `Error404` component and its route.
  - Added random character button.
  - Implemented duplicate character prevention.

### Architecture Notes
- **Container-Presentational Pattern:** Separation of logic from UI components.
- **Redux:** Used for global state management of favorites.
- **Express REST API:** Acts as a proxy for external API requests.
- **CSS Modules:** Component-scoped styles to prevent collisions.

### Server Endpoints
- `GET /rickandmorty/character/:id` — Get character by ID.
- `GET /rickandmorty/login?email=&password=` — User login.
- `POST /rickandmorty/fav` — Add character to favorites.
- `DELETE /rickandmorty/fav/:id` — Remove character from favorites.
- `GET /rickandmorty/fav` — Get all favorites.
