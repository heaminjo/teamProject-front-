import styled from "styled-components";

const PostWriteStyle = styled.div`
  background-color: #e8d5b5;
  .container {
    padding-top: 50px;
    h2 {
      padding: 20px 0;
    }
    .inputBox {
      padding: 20px 0;
      border-top: 2px solid black;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .inputTitle {
        border: 1px solid #ccc;
        display: flex;
        padding-right: 10px;
        background-color: #fff;
        border: 1px solid black;

        .titleMax {
          display: flex;
          align-items: end;
          padding-bottom: 5px;
        }
      }
      .inputContent {
        border: 1px solid #ccc;
        height: 350px;
        background-color: #fff;
        border: 1px solid black;
      }
      .inputImage {
        display: flex;
        gap: 10px;
        .imgBox {
          border: 1px solid black;
          background-color: #fff;
          border-radius: 10px;
          img {
            width: 200px;
            padding: 10px;
          }
        }
        label {
          span {
            background-color: #039500;
            padding: 15px;
            border-radius: 20px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
            &:hover {
              background-color: #038600;
            }
          }
          input {
            display: none;
          }
        }
      }
    }
    .subBtn {
      padding: 30px 0;
      display: flex;
      justify-content: center;
      gap: 40px;
      button {
        background-color: #83db81;
        border: none;
        border-radius: 20px;
        color: #fff;
      }
    }
  }
`;
export default PostWriteStyle;
