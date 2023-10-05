import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginAdmin from "./components/admin/LoginAdmin";
import LayoutAdmin from "./components/admin/LayoutAdmin";
import Abstract from "./components/admin/dashboard/sidebar-components/Abstract";
import SkillCategories from "./components/admin/dashboard/sidebar-components/SkillCategories";
import PortfolioAdd from "./components/admin/dashboard/sidebar-components/PortfolioAdd";
import ClientAdd from "./components/admin/dashboard/sidebar-components/ClientAdd";
import ManageContacts from "./components/admin/dashboard/sidebar-components/ManageContacts";
import ManageReviews from "./components/admin/dashboard/sidebar-components/ManageReviews";

import PageNotFound from "./components/PageNotFound";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/layout-admin" element={<LayoutAdmin />} />
        <Route path="/layout-admin/add-abstract" element={<Abstract />} />
        <Route
          path="/layout-admin/skill-categories"
          element={<SkillCategories />}
        />
        <Route path="/layout-admin/add-portfolio" element={<PortfolioAdd />} />
        <Route path="/layout-admin/add-client" element={<ClientAdd />} />
        <Route
          path="/layout-admin/manage-contact"
          element={<ManageContacts />}
        />
        <Route path="/layout-admin/manage-review" element={<ManageReviews />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
