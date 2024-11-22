import { styled } from "styled-components";

const ButtonComp = styled.button`
  text-align: center;
  //props로 받아온 값이 있다면 || 없다면
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "40px"};
  color: ${(props) => props.color || "white"};
  font-weight: 600;
  font-size: ${(props) => props.fontSize || "1em"};
  border: 3px solid #fff;
  border-radius: 5px;
  transition: 0.4s ease-in;
  background-color: #1f1926;
  cursor: pointer;
  &.false:disabled {
    cursor: default;
    background-color: #fff;
  }
  &:hover {
    background-color: #fff;
    color: #1f1926;
  }
`;

// 활성/비활성 버튼
const Button = (props) => {
  const {
    children,
    width,
    height,
    fontSize,
    active,
    clickEvt,
    front,
    back,
    color,
    disabled,
  } = props;
  return (
    <>
      <ButtonComp
        disabled={disabled}
        color={color}
        $front={front}
        $back={back}
        width={width}
        height={height}
        fontSize={fontSize}
        //active : 이메일이 유효성 검사를 통과하지못했다면
        //className을 false로 한다.
        className={active ? "" : "false"}
        //클릭했을때 active가 true면 이벤트 실행
        onClick={() => {
          clickEvt();
        }}
      >
        {/* 버튼 이름: 중복검사 */}
        {children}
      </ButtonComp>
    </>
  );
};
export default Button;
