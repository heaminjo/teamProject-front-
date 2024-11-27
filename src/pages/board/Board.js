import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import BoardHeaderList from "../../Component/Board/BoardHeader";

const Board = () => {
  const navigate = useNavigate();
  //useParams을 이용해 라우터로 넘어올때 category 파라미터를 가져온다
  //일반게시글을 선택할경우 /Board/post로 이동하므로
  //category값으로 post가 넘어옴
  const { category } = useParams();

  // const context = useContext(UserContext);
  // const { loginStatus } = context;

  // 카테고리/ 키워드 관리
  const [categorySel, setCategorySel] = useState("");
  const [keyword, setKeyword] = useState("");

  // 백 여러번 호출 방지
  const [isLoading, setIsLoading] = useState(false);

  //페이지가 랜더링될때 useParams로 넘겨받은 category를 통해
  //이동한다.
  useEffect(() => {
    switch (category) {
      case "post":
        setCategorySel("게시물");
        break;
      case "question":
        setCategorySel("Q&A");
        break;
      default:
        navigate("/notfound");
        break;
    }
  }, [category]);

  return (
    <>
      <div>
        {/* 게시물에 대표제목(일반게시글 , Q&A라는걸 표시 등등) */}
        <BoardHeaderList
          categoryId={category}
          keyword={keyword}
          setKeyword={setKeyword}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
};

export default Board;
