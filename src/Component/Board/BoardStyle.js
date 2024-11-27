import styled from "styled-components";
import Dog from "../../images/pexels-chevanon-1108099.jpg";
const BoardHeaderComp = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${Dog});
  .container {
    width: 800px;
    display: flex;
    justify-content: space-between;
    .bannerText {
    }
    .writeBox {
    }
  }
`;
export default BoardHeaderComp;
