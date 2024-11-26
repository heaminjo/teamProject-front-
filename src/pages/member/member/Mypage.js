import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberApi from "../../api/MemberApi";
import MyInfo from "../../Component/Mypage/MyInfo";

const Mypage = () => {
  const isLogin = localStorage.getItem("isLogin");
  const memberEmail = localStorage.getItem("email");
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState([]); //데이터는 배열로 받을것

  const memberGet = async () => {
    const rsp = await MemberApi.memberGet(memberEmail);
    if (rsp.status === 200) {
      setMemberInfo(rsp.data);
      console.log("상세회원정보 : " + rsp.data);
    }
  };

  //로그인 상태가 아니라면 로그인 화면으로 이동
  useEffect(() => {
    if (isLogin !== "TRUE") {
      alert("로그인을 해야합니다.");
      navigate("/Login");
    } else {
      //화면이 그려지기전에 회원 상세 정보 가져오기
      memberGet();
    }
  }, []);

  return (
    <>
      <MyInfo memberInfo={memberInfo && memberInfo} />
    </>
  );
};
export default Mypage;
