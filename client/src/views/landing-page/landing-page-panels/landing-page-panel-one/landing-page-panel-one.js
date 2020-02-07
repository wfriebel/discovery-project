import React from "react";
import { useStyletron } from "styletron-react";
import backgroundImage from "../../../../static/images/nathan-dumlao-ewGMqs2tmJI-unsplash.jpg";
import { HEADER, SUB_HEADER, CALL_TO_ACTION } from "./constants";
import { Button, TYPE, SIZE } from "../../../../components/button";

const LandingPagePanelOne = () => {
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/');
      const data = await response.json();
      console.log('data', data)
    }
    fetchData();
  })
  const [useCss] = useStyletron();
  return (
    <div
      className={useCss({
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      })}
    >
      <h1
        className={useCss({
          fontSize: "6rem",
          fontWeight: "1",
          margin: 0,
          padding: 0,
          textAlign: "center"
        })}
      >
        {HEADER}
      </h1>
      <h2
        className={useCss({
          fontSize: "2rem",
          fontWeight: "1",
          margin: 0,
          padding: 0,
          textAlign: "center",
          width: "45rem"
        })}
      >
        {SUB_HEADER}
      </h2>
      <div>
        <Button
          className={useCss({ margin: "20px" })}
          type={TYPE.PRIMARY}
          size={SIZE.LARGE}
        >
          {CALL_TO_ACTION}
        </Button>
      </div>
    </div>
  );
};

export default LandingPagePanelOne;
