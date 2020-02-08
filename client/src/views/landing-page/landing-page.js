import React from "react";
import { useStyletron } from "styletron-react";
import {
  LandingPagePanelOne,
  LandingPagePanelTwo
} from "./landing-page-panels";
import { useEmployees } from '../../hooks';

const LandingPage = () => {
  const [useCss] = useStyletron();
  const { data } = useEmployees()
  console.log('data', data);
  return (
    <div className={useCss({ height: "100vh", padding: 0, width: "100%" })}>
      <LandingPagePanelOne />
      <LandingPagePanelTwo />
    </div>
  );
};

export default LandingPage;
