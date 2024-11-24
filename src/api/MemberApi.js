import axios from "axios";
import Common from "../util/Common";

const MemberApi = {
  //회원 조회
  memberGet: async (email) => {
    return await axios.get(Common.KH_DOMAIN + `/member/detail/${email}`);
  },

  // 회원 탈퇴
  memberDel: async (id) => {
    const del = {
      id: id,
    };
    return await axios.post(Common.KH_DOMAIN + "/user/delete", del);
  },
};
export default MemberApi;
