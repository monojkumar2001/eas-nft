import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import TransferWallet from "../components/Collection/TransferWallet";
import NftTransection from "../components/Collection/NftTransection";
import { ethers } from "ethers";
import {
  contact_address,
  contact_ABI,
  MarketPlace_Address,
  Market_ABI,
} from "../config";
import { fetchJsonFromIpfs, convertIpfsAddress } from "../utils";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Sale from "../components/Collection/sale";
import axios from "axios";

import Web3 from "web3";

const NFTDetailsPage = () => {
  const [waiting, setWaiting] = useState(true);
  const [tarits, setTarits] = useState(true);
  const [nfts, setNfts] = useState({});
  const { id } = useParams();
  const [transfer, setTransfer] = useState("");
  const [address, setAddress] = useState("");
  const [owerOf, setOwnerOf] = useState("");
  const [price, setPrice] = useState("");
  const [listing, setListing] = useState(false);
  const [isBuy, setIsBuy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nftTableData, setNftTableData] = useState(true);
  const [listPrice, setListPrice] = useState("");
  const [attributes, setAttributes] = useState([]);

  const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

  const handleSign = async () => {
    try {
      if (window.ethereum) {
        window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        setAddress(account);
        console.log("contract balance",await web3.eth.getBalance(contact_address))
        const contact = new web3.eth.Contract(contact_ABI, contact_address);
        const MarketContract = new web3.eth.Contract(
          Market_ABI,
          MarketPlace_Address
        );
        const ownerOf = await contact.methods.ownerOf(id).call({from:account});
        if (ownerOf === account) {
          setListing(true);
        }
        const isNFTListed = await MarketContract.methods.isNFTListed(
          contact_address,
          id
        ).call()

        console.log(isNFTListed)


        setIsBuy(isNFTListed);
        try {
          const price = await MarketContract.methods.getItemPrice(id).call();
          if (price) {
            const buyPrice = await ethers.utils.formatEther(price, 18);
            setListPrice(buyPrice);
          }
        } catch (e) {
        }
        setOwnerOf(ownerOf.substring(42, 37));
        const tokenURI = await contact.methods.tokenURI(id).call()
        const Nft = await fetchJsonFromIpfs(tokenURI);
        setNfts(Nft);
      }else{
        console.log("provoder not fund")
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleTransfer = async () => {
    try {
      if (window.ethereum) {
        window.ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const NFTOwner = await signer.getAddress();
        const contract = new ethers.Contract(
          contact_address,
          contact_ABI,
          signer
        );
        const ownerOf = await contract.ownerOf(id);

        console.log("ownerOf", ownerOf);
        console.log("transfer", transfer);

        if (typeof contract.transferFrom === "function") {
          if (ownerOf === NFTOwner) {
            const transferNFt = await contract.transferFrom(
              NFTOwner,
              transfer,
              id
            );
            if (transferNFt) {
              let formData = new FormData();
              formData.append("tokenId", id);
              formData.append("price", "0.00");
              formData.append("from_address", ownerOf);
              formData.append("to_address", transfer);
              formData.append("type", 3);
              axios.post("/api/nft/transection", formData).then((res) => {
                if (res.data.status === 200) {
                  Swal.fire(
                    "Good job",
                    `Your NFT transferred successfully to this address: ${transfer}`,
                    "success"
                  );
                } else {
                  Swal.fire("Oops", "your nft listing Fail", "error");
                }
              });
            }
          } else {
            Swal.fire("Oops!", "You are not the owner of this NFT", "error");
          }
        } else {
          console.log("safeTransferFrom is not available in the contract.");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleListing = async () => {
    try {
      if (window.ethereum) {
        window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        const contract = new ethers.Contract(
          MarketPlace_Address,
          Market_ABI,
          signer
        );

        const contact = new ethers.Contract(
          contact_address,
          contact_ABI,
          signer
        );

        const isApprovedForAll = await contact.isApprovedForAll(
          account,
          MarketPlace_Address
        );
        console.log("isApprovedForAll", isApprovedForAll);

        if (!isApprovedForAll) {
          const setApprovalForAll = await contact.setApprovalForAll(
            MarketPlace_Address,
            true
          );
          console.log(setApprovalForAll);
        }

        const listingPrice = await contract.getListingPrice();
        console.log("listingPrice", listingPrice);

        const weiPrice = ethers.utils.parseUnits(price, 18);
        console.log("weiPrice", weiPrice);

        const gasLimit = 2000000;

        const createMarketItem = await contract.createMarketItem(
          contact_address,
          id,
          weiPrice,
          { value: listingPrice.toString(), gasLimit }
        );

        const tx = await createMarketItem.wait();
        console.log("tx", tx);

        if (tx) {
          let formData = new FormData();
          formData.append("tokenId", id);
          formData.append("price", price);
          formData.append("from_address", tx.from);
          formData.append("to_address", tx.to);
          formData.append("type", 1);
          axios.post("/api/nft/transection", formData).then((res) => {
            if (res.data.status === 200) {
              Swal.fire("Good jobs", "Your NFT  listing in EAS MarketPlace");
            } else {
              Swal.fire("Oops", "your nft listing Fail", "error");
            }
          });
        } else Swal.fire("Oops", "your nft listing Fail", "error");
        console.log("Transaction receipt:", tx);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleBuy = async () => {
    try {
      if (window.ethereum) {
        window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const MarketContract = new ethers.Contract(
          MarketPlace_Address,
          Market_ABI,
          signer
        );

        const price = await MarketContract.getItemPrice(id);
        const gasLimit = 2000000;
        const createMarketItem = await MarketContract.createMarketSale(
          contact_address,
          id,
          { value: price, gasLimit }
        );

        const tx = await createMarketItem.wait();

        if (tx) {
          let formData = new FormData();
          formData.append("tokenId", id);
          formData.append("price", price);
          formData.append("from_address", tx.from);
          formData.append("to_address", tx.to);
          formData.append("type", 2);
          axios.post("/api/nft/transection", formData).then((res) => {
            if (res.data.status === 200) {
              Swal.fire("Good jobs", "Your NFT  Buy in EAS MarketPlace");
            } else {
              Swal.fire("Oops", "your nft listing Fail", "error");
            }
          });
        }

        console.log("Transaction receipt:", tx);
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  const handleTarits = () => {
    setTarits(!tarits);
  };

  const getNftTableData = (id) => {
    axios.get(`api/getNftTransection/${id}`).then(res => {
      setNftTableData(res.data.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    handleSign();
    getNftTableData(id)
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Promise.all(
          nfts.attributes.map((nft) => ({
            trait_type: nft.trait_type,
            value: nft.value,
          }))
        );
        setAttributes(data);
      } catch (error) {}
    };

    fetchData();
  }, [nfts]);

  if(loading){
    return '';
  }


  return (
    <>
      <div className="nft-details">
        <div className="container">
          <div className="nft-details-wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="nft-details-img-item">
                  <div className="nft-img">
                    <LazyLoadImage src={convertIpfsAddress(nfts.image)} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="nft-content-item">
                  <div className="nft-owner-item">
                    <h3>{nfts.name}</h3>
                    <span>
                      Owned by <Link to="/">{owerOf}</Link>
                    </span>
                  </div>
                  <div className="nft-sale-item-con">
                    <div className="nft-buy-item">
                      {isBuy && (
                        <div className="nft-current-price">
                          <span>Current Price</span>
                          <div className="d-flex align-items-end gap-2">
                            <h3>{listPrice} ETH</h3>
                            <span>$1,000</span>
                          </div>
                        </div>
                      )}
                      <div className="nft-description-item">
                        <div
                          className={
                            tarits
                              ? "traits_item-con "
                              : " active traits_item-con"
                          }
                        >
                          <div
                            className="traits-item-btn d-flex align-items-center justify-content-between"
                            onClick={handleTarits}
                          >
                            <h5>Traits</h5>
                            <span>
                              <IoIosArrowUp />
                            </span>
                          </div>

                          <div className="nft-traits-item w-100">
                            <div className="row">
                              {attributes.map((nft, i) => {
                                return (
                                  <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="traits-item" key={i}>
                                      <h5>{nft?.trait_type}</h5>
                                      <p>{nft?.value}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nft-description-item">
                        <h3>Description</h3>
                        <div className="nft-disc-item">
                          {/* <Link to={"/"}>By 67F230</Link> */}
                          <p>{nfts.description}</p>
                        </div>
                      </div>
                      <div className="nft-buy-btn d-flex mt-4 align-items-center gap-2 w-100">
                        {listing ? (
                          <>
                            <Sale
                              setPrice={setPrice}
                              price={price}
                              handleSale={handleListing}
                              id={id}
                              address={address}
                            />
                            <TransferWallet
                              setTransfer={setTransfer}
                              transfer={transfer}
                              address={address}
                              id={id}
                              handleTransfer={handleTransfer}
                            />
                          </>
                        ) : isBuy ? (
                          <button
                            className="custom-btn w-100"
                            onClick={handleBuy}
                          >
                            buy Now
                          </button>
                        ) : (
                          <button className="custom-btn w-100">
                            not for Sale
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NftTransection nftData={nftTableData}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTDetailsPage;
