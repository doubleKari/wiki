import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="font-herculanum min-h-screen pt-[130px] px-5 bg-avatar-bg bg-center bg-no-repeat bg-cover">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
