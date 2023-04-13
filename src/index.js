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
import EditItem from "./Pages/edit";
import FindItem from "./Pages/findItem";
import DeleteItem from "./Pages/deleteitem";
import AddAdmin from "./Pages/addadmin";
import RemoveAdmin from "./Pages/removeadmin";
import SignInPage from "./Pages/login";
import SignUpPage from "./Pages/register";
import WhatsAppLogin from "./Pages/whatsaapplogin";

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
    path: "/login",
    element: (
      <>
        <SignInPage />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <SignUpPage />
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
    path: "/whatslogin",
    element: (
      <>
        <NavBar />
        <WhatsAppLogin />
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
    path: "/edit",
    element: (
      <>
        <NavBar />
        <EditItem handlecanceledit={() => {}} />
      </>
    ),
  },
  {
    path: "/find",
    element: (
      <>
        <NavBar />
        <FindItem handlecanceledit={() => {}} />
      </>
    ),
  },
  {
    path: "/delete",
    element: (
      <>
        <NavBar />
        <DeleteItem handlecanceledit={() => {}} />
      </>
    ),
  },
  {
    path: "/addadmin",
    element: (
      <>
        <NavBar />
        <AddAdmin />
      </>
    ),
  },
  {
    path: "/removeadmin",
    element: (
      <>
        <NavBar />
        <RemoveAdmin />
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
