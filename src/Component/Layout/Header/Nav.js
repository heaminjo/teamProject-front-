import { useNavigate } from "react-router-dom";

const Nav = (active) => {
  const navigate = useNavigate();

  const onClickMenu = (select) => {
    switch (select) {
      case 1: //게시글(광장)
        navigate("/Board/post");
        break;
      case 2: //Q&A
        navigate("/Board/question");
        break;
      case 3: //모임
        navigate("/gather");
        break;
      case 4: //채팅
        navigate("/chat");
        break;
      case 5: //마이페이지
        navigate("/mypage");
        break;
      default:
    }
  };
  return (
    <nav>
      <ul className="menu">
        <li>
          <div className="menuBtn" onClick={() => onClickMenu(1)}>
            광장
          </div>
          <ul className="subMenu">
            <li onClick={() => onClickMenu(1)}>게시글</li>
            <li onClick={() => onClickMenu(2)}>Q&A</li>
          </ul>
        </li>
        <li>
          <div className="menuBtn" onClick={() => onClickMenu(3)}>
            모임
          </div>
        </li>
        <li>
          <div className="menuBtn" onClick={() => onClickMenu(4)}>
            채팅
          </div>
        </li>
        <li>
          <div className="menuBtn" onClick={() => onClickMenu(5)}>
            마이페이지
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
