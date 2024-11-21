import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./pages/signup/Signup";
import Login from "./pages/signup/Login";
import Mainpage from "./pages/Mainpage";
import Layout from "./pages/Layout";
import GlobalStyle from "./style/GlobalStyle";

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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
