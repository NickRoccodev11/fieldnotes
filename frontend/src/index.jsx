import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter, 
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import Root from './routes/Root'
import ErrorPage from './routes/ErrorPage';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Index from './routes/Index';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      }
    ]
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

