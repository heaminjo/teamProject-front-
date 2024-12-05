import PostWriteStyle from "./PostWriteStyle";

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
          category: "질문 작성",
          contentHdr: "반려동물에 관하여 궁금한 이야기를 적어주세요.",
        };
    }
  })();

  return (
    <PostWriteStyle>
      <div className="container">
        <h2>{categoryName}</h2>
      </div>
    </PostWriteStyle>
  );
};
export default PostWrite;
