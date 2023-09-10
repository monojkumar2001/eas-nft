import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { convertIpfsAddress } from "../../utils";

const ImageCard = ({ uniqueData }) => {
  const [nftInfo, setNftInfo] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const NFTsData = async (id) => {
    try {
      const url = `https://ipfs.io/ipfs/QmQQyTiUHzrH4NmUFpu3r9WbgVPVVVQ7NBhmveswMRHXhK/${id}.json`;
      const response = await axios.get(url);
      const result = response.data;
      setNftInfo(result);
      const attributes = result.attributes;

      const data = await Promise.all(
        attributes.map((nft) => ({
          trait_type: nft.trait_type,
          value: nft.value,
        }))
      );
      setFilterData(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {uniqueData.map((item) => {
        return (
          <>
            <div
              data-bs-toggle="modal"
              data-bs-target="#nft-model"
              className="images-card d-flex align-items-center justify-content-center flex-column"
              key={item.edition}
              onClick={() => {
                NFTsData(item.edition);
              }}
            >
              <div className="nft-img">
                <img src={convertIpfsAddress(item.image)} alt="" />
              </div>
              <div className="nft-titles">
                <p>{item.name}</p>
                <span>NO. {item.edition}</span>
              </div>
            </div>
          </>
        );
      })}
      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}

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
                  src={convertIpfsAddress(nftInfo.image)}
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="filter-nft-content">
                <div className="nft-title">
                  <span>Elemental</span>
                  <h4>{nftInfo.name}</h4>
                </div>
                <div className="filter-nft-content-items">
                  {filterData.map((nft, i) => {
                    return (
                      <div className="filter-nft-content-item" key={i}>
                        {/* <div className="nft-content-item-icon">
                              <img src={`/images/fire${i}.svg`} alt="" />
                            </div> */}
                        <div className="filter-content-title">
                          <span>{nft?.trait_type}</span>
                          <h5>{nft?.value}</h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="filter-nft-wallet-item mt-4 d-flex align-items-center justify-content-between gap-5">
                  <div className="filter-nft-wallet d-flex align-items-center gap-2">
                    <div className="nft-address-icon">
                      <img src="/images/addres.svg" alt="" />
                    </div>
                    <div className="nft-wallet-content">
                      <p>0xee8f44373c756948a...9e0a950</p>
                      <span>Held since Jun. 2023 </span>
                    </div>
                  </div>
                  <button
                    className="filter-nft-opensea"
                    id="congats"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <img src="/images/opensea.svg" alt="" />
                    <span>View On Opensea</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================== Congratulations Model =============== */}
    </>
  );
};

export default ImageCard;
