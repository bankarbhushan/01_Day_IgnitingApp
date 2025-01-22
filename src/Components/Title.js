import React from "react";
import logo from "../Mocks/dummy";
import { LOGO } from "./constant";

const Title = () => {
  return (
    <>
      <img
        src={LOGO}
        // src={logo}
        alt="logo"
        className="logo"
        id="logo"
        data-testid="logo"
      />
    </>
  );
};

export default Title;
