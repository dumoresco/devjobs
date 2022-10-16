import React, { useState } from "react";
import FilterCard from "../../components/UI/FilterCard";
import JobCard from "../../components/UI/JobCard";

import { Container } from "./styles";

import data from "../../assets/data.json";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [location, setLocation] = useState("");

  const cardPerRow = 6;

  const [next, setNext] = useState(cardPerRow);

  let filteredJobs: any[] = [];

  if (input.length > 0) {
    filteredJobs = data.filter((job) =>
      job.position.toLowerCase().includes(input.toLowerCase())
    );
  } else if (isChecked) {
    filteredJobs = data.filter(
      (job) =>
        job.contract === "Full Time" &&
        job.position.toLowerCase().includes(input.toLowerCase())
    );
  } else if (location.length > 0) {
    filteredJobs = data.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  } else {
    filteredJobs = data;
  }

  const handleLoadMore = () => {
    setNext(next + cardPerRow);
  };

  return (
    <Container>
      <div className="container">
        <FilterCard
          setInput={setInput}
          setChecked={setIsChecked}
          setLocation={setLocation}
        />
        <div className="jobs-container">
          {filteredJobs.length > 0
            ? filteredJobs?.slice(0, next).map((job) => (
                <Link
                  key={job.id}
                  to={`/${job.id}`}
                  style={{ textDecoration: "none", color: "#141722" }}
                >
                  <JobCard
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
              ))
            : "No job's found"}
        </div>
        <div className="btn-container">
          {" "}
          {next < filteredJobs?.length && (
            <button onClick={handleLoadMore} className="btn-load_more">
              Load more
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
