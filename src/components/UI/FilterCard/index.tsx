import React, { useState } from "react";

import { Desktop, Mobile, FieldItem } from "./styles";

import searchIcon from "../../../assets/search.png";
import locationIcon from "../../../assets/location.png";
import searchMobileIcon from "../../../assets/search-mobile.png";

interface FilterCardProps {
  setInput(name: string): void;
  setChecked(value: boolean): void;
  setLocation(value: string): void;
}

const FilterCard: React.FC<FilterCardProps> = ({
  setInput,
  setChecked,
  setLocation,
}) => {
  const [jobName, setJobName] = useState("");
  const [isChecked, setIsChecked] = useState(Boolean);
  const [jobLocation, setJobLocation] = useState("");

  const handleFilterByName = (e: any) => {
    setJobName(e.target.value);
    setInput(jobName);
    setLocation(jobLocation);
    setChecked(isChecked);
    console.log(isChecked);
  };

  return (
    <>
      <Mobile>
        <FieldItem>
          <input
            type="text"
            value={jobName}
            autoFocus
            onChange={(e) => setJobName(e.target.value)}
            placeholder="Filter by name..."
          />
        </FieldItem>
        <button onClick={handleFilterByName}>
          <img src={searchMobileIcon} alt="" />
        </button>
      </Mobile>
      <Desktop>
        <div className="fields-group">
          <FieldItem>
            {" "}
            <img src={searchIcon} alt="Search icon" />
            <input
              type="text"
              value={jobName}
              autoFocus
              onChange={(e) => setJobName(e.target.value)}
              placeholder="Filter by name..."
            />
          </FieldItem>
          <FieldItem>
            <img src={locationIcon} alt="Location icon" />
            <input
              type="text"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              placeholder="Filter by location..."
            />
          </FieldItem>
          <FieldItem>
            <input
              type="checkbox"
              onChange={() => setIsChecked(!isChecked)}
              placeholder="Filter by location..."
              id="checkbox"
            />
            <label htmlFor="checkbox">Full time only</label>
          </FieldItem>
          <button className="btn-search" onClick={handleFilterByName}>
            Search
          </button>
        </div>
      </Desktop>
    </>
  );
};

export default FilterCard;
