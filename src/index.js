import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home/>
  },
  {
  path: '/meus-cursos',
  element: <Courses />
  },
  {
  path: '/login',
  element: <Login />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

