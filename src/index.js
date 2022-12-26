import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';
import LogIn from './components/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail/>,
  },
  {
    path: "/login",
    element: <LogIn/>,
  },
]);

<RouterProvider router={router} />

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div>
      <App/>
  <RouterProvider router={router} />
  </div>



);


