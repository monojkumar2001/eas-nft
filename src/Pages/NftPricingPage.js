import React from "react";
import EasBanner from "../components/KnowledgeBaseFaq/EasBanner";
import NftPricingItem from "../components/NftPricing/NftPricingItem";
import "../Style/nft-pricing.css";
const NftPricingPage = () => {
  return (
    <>
      {/* ============ Banner ========== */}
      <EasBanner title="EAS NFT Pricing" />
      {/* =========== Nft Pricing ============== */}
      <section className="nft-pricing cpy-6" >
        <div className="container">
          <div className="nft-pricing-wrapper" data-aos="fade-up"
     data-aos-duration="3000">
            <div className="nft-pricing-header-items">
              <div className="nft-pricing-header-item">
                <h2>NFT Type</h2>
              </div>
              <div className="nft-pricing-header-item">
                <h2>Price (Ether)</h2>
              </div>
              <div className="nft-pricing-header-item">
                <h2>Description</h2>
              </div>
            </div>
            <NftPricingItem />

            <div className="price-footer mt-5">
              <p>
                <strong>Prices are subject to change.</strong> Ethereum Address
                Service reserves the right to change our NFT pricing structure
                at any time without notice. However, if you have claimed a
                custom Address NFT on www.easnft.com, but have not yet paid
                (this would show as Pending or NFT Ready in your account
                dashboard), we guarantee the same price from when the Address
                NFT was claimed, until the 7-day private listing expires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NftPricingPage;
