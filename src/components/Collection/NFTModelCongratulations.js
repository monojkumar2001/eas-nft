import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/NftModelCongratulation.css";
const NFTModelCongratulations = (props) => {
 
  const handleNftModel = () => {
    props.setNftModel(!props.nftModel);
  };
  return (
    <div className="w-100">
      {/* <button className="buy-nft-btn w-100 custom-btn" onClick={handleNftModel}>
        Buy NFT
      </button> */}
      {props.nftModel && (
        <div className="nft_model_item" onClick={handleNftModel}>
          <div className="overlay"></div>
          <div className="nft_model_item_content">
            <h4>Congratulations !!</h4>
            <p className="pra">You have successfully minted your NFT</p>
            <div className="nft-item-imgs">
              <img src={props.image} alt="" />
            </div>
            <div className="nft_opensea_btn">
              <div
                className="filter-nft-opensea custom-btn"
                id="congats"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
              >
                <svg
                  width="18"
                  height="29"
                  viewBox="0 0 18 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_338_26)">
                    <path
                      d="M8.9973 0L8.80078 0.660671V19.8318L8.9973 20.0259L17.9946 14.7657L8.9973 0Z"
                      fill="#343434"
                    />
                    <path
                      d="M8.99733 0L0 14.7657L8.99733 20.0259V10.7208V0Z"
                      fill="#8C8C8C"
                    />
                    <path
                      d="M8.99746 21.7109L8.88672 21.8444V28.6736L8.99746 28.9935L18.0001 16.4533L8.99746 21.7109Z"
                      fill="#3C3C3B"
                    />
                    <path
                      d="M8.99733 28.9934V21.7107L0 16.4532L8.99733 28.9934Z"
                      fill="#8C8C8C"
                    />
                    <path
                      d="M8.99707 20.0259L17.9943 14.7657L8.99707 10.7209V20.0259Z"
                      fill="#141414"
                    />
                    <path
                      d="M0 14.7657L8.99719 20.0259V10.7209L0 14.7657Z"
                      fill="#393939"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_338_26">
                      <rect width="18" height="29" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link to={`https://etherscan.io/tx/${props.hash}`}> <span>View on Etherscan</span></Link>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTModelCongratulations;
