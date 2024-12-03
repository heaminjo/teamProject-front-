import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import React, { useEffect, useState } from "react";
import image from "../../images/Twitter.jpg";
import basicPhoto from "../../images/Twitter.jpg";
import falseHeart from "../../images/falseHeart.png";
import trueHeart from "../../images/trueHeart.png";
import BoardApi from "../../api/BoardApi";
import HeartButton from "../../util/HeartButton";
//하트아이콘 저작링크 <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘"> 아이콘 제작자: Smashicons - Flaticon</a>
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
    .greatNum {
      img {
        width: 12px;
        margin-right: 5px;
      }
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

    const [heartNum, setHeartNum] = useState(board.greatNum); //좋아요 수
    const [isHeart, setIsHeart] = useState(null); //하트아이콘
    const isLogin = localStorage.getItem("isLogin");
    const email = localStorage.getItem("email");

    //하트 아이콘 랜더링
    useEffect(() => {
      if (email === null) {
        setIsHeart(false);
      } else {
        isHeartCheck(board.id, email);
      }
    }, [isHeart]);

    //사용자 좋아요 여부
    const isHeartCheck = async (boardId, memberEmail) => {
      const resp = await BoardApi.boardIsHeart(boardId, memberEmail);
      console.log(resp.data);
      if (resp.data === true) {
        console.log("하트있음");
        setIsHeart(true);
      } else if (resp.data === false) {
        console.log("하트없음");
        setIsHeart(false);
      } else if (resp.data === undefined) {
        console.log("언디파인드임");
      }
    };
    //좋아요 업데이트
    const postHeart = async (boardId, memberEmail) => {
      const rsp = await BoardApi.boardHeart(boardId, memberEmail);

      console.log("현재 하트 상태" + isHeart);
      if (isHeart === true) {
        setIsHeart(false);
        setHeartNum(heartNum - 1);
      } else {
        setIsHeart(true);
        setHeartNum(heartNum + 1);
      }
    };

    //좋아요 클릭
    const onClickHeart = () => {
      if (isLogin !== "TRUE") {
        alert("로그인이 필요한 서비스 입니다.");
        navigate("/login");
      } else {
        postHeart(board.id, email);
      }
    };
    return (
      <>
        <BoardCardComp
          className="mapBox"
          // onClick={() => {
          //   navigate(`/board/post/${board.id}`);
          // }}
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
                <HeartButton isHeart={isHeart} onClickHeart={onClickHeart} />
                {heartNum}
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
