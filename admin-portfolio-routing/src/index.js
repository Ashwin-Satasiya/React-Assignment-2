import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.min.css";
// User panel start
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
// User panel end
import PageNotFound from "./components/PageNotFound";
// Admin panel start
import LoginAdmin from "./components/admin/LoginAdmin";
import LayoutAdmin from "./components/admin/LayoutAdmin";
import ManageCustomer from "./components/admin/sidebar-components/ManageCustomer";
// Admin panel end
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Layout /> */}

    <BrowserRouter>
      <Routes>
        {/* User panel routing*/}
        <Route path="/" element={<Layout />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />

        {/* Admin panel routing */}
        <Route path="login-admin" element={<LoginAdmin />} />
        <Route path="login-admin/dashboard-admin" element={<LayoutAdmin />} />
        <Route
          path="login-admin/manage-customer"
          element={<ManageCustomer />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
