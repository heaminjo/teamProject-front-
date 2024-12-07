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

  // 회원 가입
  signup: async (email, pwd, alias, address, name, phone) => {
    const member = {
      email: email,
      alias: alias,
      address: address,
      pwd: pwd,
      name: name,
      phone: phone,
    };
    return await axios.post(KH_DOMAIN + "/auth/signup", member);
  },
  // 중복체크
  memberRegCheck: async (email) => {
    return await axios.get(KH_DOMAIN + `/auth/exists/${email}`);
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
