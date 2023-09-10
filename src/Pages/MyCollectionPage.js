import React from "react";
import { useState, useEffect } from "react";
import { fetchJsonFromIpfs } from "../utils";
import "../Style/myCollection.css";
import MySingleNft from "../components/Collection/MySingleNft";
import { ethers } from "ethers";
import {
  contact_address,
  contact_ABI,
  MarketPlace_Address,
  Market_ABI,
} from "../config";
import Web3 from "web3";
import Loading from "../components/Loading/Loading";



const MyCollectionPage = () => {
const [loading, setLoading]=useState(true);

  const [NFTs, setNFTs] = useState([]);
  const [listedNFT, setListedNFT] = useState([]);

  const web3 = new Web3("https://rpc-mumbai.maticvigil.com");



  const handleSign = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const contact = new web3.eth.Contract(
          contact_ABI,
          contact_address, );
        const marketplaceContract = new web3.eth.Contract(
          Market_ABI,
          MarketPlace_Address,
        );
        await getCreateListNFt(contact, marketplaceContract, address);
        const userTokenId = await contact.methods.getTokenIds(address).call({from:address});

        // const numericUserTokenId = userTokenId.filter(
        //   (value) => ethers.BigNumber.isBigNumber(value) && !value.isZero()
        // );

        // console.log(numericUserTokenId)

        const NFT = [];

        for (const tokenId of userTokenId) {

          const tokenURI = await contact.methods.tokenURI(tokenId).call();
          const data = await fetchJsonFromIpfs(tokenURI);
          const nftItem = { tokenId: tokenId.toString(), data: data }; // Add tokenId and data
          NFT.push(nftItem);
        }

        setNFTs(NFT);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCreateListNFt = async (contact, marketplaceContract, address) => {
    try {
      const fetchItemsCreated = await marketplaceContract.methods.fetchItemsCreated().call({ from: address,});

      const filterNFt = await fetchItemsCreated.map((nft) => nft.tokenId);

      // const numericUserTokenId = filterNFt.filter(
      //   (value) => ethers.BigNumber.isBigNumber(value) && !value.isZero()
      // );

      const NFT = [];

      for (const tokenId of filterNFt) {
        const tokenURI = await contact.methods.tokenURI(tokenId).call();
        const data = await fetchJsonFromIpfs(tokenURI);
        const nftItem = { tokenId: tokenId.toString(), data: data }; // Add tokenId and data
        NFT.push(nftItem);
      }
      setListedNFT(NFT);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleSign();
  }, []);

  return (
    <>
        {!loading ? (
      <div className="my-nfts-wrapper my-collection-page">
        <div className="container">
          <div className="dashboard-card-item-wrapper">
            <div className="dashboard-card-items my-collection-items">
              {NFTs.map((nft, i) => {
                if (nft.data && nft.data.image) {
                  return (
                    <MySingleNft
                      key={i}
                      tokenId={nft.tokenId}
                      image={nft.data.image}
                      name={nft.data.name}
                    />
                  );
                } else {
                  return (
                    <MySingleNft
                      key={i}
                      tokenId={nft.tokenId}
                      image={null}
                      name={null}
                    />
                  );
                }
              })}
            </div>
            <div className="cpt-7">
              <h1 className="address-title mb-5">MARKETPLACE LISTED NFTS</h1>
              <div className="dashboard-card-items my-collection-items">
          
                {listedNFT.map((nft, i) => {
                  if (nft.data && nft.data.image) {
                    return (
                      <MySingleNft
                        key={i}
                        tokenId={nft.tokenId}
                        image={nft.data.image}
                        name={nft.data.name}
                      />
                    );
                  } else {
                    return (
                      <MySingleNft
                        key={i}
                        tokenId={nft.tokenId}
                        image={null}
                        name={null}
                      />
                    );
                  }
                })}
              </div>
            </div>
            {/* <div className="load-more-btn-con">
              {visibleCards < uniqueData.length && (
                <button
                  onClick={loadMoreCards}
                  className="load-more-btn custom-btn mt-4 d-flex align-items-center text-center justify-content-center"
                >
                  Load More
                </button>
              )}
            </div> */}
          </div>
        </div>
      </div>
       ):(
        <Loading/>
      )}
    </>
  );
};

export default MyCollectionPage;
