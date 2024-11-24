import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../util/Button";
import basicPhoto from "../../images/Twitter.jpg";
/*마이페이지 myinfo */
const MyInfoComp = styled.section`
  width: 100%; /* 보통 높이값은 따로 주지 않음!(배너를 잡을 경우에는 높이값을 줌) */
  padding-top: 80px;
  padding-bottom: 10px;
  /* outline: 1px solid yellow; */
  @media only screen and (max-width: 480px) {
    margin-bottom: 0;
  }
  .container {
    background-color: #ccc;
    opacity: 0.5;
    border-radius: 50px;
    padding: 50px;
    padding-bottom: 100px;
    h2 {
      margin-bottom: 50px;
      font-size: 30px;
    }
    .wrapper {
      /* outline: 1px solid yellow; */
      display: flex;
      justify-content: center;
      align-items: center;
      .userProfile {
        width: 250px;
        margin-right: 5%;
        padding-bottom: 5%;
        /* outline: 1px solid red; */
        .profileImg {
          width: 250px;
          padding-bottom: 250px;
          position: relative;
          /* 사진이 원 안으로 들어오게 함 */
          overflow: hidden;
          border-radius: 100%;
          background-color: var(--GREY);
          img {
            width: 100%;
            height: 100%;
            position: absolute;
          }
        }
      }
      .userContent {
        width: 50%;
        letter-spacing: -0.8px;
        /* outline: 1px solid pink; */
        .userBox {
          margin-bottom: 20px;
          display: grid;
          grid-template-columns: 30% 70%; //밑줄 길이 조절
          p {
            padding: 10px 0;
            letter-spacing: 0.8px;
            font-size: 18px;
            &.title {
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: var(--LIGHTVIO);
              border-radius: 5px;
              font-weight: 600;
              margin-right: 20px;
            }
            &:last-child {
              padding-left: 10px;
              border-bottom: 1px solid white;
              line-height: 1.2;
            }
          }
        }
      }
    }
    .buttonBox {
      /* outline: 1px solid blue; */
      display: flex;
      justify-content: end;
      padding-right: 10%;
      margin-top: 40px;
      button {
        &:first-child {
          margin-right: 12px;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      .wrapper {
        flex-direction: column; /* 모바일에서 세로로 배치 */
        align-items: center; /* 가운데 정렬 */
        width: 100%;

        .userProfile {
          width: 100%;
          margin: 0;
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
          .profileImg {
            width: 50%;
            padding-bottom: 50%;
          }
        }

        .userContent {
          width: 100%; /* 모바일에서 전체 너비로 */
          justify-content: center;
          /* align-items: center; */
          text-align: center;
          .buttonBox {
            padding-right: 0; /* 모바일에서 오른쪽 패딩 제거 */
            justify-content: center; /* 가운데 정렬 */
            margin-top: 70px;
          }
        }
      }
    }
    @media only screen and (max-width: 480px) {
      .wrapper {
        .userContent {
          padding: 0 10px;
          .userBox {
            p {
              font-size: 1.2em;
            }
          }
        }
      }
    }
  }
`;

const MyInfo = ({ memberInfo }) => {
  const navigate = useNavigate();

  return (
    <>
      <MyInfoComp>
        <div className="container">
          <h2>마이프로필</h2>
          <div className="wrapper">
            <div className="userProfile">
              <div className="profileImg">
                {
                  <img
                    src={
                      memberInfo && memberInfo.image
                        ? memberInfo.image
                        : basicPhoto
                    }
                    alt="profile"
                  />
                }
              </div>
            </div>
            <div className="userContent">
              <div className="userBox">
                <p className="title">이름</p>
                <p>{memberInfo && memberInfo.name}</p>
              </div>
              <div className="userBox">
                <p className="title">닉네임</p>
                <p>{memberInfo && memberInfo.alias}</p>
              </div>
              <div className="userBox">
                <p className="title">이메일</p>
                <p>{memberInfo && memberInfo.email}</p>
              </div>
              <div className="userBox">
                <p className="title">전화번호</p>
                <p>{memberInfo && memberInfo.phone}</p>
              </div>
              <div className="userBox">
                <p className="title">주소</p>
                <p>{memberInfo && memberInfo.addr}</p>
              </div>
            </div>
          </div>
        </div>
      </MyInfoComp>
    </>
  );
};

export default MyInfo;