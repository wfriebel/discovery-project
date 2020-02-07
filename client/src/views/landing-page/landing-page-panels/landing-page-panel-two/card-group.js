import React from "react";
import { useStyletron } from "styletron-react";
import LandingPageCard from "./landing-page-card";

const CardGroup = props => {
  const [useCss] = useStyletron();
  const { cards } = props;
  return (
    <div
      className={useCss({
        display: "flex",
        margin: "5rem 0 0 0"
      })}
    >
      {cards.map(card => {
        const { id, name, role, yearsExperience, company } = card;
        return (
          <LandingPageCard
            key={id}
            id={id}
            name={name}
            role={role}
            yearsExperience={yearsExperience}
            company={company}
          />
        );
      })}
    </div>
  );
};

export default CardGroup;
