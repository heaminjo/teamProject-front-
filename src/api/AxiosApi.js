import axios from "axios";
const KH_DOMAIN = "http://localhost:8089";

const AxiosApi = {
  // 로그인
  login: async (email, pwd) => {
    const login = {
      email: email,
      pwd: pwd,
    };
    return await axios.post(KH_DOMAIN + "/auth/login", login);
  },
  //회원 조회
  memberGet: async (email) => {
    return await axios.get(KH_DOMAIN + `/member/detail?email=${email}`);
  },

  // 회원 가입
  signup: async (email, pwd, alias, address, name, phone) => {
    const member = {
      email: email,
      alias: alias,
      address: address,
      pwd: pwd,
      name: name,
      phone,
      phone,
    };
    return await axios.post(KH_DOMAIN + "/auth/signup", member);
  },
  // 중복체크
  memberRegCheck: async (email) => {
    return await axios.get(KH_DOMAIN + `/auth/exists/${email}`);
  },

  // 회원 탈퇴
  memberDel: async (id) => {
    const del = {
      id: id,
    };
    return await axios.post(KH_DOMAIN + "/user/delete", del);
  },
  // 게시글 조회
  boardList: async () => {
    return await axios.get(KH_DOMAIN + "/api/board");
  },
  // 게시글 상세 조회
  boardDetail: async (boardId) => {
    return await axios.get(KH_DOMAIN + `/api/board/detail/${boardId}`);
  },
  // 게시글 쓰기
  boardWrite: async (title, content, userId, img) => {
    const board = {
      title: title,
      content: content,
      userId: userId,
      img: img,
    };
    return await axios.post(KH_DOMAIN + "/api/board/new", board);
  },
  // 게시글에 달린 댓글 조회
  commentList: async (boardId) => {
    return await axios.get(KH_DOMAIN + `/api/comment/list/${boardId}`);
  },
  // 댓글 쓰기
  commentWrite: async (userId, boardId, content) => {
    const comment = {
      boardId: boardId,
      userId: userId,
      content: content,
    };
    return await axios.post(KH_DOMAIN + `/api/comment/new`, comment);
  },
};
export default AxiosApi;
