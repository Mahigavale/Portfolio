import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home';
import GetInTouch from './Components/GetInTouch';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} /> {/* The default route for the Home component */}
      <Route path="get-in-touch" element={<GetInTouch />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
