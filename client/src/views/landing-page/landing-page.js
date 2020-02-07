import React from "react";
import { useStyletron } from "styletron-react";
import {
  LandingPagePanelOne,
  LandingPagePanelTwo
} from "./landing-page-panels";

const LandingPage = () => {
  const [useCss] = useStyletron();
  return (
    <div className={useCss({ height: "100vh", padding: 0, width: "100%" })}>
      <LandingPagePanelOne />
      <LandingPagePanelTwo />
    </div>
  );
};

export default LandingPage;
