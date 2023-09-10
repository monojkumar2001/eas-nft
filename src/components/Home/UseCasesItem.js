import React from 'react'
import { Link } from "react-router-dom";
import UseCaseCircle from './UseCaseCircle';
const UseCasesItem = () => {
  return (
    <>
       <section className="use-cases" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="container">
          <div className="use-cases-wrapper row d-flex align-items-center">
            <div className="use-cases-left-item col-lg-6 col-md-12">
              <span className="focus-color">NFT use Cases</span>
              <h1 className="section-title-2 mb-4">
                How Does My EAS NFT Make <span>Money?</span>
              </h1>
              <p className="pb-3">
                When many people hear “NFT” they may think of silly overpriced
                monkey doodles. But the reality is that the actual technological
                power of non-fungible tokens on the blockchain goes{" "}
                <span className="focus-color-2">
                  <Link to={"/nft-use-cases"}>SO far beyond</Link>
                </span>{" "}
                just artwork alone.
              </p>
              <p>
                Since they’re recorded on the blockchain, NFTs are used to
                certify ownership and authenticity, and cannot be copied or
                substituted. EAS puts the real intended power of NFTs to use.
              </p>
              <div className="use-cases-item-list mt-3">
                <p>
                  EAS NFTs generate royalties and revenue from three primary use
                  cases:
                </p>
                <ul className="mt-3">
                  <li>Gaming & Mapping</li>
                  <li>Market Intelligence</li>
                  <li>Liquid Pricing Comparables</li>
                  <li>Real-World Data</li>
                </ul>
              </div>
            </div>
            <div className="use-cases-right-item col-lg-6 col-md-12">
              <UseCaseCircle />
            </div>
            <div className="learn-more-btns">
              <Link to={'/nft-use-cases'} className="custom-btn about-use-cases-btn">
                LEARN MORE ABOUT USE CASES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UseCasesItem