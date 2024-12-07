import { useState } from "react";
import { Input } from "../Signup/SignupInput";
import PostWriteStyle from "./PostWriteStyle";
import basicImg from "../../images/거북이.webp";
import BoardApi from "../../api/BoardApi";
import { useNavigate } from "react-router-dom";
import Button from "../../util/Button";

import { storage } from "../../api/firebase";
const PostWrite = ({ categorySel }) => {
  const { categoryName, contentHdr } = (() => {
    switch (categorySel) {
      case "common":
        return {
          categoryName: "일반 게시글 작성",
          contentHdr: "여러분들의 반려동물에 대한 이야기를 적어주세요.",
        };
      case "question":
        return {
          categoryName: "질문 작성",
          contentHdr: "반려동물에 관하여 궁금한 이야기를 적어주세요.",
        };
    }
  })();

  const memberEmail = localStorage.getItem("email");
  const navigate = useNavigate();

  //입력창
  const [inputCount, setInputCount] = useState(0); //input 글자수
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  //유효성
  const [isTitle, setIsTitle] = useState(false);
  const [isContent, setIsContent] = useState(false);
  const [isImage, setIsImage] = useState(false);

  //이미지 업로드
  const [imgSrc, setImgSrc] = useState(basicImg); //사용자에게 미리보기로 보여줌
  const [file, setFile] = useState(""); //서버로 보내질 파일
  //입력

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setInputCount(title.length);
    setInputTitle(title);
    if (title.length > 0) {
      setIsTitle(true);
    } else {
      setIsTitle(false);
    }
  };

  const onChangeContent = (e) => {
    const content = e.target.value;
    setInputContent(content);
    if (content.length > 0) {
      setIsContent(true);
    } else {
      setIsContent(false);
    }
  };

  // //입력받은 이미지 파일 주소
  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files?.[0];

    //선택된 파일이 있다면
    if (selectedFile) {
      //선택된 이미지 파일을 DOMstring으로 변환
      const objectUrl = URL.createObjectURL(selectedFile);
      setImgSrc(objectUrl);
      setFile(selectedFile);
      setIsImage(true);
    }
  };

  const onClickSubmit = async () => {
    if (imgSrc !== basicImg) {
      console.log("이미지 등록됐습니다.");
      try {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);

        // 파일을 업로드하고 기다립니다.
        await fileRef.put(file);
        console.log("File uploaded successfully!");

        // 다운로드 URL을 가져오고 기다립니다.
        const url = await fileRef.getDownloadURL();
        console.log("저장경로 확인 : " + url);

        newPost(url);
        console.log(url);
      } catch (error) {
        // 에러를 처리합니다.
        console.error("Upload failed", error);
      }
    } else {
      newPost();
    }
  };

  //등록하기
  const newPost = async (url) => {
    const rsp = await BoardApi.boardWrite(
      categorySel,
      inputTitle,
      inputContent,
      url,
      memberEmail
    );
    if (rsp.data === true) {
      alert("등록이 완료 되었습니다.");
      navigate(`/board/${categorySel}`);
    }
  };
  //취소하기
  const onClickCancel = () => {
    navigate(`/board/${categorySel}`);
  };
  return (
    <PostWriteStyle>
      <div className="container">
        <h2>{categoryName}</h2>
        <div className="inputBox">
          <div className="inputTitle">
            <Input
              value={inputTitle}
              holder="제목 입력 (20자 이내)"
              changeEvt={onChangeTitle}
              type="text"
              max="20"
            />
            <div className="titleMax">
              <p>
                <span>{inputCount}</span>
                <span>/20</span>
              </p>
            </div>
          </div>
          <div className="inputContent">
            <Input
              value={inputContent}
              holder={contentHdr}
              changeEvt={onChangeContent}
              type="text"
            />
          </div>
          <div className="inputImage">
            <div className="imgBox">
              <img src={imgSrc} alt="이미지 미리보기" />
            </div>
            <label>
              <Input changeEvt={(e) => handleFileInputChange(e)} type="file" />
              <span>이미지 선택하기</span>
            </label>
          </div>
        </div>
        <div className="subBtn">
          <Button
            children="등록하기"
            clickEvt={onClickSubmit}
            width="150px"
            height="60px"
            back="#fff"
            color="#000"
            active={isTitle && isContent && isImage}
          />
          <Button
            children="취소하기"
            clickEvt={onClickCancel}
            width="150px"
            height="60px"
            back="#fff"
            color="#000"
          />
        </div>
      </div>
    </PostWriteStyle>
  );
};
export default PostWrite;
