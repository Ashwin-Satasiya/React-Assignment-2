import React from "react";

import { Outlet, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Footer />
      <Outlet />
    </div>
  );
}
