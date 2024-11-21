import { useState, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import Header from "../Component/Layout/Header/Header";
const Layout = () => {
  const navigate = useNavigate();
  // const context = useContext(UserContext);
  // const { isLogin, setIsLogin } = context; //로그인 여부

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
