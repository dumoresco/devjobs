import Header from "../../components/UI/Header";
import React, { useEffect } from "react";

import { Container } from "./styles";
import { JobDetailsInterface } from "utils/JobCardInterface";
import { useParams } from "react-router-dom";

import data from "../../assets/data.json";

const JobDetails: React.FC<JobDetailsInterface> = (props) => {
  const params = useParams();
  let id = params;

  return (
    <>
      <Container>
        <div className="main-card">
          <div className="logo-container"></div>
          <div className="infos">
            <div className="infos-title">
              <h3>Scoot</h3>
              <span>scoot.com</span>
            </div>
            <button>Company Site</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default JobDetails;
