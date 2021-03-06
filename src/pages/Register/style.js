import styled from "styled-components";
import RegisterMobile from "../../assets/RegisterMobile.png";
import Register from "../../assets/Register.png";

export const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-image: url(${RegisterMobile});
  width: 100vw;
  height: 100vh;

  .gray__gradient {
    position: absolute;
    background-image: var(--gradient);
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .input__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .text__box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 80px 0 50px 25px;
    z-index: 1;
  }

  h1 {
    margin: 0;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 43px;
    line-height: 50px;
  }

  .smalltext {
    margin: 0;
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-decoration: none;
  }

  .margin {
    margin: 20px 0 0 0;
  }

  .mobile__return {
    position: absolute;
    top: 10%;
    left: 7%;
    font-size: 40px;
    color: white;
    z-index: 1;
  }

  @media (min-width: 720px) {
    background-image: url(${Register});
    background-repeat: no-repeat;
    background-size: cover;

    .mobile__return {
      display: none;
    }

    .text__box {
      align-items: center;
      margin: 0 0 50px 0;
    }
  }
`;
