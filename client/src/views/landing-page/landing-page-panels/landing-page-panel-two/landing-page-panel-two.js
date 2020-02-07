import React from "react";
import { useStyletron } from "styletron-react";
import CardGroup from "./card-group";
import { volunteers } from "./config";
import { HeaderText, ParagraphText } from "./constants";

const LandingPagePanelTwo = () => {
  const [useCss] = useStyletron();
  return (
    <div
      className={useCss({
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "Column",
        alignItems: "center",
        justifyContent: "flex-start"
      })}
    >
      <h2
        className={useCss({
          fontSize: "3rem",
          fontWeight: "1",
          margin: "3rem 0 0 0"
        })}
      >
        {HeaderText}
      </h2>
      <CardGroup cards={volunteers} />
      <p
        className={useCss({
          margin: "6rem 0 0 0",
          width: "50rem",
          fontSize: "1.3rem",
          fontWeight: "100",
          textAlign: "center"
        })}
      >
        {ParagraphText}
      </p>
    </div>
  );
};

export default LandingPagePanelTwo;
