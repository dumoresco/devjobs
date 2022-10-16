import styled from "styled-components";

export const Container = styled.div`
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  }

  .jobs-container {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 40px;
  }

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn-load_more {
      background-color: #5d66dc;
      color: #ffffff;
      font-weight: 700;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 50px;
    }
  }
`;
