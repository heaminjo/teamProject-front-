import styled from "styled-components";
import HeartImg from "../images/trueHeart.png";
import EmptyHeartImg from "../images/falseHeart.png";

const Heart = styled.img``;

const HeartButton = ({ isHeart, onClickHeart }) => {
  return (
    <Heart src={isHeart ? HeartImg : EmptyHeartImg} onClick={onClickHeart} />
  );
};

export default HeartButton;
