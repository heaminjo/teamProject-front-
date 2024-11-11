import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
const Login = () => {
  // 키보드 입력 받기
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  // 유효성 검사
  const [isEmail, setIsEmail] = useState(""); // 이메일 입력 여부
  const [isPw, setIsPw] = useState(""); // 패스워드 입력 여부

  const navigate = useNavigate();

  //입력창 갱신
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    e.target.value.length > 5 ? setIsEmail(true) : setIsEmail(false);
  };
  const onChangePw = (e) => {
    setInputPw(e.target.value);
    e.target.value.length >= 5 ? setIsPw(true) : setIsPw(false);
  };

  const onClickLogin = async (email, pwd) => {
    const resp = AxiosApi.memberLogin(email, pwd);

    if (resp.date === true) {
      alert("로그인에 성공하였습니다.");
      navigate("/");
    } else {
      alert("로그인에 실패하였습니다.");
    }
  };
  return (
    <>
      <input type="text" placeholder="이메일" onChange={onChangeEmail} />
      <br />
      <input type="text" placeholder="비밀번호" onChange={onChangePw} />
      <br />

      <button onClick={onClickLogin}>로그인</button>
    </>
  );
};
export default Login;
