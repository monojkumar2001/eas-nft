import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { convertIpfsAddress } from "../../utils";
import { ethers } from "ethers";
import { RotatingLines } from 'react-loader-spinner'
import { MarketPlace_Address, Market_ABI, contact_address } from "../../config";
import Swal from "sweetalert2";
import Web3 from "web3";

const MySingleNft = (props) => {
  const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

  const [isListed, setIsListed] = useState(false);
  const isList = async () => {
    try {

      const marketContract = new web3.eth.Contract(
        Market_ABI,
        MarketPlace_Address,
      );
      const isNFTListed = await marketContract.methods.isNFTListed(
        contact_address,
        props.tokenId
      ).call();

      console.log(isNFTListed)

      setIsListed(isNFTListed);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isList();
  }, [props.tokenId]);

  const handleRemoveList = async () => {
    try {
      if (window.ethereum) {
        window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const marketContract = new ethers.Contract(
          MarketPlace_Address,
          Market_ABI,
          signer
        );

        const removeMarketSale = await marketContract.removeMarketItem(
          contact_address,
          props.tokenId
        );
        const tx = removeMarketSale.wait();

        if (tx) {
          Swal.fire(
            "Good Jod! ",
            "your NFT remove for marketplace Listing",
            "success"
          );
        } else {
          Swal.fire("Oops", "your not Owner Of this NFT", "info");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
{
  props ? props:     <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
}
      <div className="images-card d-flex align-items-center justify-content-center flex-column">
        <Link to={`/nft-details/${props.tokenId}`} key={props.i}>
          <div className="nft-img">
            <img src={convertIpfsAddress(props.image) || null} alt="" />
          </div>
        </Link>
        <div className="nft-titles">
          <p> {props.name || null} </p>
          {isListed ? (
            <button
              className="buy-nft-btn custom-btn"
              onClick={handleRemoveList}
            >
              Delist from sale{" "}
            </button>
          ) : (
            <Link
              to={`/nft-details/${props.tokenId}`}
              className="buy-nft-btn custom-btn"
            >
              listing for sale{" "}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default MySingleNft;
