import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
const EasAffliateItem = () => {
  return (
    <>
         <section className="eas-affiliate cpy-6" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="container">
          <div className="eas-affiliate-wrapper row d-flex align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="eas-affiliate-content">
                <span className="focus-color">JOIN OUR COMMUNITY</span>
                <h2 className="section-title-2 mb-4">
                  Become an EAS Affiliate
                </h2>
                <p>
                  EAS is growing its NFT community through dedicated affiliates
                  interested in building virtual NFT neighborhoods.
                </p>
                <p>
                  Affiliates will receive a bonus of 0.0175 ETH on each NFT sale
                  and also qualify to own a neighborhood once they have built a
                  community of 100 NFTs.
                </p>
                <button className="coming-soon-btn custom-btn mt-4">
                  (COMING SOON)
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div
                className="eas-affiliate-img"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="300"
                data-aos-duration="2000"
              >
                <LazyLoadImage src="/images/home/affiliate-img.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EasAffliateItem