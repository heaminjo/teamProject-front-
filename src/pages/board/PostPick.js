import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostPickComp = styled.div`
  width: 100%;
  background-color: #0c0125;
  .container {
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 125px 0;
    .PostBox {
      width: 400px;
      height: 400px;
      text-align: center;
      line-height: 400px;
      background-color: #fff;
      border-radius: 30px;
      font-size: 30px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: #aaa;
      }
    }
  }
`;
const PostPick = () => {
  const navigate = useNavigate();

  const onClickPick = (select) => {
    switch (select) {
      case 1:
        navigate("/Post/common");
        break;
      case 2:
        navigate("/Post/question");
        break;
    }
  };
  return (
    <>
      <PostPickComp>
        <div className="container">
          <div className="PostBox" onClick={() => onClickPick(1)}>
            <p>일반 게시글</p>
          </div>
          <div className="PostBox" onClick={() => onClickPick(2)}>
            <p>Q&A</p>
          </div>
        </div>
      </PostPickComp>
    </>
  );
};
export default PostPick;
