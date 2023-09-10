import React from "react";
import CetagoriesListNFTs from "../components/AddressNFTs/CetagoriesListNFTs";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../Style/addressnft.css";

const AddressNFTsPage = () => {
  return (
    <>
      <section className="address-nfts">
        <div className="container">
          <div className="address-nfts-wrapper row">
            <div className="col-lg-7 col-md-12">
              <div className="address-nft-content">
                <span>ADDRESS NFTS</span>
                <h2 className="section-title">Bring Real-World Addresses to Web3</h2>
                <p>
                  Do you want to own the digital rights to the iconic addresses
                  of your dreams? Any address in the world can be claimed as an
                  EAS NFT.
                </p>
                <p>
                  Claim your own Address NFT, and the address you choose can
                  unlock value in our digital world, including the participation
                  in the monetization of data that is created from the buying
                  and selling of your address in the secondary market.{" "}
                </p>
                <button className="claim-your-address-btn alt-custom-btn">
                  CLAIM YOUR OWN ADDRESS NFT
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="eas-address-nfts-list">
                <h4>EAS offers 15 categories of Address NFTs:</h4>
                <CetagoriesListNFTs />
              </div>
            </div>
          </div>
        </div>
        <div className="address-overlay"></div>
      </section>

      {/* ========================= WHAT ARE ADDRESS NFTS? ========================= */}

      <section className="digital-address-nft cpy-6" >
        <div className="container">
          <div className="digital-address-nft-wrapper row d-flex align-items-center" data-aos="fade-up"
     data-aos-duration="3000">
            <div className="col-lg-7 col-md-12">
              <div className="digital-address-nft-content">
                <span className="sub-title">Owning Digital Rights</span>
                <h2 className="address-title">What are Address NFTs?</h2>
                <div className="row mt-4">
                  <div className="col-lg-6 col-md-12">
                    <p className="address-details">
                      Ethereum Address Service (EAS) NFTs are digital address
                      rights that provide NFT buyers a structure to participate
                      in the monetization of the data that is created from the
                      buying and selling of digital addresses. EAS is developing{" "}
                      <span>
                        <Link to={"/"}>use cases</Link>
                      </span>{" "}
                      for the aggregation and commercialization of this unique
                      data which include distribution to real estate developers
                      and owners, investors, brokers, appraisers, lenders,
                      consumer behavior and data analysts, and more.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <p className="address-details">
                      For geolocation and mapping identification purposes, your
                      Address NFT is converted to a digital format with a unique
                      Google Plus Code and GPS coordinate identifier.
                    </p>
                    <p className="address-details">
                      Your Address NFT is instantly tradable on
                      <span>
                        <Link to={""}>OpenSea</Link>
                      </span>{" "}
                      or the secondary market of your choice. As the EAS
                      platform grows its community of Address NFT owners, EAS
                      NFTs will naturally appreciate in value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12" >
              <div className="digital-address-right-item">
                <div className="digital-makers-img">
                  <LazyLoadImage
                    src="/images/addressnfts/digital-map-markers.jpg"
                    alt="What are Address NFTs?"
                  />
                </div>
                <p className="mt-3">
                  Each custom Address NFT you claim is a flat price of 0.02 ETH
                  + gas.
                </p>
                <Link to={'/nft-pricing'} className="nft-pricing-nft-link">
                  View Full NFT pricing guide{" "}
                  <span>
                    <FaChevronRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddressNFTsPage;
