import styled from "styled-components";
import backImg from "../../images/pexels-ron-lach-9594423.jpg";
const BoardHeaderComp = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 3px solid #333;
  background-image: url(${backImg});
  .container {
    width: 800px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    .bannerText {
      position: absolute;
      top: 25%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: #333;
    }
    .writeBox {
      position: absolute;
      top: 60%;
      right: 0;
      Button {
        border-radius: 30px;
        &:hover {
          background-color: #333;
          color: #fff;
        }
      }
    }
  }
`;
export default BoardHeaderComp;
