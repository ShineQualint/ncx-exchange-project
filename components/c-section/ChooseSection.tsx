import React from "react";

type Props = {};

const reason = [
  {
    src: "/LandingPage/simplicity.webp",
    alt: "exchange simplicity",
    title: "Simplicity",
    description:
      "NCX makes it easy to buy and sell crypto using our mobile apps.",
  },
  {
    src: "/LandingPage/education.webp",
    alt: "easy to education with exchange system",
    title: "Education",
    description:
      "Not sure where to start? Head to our Learn Center and learn about all things crypto.",
  },
  {
    src: "/LandingPage/service.webp",
    alt: "much more service that user can recieve",
    title: "Service",
    description:
      "Find your answers instantly in our Support Center. Or reach us 24/7/365 on LiveChat or by email.",
  },
];

const ChooseSection = (props: Props) => {
  return (
    <section className="whyContainer">
      <div className="whyContent">
        <h1>Why NCX?</h1>
        <div className="whyItemList">
          {reason.map((d, i) => (
            <div key={i} className="whyItemContainer">
              <img src={d.src} alt={d.alt} width={250} height={250} />
              <h2>{d.title}</h2>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
        <button className="whyButton">Get start with NCX</button>
      </div>
    </section>
  );
};

export default ChooseSection;
