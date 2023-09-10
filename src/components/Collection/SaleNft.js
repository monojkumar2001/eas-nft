import React from "react";
import { convertIpfsAddress } from "../../utils";
import { Link } from "react-router-dom";
const SaleNft = (props) => {
  return (
    <>
      <Link
        className="images-card d-flex align-items-center justify-content-between flex-column"
        key={props.key}
        to={`/nft-details/${props.tokenId}`}
      >
        <div className="nft-imgs">
          <img src={convertIpfsAddress(props.image)} alt="" />
        </div>
        <div className="nft-titles">
          <p>{props.name}</p>
          <button  className="buy-nft-btn custom-btn">
            VIEW NFT DETAILS 
          </button>
        </div>
      </Link>
    </>
  );
};

export default SaleNft;
