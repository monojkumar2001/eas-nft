import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NFTModelCongratulations from "./NFTModelCongratulations";
import { convertIpfsAddress } from "../../utils";
const SingleNft = (props) => {
  return (
    <>
      <div
        key={props.key}
        className="images-card w-100 d-flex align-items-center justify-content-between flex-column"
      >
        <Link to={`/nft-details/${props.id}`}>
          <div className="nft-imgs">
            <img src={convertIpfsAddress(props.image)} alt="" />
          </div>
          <div className="nft-titles">
            <p>{props.name}</p>
            {/* <span>NO. {props.id}</span> */}
          </div>
        </Link>
        <button className="buy-nft-btn w-100 custom-btn">Buy NFT</button>
      </div>
    </>
  );
};

export default SingleNft;
