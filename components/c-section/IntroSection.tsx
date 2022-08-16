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
              Sign up today to easily buy 100+ cryptocurrencies. Get started in
              minutes with as little as $10.
            </p>
            <Button
              title="Get Started"
              onClick={() => console.log("get started")}
            />
          </div>
        </div>
        <div className="introPhoto">
          <img
            src="/LandingPage/intro-photo.png"
            alt="ncx exchange trading view"
            width={600}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
