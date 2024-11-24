import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import { UserContext } from "../../context/UserStore";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../util/Button";
const LoginCom = styled.section`
  width: 100%;
  height: 80vh;
  .container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    margin-top: 65px;
    padding-top: 50px;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
  }
  .inputBox {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;

    input {
      height: 40px;
      padding-left: 5px;
      outline: none;
    }
    button {
      margin-top: 90px;
    }
  }
  .menu {
    display: flex;
    gap: 10px;
    justify-content: end;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 12px;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const context = useContext(UserContext);
  // const { isLogin, setIsLogin } = context; //로그인 여부를 전역 저장

  // 키보드 입력 받기
  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(""); // 이메일 입력 여부
  const [isPwd, setIsPwd] = useState(""); // 패스워드 입력 여부

  //에러메세지
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPwd, setErrorPwd] = useState("");

  //입력창 갱신
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(e.target.value)) {
      setErrorEmail("이메일 형식이 올바르지않습니다.");
      setIsEmail(false);
    } else {
      setErrorEmail("");
      setIsEmail(true);
    }
  };
  const onChangePwd = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    setInputPwd(e.target.value);

    if (!passwordRegex.test(e.target.value)) {
      setErrorPwd("숫자+영문자 조합으로 8자리 이상 입력해주세요!");
      setIsPwd(false);
    } else {
      setErrorPwd("");
      setIsPwd(true);
    }
  };

  const onClickLogin = async () => {
    try {
      const rsp = await AxiosApi.login(inputEmail, inputPwd);
      console.log(rsp.data);
      alert("로그인에 성공하였습니다.");

      //로그인 여부 context 저장
      localStorage.setItem("email", inputEmail); // 저장
      localStorage.setItem("isLogin", "TRUE");
      navigate("/"); //메인홈으로 이동
    } catch (e) {
      alert("존재하지 않는 아이디입니다.");
    }
  };
  return (
    <LoginCom>
      <div className="container">
        <h1>로그인</h1>
        <div className="inputBox">
          <input
            type="text"
            placeholder="이메일"
            onChange={onChangeEmail}
            value={inputEmail}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={onChangePwd}
            value={inputPwd}
          />
          <Button children="로그인" clickEvt={onClickLogin} width="100%" />
          <div className="menu">
            <Link to={"/Signup"}>회원가입</Link>
            <Link to={"/FindPwd"}>비밀번호 찾기</Link>
          </div>
        </div>
      </div>
    </LoginCom>
  );
};
export default Login;
