import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  width: 100%;
  margin-top: -20px;

  .main-card {
    border-radius: 4px;
    background: #fff;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .logo-container {
    width: 200px;
    height: 150px;
    background: red;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;

    button {
      background-color: #f2f2fd;
      color: #5d66dc;
      border-radius: 4px;
      font-weight: bold;
      padding: 10px 30px;
    }
    .infos-title {
      h3 {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 15px;
      }
      span {
        color: #a09999;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 550px) {
    .main-card {
      flex-direction: column;
      position: relative;

      .logo-container {
        width: 50px;
        height: 50px;
        position: absolute;
        top: -20px;
        border-radius: 4px;
      }

      .infos {
        flex-direction: column;
        margin-top: 60px;
        padding-bottom: 30px;
      }
      button {
        margin-top: 20px;
      }
    }
  }
`;
