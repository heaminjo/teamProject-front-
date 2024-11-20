import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./util/GlobalStyle";
import Signup from "./pages/signup/Signup";
import Login from "./pages/signup/Login";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
