import React, { useState } from "react";

import { Container } from "./styles";

import searchIcon from "../../../assets/search.png";
import locationIcon from "../../../assets/location.png";

interface FilterCardProps {
  setInput(name: string): void;
}

const FilterCard: React.FC<FilterCardProps> = ({ setInput }) => {
  const [jobName, setJobName] = useState("");

  const handleFilterByName = (e: any) => {
    setJobName(e.target.value);
    setInput(jobName);
  };

  return (
    <Container>
      <div className="fields-group">
        <div className="field-item">
          <img src={searchIcon} alt="Search icon" />
          <input
            type="text"
            value={jobName}
            autoFocus
            onChange={(e) => handleFilterByName(e)}
            placeholder="Filter by name..."
          />
        </div>
        <div className="field-item">
          <img src={locationIcon} alt="Location icon" />
          <input type="text" placeholder="Filter by location..." />
        </div>
        <div className="field-item">
          <input type="checkbox" placeholder="Filter by location..." />
          <span className="checkmark"></span>
          <label htmlFor="">Full time only</label>
        </div>
        <button className="btn-search" onClick={handleFilterByName}>
          Search
        </button>
      </div>
    </Container>
  );
};

export default FilterCard;
