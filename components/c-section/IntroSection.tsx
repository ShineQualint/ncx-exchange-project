import React from "react";
import Button from "../a-base/Button";

type Props = {};

const IntroSection = (props: Props) => {
  return (
    <section>
      <div className="introContainer">
        <div className="introTextGroup">
          <div className="introTextCard">
            <h1>Easiest way to mining your bitcoin</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, libero sint aliquid quos quis quidem? Earum
              perferendis deserunt corporis asperiores nam incidunt, quaerat non
              facere porro dignissimos expedita est tempore?
            </p>
            <Button
              title="Get Started"
              onClick={() => console.log("get started")}
            />
          </div>
        </div>
        <div className="introPhoto">
          <div className="phoneBorder">
            <h1>phone photo</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
