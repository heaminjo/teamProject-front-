import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Signup from "./pages/signup/Signup";
import Login from "./pages/signup/Login";
import Mainpage from "./pages/Mainpage";
import Layout from "./pages/Layout";
import GlobalStyle from "./style/GlobalStyle";
import Mypage from "./pages/member/Mypage";
import UserModify from "./pages/member/UserModify";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Mainpage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Mypage/UserModify" element={<UserModify />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
