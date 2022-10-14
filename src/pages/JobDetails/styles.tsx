import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  width: 100%;
  margin-top: -20px;
  justify-content: center;
  flex-direction: column;

  .main-card {
    border-radius: 4px;
    background: ${(props) => props.theme.colors.card};
    transition: background 0.5s;

    width: 100%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 20px;
    }
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
      background-color: ${(props) => props.theme.colors.buttonBg};
      color: ${(props) => props.theme.colors.buttonColor};
      transition: background-color 0.5s;
      transition: color 0.5s;

      border-radius: 4px;
      font-weight: bold;
      padding: 10px 30px;
    }
    .infos-title {
      h3 {
        color: ${(props) => props.theme.colors.title};
        transition: color 0.5s;

        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 15px;
      }
      span {
        color: ${(props) => props.theme.colors.subtitle};
        transition: span 0.5s;

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

export const BtnApply = styled.button`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  transition: background-color 0.5s;

  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 15px 40px;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 50px;
  display: flex;
  width: 100%;
  color: #a1a5b0;
  margin: 20px 0;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.card};
  transition: background 0.5s;

  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  color: #a1a5b0;
  line-height: 25px;
  text-align: justify;

  .description-text {
    margin: 20px 0;
  }

  @media (max-width: 550px) {
    padding: 20px;
  }
`;

export const DescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .description-title {
    width: 50%;
    h1 {
      text-align: left;
      color: ${(props) => props.theme.colors.title};
      transition: color 0.5s;

      font-size: 2rem;
      margin: 20px 0;
      line-height: 30px;
      font-weight: bold;
    }

    p {
      color: ${(props) => props.theme.colors.subtitle};
      transition: color 0.5s;
    }
    span {
      color: ${(props) => props.theme.colors.primary};
      transition: color 0.5s;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;

    .description-title {
      width: 100%;
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export const RequirementsContainer = styled.div`
  h2 {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.title};
    transition: color 0.5s;

    margin: 20px 0;
    font-weight: bold;
  }

  .requirements-description {
    margin: 20px 0;
  }

  ul {
    margin: 20px 20px;
    li + li {
      margin-top: 10px;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.card};
  transition: background 0.5s;

  padding: 30px 0;
  .footer-card {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .infos {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      .infos-title {
        h3 {
          color: ${(props) => props.theme.colors.title};
          transition: color 0.5s;

          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 15px;
        }
        span {
          color: ${(props) => props.theme.colors.subtitle};
          transition: color 0.5s;

          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 550px) {
    padding: 10px;
    .infos {
      width: 100%;
      height: auto;
      flex-direction: column;
    }
    .infos-title {
      display: none;
    }
  }
`;
