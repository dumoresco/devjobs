import React, { useContext } from "react";
import Switch from "react-switch";

import sun from "../../../assets/sun.png";
import moon from "../../../assets/moon.png";

import { ThemeContext } from "styled-components";

interface ThemeSwitcherButtonProps {
  toggleTheme(): void;
}

const ThemeSwitcherButton: React.FC<ThemeSwitcherButtonProps> = ({
  toggleTheme,
}) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{ marginRight: "10px" }} src={sun} alt="Sun" />
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={24}
        onColor={"#FFF"}
        offColor={"#fff"}
        onHandleColor={colors.primary}
        offHandleColor={colors.primary}
        width={60}
        handleDiameter={14}
      />
      <img style={{ marginLeft: "10px" }} src={moon} alt="Sun" />
    </div>
  );
};

export default ThemeSwitcherButton;
