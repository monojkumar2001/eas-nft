import React from "react";

const NftUseCaseItem = () => {
  return (
    <>
      {useList.map((item, i) => {
        return (
          <div className="nft-use-case-list-Item" key={i}>
            <span className="focus-color">NFT Use Case</span>
            <h2 className="nft-list-case-title">{item.ListTitle}</h2>
            <p>
             {item.dis1}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default NftUseCaseItem;

const useList = [
  {
    id: 1,
    ListTitle: "Market Intelligence",
    dis1: "The buying and selling of EAS NFTs generates unique market intelligence that is aggregated and monetized. This data provides valuable insights to real estate developers and owners, investors, brokers, appraisers, lenders, consumer behavior and data analysts, and many more. Through heat maps and detailed trading analysis, EAS NFTs create an indicator of market interest in certain cities or geographies (geo-economic data). EAS tracks real-estate correlated data as well as behavioral and psychological data relating to buying patterns and trends.",
  },
  {
    id: 2,
    ListTitle: "Liquid Pricing Comparables",
    dis1: "The buying and selling of EAS NFTs generates unique market intelligence that is aggregated and monetized. This data provides valuable insights to real estate developers and owners, investors, brokers, appraisers, lenders, consumer behavior and data analysts, and many more. Through heat maps and detailed trading analysis, EAS NFTs create an indicator of market interest in certain cities or geographies (geo-economic data). EAS tracks real-estate correlated data as well as behavioral and psychological data relating to buying patterns and trends.",
  },
  {
    id: 3,
    ListTitle:"Real-World Data",
    dis1: "The buying and selling of EAS NFTs generates unique market intelligence that is aggregated and monetized. This data provides valuable insights to real estate developers and owners, investors, brokers, appraisers, lenders, consumer behavior and data analysts, and many more. Through heat maps and detailed trading analysis, EAS NFTs create an indicator of market interest in certain cities or geographies (geo-economic data). EAS tracks real-estate correlated data as well as behavioral and psychological data relating to buying patterns and trends.",
  },
];
