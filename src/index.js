import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NoPage from "./Components/NoPage";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReadMe from './Pages/readme';
import AddItem from './Pages/addItem';
import AdminConsole from './Pages/adminconsole';
import ManageInventory from './Pages/manageInventory';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/readme",
    element: <ReadMe/>
  },
  {
    path: "/addItemInventory",
    element: <AddItem/>
  },
  {
    path: "/manageInventory",
    element: <ManageInventory/>
  },
  {
    path: "/adminconsole",
    element: <AdminConsole/>
  },
  {
    path: "*",
    element: <NoPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
