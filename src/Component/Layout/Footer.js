import styled from "styled-components";
import { useState } from "react";

const FooterComp = styled.footer`
  width: 100%;
  background-color: black;

  .container {
    padding-top: 30px;
    padding-bottom: 80px;
    p,
    div {
      color: white;
    }

    .footer-menu {
      display: flex;
      margin-bottom: 40px;
      li {
        color: #ccc;
        transition: 0.3s ease-in;
        &:hover {
          cursor: pointer;
          color: var(--LIGHTVIO);
        }
        &:first-child {
          margin-right: 20px;
          position: relative;

          &::after {
            display: block;
            content: "";
            width: 2px;
            height: 100%;
            background-color: white;
            position: absolute;
            top: 1px;
            right: -11px;
            cursor: default;
          }
        }
      }
    }

    .info {
      line-height: 1.8;
      margin-bottom: 30px;
    }
  }
`;

const Footer = () => {
  // AgreementModal
  const [type, setType] = useState("");

  return (
    <>
      <FooterComp>
        <div className="container">
          <ul className="footer-menu">
            <li>이용약관</li>
            <li>개인정보 취급방침</li>
          </ul>
          <div className="info">
            <p>(주) PetTowner</p>
            <p>조해민</p>
            <p>주소: 경기도 성남시 상대원1동</p>
            <p>이메일 : joheamin95@naver.com</p>
          </div>
        </div>
      </FooterComp>
    </>
  );
};
export default Footer;
