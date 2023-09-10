import React from "react";
import "../Style/knowledgeBase.css";
import EasNftTypes from "../components/KnowledgeBaseFaq/EasNftTypes";
import GasFee from "../components/KnowledgeBaseFaq/GasFee";
import BuyingNFTs from "../components/KnowledgeBaseFaq/BuyingNFTs";
import CryptoWallets from "../components/KnowledgeBaseFaq/CryptoWallets";
import TheBasics from "../components/KnowledgeBaseFaq/TheBasics";
import OpenSea from "../components/KnowledgeBaseFaq/OpenSea";
import EasBanner from "../components/KnowledgeBaseFaq/EasBanner";

function KnowledgeBaseFaq({data1, data2,data3, data4, data5, data6}) {
  return (
    <>
      {/* ================== Knowledge Base Banner section =================== */}
    <EasBanner title="EAS Knowledge Base"/>
      {/* =================== KnowLedge Base Faq =================== */}
      <div className="knowledge-base-faq cpy-6">
        <div className="container">
          <div className="knowledge-base-faq-wrapper" data-aos="fade-up"
     data-aos-duration="3000">
            <div className="knowledge-base-search-item">
              <h4>Welcome to where the learning happens</h4>
              <div className="knowledge-base-search-input-fluid mt-4 d-flex align-items-center gap-3">
                <span>
                  <img src="/images/knowledge-base/search-icon.svg" alt="" />
                </span>
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            <div className="knowledge-base-faq-items row cpt-7">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
             <EasNftTypes data1={data1}/>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
             <GasFee data2={data2}/>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
             <BuyingNFTs data3={data3}/>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
             <CryptoWallets data4={data4}/>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
             <TheBasics data5={data5}/>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
             <OpenSea data6={data6}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowledgeBaseFaq;
