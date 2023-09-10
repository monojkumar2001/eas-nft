import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import ImageCard from "./ImageCard";

const MyNfts = () => {
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

  const [visibleCards, setVisibleCards] = useState(10);

  useEffect(() => {
    setFilteredData(uniqueData);
  }, [uniqueData]);

  useEffect(() => {
    setFilteredData(uniqueData.slice(0, visibleCards));
  }, [uniqueData, visibleCards]);

  const fetchData = async () => {
    try {
      const totalSupply = 50;
      let i;

      for (i = 1; i <= totalSupply; i++) {
        const url = `https://ipfs.io/ipfs/QmQQyTiUHzrH4NmUFpu3r9WbgVPVVVQ7NBhmveswMRHXhK/${i}.json`;
        const response = await axios.get(url);
        const result = response.data;
        setNFTs((prev) => [...prev, result]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    NFTs.forEach((nft) => {
      const data = [];
      const isDuplicate = uniqueData.some(
        (uniqueNft) =>
          uniqueNft.name === nft.name && uniqueNft.image === nft.image
      );
      if (!isDuplicate) {
        data.push(nft);
        setUniqueData((uniqueData) => [...uniqueData, ...data]);
      }
    });
  }, [NFTs]);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 10); // Increase the number of visible cards by 10
  };

  return (
    <>
      <div className="my-nfts-wrapper">
        <div className="dashboard-header-item d-flex align-items-center justify-content-between">
          <div className="dashboard-con-btn d-flex align-items-center gap-3">
            <button
              className={
                activeNfts === 1 ? "my-nft-btn active-my-nft-btn" : "my-nft-btn"
              }
              onClick={() => {
                toggleNfts(1);
              }}
            >
              ALL
            </button>
            <button
              className={
                activeNfts === 2 ? "my-nft-btn active-my-nft-btn" : "my-nft-btn"
              }
              onClick={() => {
                toggleNfts(2);
              }}
            >
              MINTED
            </button>
            <button
              className={
                activeNfts === 3 ? "my-nft-btn active-my-nft-btn" : "my-nft-btn"
              }
              onClick={() => {
                toggleNfts(3);
              }}
            >
              IN PROCESS
            </button>
            <div className="nft-search-fluid-input">
              <span>
                <FaSearch />
              </span>
              <input type="text" placeholder="Search By No..." />
            </div>
          </div>
          <div className="dashboard-count d-flex align-items-center gap-3">
            <span>12450</span>
            <button className="dashboard-refresh-btn" onClick={refreshPage}>
              <img src="/images/dashboard/refresh.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="dashboard-card-item-wrapper">
          <div
            className={
              activeNfts === 1
                ? "nft-card-item active-nft-card-item"
                : "nft-card-item"
            }
          >
            <div className="dashboard-card-items">
              <ImageCard uniqueData={filteredData} />
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
          <div
            className={
              activeNfts === 2
                ? "nft-card-item active-nft-card-item"
                : "nft-card-item"
            }
          >
            <div className="dashboard-card-items">
              <ImageCard uniqueData={filteredData} />
            </div>
            <div className="load-more-btn-con">
              {visibleCards < uniqueData.length && (
                <button
                  onClick={loadMoreCards}
                  className="load-more-btn custom-btn mt-4 "
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNfts;
