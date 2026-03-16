# AGENTS.md - Rick & Morty Full Stack Project

## Project Overview
This is a full-stack Rick & Morty application allowing users to search, view, and manage favorite characters using the official Rick and Morty API.
- **Frontend:** React 18, Redux, React Router DOM, CSS Modules.
- **Backend:** Express.js, Node.js.
- **Testing:** Jest (Backend), React Testing Library (Frontend).

---

## 1. Build & Development Commands

### Prerequisites
- Node.js installed (v14+ recommended).
- Run `npm install` in both `Client` and `Server` directories.

### Server (Port 3001)
Located in `/Server`.
```bash
cd Server
npm install
npm start  # Runs with nodemon
```

### Client (Port 3000)
Located in `/Client`.
```bash
cd Client
npm install
npm start
```

### Testing
#### Server Tests (Jest)
Located in `/Server`.
```bash
cd Server
npm test
```
- **Run Single Test:**
  Use Jest's `--testNamePattern` flag.
  ```bash
  # Example: Run only the Login tests
  npm test -- --testNamePattern="GET /rickandmorty/login"
  ```
- **Run Specific File:**
  ```bash
  npm test test/index.test.js
  ```

#### Client Tests
Located in `/Client`.
```bash
cd Client
npm test
```
- Runs in interactive watch mode.
- Uses `react-scripts test` (Jest under the hood).

---

## 2. Code Style & Guidelines

### Project Structure
```
rick_and_morty/
├── Client/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Card/
│   │   │   ├── Cards/
│   │   │   └── ...
│   │   ├── redux/           # State management
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── Server/
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── routes/          # Express routers
│   │   ├── utils/           # Helpers (e.g., users.js)
│   │   ├── app.js           # Express app config
│   │   └── index.js         # Server entry point
│   └── package.json
└── AGENTS.md
```

### Naming Conventions
- **Components:** PascalCase (e.g., `SearchBar.jsx`, `Card.module.css`).
- **Functions/Variables:** camelCase (e.g., `onSearch`, `handleFavorite`).
- **Redux Action Types:** UPPERCASE_SNAKE_CASE (e.g., `ADD_FAV`, `REMOVE_FAV`).
- **CSS Modules:** File names ending in `.module.css` (e.g., `Card.module.css`).

### JavaScript/React Style
- **Architecture:** Container-Presentational Pattern.
  - Containers (logic): Handle state, API calls, Redux connection.
  - Presentational (UI): Receive props, render JSX, minimal logic.
- **State Management:**
  - Local State: `useState` hook.
  - Global State (Favorites): Redux.
    - Actions are functions returning objects with `type` and `payload`.
    - Reducer updates state immutably (return new object/spread).
- **Routing:**
  - Use `react-router-dom` v6.
  - Protected Routes: Check `access` state in `App.js` (`useEffect` redirect).
  - Navigation: `useNavigate` hook for programmatic navigation.
  - Links: `<Link to="/path">` elements.
- **API Calls:**
  - Use `axios`.
  - **Async/Await:** Preferred for readability (see Homework 6).
  - **Error Handling:** Wrap in `try/catch` blocks.
  - **Backend URL:** `http://localhost:3001/rickandmorty/...`
- **Forms:**
  - Controlled components (bind `value` to state).
  - Validation logic in separate `Validation.js` file.
  - `preventDefault()` on submit.

### Server Style (Node/Express)
- **Modules:** CommonJS (`require`/`module.exports`).
- **Controllers:**
  - Signature: `(req, res) => {}`.
  - Handle async operations with `try/catch` or `.then().catch()`.
  - Responses: `res.status(code).json(data)` or `res.send(text)`.
- **Routing:**
  - Mount router in `app.js`: `server.use('/rickandmorty', routes)`.
  - Define routes in `/routes/index.js`.
- **CORS:** Enabled via middleware in `app.js` (allows all origins `*`).

### CSS Styling
- **Method:** CSS Modules.
- **Scope:** Styles are scoped locally to components to prevent leaks.
- **Naming:** Class names in `.module.css` files (e.g., `.container`, `.btn`).
- **Import:**
  ```javascript
  import styles from './Card.module.css';
  // Usage: <div className={styles.container}>...</div>
  ```
- **Glassmorphism:** Project uses `backdrop-filter: blur()` and translucent backgrounds.

### Testing Style (Jest)
- **Backend:**
  - Use `supertest` for HTTP requests.
  - Structure: `describe('Route', () => { it('should...', async () => { ... }) })`.
  - Assertions: `expect(response.body).toEqual(...)` or `.toHaveProperty(...)`.
- **Frontend:**
  - Use `@testing-library/react`.
  - Render components, simulate events, assert DOM output.

### Git & Commits
- **Atomic Commits:** One logical change per commit.
- **Conventional Commits:** Follow format (e.g., `feat: add search bar`, `fix: resolve login loop`).
- **No AI Attribution:** Do not add "Co-Authored-By" for AI agents.

---

## 3. Key Workflows

### Adding a New Character to Favorites
1.  **Frontend:** User clicks "Heart" icon on `Card`.
2.  **Action:** `handleFavorite` dispatches `addFav(character)` action.
3.  **Redux Action:** `axios.post` to `http://localhost:3001/rickandmorty/fav`.
4.  **Backend:** `handleFavorites.js` controller adds to in-memory array.
5.  **Response:** Backend returns updated favorites array.
6.  **Reducer:** Updates `state.myFavorites` with new array.

### Removing a Character
1.  **Frontend:** User clicks "Heart" icon (filled) or "X" (on card).
2.  **Action:** Dispatches `removeFav(id)`.
3.  **Redux Action:** `axios.delete` to `http://localhost:3001/rickandmorty/fav/:id`.
4.  **Backend:** Filters array, removes matching ID.
5.  **Response:** Returns updated array.
6.  **Reducer:** Updates state.

### Login Flow
1.  **Form:** User inputs email/password.
2.  **Validation:** `Validation.js` checks regex/length.
3.  **Submit:** `login(userData)` function called.
4.  **API:** `axios.get` to `/rickandmorty/login?email=...&password=...`.
5.  **Backend:** Checks `utils/users.js` static array.
6.  **Response:** `{ access: true/false }`.
7.  **Frontend:** If true, `setAccess(true)` and `navigate('/home')`. If false, alert user.

---

## 4. Dependencies & Versions
- **React:** 18.2.0
- **React Router DOM:** 6.30.3
- **Redux:** 4.2.1
- **Express:** 4.18.2
- **Axios:** 1.4.0 (Client), 1.9.0 (Server)
- **Jest:** 30.3.0 (Server)

*Note: Axios 1.9+ breaks CRA/webpack 5; stick to 1.4.0 in Client if issues arise.*

## 5. Common Issues & Fixes
- **Port Conflict:** Ensure Port 3000 (Client) and 3001 (Server) are free.
- **CORS Errors:** Verify `res.header('Access-Control-Allow-Origin', '*')` is set in `app.js`.
- **State Not Updating:** Check if Redux actions are dispatched correctly and reducers return new state objects (immutability).
- **Duplicate Favorites:** Logic prevents duplicates in `App.js` `onSearch` or via backend filtering.
