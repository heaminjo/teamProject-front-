import styled from "styled-components";
//page 의 join을 스타일링 해주는 컴포넌트

const SignupComp = styled.section`
  padding: 80px 0;
  .container {
    h2 {
      text-align: center;
      margin-bottom: 30px;
      color: #fff;
    }
    .inputBox {
      max-width: 400px;
      margin: 0 auto;
      border: 3px solid #fff;
      border-radius: 20px;

      padding: 20px;
      .agreementBox {
        width: 100%;
        margin-bottom: 40px;
      }
    }
  }
`;
export default SignupComp;
