import styled from "styled-components";

export const Container = styled.main`
  max-width: 975px;
  margin: 0 auto;
  background-color: var(--bgLight);
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  .container-icon {
    flex-basis: 10%;
    position: relative;
  }

  .icon-close {
    position: absolute;
    top: 20px;
    left: 0;
    color: var(--white);
    font-size: 30px;
  }

  .container-search {
    flex-basis: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid var(--bg);
  }

  .container-search__text {
    font-size: 2rem;
    color: var(--white);
    padding-bottom: 1rem;
  }

  .content {
    width: 100%;
    display: flex;
    /*align-items: center;*/
    background-color: rgb(153 153 153 / 8%);
    border-radius: 7px;
    padding: 3px;
  }

  .content__icon {
    font-size: 30px;
    color: var(--white);
  }

  .content__input {
    width: 100%;
    height: 30px;
    font-size: 1rem;
    background-color: transparent;
    transition: 1s all ease-in-out;
    color: var(--white);

    &::placeholder {
      padding-left: 1rem;
      color: var(--white);
    }

    &:focus {
      padding-left: 1rem;
    }

    &:focus {
      background-color: rgb(153 153 153 / 8%);
      caret-color: var(--gray);
      border-bottom: 2px solid var(--gray);
    }
  }

  @media all and (min-width: 1000px) {
    padding-top: 70px;
    .container-icon {
      display: none;
    }

    .icon-close {
      display: none;
    }
    .container-search__text {
      font-size: 2rem;
      padding-bottom: 2rem;
    }
  }
`;
