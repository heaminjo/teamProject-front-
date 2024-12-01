import axios from "axios";
import Common from "../util/Common";

const BoardApi = {
  // 게시글 전체조회
  getboardAll: async () => {
    return await axios.post(Common.KH_DOMAIN + "/board/list");
  },
  //게시글 리스트
  // 페이지 , 정렬순 , 검색 키워드 ,카테고리를 받아 게시판 리스트를 가져온다
  // getBoardList: async (page, sort, keyword, categoryName) => {
  //   const size = 4;
  //   return await axios.get(
  //     Common.KH_DOMAIN +
  //       `/board/pagelist?page=${
  //         page - 1
  //       }&size=${size}&sort=${sort}&keyword=${keyword}&categoryName=${categoryName}`
  //   );
  // },
  getBoardList: async (page, sort, keyword, category) => {
    console.log("axios" + category);
    const size = 4;
    return await axios.get(
      Common.KH_DOMAIN +
        `/board/list/page?page=${
          page - 1
        }&size=${size}&categoryName=${category}&keyword=${keyword}&sort=${sort}`
    );
  },
  //총 페이지 수
  getTotalPage: async (keyword, categoryName) => {
    const page = 0; //페이지는 0부터
    const size = 4; //4개씩
    return await axios.get(Common.KH_DOMAIN + "/board/totalpages");
  },
  // 게시글 상세 조회
  boardDetail: async (boardId) => {
    return await axios.get(Common.KH_DOMAIN + `/api/board/detail/${boardId}`);
  },
  // 게시글 쓰기
  boardWrite: async (title, content, userId, img) => {
    const board = {
      title: title,
      content: content,
      userId: userId,
      img: img,
    };
    return await axios.post(Common.KH_DOMAIN + "/api/board/new", board);
  },
  // 게시글에 달린 댓글 조회
  commentList: async (boardId) => {
    return await axios.get(Common.KH_DOMAIN + `/api/comment/list/${boardId}`);
  },
};
export default BoardApi;
