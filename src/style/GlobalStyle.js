//전체에 적용
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  main {
    padding-top: 80px;
    min-height: 60vh;
    background-color: #1f1926;
    }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    @media only screen and (max-width:1200px){ //
      padding: 0 20px;
    }
  }
  @media only screen and (max-width:768px) {
    body {
      font-size: 12px;
    }
    .container {
      width: 90vw;
      padding: 0;
    }
  }
  @media only screen and (max-width: 480px) {
    main {
      padding-top: 40px;
    }
  }
`;
export default GlobalStyle;
