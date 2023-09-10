import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { contact_address, contact_ABI, message } from "../../../src/config";
import { ethers } from "ethers";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import NFTModelCongratulations from "../Collection/NFTModelCongratulations";
import AttributesCard from "./AttributesCard";

const Dynamicmodel = ({ price,item }) => {
  console.log(price);


  const referral = "0x226A0e0A3C543e7284A8E844Dc6Bd65bAeEC5c47";

  const [nftModel, setNftModel] = useState(false);
  const [hash, setHash] = useState("");

  const navigate = useNavigate();

  const mintNft = (jsonCid) => {
    const cid = "ipfs://" + jsonCid;

    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          handleSign(
            new ethers.providers.Web3Provider(window.ethereum),
            cid,
            jsonCid
          );
        })
        .catch((error) => {
          console.log("Could not detect Account");
        });
    } else {
      console.log("install metamask");
    }
  };


  const handleSign = async (provider, cid, jsonCid) => {
    try {
      const signer = await provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();
      const contact = new ethers.Contract(contact_address, contact_ABI, signer);
      if (address == localStorage.getItem("user_id")) {
        const gasLimit = 2000000;
        const priceAsString = price.toString();
        const weiPrice = ethers.utils.parseUnits(priceAsString, 18); 
  
        const mint = await contact.safeMint(cid, referral, {
          value: weiPrice.toString(),
          gasLimit,
        });
        const tx = await mint.wait();
  
        setHash(tx.transactionHash);
  
        const id = await contact.getNextSafeMintTokenId();
        const tokenId = id.toString() - 1;
        console.log(tokenId);
        saveStatus(tokenId, jsonCid);
        setNftModel(true);
        navigate("/account/my-nft");
      } else {
        Swal.fire(
          "error",
          "You should mint nft on your login account",
          "error"
        );
        navigate("/account/my-nft");
      }
    } catch (e) {
      console.log(e);
    }
  };
  

  const saveStatus = (tokenId, jsonCid) => {
    axios.get(`api/nft/status/${tokenId}/${jsonCid}`).then((res) => {
      if (res.data.status == 200) {
        console.log("status change to minted");
      } else {
        console.log("not minted");
      }
    });
  };

  return (
    <div
      className="modal fade "
      id="nft-model"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content filter-item-model-image">
          <div className="modal-header filter-image-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body filter-image-item-model">
            <div className="filter-model-img">
              <LazyLoadImage
                src={`https://ipfs.io/ipfs/${item.ipfs}`}
                width="auto"
                height="auto"
              />
            </div>
            <div className="filter-nft-content">
              {/* <div className="nft-title">
                <span>{item.subcategory?.name}</span>
                <h4>{item.address}</h4>
            
              </div> */}

              {/* ============ Attributes Item =========== */}
              {/* <div className="filter-nft-content-items">
              <div className="filter-nft-content-item" >
                      <div className="filter-content-title">
                        <span>{item.subcategory?.name}</span>
                        <h5>{item.address}</h5>
                      </div>
                    </div>
            
              </div> */}
              <AttributesCard item={item} />
              
              <div className="filter-nft-wallet-item mt-4 d-flex align-items-center justify-content-between gap-5">
                <div className="filter-nft-wallet d-flex align-items-center gap-2">
                  <div className="nft-address-icon">
                    <img src="/images/addres.svg" alt="" />
                  </div>
                  <div className="nft-wallet-content">
                    <p>{item.user_id}</p>
                    <span>{item.created_at} </span>
                  </div>
                </div>
                {item.status == "Approaved" ? (
                  <button
                    className="filter-nft-opensea"
                    id="congats"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    onClick={() => mintNft(item.jsonCid)}
                  >
                    <img src="/images/opensea.svg" alt="" />
                    <span>Mint my Nft</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NFTModelCongratulations
        image = {`https://ipfs.io/ipfs/${item.ipfs}`}
        hash={hash}
        nftModel={nftModel}
        setNftModel={setNftModel}
      />
    </div>
  );
};

export default Dynamicmodel;
