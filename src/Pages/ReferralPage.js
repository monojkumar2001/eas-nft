import React, { useState } from "react";
import "../Style/referral.css";
import copy from "copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
const ReferralPage = () => {
  const [copiedText, setCopiedText] = useState("");
  const linkText = "hello world";
  const [isCopied, setIsCopied] = useState(false);

  const hanldeCopy = (link) => {
    copy(link);
    setIsCopied(true);
    setCopiedText(link);
  };

  return (
    <>
      <div className="referral-container">
        <h1 className="referral-title-name text-algin-center">
          Referral Address
        </h1>
        <div className="container">
          <div className="referral-get-started-btn">
            <div className="card-btn-item  d-flex align-items-center w-100 gap-4">
              <input
                type="text"
                id="update-ref"
                className="referral-input w-100"
                placeholder="CHANGE REFERRER ADDRESS"
              />
                <button className="referral-btn ">Create Referrer</button>
            </div>
          </div>
          <div className="referral-link-item gap-5 d-flex justify-content-between align-items-center ">
            <span className="referral-text">{copiedText || linkText}</span>
            <div className="referral-copy-btn">
              <button onClick={() => hanldeCopy(linkText)}>
                <FaRegCopy />
              </button>
              {isCopied && (
                <span className=" referrel-cope">Copied to clipboard</span>
              )}
            </div>
          </div>
        </div>

        <div className="referral-history-item">
          <div className="container">
            <h2 className="referral-title">Referral History</h2>
          </div>
          <div className="underline"></div>
          <div className="container">
            <div className="referral-history-items">
              <p className="referral-text-item">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralPage;
