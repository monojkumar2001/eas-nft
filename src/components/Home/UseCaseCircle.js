import React, { useState } from "react";

const UseCaseCircle = () => {
    const [activeCircleContent, setActiveCircleContent] = useState(1);
    const toggleActiveCircle = (index) => {
      setActiveCircleContent(index);
    };
  return (
    <>
        <div className="use-cases-right-item-container"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className="use-case-circle-item" >
                  <div
                    className={
                      activeCircleContent === 1
                        ? "use-case-circle-btn"
                        : "active use-case-circle-btn"
                    }
                    onMouseOver={() => {
                      toggleActiveCircle(1);
                    }}
                    id="circle-btn-1"
                  >
                    <div className="circle-btn-content">
                      <img src="/images/home/game.svg" alt="" />
                      <p>Gaming & Mapping</p>
                    </div>
                  </div>
                  <div
                    className={
                      activeCircleContent === 1
                        ? "use-case-circle-btn-content active-use-case-circle-btn-content"
                        : "use-case-circle-btn-content"
                    }
                  >
                    <h4>Gaming & Mapping</h4>
                    <p>
                      With the EAS proprietary trading card game called Address
                      Quest™, EAS NFT owners can win real cash and prizes by
                      building unique collections of addresses and
                      neighborhoods. Follow us on social media, where we will
                      announce ways to win each month!
                    </p>
                  </div>
                </div>
                <div className="use-case-circle-item">
                  <div
                    className={
                      activeCircleContent === 2
                        ? "use-case-circle-btn"
                        : "active use-case-circle-btn"
                    }
                    onMouseOver={() => {
                      toggleActiveCircle(2);
                    }}
                    id="circle-btn-2"
                  >
                    <div className="circle-btn-content">
                      <img src="/images/home/market.svg" alt="" />
                      <p>Market Intel</p>
                    </div>
                  </div>
                  <div
                    className={
                      activeCircleContent === 2
                        ? "use-case-circle-btn-content active-use-case-circle-btn-content"
                        : "use-case-circle-btn-content"
                    }
                  >
                    <h4>Market Intelligence</h4>
                    <p>
                      The buying and selling of EAS NFTs generates unique
                      real-time data that can be aggregated and monetized. This
                      data provides valuable market intelligence to real estate
                      developers and owners, investors, brokers, appraisers,
                      lenders, consumer behavior and data analysts, and many
                      more.
                    </p>
                  </div>
                </div>
                <div className="use-case-circle-item">
                  <div
                    className={
                      activeCircleContent === 3
                        ? "use-case-circle-btn"
                        : "active use-case-circle-btn"
                    }
                    onMouseOver={() => {
                      toggleActiveCircle(3);
                    }}
                    id="circle-btn-3"
                  >
                    <div className="circle-btn-content">
                      <img src="/images/home/world.svg" alt="" />
                      <p>Real-World Data</p>
                    </div>
                  </div>
                  <div
                    className={
                      activeCircleContent === 3
                        ? "use-case-circle-btn-content active-use-case-circle-btn-content"
                        : "use-case-circle-btn-content"
                    }
                  >
                    <h4>Real-World Data</h4>
                    <p>
                      Real-World property owners opt-in to the storage of their
                      property details and data (public or private access) on
                      the blockchain. Important info such as property taxes,
                      maintenance records, security feeds, and more, can be
                      accessed in real-time by the relevant decision-making
                      counterparties. Revenue generated from blockchain storage
                      is shared with EAS NFT owners.
                    </p>
                  </div>
                </div>
                <div className="use-case-circle-item">
                  <div
                    className={
                      activeCircleContent === 4
                        ? "use-case-circle-btn"
                        : "active use-case-circle-btn"
                    }
                    onMouseOver={() => {
                      toggleActiveCircle(4);
                    }}
                    id="circle-btn-4"
                  >
                    <div className="circle-btn-content">
                      <img src="/images/home/comps.svg" alt="" />
                      <p>Liquid Comps</p>
                    </div>
                  </div>
                  <div
                    className={
                      activeCircleContent === 4
                        ? "use-case-circle-btn-content active-use-case-circle-btn-content"
                        : "use-case-circle-btn-content"
                    }
                  >
                    <h4>Liquid Pricing Comparables</h4>
                    <p>
                    EAS NFTs serve as a transparent and affordable liquid pricing comparable to real-world addresses and their associated property. This trading data provides a new digitally-based data set that does not currently exist in the real-estate market.
                    </p>
                  </div>
                </div>
              </div>
    </>
  )
}

export default UseCaseCircle