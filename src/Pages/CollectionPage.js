import React from "react";
import { useState, useEffect } from "react";
import "../Style/myCollection.css";
import SingleNft from "../components/Collection/SingleNft";
import Web3 from "web3";
import {fetchJsonFromIpfs } from "../utils";
import {
  contact_address,
  contact_ABI,
  MarketPlace_Address,
  Market_ABI,
} from "../config";
import Loading from "../components/Loading/Loading";

const CollectionPage = () => {
  const web3 = new Web3("https://rpc-mumbai.maticvigil.com");
  const [loading, setLoading] = useState(true);
  const [activeNfts, setActiveNfts] = useState(1);
  const toggleNfts = (index) => {
    setActiveNfts(index);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const [NFTs, setNFTs] = useState([]);
  const [uniqueData, setUniqueData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [visibleCards, setVisibleCards] = useState(8);

  useEffect(() => {
    setFilteredData(uniqueData);
  }, [uniqueData]);

  useEffect(() => {
    setFilteredData(uniqueData.slice(0, visibleCards));
  }, [uniqueData, visibleCards]);

  const fetchData = async () => {
    try {
      const marketContract = new web3.eth.Contract(
        Market_ABI,
        MarketPlace_Address
      );

      const fetchMarketItems = await marketContract.methods
        .fetchMarketItems()
        .call();

      const items = fetchMarketItems.map((nft) => {
        return nft.tokenId;
      });

      const Contract = new web3.eth.Contract(contact_ABI, contact_address);
      const NFTs = [];
      for (const id of items) {
        const tokenUrl = await Contract.methods.tokenURI(id.toString()).call();
        const nfts = await fetchJsonFromIpfs(tokenUrl);

        const data = { data: nfts, tokenID: id };

        NFTs.push(data);
      }
      setNFTs(NFTs);
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  };
  console.log(NFTs);

  useEffect(() => {
    fetchData();

  }, []);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 8); // Increase the number of visible cards by 10
  };

  return (
    <>
     {!loading ? (
      <div className="my-nfts-wrapper my-collection-page">
        <div className="container">
          <div className="dashboard-header-item d-flex align-items-center gap-3">
            <div className="dashboard-con-btn d-flex align-items-center gap-2">
              <button
                className={
                  activeNfts === 1
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(1);
                }}
              >
                ALL
              </button>
              <button
                className={
                  activeNfts === 2
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(2);
                }}
              >
                Charity
              </button>
              <button
                className={
                  activeNfts === 3
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(3);
                }}
              >
                Commercial
              </button>
              <button
                className={
                  activeNfts === 4
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(4);
                }}
              >
                Historic Landmarks
              </button>
              <button
                className={
                  activeNfts === 5
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(5);
                }}
              >
                Hospitals & Health Care
              </button>
              <button
                className={
                  activeNfts === 6
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(6);
                }}
              >
                Industrial
              </button>
              <button
                className={
                  activeNfts === 7
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(7);
                }}
              >
                Places of Worship
              </button>
              <button
                className={
                  activeNfts === 8
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(8);
                }}
              >
                Residential
              </button>
            </div>
            <button
              className="dashboard-refresh-btn collection-refresh-btn"
              onClick={refreshPage}
            >
              <img src="/images/dashboard/refresh.svg" alt="" />
            </button>
          </div>
          <div className="dashboard-card-item-wrapper">
            <div className="dashboard-card-items my-collection-items">
              {NFTs.map((nft, i) => (
                <SingleNft
                  key={i}
                  id={nft.tokenID}
                  image={nft.data.image}
                  name={nft.data.name}
                />
              ))}
            </div>
            <div className="load-more-btn-con">
              {visibleCards < uniqueData.length && (
                <button
                  onClick={loadMoreCards}
                  className="load-more-btn custom-btn mt-4 d-flex align-items-center text-center justify-content-center"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
        ):(
          <Loading/>
        )}
    </>
  );
};

export default CollectionPage;
