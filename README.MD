# MERN To-Do App ✅

A full-stack **MERN (MongoDB, Express, React, Node.js)** application with **JWT authentication** and a clean **Tailwind CSS** UI.  
Users can **register, log in, and manage personal to-do lists** (create, toggle, delete).

---

## ✨ Features
- 🔐 User authentication (register/login) with JWT  
- 📝 Create, complete, and delete personal tasks  
- 🌙 Responsive Tailwind UI (dark mode ready)  
- 🔒 Protected API routes (only see your own todos)  
- ⚡ Built with **Vite + React** on the frontend  

---

## 🛠 Tech Stack
- **Frontend**: React + Vite, Tailwind CSS, Axios, React Router  
- **Backend**: Node.js, Express.js, Mongoose, JWT, bcrypt  
- **Database**: MongoDB Atlas (cloud) or local MongoDB  

---

## 📂 Project Structure
```
mern-to-do-app/
  ├── client/          # Frontend (React + Vite + Tailwind)
  └── server/          # Backend (Node + Express + MongoDB)
```

---

## 🚀 Getting Started

### 1) Clone the repo
```bash
git clone https://github.com/<your-username>/mern-to-do-app.git
cd mern-to-do-app
```

### 2) Backend setup
```bash
cd server
npm install
```
Create a `.env` file inside `server/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_ORIGIN=http://localhost:5173
```
Run backend:
```bash
npm run dev
```
Server runs at `http://localhost:5000`.

### 3) Frontend setup
```bash
cd ../client
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`.

> Tailwind (Vite plugin):  
> - Install: `npm install tailwindcss @tailwindcss/vite`  
> - Add to `vite.config.js`:
>   ```js
>   import tailwindcss from '@tailwindcss/vite'
>   export default defineConfig({ plugins: [react(), tailwindcss()] })
>   ```
> - Import in `src/index.css`:  
>   ```css
>   @import "tailwindcss";
>   ```

---

## 🧪 API Endpoints

### Auth
- `POST /api/auth/register` → register new user  
- `POST /api/auth/login` → login and get JWT  

### Todos (JWT required)
- `GET /api/todos` → list todos  
- `POST /api/todos` → add todo  
- `PUT /api/todos/:id` → update todo  
- `DELETE /api/todos/:id` → delete todo  

---

## 🔐 Notes
- Keep your `.env` out of Git (`.gitignore` includes it).
- Ensure the email in your Git `user.email` is verified on GitHub so commits link to your profile.

---

## 📸 Screenshots
Add images in a `docs/` folder and update paths:
- `docs/screenshot-auth.png`
- `docs/screenshot-dashboard.png`

---

## 📜 License
MIT License © 2025 [Your Name](https://github.com/<your-username>)
