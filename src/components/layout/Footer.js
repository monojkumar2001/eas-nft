import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import SocialMediaLinkItem from "../SocialMediaLink/SocialMediaLinkItem";
import { NavLink } from "react-router-dom";
// import NftPricingPage from "../../Pages/NftPricingPage";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper row ">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item-fluid footer-items-content d-flex text-center algin-items-center justify-content-center flex-column">
                <Link to={"/"} className="eas-nft-img">
                  <LazyLoadImage src="/images/footer/footer-logo.svg" />
                </Link>
                <p>
                  The only platform mapping the worlds addresses as tradable
                  NFTs
                </p>
                <div className="footer-opensea">
                  <Link
                    to={
                      "https://opensea.io/collection/ethereum-address-service"
                    }
                    target="_blank"
                  >
                    <img src="/images/footer/opensea.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-item-fluid-m">
              <div className="footer-item-fluid">
                {/* <div className="footer-link-item">
                  <Link to={"/address-nfts"} onClick={handleLinkClick}>Address NFTs</Link>
                </div> */}
                <div className="footer-link-item">
                  <Link to={"/nft-collection"} onClick={handleLinkClick}>NFT Collection</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/my-nft-list"} onClick={handleLinkClick}>My NFT List</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/marketplace"} onClick={handleLinkClick}>Marketplace</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/nft-pricing"} onClick={handleLinkClick}>Pricing</Link>
                </div>
                <div className="footer-link-item">
                  <NavLink to={"/nft-use-cases"} onClick={handleLinkClick}>Use Cases</NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-item-fluid-m">
              <div className="footer-item-fluid">
                <div className="footer-link-item">
                  <Link to={"/about"} onClick={handleLinkClick}>About</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/contact"} onClick={handleLinkClick}>Contact</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/news"} onClick={handleLinkClick}>News</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/docs"} onClick={handleLinkClick}>FAQ & Support</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/careers"} onClick={handleLinkClick}>Careers</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/account"} onClick={handleLinkClick}>Account</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item-fluid footer-items-content">
                <SocialMediaLinkItem />
                <p>Be the first to know about special announcements:</p>

                <div className="footer-email-fluid mt-4">
                  <input type="email" placeholder="Email*" />
                </div>
                <div className="footer-email-submit-btn">
                  <button type="submit">I want in!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy-right-wrapper mt-5">
          <div className="footer-terms-policy" >
            <Link to={"/privacy-policy"} onClick={handleLinkClick}>Privacy Policy</Link>
            <Link to={"/terms-and-conditions"} onClick={handleLinkClick}>Terms & Conditions</Link>
          </div>
          <p className="copy-text">
            Copyright © 2023 Ethereum Address Service (EAS). All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
