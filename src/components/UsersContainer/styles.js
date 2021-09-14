import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  /*padding-bottom: 70px;*/
  padding: 0.5rem 0 3rem 0;

  @media all and (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0.5rem 0 0 0;
    max-width: 975px;
    margin: 0 auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--bg);
      border-radius: 30px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--bgLight);
      border-radius: 10px;
    }
  }
`;