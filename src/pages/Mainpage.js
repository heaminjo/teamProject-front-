import { Link } from "react-router-dom";
import styled from "styled-components";

const Block = styled.div`
  height: 500px;
`;
const Mainpage = () => {
  return (
    <>
      <h1>메인페이지 입니다.</h1>
      {/* Link : 프로젝트 내에서 페이지 전환 */}
      <Link to={"/Login"}>로그인</Link>
      <Link to={"/Signup"}>회원가입</Link>
      <br />
      <Block>ㅎㅇ</Block>
      <br />
      <Block>ㅎㅇ</Block>
      <Block>ㅎㅇ</Block>
      <Block>ㅎㅇ</Block>
    </>
  );
};
export default Mainpage;
