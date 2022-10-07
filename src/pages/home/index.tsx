import React, { useState } from "react";
import FilterCard from "../../components/UI/FilterCard";
import JobCard from "../../components/UI/JobCard";

import { Container } from "./styles";

import data from "../../assets/data.json";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [input, setInput] = useState("");

  const filteredJobs = data.filter((job) =>
    job.position.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <Container>
      <div className="container">
        <FilterCard setInput={setInput} />
        <div className="jobs-container">
          {filteredJobs.map((job) => (
            <Link
              to={`/${job.id}`}
              style={{ textDecoration: "none", color: "#141722" }}
            >
              <JobCard
                key={job.id}
                company={job.company}
                contract={job.contract}
                location={job.location}
                id={job.id}
                logo={job.logo}
                logoBackground={job.logoBackground}
                postedAt={job.postedAt}
                position={job.position}
              />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
