import React from "react";
import { useState } from "react";
const Referral = () => {
  const referralURI =
    "adsakdhsajhfajsfgladsukfgsiadufghuie7856dsaisdfgdfbnbsaid78as0diofna8atfdpa;sfdc9as7";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(referralURI)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("Copy failed", error);
      });
  };

  return (
    <>
      <div className="content-eas-nft-wrapper">
        <h3 className="page-title-item">Referral</h3>
        <div className="referral-input-box d-flex align-items-center justify-content-between gap-2 w-100">
          <p className="referral-text">{referralURI}</p>
          <button className="custom-btn" onClick={handleCopy}>
            {isCopied ? "Copied!" : `Copy`}
          </button>
        </div>
        <div className="referral-history-list-wrapper mt-5">
          <h2 className="page-title-item">Referral History</h2>
          <div className="referral-history-list-item">
            <h4>Referral History</h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Wallet Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>adsakdhsajhfajsfgladsukfgsiadufghuie7856dsaidfbnsaid78as0diofna8atfdpa;sfdc9as7</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>adsakdhsajhfajsfgladsukfgsiadufghuie7856dsaidfbnsaid78as0diofna8atfdpa;sfdc9as7</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>adsakdhsajhfajsfgladsukfgsiadufghuie7856dsaidfbnsaid78as0diofna8atfdpa;sfdc9as7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Referral;
