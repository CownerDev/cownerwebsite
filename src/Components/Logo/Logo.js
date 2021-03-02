import React from "react";
import logo from "../../logo.svg";
import styles from "./LogoStyles";

const Logo = (width, height) => {
  const logoStyles = styles(width, height)();
  return <img src={logo} className={logoStyles.Applogo} alt="logo" />;
};
export default Logo;
