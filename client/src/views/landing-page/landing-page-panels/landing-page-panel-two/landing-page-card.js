import React from "react";
import { Card } from "../../../../components/card";
import WillPicture from "../../../../static/images/will-linked-in.jpeg";

const { Meta } = Card;

const LandingPageCard = ({ id, name, role, yearsExperience, company }) => {
  return (
    <Card
      style={{ width: 200, margin: "0 10px" }}
      cover={<img alt="example" src={WillPicture} />}
    >
      <Meta title={name} description={role} />
    </Card>
  );
};

export default LandingPageCard;
