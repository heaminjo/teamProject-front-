import { styled } from "styled-components";
import Button from "../../util/Button";

//입력받고 인증버튼 창 스타일링
const InputButtonComp = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  .inputWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    input {
      width: 64%;
      outline: none;
      font-size: 1em;
      padding: 0 10px;
      border: none;
      border-radius: 5px;
    }
  }
  .msg {
    position: absolute;
    padding-top: 5px;
    padding-left: 2px;
    letter-spacing: 0.8px;
    word-break: keep-all;
    font-size: 0.8em;
    font-weight: 600;
    &.fail {
      color: red;
    }
  }
`;

//입력받고 인증 버튼 함수형 컴포넌트
export const InputButton = (props) => {
  const {
    value,
    holder,
    changeEvt,
    type,
    btnChild,
    active,
    clickEvt,
    msg,
    msgType,
    disabled,
    width,
    height,
    back,
  } = props;

  return (
    <InputButtonComp>
      <div className="inputWrap">
        <input
          type={type ? type : "text"}
          defaultValue={value}
          placeholder={holder}
          onChange={(e) => changeEvt(e)}
          disabled={disabled}
        />
        <Button
          children={btnChild}
          active={active}
          clickEvt={clickEvt}
          width={width}
          height={height}
          back={back}
          fontSize="14px"
        />
      </div>
      {/* props에 따른 조건부 스타일링 */}
      <div className={`msg ${msgType ? "" : "fail"}`}>{msg}</div>
    </InputButtonComp>
  );
};

//입력창 스타일링
const InputComp = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  input {
    width: 100%;
    height: 48px;
    padding: 0 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
    &:disabled {
      opacity: 1;
      background-color: white;
    }
  }
  .msg {
    position: absolute;
    padding-top: 5px;
    padding-left: 2px;
    letter-spacing: 0.8px;
    word-break: keep-all;
    font-size: 0.8em;
    font-weight: 600;
    &.fail {
      color: red;
    }
  }
`;

//입력창 함수형 컴포넌트
//props를 통해 page에서 데이터를 받아온다.
//해당 입력창을 스타일링 하여 반환
export const Input = (props) => {
  const { value, holder, changeEvt, type, msg, msgType, disabled } = props;
  return (
    <InputComp>
      <input
        type={type ? type : "text"} //들어온게 없드면 text
        value={value}
        placeholder={holder}
        onChange={(e) => changeEvt(e)}
        disabled={disabled}
      />
      <div className={`msg ${msgType ? "" : "fail"}`}>{msg}</div>
    </InputComp>
  );
};

export const Address = (props) => {
  const { value, open } = props;
  return (
    <InputComp>
      <input
        type="text"
        placeholder="주소찾기"
        defaultValue={value}
        readOnly={true}
        onClick={open}
      />
    </InputComp>
  );
};

// 주소 보류
// export const Addr = (props) => {
//   const { value, open } = props;
//   return (
//     <InputComp>
//       <input
//         type="text"
//         placeholder="주소찾기"
//         defaultValue={value}
//         readOnly={true}
//         onClick={open}
//       />
//     </InputComp>
//   );
// };
