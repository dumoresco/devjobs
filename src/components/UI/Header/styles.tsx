import styled from "styled-components";

export const Container = styled.div`
  background-color: #5d66dc;
  width: 100%;
  height: 140px;
  display: flex;
  border-end-start-radius: 100px;

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.8rem;
      color: #ffffff;
      font-weight: 700;
    }
  }
`;
