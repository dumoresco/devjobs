import Header from "../../components/UI/Header";
import React, { useEffect } from "react";

import {
  Container,
  BtnApply,
  DescriptionContainer,
  DescriptionHeader,
  RequirementsContainer,
  Footer,
} from "./styles";
import { JobDetailsInterface } from "utils/JobCardInterface";
import { Routes, useParams, useRoutes } from "react-router-dom";

import data from "../../assets/data.json";

const JobDetails: React.FC<JobDetailsInterface> = (props) => {
  const params = useParams();

  const id = params.id ? parseInt(params.id) : 0;

  const response = data[id - 1];

  return (
    <>
      <Container>
        <div className="main-card">
          <div
            className="logo-container"
            style={{ backgroundColor: `${response.logoBackground}` }}
          >
            <img src={response.logo} alt={response.company} />
          </div>
          <div className="infos">
            <div className="infos-title">
              <h3>{response.company}</h3>
              <span>{response.company}.com</span>
            </div>
            <button>Company Site</button>
          </div>
        </div>
        <DescriptionContainer>
          <DescriptionHeader>
            <div className="description-title">
              <p>
                {response.postedAt}| {response.contract}
              </p>
              <h1>{response.position}</h1>
              <span>{response.location}</span>
            </div>
            <BtnApply>Apply now</BtnApply>
          </DescriptionHeader>

          <p className="description-text">{response.description}</p>
          <RequirementsContainer>
            <h2>Requirements</h2>
            <div className="requirements-description">
              {response.requirements.content}
              <ul>
                {response.requirements.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </RequirementsContainer>
          <RequirementsContainer>
            <h2>What will you do</h2>
            <div className="requirements-description">
              {response.role.content}
              <ul>
                {response.role.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </RequirementsContainer>
        </DescriptionContainer>
      </Container>
      <Footer>
        <div className="footer-card">
          <div className="infos">
            <div className="infos-title">
              <h3>{response.company}</h3>
              <span>{response.company}.com</span>
            </div>
            <BtnApply>Apply now</BtnApply>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default JobDetails;
