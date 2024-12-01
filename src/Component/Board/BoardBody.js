import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, InputButton } from "../Signup/SignupInput";
import BoardCard from "./BoardCard";
import BoardApi from "../../api/BoardApi";
import BoardBodyComp from "./BoardBodyStyle";
const BoardBodyList = ({ categoryName, isLoding, setIsLoading }) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1); //페이지 상태 기본값은 첫페이지
  const [sortBy, setSortBy] = useState("recent"); //최신순 / 오래된 순
  const [boardData, setBoardData] = useState([]); //리스트
  const [totalPage, setTotalPage] = useState(0); //총페이지
  const [isPost, setIsPost] = useState();
  //검색 입력
  const onChangeKeyword = (e) => {
    const keyword = e.target.value;
    setKeyword(keyword);
  };

  const onClickKeyword = () => {
    fetchBoardList(page);
  };
  //게시글 리스트 불러오기
  const fetchBoardList = async (page) => {
    const rsp = await BoardApi.getBoardList(
      page,
      sortBy,
      keyword,
      categoryName
    );
    if (rsp.data !== null) {
      setBoardData(rsp.data);
      setIsPost(true);
    } else {
      setIsPost(false);
    }
  };
  //게시글 리스트 불러오기
  useEffect(() => {
    fetchBoardList(page);
  }, [categoryName]);

  return (
    <BoardBodyComp>
      <div className="container">
        <div className="inputBox">
          <InputButton
            value={keyword}
            holder="게시글 검색"
            changeEvt={onChangeKeyword}
            type="text"
            btnChild="검색"
            clickEvt={onClickKeyword}
          />
        </div>
        <div className="boardListBox">
          {boardData && boardData.map((board) => <BoardCard board={board} />)}
        </div>
      </div>
    </BoardBodyComp>
  );
};
export default BoardBodyList;
