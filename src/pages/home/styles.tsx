import styled from "styled-components";

export const Container = styled.div`
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .jobs-container {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 40px;
  }
`;
