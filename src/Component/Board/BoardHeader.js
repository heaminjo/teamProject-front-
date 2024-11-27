import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BoardHeaderComp from "./BoardStyle";
import Button from "../../util/Button";

const BoardHeaderList = ({ categoryId, keyword, setKeyword, setIsLoading }) => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin");
  const { category, introduction } = (() => {
    console.log("개시판 재정의중");
    switch (categoryId) {
      case "post":
        return {
          category: "일반 게시글",
          introduction: "자랑스러운 반려들을 공유하는 광장",
        };
      case "question":
        return {
          category: "Q&A",
          introduction: "내 반려에 대해 궁금한것을 소통해봅니다.",
        };
    }
  })();

  //게시물 작성하러가기
  const onClickBtn = () => {
    if (isLogin === "TRUE") {
      navigate("/");
    } else {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/Login");
    }
  };
  return (
    <BoardHeaderComp>
      <div className="container">
        <div className="banner">
          <div className="bannerText">
            <h1>{category}</h1>
            <p>{introduction}</p>
          </div>
        </div>
        <div className="writeBox">
          <Button
            className="writeBtn"
            children="포스터 작성"
            clickEvt={onClickBtn}
            width="150px"
            height="60px"
            back="#fff"
            color="#000"
          />
        </div>
      </div>
    </BoardHeaderComp>
  );
};
export default BoardHeaderList;
