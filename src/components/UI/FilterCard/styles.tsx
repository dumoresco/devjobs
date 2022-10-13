import styled from "styled-components";

export const Desktop = styled.div`
  padding: 0 20px;
  width: 100%;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.card};
  margin-top: -25px;
  display: flex;

  @media (max-width: 900px) {
    display: none;
  }

  .fields-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #5d66dc;
      color: #ffffff;
      font-weight: 700;
      padding: 10px 30px;
      border-radius: 4px;
    }
  }

  @media (max-width: 900px) {
    padding: 0;
    button {
      width: 100%;
    }
    .fields-group {
      flex-direction: column;

      .field-item {
        width: 100%;
        padding: 15px;
        justify-content: start;

        &:nth-child(2) {
          border: none;
          border-top: 1px solid #d9d9d9;
          border-bottom: 1px solid #d9d9d9;
        }

        input[type="checkbox"] {
          margin-left: 8px;
        }

        label {
          color: #91939c;
          font-weight: 700;
          margin-left: 20px;
        }
      }
    }
  }
`;

export const Mobile = styled.div`
  margin-top: -25px;
  background-color: ${(props) => props.theme.colors.card};
  width: 100%;
  padding: 0 10px;
  display: none;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
  }

  button {
    background: ${(props) => props.theme.colors.primary};
    width: 40px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FieldItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  &:nth-child(2) {
    border-left: 1px solid ${(props) => props.theme.colors.background};
    border-right: 1px solid ${(props) => props.theme.colors.background};
  }

  input {
    padding: 15px 10px;
    color: #5e6068;
  }

  label {
    color: #91939c;
    font-weight: 700;
    margin-left: 20px;
  }
`;
