import React from "react";
import { Link } from "react-router-dom";

const NftPricingItem = ({ price, description }) => {
  return (
    <>
      <div className="nft-pricing-content-items">
        <div className="nft-pricing-item">
          <Link to={""}>Standard Address NFTs</Link>
        </div>
        <div className="nft-pricing-item">
          <span> 0.02 ETH</span>
        </div>
        <div className="nft-pricing-item">
          <p>
            Address NFTs include any address in the world that{" "}
            <strong>
              {" "}
              you claim yourself as an NFT on easnft.com through our claim
              process
            </strong>
            . Includes all categories (Residential, Commercial, Industrial,
            Parks, Travel Hubs, etc). If you claim an NFT address which is
            already included in our Gold, Platinum, or Charity Collections, your
            NFT will be subject to collection pricing.
          </p>
        </div>
      </div>
      <div className="nft-pricing-content-items">
        <div className="nft-pricing-item">
          <Link to={""}>EAS Gold Collection</Link>
        </div>
        <div className="nft-pricing-item">
          <span>0.05 ETH</span>
        </div>
        <div className="nft-pricing-item">
          <p>
            NFTs in the Gold Collection are selected by EAS and made available
            at easnft.com. These include{" "}
            <strong>iconic buildings and notable addresses</strong> throughout the world’s
            major cities.
          </p>
        </div>
      </div>
      <div className="nft-pricing-content-items">
        <div className="nft-pricing-item">
          <Link to={""}>EAS Platinum Collection</Link>
        </div>
        <div className="nft-pricing-item">
          <span>1 ETH</span>
        </div>
        <div className="nft-pricing-item">
          <p>
            NFTs in the Platinum Collection are selected by EAS and made
            available at easnft.com. These include{" "}
            <strong>the most rare and sought-after addresses in the world.</strong> (Just
            think, you could literally own the digital rights to the Empire
            State Building or Taj Mahal.)
          </p>
        </div>
      </div>
   
      <div className="nft-pricing-content-items">
        <div className="nft-pricing-item">
          <Link to={""}>Charity NFTs</Link>
        </div>
        <div className="nft-pricing-item">
          <span>1 ETH</span>
        </div>
        <div className="nft-pricing-item">
          <p>
          Charity NFTs are selected by EAS to receive charitable donations. When you buy a Charity NFT, <strong>20% of gross initial sale proceeds and a 4% royalty on all trading activity will be donated </strong> to the Impact Index Fund associated with the NFT category (Schools & Colleges, Hospitals & Health Care, Places of Worship, Zoos & Aquariums).
          </p>
        </div>
      </div>
      <div className="nft-pricing-content-items">
        <div className="nft-pricing-item">
          <Link to={""}>Neighborhood NFTs</Link>
        </div>
        <div className="nft-pricing-item">
          <span>1-3 ETH</span>
        </div>
        <div className="nft-pricing-item">
          <p>
          EAS Neighborhood NFTs have the ability to earn significant revenue without needing to be traded. Neighborhood NFTs represent the aggregate grouping of <strong>all individual Address NFTs within a specific postal code</strong>. That means owners of Neighborhood NFTs receive a 10% royalty on new mint sales and a 1% royalty on all trading and commercial revenue generated from any EAS Address NFT or Charity NFT within its respective neighborhood (postal code). Address and Charity NFTs with no designated postal code will not be included in the Neighborhood NFT royalty structure.
          </p>
        </div>
      </div>
    </>
  );
};

export default NftPricingItem;
