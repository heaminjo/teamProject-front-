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
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  //에러 메세지
  const [errorPwd, setErrorPwd] = useState("");
  const [errorConPwd, setErrorConPwd] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorAlias, setErrorAlias] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  //유효성 검사
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isConPwd, setIsConPwd] = useState(false);
  const [isAlias, setIsAlias] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  //이메일 입력
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setInputEmail(email);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email) {
      setErrorEmail("필수 항목입니다.");
      setIsEmail(false);
    } else if (!emailRegex.test(email)) {
      //만약 이메일 형식이 올바르지않다면
      setErrorEmail("이메일 형식이 올바르지않습니다.");
      setIsEmail(false);
    } else {
      setErrorEmail("");
      setIsEmail(true);
    }
  };

  //비밀번호 입력
  const onChangePwd = (e) => {
    const pwd = e.target.value;
    setInputPwd(pwd);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (!pwd) {
      setErrorPwd("필수 항목입니다.");
      setIsPwd(false);
    } else if (!passwordRegex.test(pwd)) {
      setErrorPwd("숫자,영문자 8자 이상 입력해주세요.");
      setIsPwd(false);
    } else {
      setIsPwd(true);
      setErrorPwd("");
    }
  };

  //비밀번호 재입력
  const onChangeConPwd = (e) => {
    const conPwd = e.target.value;
    setInputConPwd(conPwd);
    if (!conPwd) {
      setErrorConPwd("필수 항목입니다.");
      setIsConPwd(false);
    } else if (inputPwd !== conPwd) {
      setErrorConPwd("비밀번호가 일치하지않습니다.");
      setIsConPwd(false);
    } else {
      setErrorConPwd("");
      setIsConPwd(true);
    }
  };
  //별명 입력
  const onChangeAlias = (e) => {
    const alias = e.target.value;
    setInputAlias(alias);
    if (!alias) {
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
  //이름 입력
  const onChangeName = (e) => {
    const name = e.target.value;
    setInputName(name);
    if (!name) {
      setErrorName("필수 항목입니다.");
      setIsName(false);
    } else if (name >= 5) {
      setErrorName("5자이내로 입력해주세요.");
      setIsName(false);
    } else {
      setErrorName("");
      setIsName(true);
    }
  };
  //휴대번호 입력
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setInputPhone(phone);

    const regex = /^\d{3}\d{4}\d{4}$/;
    if (!phone) {
      setErrorPhone("필수 항목입니다.");
    } else if (!regex.test([phone])) {
      setErrorPhone("잘못 입력 하셨습니다.");
      setIsPhone(false);
    } else {
      setErrorPhone("");
      setIsPhone(true);
    }
  };
  //주소 입력
  const onChangeAddress = (e) => {
    setInputAddress(e.target.value);
    if (!e.target.value) {
      setErrorAddress("필수 항목입니다.");
      setIsAddress(false);
    } else {
      setErrorAddress("");
      setIsAddress(true);
    }
  };

  //회원가입
  const onClickJoin = async () => {
    const resp = AxiosApi.signup(
      inputEmail,
      inputPwd,
      inputAlias,
      inputAddress,
      inputName,
      inputPhone
    );
    if (resp.data !== null) {
      alert("회원가입에 성공했습니다.");
      navigate("/");
    } else {
      alert("회원가입에 실패했습니다.");
    }
  };
  //이메일 중복 여부 확인
  const emailCheck = async (email) => {
    if (isEmail === false) {
      alert("이메일을 알맞게 입력해주세요.");
    } else {
      try {
        const resp = await AxiosApi.memberRegCheck(email);
        console.log("가입 가능 여부 확인 : ", resp.data);

        if (resp.data === true) {
          alert("사용 가능한 아이디입니다.");
          setIsEmailCheck(true);
        } else {
          alert("중복된 아이디 입니다.");
          setIsEmailCheck(false);
        }
      } catch (error) {
        console.log(error);
      }
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
      {isEmailCheck ? (
        <span>Good!</span>
      ) : (
        <button onClick={() => emailCheck(inputEmail)}>중복 확인</button>
      )}
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
        placeholder="이름"
        onChange={onChangeName}
        value={inputName}
      />
      <span>{errorName}</span>
      <br />
      <input
        type="text"
        placeholder="별명"
        value={inputAlias}
        onChange={onChangeAlias}
      />
      <span>{errorAlias}</span>
      <br />
      <input
        type="tel"
        placeholder="휴대번호(- 제외)"
        onChange={onChangePhone}
        value={inputPhone}
      />
      <span>{errorPhone}</span>
      <br />
      <input
        type="text"
        placeholder="주소"
        onChange={onChangeAddress}
        value={inputAddress}
      />
      <span>{errorAddress}</span>
      <br />
      {isEmail &&
      isPwd &&
      isAddress &&
      isAlias &&
      isConPwd &&
      isName &&
      isPhone &&
      isEmailCheck ? (
        <button enabled onClick={onClickJoin}>
          회원가입
        </button>
      ) : (
        <button disabled>회원가입</button>
      )}
    </>
  );
};
export default Signup;
