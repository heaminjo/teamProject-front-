import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import React from "react";
import image from "../../images/Twitter.jpg";
import basicPhoto from "../../images/Twitter.jpg";
const BoardCardComp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  margin: 0 auto;
  height: 500px;
  background-color: #e8d5b5;
  padding: 0px 30px;
  border-radius: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  /* @media only screen and (max-width: 768px) {
    height: 200px;
  }
  @media only screen and (max-width: 480px) {
    padding: 10px;
  } */
  .postTop {
    display: flex;
    padding: 10px;
    .memberProfile {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      height: 60px;
      .memberImg {
        width: 50px;
        height: 50px;
        img {
          width: 100%;
          border-radius: 100%;
        }
      }
      .memberAlias {
        font-weight: bold;
        font-size: 20px;
      }
    }
    .dateBox {
      font-size: 13px;
      text-align: end;
    }
  }
  .textBox {
    padding: 10px;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .titleText {
      font-weight: bold;
      margin-left: 10px;
    }
    .postSide {
      display: flex;
      gap: 10px;
      align-items: end;
      font-size: 13px;
    }
  }
`;

const ImgBoxComp = styled.div`
  width: 100%;
  height: 280px;
  margin: 0 auto;
  border-radius: 20px;
  background-image: url(${(props) => props.$imgsrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
`;

const BoardCard = React.memo(
  ({ board }) => {
    const navigate = useNavigate();
    const toDate = new Date(board.regDate);
    const regDate = toDate.toISOString().split("T")[0];
    // console.log("렌더링 보드 : " + board.id);

    return (
      <>
        <BoardCardComp
          className="mapBox"
          onClick={() => {
            navigate(`/board/post/${board.id}`);
          }}
        >
          <div className="postTop">
            <div className="memberProfile">
              <div className="memberImg">
                <img
                  src={
                    board && board.memberImage ? board.memberImage : basicPhoto
                  }
                  alt="profile"
                />
              </div>
              <div className="memberAlias">
                <p>{board.memberAlias}</p>
              </div>
            </div>
            <div className="dateBox">
              <p>{board.regDate}</p>
            </div>
          </div>
          <ImgBoxComp $imgsrc={board.image} />
          <div className="textBox">
            <div className="titleText">
              <h3>{board.title}</h3>
            </div>
            <div className="postSide">
              <div className="viewNum">
                <p>조회수 {board.views}</p>
              </div>
              <div className="greatNum">
                <p>좋아요 {board.greatNum}</p>
              </div>
            </div>
          </div>
        </BoardCardComp>
      </>
    );
  },
  (prevProps, nextProps) => prevProps.board.id === nextProps.board.id
);

export default BoardCard;
