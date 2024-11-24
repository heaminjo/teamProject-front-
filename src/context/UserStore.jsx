import { createContext, useState, useEffect } from "react";

//export : 반드시 export한 이름으로만 import한다.
export const UserContext = createContext(null);
//전역 변수로 사용
//props을 받아 멤버 확인
const UserStore = (props) => {
  //로그인 여부
  const [isLogin, setIsLogin] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <UserContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userEmail,
        setUserEmail,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserStore;
