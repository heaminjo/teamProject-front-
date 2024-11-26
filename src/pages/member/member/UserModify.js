import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, InputButton } from "../../Component/Signup/SignupInput";
import AxiosApi from "../../api/AxiosApi";
import Button from "../../util/Button";
import basicProfile from "../../images/Twitter.jpg";
import MemberApi from "../../api/MemberApi";

const UserModifyComp = styled.section`
  padding-top: 50px;
  background-color: #0c0125;
  .container {
    width: 500px;
    border-radius: 50px;
    background-color: #fff;
    h2 {
      text-align: center;
      margin-bottom: 30px;
      color: #fff;
    }
    .inputBox {
      max-width: 400px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .userImage {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        img {
          width: 120px;
          border-radius: 100%;
        }
        button {
          position: absolute;
          bottom: 0;
          right: 120px;
          width: 60px;
          height: 30px;
          border: none;
          background-color: #0c0125;
          color: #fff;
          border-radius: 20px;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .userData {
        Input {
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
`;

const UserModify = () => {
  const navigate = useNavigate();
  const memberEmail = localStorage.getItem("email");
  const [memberInfo, setMemberInfo] = useState([]); //데이터는 배열로 받을것

  const [inputPwd, setInputPwd] = useState("");
  const [inputNewPwd, setInputNewPwd] = useState("");
  const [inputAlias, setInputAlias] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  //에러 메세지
  const [errorPwd, setErrorPwd] = useState("");
  const [errorAlias, setErrorAlias] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  //유효성 검사
  const [isOriginPw, setIsOriginPw] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isNewPwd, setIsNewPwd] = useState(false);
  const [isAlias, setIsAlias] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isModify, setIsModify] = useState(false);

  // 프로필 관련 ////////////////////////////////////////////////////
  const [imgSrc, setImgSrc] = useState("");
  const [file, setFile] = useState("");

  //멤버 정보 가져오기
  const memberGet = async () => {
    const rsp = await MemberApi.memberGet(memberEmail);
    if (rsp.status === 200) {
      console.log("상세회원정보 : " + rsp.data);
      setMemberInfo(rsp.data);
      setInputAlias(rsp.data.alias);
      setInputPhone(rsp.data.phone);
      setInputAddress(rsp.data.address);
      rsp.data.image ? setImgSrc(rsp.data.image) : setImgSrc(basicProfile);
    }
  };
  //화면 랜더링시 memberGet 호출
  useEffect(() => {
    memberGet();
  }, []);

  //입력창이 바뀔때마다 useEffect 실행하여 유효성 검사
  useEffect(() => {
    if (isAddress && isAlias && isPwd && isPhone && isPwd) {
      setIsModify(true);
    } else {
      setIsModify(false);
    }
  }, [isAddress, isAlias, isPwd, isPhone, isPwd]);

  //비밀번호 입력
  const onChangePwd = (e) => {
    const pwd = e.target.value;
    setInputPwd(pwd);
  };

  //비밀번호 입력
  const onChangeNewPwd = (e) => {
    const newPwd = e.target.value;
    setInputNewPwd(newPwd);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if (!passwordRegex.test(newPwd)) {
      setErrorPwd("숫자,영문자 8자 이상 입력해주세요.");
      setIsNewPwd(false);
    } else {
      setIsNewPwd(true);
      setErrorPwd("");
    }
  };
  //별명 입력
  const onChangeAlias = (e) => {
    const alias = e.target.value;
    setInputAlias(alias);
    if (alias >= 7) {
      setErrorAlias("6자이내로 입력해주세요.");
      setIsAlias(false);
    } else {
      setErrorAlias("");
      setIsAlias(true);
    }
  };

  //휴대번호 입력
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setInputPhone(phone);

    const regex = /^\d{3}\d{4}\d{4}$/;

    if (!regex.test([phone])) {
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
    setIsAddress(true);
  };

  //수정하기
  const onClickModify = async () => {
    const resp = MemberApi.memberModify(
      memberInfo.email,
      inputNewPwd,
      inputAlias,
      inputAddress,
      inputPhone
    );
    if (resp.data !== null) {
      alert("수정에 성공했습니다.");
      navigate("/");
    } else {
      alert("수정을 실패했습니다.");
    }
  };

  //비밀번호 확인
  const pwdCheck = () => {
    if (inputPwd === memberInfo.pwd) {
      setIsOriginPw(true);
      alert("비밀번호가 일치합니다. 새 비밀번호를 입력하세요");
    } else {
      alert("비밀번호가 맞지 않습니다.");
    }
  };
  return (
    <UserModifyComp>
      <div className="container">
        <h2>정보수정</h2>
        <div className="inputBox">
          <div className="userImage">
            <div className="imageBox">
              <img src={imgSrc} alt="" />
              <button>변경</button>
            </div>
          </div>
          <div className="userData">
            <InputButton
              value={inputPwd}
              holder="기존 비밀번호"
              type="password"
              changeEvt={onChangePwd}
              btnChild="비밀번호 검사"
              clickEvt={pwdCheck} //비밀번호 검사 함수
              width="100px"
              height="48px"
              back="#555"
            />
            <Input
              value={inputNewPwd}
              holder="새 비밀번호"
              changeEvt={onChangeNewPwd}
              type="password"
              msg={errorPwd}
              msgType={isPwd}
              disabled={!isOriginPw} //비밀번호 검사 성공시 !true(disabled해제가 들어감)
            />
            <Input
              value={inputAlias}
              holder="별명"
              changeEvt={onChangeAlias}
              msg={errorAlias}
              msgType={isAlias}
            />
            <Input
              value={inputPhone}
              holder="전화번호"
              changeEvt={onChangePhone}
              msg={errorPhone}
              msgType={isPhone}
            />
            <Input
              value={inputAddress}
              holder="주소"
              changeEvt={onChangeAddress}
              msg={errorAddress}
              msgType={isAddress}
            />
          </div>
          <Button
            children="수정하기"
            clickEvt={onClickModify}
            width="100%"
            active={inputAddress && inputAlias && inputPhone}
          />
        </div>
      </div>
    </UserModifyComp>
  );
};
export default UserModify;
