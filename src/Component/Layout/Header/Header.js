import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HeaderCom from "./HeaderStyle";
import { UserContext } from "../../../context/UserStore";
import Nav from "./Nav";

const Header = () => {
  const navigate = useNavigate();
  // const context = useContext(UserContext); //로그인 정보를 가져옴
  const isLogin = localStorage.getItem("isLogin");

  const memberLogout = () => {
    alert("로그아웃 되었습니다.");
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <HeaderCom>
      <div className="container">
        <div className="logo">
          {/* <img
              src={Logo}
              alt="로고"
              onClick={() => {
                navigate("/");
              }}
            /> */}
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            로고
          </h1>
        </div>
        <Nav />
        {isLogin === "TRUE" ? (
          <div className="auth">
            <div className="authBtn" onClick={memberLogout}>
              로그아웃
            </div>
          </div>
        ) : (
          <div className="auth">
            <Link className="authBtn" to={"/Login"}>
              로그인
            </Link>
            <Link className="authBtn" to={"/Signup"}>
              회원가입
            </Link>
          </div>
        )}
      </div>
    </HeaderCom>
  );
};
export default Header;
