import React,{useState}from "react";
import EasBanner from "../components/KnowledgeBaseFaq/EasBanner";
import AboutCardItem from "../components/AboutCard/AboutCardItem";
import EasPriceItem from "../components/AboutCard/EasPriceItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { FaFile,FaRegPlayCircle } from "react-icons/fa";
import "../Style/about.css";
import Video from "../components/AboutCard/Video";
const AboutPage = () => {
  // const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = ()=>{
    setIsPlaying(!isPlaying)
  }
  return (
    <>
      {/* ============ Banner ========== */}
      <EasBanner title="About EAS" />
      {/* ================== About EAS ============= */}
      <section className="about-eas cpy-6">
        <div className="container">
          <div className="about-eas-content">
            <span className="focus-color"> About EAS</span>
            <h4 className="section-title">
              EAS is mapping the world’s addresses as tradable NFTs.
            </h4>
            <p>
              With Ethereum Address Service (EAS), NFT owners generate royalties
              from the gamification of digital address collecting and the
              monetization of address-related data. We envision a future where
              every real-world address and point of interest has an associated
              EAS NFT. EAS serves as the platform to monetize and manage these
              new digital address rights and drive price appreciation for NFT
              buyers.
            </p>

            <div className="about-video-item mt-4">
              <button className="custom-btn d-flex gap-2" onClick={handlePlay}>
                <span className="video-icon-item"><FaRegPlayCircle/></span>
                <span className="video-view-text">View a Message from Our Founder</span>
              </button>
            </div>
            <Video isPlay={isPlaying} handlePlay={handlePlay}/>
          </div>
          <div className="row cpt-7" data-aos="fade-up"
     data-aos-duration="3000">
            <AboutCardItem />
          </div>
        </div>
      </section>

      {/* =================== EAS Owners Earn ================== */}
      <section className="eas-owners-earn cpb-6">
        <div className="container">
          <div className="eas-owners-earn-wrapper row " data-aos="fade-up"
     data-aos-duration="3000">
            <div className="eas-owners-earn-left col-lg-6 col-md-12">
              <span className="focus-color">HOW WE'RE DIFFERENT</span>
              <h1 className="section-title mb-4">
                EAS Neighborhood NFT Owners Earn Significant Revenue
              </h1>
              <p>
                Neighborhood NFTs have the potential to earn significant revenue
                without needing to be traded. Owners of EAS Neighborhood NFTs
                receive a a 10% royalty on new mint sales and a 1% royalty on
                every trade of EAS Address & Charity NFTs within their
                neighborhood.
              </p>
              <div className="eas-price-items row mt-4">
                <EasPriceItem />
              </div>
              <div className="explore-btn mt-4">
                <Link
                  to={"/"}
                  className="custom-btn d-flex align-items-center gap-2"
                >
                  <p>
                    <FaFile />
                  </p>
                  <span> Explore Nft use case</span>
                </Link>
              </div>
            </div>
            <div className="eas-owners-earn-right col-lg-6 col-md-6">
              <LazyLoadImage
                src="/images/about/world-map.png"
                alt="EAS Price Image"
              />
            </div>
          </div>
          <div className="eas-price-footer-item d-flex align-items-center justify-content-center gap-2 mt-5">
            <p>
              If you don’t find the answers you’re looking for, please feel free
              to ask us anything!
            </p>
            <button className="custom-btn">Get in Touch</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
