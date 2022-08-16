import React from "react";

type Props = {};

const coin = [
  {
    src: "",
    title: "Cardano (ADA)",
    yearReward: "4-6%",
  },
  {
    src: "",
    title: "Cosmos (ATOM)",
    yearReward: "12-15%",
  },
  {
    src: "",
    title: "Ethereum 2.0 (ETH2)",
    yearReward: "4-7%",
  },
  {
    src: "",
    title: "Flow (FLOW)",
    yearReward: "6-9%",
  },
  {
    src: "",
    title: "Kava (KAVA)",
    yearReward: "23%",
  },
  {
    src: "",
    title: "Kusama (KSM)",
    yearReward: "18%",
  },
  {
    src: "",
    title: "Mina (MINA)",
    yearReward: "12-20%",
  },
  {
    src: "",
    title: "Polkadot (DOT)",
    yearReward: "9-12%",
  },
  {
    src: "",
    title: "Solana (SOL)",
    yearReward: "5-8%",
  },
  {
    src: "",
    title: "Tezos (XTZ)",
    yearReward: "5%",
  },
  {
    src: "",
    title: "Tron (TRX)",
    yearReward: "4-7%",
  },
];

const AssetSection = (props: Props) => {
  return (
    <section className="assetContainer">
      <h3>STAKING CRYPTO</h3>
      <h1>Earn crypto rewards</h1>
      <p>
        Earn up to 23% in rewards annually by staking your assets with Kraken.
        It only takes a few clicks to stake.
      </p>
      <div className="assetListContainer">
        {coin.map((d, i) => (
          <div key={i} className="cryptoCard">
            <img
              src="/LandingPage/bitcoin-ic 2.png"
              alt="bitcoin"
              width={45}
              height={45}
            />
            <h2>{d.title}</h2>
            <h3>Yearly rewards</h3>
            <h3>{d.yearReward}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssetSection;
