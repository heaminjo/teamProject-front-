//header의 css
import { styled } from "styled-components";

const HeaderComp = styled.header`
  width: 100vw;
  height: 80px;
  /* background-color: #0c0125; */
  background-color: #fff;
  opacity: 0.9;
  backdrop-filter: blur(40px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(204, 204, 204, 0.1);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    height: 100%;
    //로고
    .logo {
      height: 100%;
      display: flex;
      flex-grow: 1;
      align-items: center;
      cursor: pointer;
      img {
        height: 80%;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 100%;
      }
    }
    //메뉴

    nav {
      text-align: center;
      height: 100%;
      flex-grow: 2;
      .menu {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        > li {
          height: 100%;
          flex-grow: 1;
          position: relative;
          font-size: 18px;
          font-weight: 600;
          padding: 10px 20px;
          color: #333;
          cursor: pointer;
          .menuBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            cursor: pointer;
            transition: 0.2s ease-in;
          }
          .subMenu {
            width: 100%;
            background-color: #fff;

            height: 0; //안보이게 높이값과 hidden
            overflow: hidden; //
            position: absolute;
            top: 100%;
            left: 0;
            transition: height 0.8s ease-out;
            li {
              font-size: 1.2rem;
              font-weight: 400;
              color: #111;
              transition: 0.2s ease-in;
              &:hover {
                /* background-color: #484554; */
                font-weight: bold;
              }
            }
          }
          &:hover {
            .menuBtn {
            }
            .subMenu {
              height: auto;
              li {
                padding: 20px 0;
              }
            }
          }
        }
      }
    }
    //로그인버튼
    .auth {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: end;
      flex-grow: 0.5;
      .authBtn {
        font-size: 13px;
        padding: 10px 10px;
        text-decoration: none;
        color: #333;
        transition: 0.2s ease-in; //변화 속도
        &:hover {
          cursor: pointer;
          color: #d1edf4;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      justify-content: space-between;
      height: 80px;
      .mo-menu {
        flex-grow: 0;

        .m-menu {
          display: block;
          font-size: 40px;
          padding: 10px;
        }
      }

      nav {
        width: 100vw;
        height: calc(100vh - 80px);
        padding-bottom: 40px;
        position: absolute;
        top: 79px;
        left: -150%;
        background-color: var(--MIDBLUE);
        transition: 0.5s ease-in;

        &.active {
          left: -1px;
        }
        .menu {
          height: auto;
          display: block;
          > li {
            padding: 0 20px;
            position: static;
            .m-title {
              font-size: 1.3em;
              padding: 20px 0;
              background-color: var(--IVORY);
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    height: 40px;
    .container {
      height: 40px;
      .mo-menu {
        .m-menu {
          font-size: 20px;
        }
        flex-grow: 1;
        width: 20%;
      }
      .logo {
        flex-grow: 1;
      }
      nav {
        height: calc(100vh - 40px);
        top: 39px;
      }
      .log-icon {
        flex-grow: 1;
        width: 20%;
        font-size: 20px;
      }
    }
  }
`;
export default HeaderComp;
