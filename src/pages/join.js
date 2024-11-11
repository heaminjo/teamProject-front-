import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
const join = () => {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [inputRePwd, setInputRePwd] = useState("");
  const [inputAlias, setInputAlias] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  //에러 메세지
  const [errorPwd, setErrorPwd] = useState("");
  const [errorRePwd, setErrorRePwd] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  //유효성 검사
  const [isEmail, setIsEmail] = useState("");
  const [isPwd, setIsPwd] = useState("");
  const [isAlias, setIsAlias] = useState("");
  const [isAddress, setIsAddress] = useState("");

  //이메일 입력
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(e.target.value)) {
      //만약 이메일 형식이 올바르지않다면
      setErrorEmail("이메일 형식이 올바르지않습니다.");
      setIsEmail(false);
    } else {
      setErrorEmail("");
      setIsEmail(true);
      //중복된 이메일 체크
      memberCheck(e.target.value);
    }
  };

  //회원가입 여부 확인
  const memberCheck = async (email) => {
    try {
      const resp = await AxiosApi.memberCheck(email);
      console.log("가입 가능 여부 확인 : ", resp.data);

      if (resp.data === true) {
        setErrorEmail("사용 가능한 아이디 입니다.");
        setIsEmail(true);
      } else {
        setErrorEmail("중복된 아이디 입니다.");
        setIsEmail(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>회원가입</h1>

      <input
        type="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
      />
      <br />
      <input type="password" placeholder="비밀번호" onChange={onChangePwd} />
      <br />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={inputPwd}
        onChange={onChangeRePwd}
      />
      <br />
      <input type="text" placeholder="이름" value={in} onChange={onChangeName} />
      <br />
      <input type="text" placeholder="나이" onChange={onChangeAge} />

      <button onClick={onClickJoin}>회원가입</button>
    </>
  );
};
