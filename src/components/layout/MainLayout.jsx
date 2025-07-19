import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router";
export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
