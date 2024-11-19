import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";

const Signup = () => {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [inputConPwd, setInputConPwd] = useState("");
  const [inputAlias, setInputAlias] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  //에러 메세지
  const [errorPwd, setErrorPwd] = useState("");
  const [errorConPwd, setErrorConPwd] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorAlias, setErrorAlias] = useState("");

  //유효성 검사
  const [isEmail, setIsEmail] = useState("");
  const [isPwd, setIsPwd] = useState("");
  const [isConPwd, setIsConPwd] = useState("");
  const [isAlias, setIsAlias] = useState("");
  const [isAddress, setIsAddress] = useState("");

  //이메일 입력
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!e.target.value) {
      setErrorEmail("필수 항목입니다.");
      setIsEmail(false);
    } else if (!emailRegex.test(e.target.value)) {
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

  //비밀번호 입력
  const onChangePwd = (e) => {
    setInputPwd(e.target.value);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    setInputPwd(e.target.value);
    if (e === null) {
      setErrorPwd("필수 항목입니다.");
      setIsPwd(false);
    } else if (!passwordRegex.test(e.target.value)) {
      setErrorPwd("숫자,영문자 8자 이상 입력해주세요.");
      setIsPwd(false);
    } else {
      setErrorPwd("");
      setIsPwd(true);
    }
  };

  //비밀번호 재입력
  const onChangeConPwd = (e) => {
    setInputConPwd(e.target.value);
    if (e.target.value === null) {
      setErrorConPwd("필수 항목입니다.");
      setIsPwd(false);
    } else if (!inputPwd === e.target.value) {
      setErrorConPwd("비밀번호가 일치하지않습니다.");
      setIsConPwd(false);
    } else {
      setErrorConPwd("");
      setIsConPwd(true);
    }
  };
  //별명 입력
  const onChangeAlias = (e) => {
    setInputAlias(e.target.value);
    const alias = e.target.value;
    if (e.target.value === null) {
      setErrorAlias("필수 항목입니다.");
      setIsAlias(false);
    } else if (alias >= 7) {
      setErrorAlias("6자이내로 입력해주세요.");
      setIsAlias(false);
    } else {
      setErrorAlias("");
      setIsAlias(true);
    }
  };
  //주소 입력
  const onChangeAddress = (e) => {
    setInputAddress(e.target.value);
  };

  const onClickJoin = async () => {
    const resp = AxiosApi.signup(
      inputEmail,
      inputPwd,
      inputAlias,
      inputAddress
    );
    if (resp.data !== null) {
      alert("회원가입에 성공했습니다.");
      navigate("/");
    } else {
      alert("회원가입에 실패했습니다.");
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
      <span>{errorEmail}</span>
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        value={inputPwd}
        onChange={onChangePwd}
      />
      <span>{errorPwd}</span>
      <br />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={inputConPwd}
        onChange={onChangeConPwd}
      />
      <span>{errorConPwd}</span>
      <br />
      <input
        type="text"
        placeholder="별명"
        value={inputAlias}
        onChange={onChangeAlias}
      />
      <br />
      <span>{errorAlias}</span>
      <input
        type="text"
        placeholder="주소"
        onChange={onChangeAddress}
        value={inputAddress}
      />
      <button onClick={onClickJoin}>회원가입</button>
    </>
  );
};
export default Signup;
