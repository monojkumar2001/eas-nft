import React from "react";
import "../../Style/myCollection.css";

const TransferWallet = (props) => {


  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#transferModal"
        className="custom-btn w-100"
      >
        transfer
      </button>
      <div
        className="modal fade"
        id="transferModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wallet-connect-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
               
              ></button>
            </div>
            <div className="modal-body">
              <div className="wallet-content-wrapper d-flex flex-column gap-3">
                  <label htmlFor="" className="label-text">
                    Transfer Nft
                  </label>
                  <div className="wallet-input-fluid w-100">
                    <input
                      type="text"
                      className=" my-3 w-100"
                      placeholder="enter wallet address"
                      value={props.transfer}
                      onChange={(e)=>{props.setTransfer(e.target.value)}}
                    />
                  </div>
                  <label htmlFor="" className="label-texts mb-2">
                    <span>NFT owner Address: </span>
                    <span>{props.address}</span>
                  </label>
                  <label htmlFor="" className="label-texts">
                    <span> Token Id: </span>
                    <span>{props.id}</span>
                  </label>
                  <div className="conform-btn-item my-4 d-flex justify-content-center">
                    <button className="custom-btn" onClick={props.handleTransfer} >Conform Transfer</button>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferWallet;
