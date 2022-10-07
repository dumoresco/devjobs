import styled from "styled-components";
import { JobCardInterface } from "../../../utils/JobCardInterface";

export const Container = styled.div`
  cursor: pointer;
  background: #ffffff;
  height: 180px;
  border: 1px solid transparent;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

  &:hover {
    border: 1px solid #5d66dc65;
  }

  span {
    color: #5d66dc;
  }

  .main-infos {
    margin-top: 20px;
    p {
      color: #a09999;
      font-size: 0.9rem;
    }
    h3 {
      margin: 5px 0;
    }
  }
`;

export const Logo = styled.div<{ logoBackground: string }>`
  background: ${({ logoBackground }) => logoBackground};
  width: 40px;
  height: 40px;
  border-radius: 10px;
  position: absolute;
  left: 10px;
  top: -20px;

  img {
    width: 100%;
    height: 40px;
    padding: 5px;
    object-fit: contain;
  }
`;
