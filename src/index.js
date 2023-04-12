import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NoPage from "./Components/NoPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReadMe from "./Pages/readme";
import AddItem from "./Pages/addItem";
import AdminConsole from "./Pages/adminconsole";
import ManageInventory from "./Pages/manageInventory";
import NavBar from "./Components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <App />
      </>
    ),
  },
  {
    path: "/readme",
    element: (
      <>
        <NavBar />
        <ReadMe />
      </>
    ),
  },
  {
    path: "/addItemInventory",
    element: (
      <>
        <NavBar />
        <AddItem />
      </>
    ),
  },
  {
    path: "/manageInventory",
    element: (
      <>
        <NavBar />
        <ManageInventory />
      </>
    ),
  },
  {
    path: "/adminconsole",
    element: (
      <>
        <NavBar />
        <AdminConsole />
      </>
    ),
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
