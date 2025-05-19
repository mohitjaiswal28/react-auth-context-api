# react-auth-context-api 🔥

This demonstrates **authentication and protected routing** in a modern React application using `Context API`, `useReducer`, and `React Router`. It also introduces a custom `useLocalStorage` hook to persist user login across page reloads.

---

## 🔐 Authentication Flow

### 1. **Login**

- User credentials are mocked for simplicity.
- On login, user data is saved to:
  - `React Context` (for app-wide access)
  - `localStorage` (for persistence on refresh)

### 2. **Profile (Protected Route)**

- Only accessible when a user is authenticated.
- Redirects to `/login` if user is not logged in.

---

## 💡 Key Concepts Covered

| Feature           | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `Context API`     | Central store for user & auth state                   |
| `useReducer`      | Used for scalable auth state management               |
| `localStorage`    | Data persists even after refresh                      |
| `useLocalStorage` | Custom reusable hook for local storage get/set/remove |
| `React Router`    | Dynamic routing with protected routes                 |

---

## 🗂️ File Structure

```
src/
│
├── components/
│   ├── Login.tsx
│   └── Profile.tsx
│
├── context/
│   └── AuthContext/
│       ├── AuthContext.tsx
│       ├── AuthContextType.ts
│       └── authReducer.ts
│
├── hooks/
│   ├── useAuth.ts       ← Custom hook to access AuthContext
│   └── useLocalStorage.ts ← Custom hook to resue localStorage logic
│
├── routes/
│   ├── constant.ts
│   ├── publicRoutes.ts
│   └── privateRoutes.ts
│
├── styles/
│   ├── Login.ts
│   └── Profile.ts
│
├── types/
│   └── User.ts
│
└── App.tsx
```

---

## 💡 Topics Covered

- react
- react-router
- auth-context
- role-based-access
- localstorage
- context-api
- use-reducer
- protected-routes
- react-hooks

---

This project helps you understand React application with **global state**, and **protected routes**.

---

> Feel free to fork and ⭐️ this repo if it helps!
