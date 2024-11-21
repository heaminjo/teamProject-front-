import { useNavigate } from "react-router-dom";

const Nav = (active) => {
  const navigate = useNavigate();

  const onClickMenu = (select) => {
    switch (select) {
      case 1: //광장
        navigate("/board");
        break;
      case 2: //모임
        navigate("/gather");
        break;
      case 3: //채팅
        navigate("/chat");
        break;
      case 4: //마이페이지
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
        </li>
        <li>
          <div className="menuBtn" onClick={() => onClickMenu(2)}>
            모임
          </div>
        </li>
        <li>
          <div className="menuBtn" onClick={() => onClickMenu(3)}>
            채팅
          </div>
        </li>
        <li>
          <div className="menuBtn" onClick={() => onClickMenu(4)}>
            마이페이지
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
