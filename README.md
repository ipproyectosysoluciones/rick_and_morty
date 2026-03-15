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
Se solucionaron un total de 24 bugs distribuidos en las siguientes fases:

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
- **Fase 6 (UI/UX):**
  - Corrección de tipografía en título "Rick and Morty" (antes "Riack").
  - Arreglo de comentario ESLint malformado en `Favorites`.
  - Corrección de sintaxis CSS nesting (`&:hover` → `.class:hover`).
  - Adición de atributos de accesibilidad: `id`, `aria-label`, `placeholder`.
  - Corrección de anidamiento inválido `<button><Link>` → `<Link>` con estilos.
  - Arreglo del handler `onClose` en `Favorites` (antes undefined).

### Notas de Arquitectura
- **Patrón Container-Presentational:** Separación de la lógica de los componentes visuales.
- **Redux:** Utilizado para el manejo del estado global de los favoritos.
- **Express REST API:** Actúa como proxy para las peticiones a la API externa.
- **CSS Modules:** Estilos encapsulados por componente para evitar colisiones.

### Diseño UI/UX
- **Glassmorphism:** Sistema de diseño con tarjetas translúcidas y efecto `backdrop-filter: blur`.
- **Paleta de colores:** Portal Green (`#97ce4c`), Portal Blue (`#00b0c8`), Red accent (`#ff6b6b`).
- **Responsive Design:** Breakpoints para Mobile (`<480px`), Tablet (`480-768px`), Desktop (`>768px`).
- **Accesibilidad:** Atributos `aria-label`, `id` en inputs, placeholders descriptivos.

### Librerías (Versiones Actualizadas)
| Paquete | Anterior | Actual |
|---------|----------|--------|
| client `react-router-dom` | 6.11.2 | 6.30.3 |
| client `axios` | 1.4.0 | 1.4.0 (mantenido)* |
| server `axios` | 1.4.0 | 1.9.0 |
| server `morgan` | 1.10.0 | 1.10.1 |
| server `nodemon` | 2.0.22 | 3.1.14 |

*Axios 1.9+ rompe CRA/webpack 5 por dependencias de Node.js core. Se mantiene en 1.4.0.

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
A total of 24 bugs were fixed across the following phases:

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
- **Phase 6 (UI/UX):**
  - Fixed title typo "Rick and Morty" (was "Riack").
  - Fixed malformed ESLint comment in `Favorites`.
  - Fixed CSS nesting syntax (`&:hover` → `.class:hover`).
  - Added accessibility attributes: `id`, `aria-label`, `placeholder`.
  - Fixed invalid nesting `<button><Link>` → `<Link>` with styles.
  - Fixed `onClose` handler in `Favorites` (was undefined).

### Architecture Notes
- **Container-Presentational Pattern:** Separation of logic from UI components.
- **Redux:** Used for global state management of favorites.
- **Express REST API:** Acts as a proxy for external API requests.
- **CSS Modules:** Component-scoped styles to prevent collisions.

### UI/UX Design
- **Glassmorphism:** Design system with translucent cards and `backdrop-filter: blur`.
- **Color Palette:** Portal Green (`#97ce4c`), Portal Blue (`#00b0c8`), Red accent (`#ff6b6b`).
- **Responsive Design:** Breakpoints for Mobile (`<480px`), Tablet (`480-768px`), Desktop (`>768px`).
- **Accessibility:** `aria-label` attributes, `id` on inputs, descriptive placeholders.

### Libraries (Updated Versions)
| Package | Previous | Current |
|---------|----------|---------|
| client `react-router-dom` | 6.11.2 | 6.30.3 |
| client `axios` | 1.4.0 | 1.4.0 (kept)* |
| server `axios` | 1.4.0 | 1.9.0 |
| server `morgan` | 1.10.0 | 1.10.1 |
| server `nodemon` | 2.0.22 | 3.1.14 |

*Axios 1.9+ breaks CRA/webpack 5 due to Node.js core dependencies. Kept at 1.4.0.

### Server Endpoints
- `GET /rickandmorty/character/:id` — Get character by ID.
- `GET /rickandmorty/login?email=&password=` — User login.
- `POST /rickandmorty/fav` — Add character to favorites.
- `DELETE /rickandmorty/fav/:id` — Remove character from favorites.
- `GET /rickandmorty/fav` — Get all favorites.
