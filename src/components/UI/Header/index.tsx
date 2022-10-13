import React from "react";
import { Link } from "react-router-dom";
import dark from "../../../themes/dark";
import light from "../../../themes/light";
import usePersistedState from "../../../utils/usePersistedState";
import ThemeSwitcherButton from "../ThemeSwitcherButton";

import { Container } from "./styles";

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <Container>
      <div className="container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1>Devjobs</h1>
        </Link>
        <ThemeSwitcherButton toggleTheme={toggleTheme} />
      </div>
    </Container>
  );
};

export default Header;
