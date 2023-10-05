import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

import "bootstrap/dist/js/bootstrap.min.js";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Layout /> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-products" element={<Product />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
