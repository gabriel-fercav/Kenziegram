import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  padding-bottom: 70px;
  max-width: 975px;
  margin: 0 auto;

  .content {
    background-color: var(--white);
    height: 77vh;
    border-radius: 0 0 25px 25px;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box__figure__img {
    object-fit: contain;
    width: 100%;
    height: 200px;
  }
  .box__figure__figcaption {
    display: none;
  }
  .content__description {
    padding: 1rem 0;
    text-align: left;
    width: 100%;
    max-width: 500px;
  }
  .content__description__text {
    font-size: 1.2rem;
    color: var(--bg);
    padding-bottom: 0.5rem;
  }
  .content__description__textarea {
    border-radius: 8px;
    background-color: var(--darkGray);
    color: var(--white);
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
    max-width: 500px;
  }
  .content__button {
    display: flex;
    width: 100%;
    max-width: 500px;

    button {
      width: 50%;
    }

    button + button {
      margin-left: 1rem;
    }
  }

  @media all and (min-width: 1000px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .content {
      border-radius: 25px;
    }
  }
`;