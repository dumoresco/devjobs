import React from "react";

import { Container, Logo } from "./styles";

import { JobCardInterface } from "../../../utils/JobCardInterface";
import { useNavigate } from "react-router-dom";

const JobCard: React.FC<JobCardInterface> = ({
  company,
  contract,
  location,
  logo,
  logoBackground,
  postedAt,
  position,
  id,
}) => {
  const navigate = useNavigate();

  const showJobDetails = (id: number) => {
    navigate(`${id}`);
  };
  return (
    <Container onClick={() => showJobDetails(id)}>
      <Logo className="img" logoBackground={logoBackground}>
        <img src={"src/" + logo} alt="" />
      </Logo>
      <div className="main-infos">
        <p>
          {postedAt} | {contract}
        </p>
        <h3>{position}</h3>
        <p>{company}</p>
      </div>

      <span>{location}</span>
    </Container>
  );
};

export default JobCard;
