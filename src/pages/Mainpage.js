import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <>
      <h1>메인페이지 입니다.</h1>
      {/* Link : 프로젝트 내에서 페이지 전환 */}
      <Link to={"/Login"}>로그인</Link>
      <Link to={"/join"}>회원가입</Link>
    </>
  );
};
export default Mainpage;
