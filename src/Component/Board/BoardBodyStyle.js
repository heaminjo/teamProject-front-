import styled from "styled-components";

const BoardBodyComp = styled.div`
  padding: 20px;
  margin-top: 50px;
  .container {
    .inputBox {
      width: 300px;
      margin: 0 auto;
      display: flex;
      .inputWrap {
        align-items: center;
      }
      input {
        width: 200px;
        height: 30px;
        border: 1px solid #ccc;
      }
      button {
        width: 80px;
        height: 35px;
        background-color: #aaa;
        &:hover {
          background-color: #555;
          color: #fff;
        }
      }
    }
    .boardListBox {
      margin: 0 auto;
      display: grid;
      justify-content: space-evenly;
      grid-template-rows: 550px 550px;
      grid-template-columns: 550px 550px;
    }
  }
`;
export default BoardBodyComp;
