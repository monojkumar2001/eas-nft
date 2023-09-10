import React,{useState} from "react";
import Faq from "react-faq-component";
import HeroCardItems from "../components/Home/HeroCardItems";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NFTCollections from "../components/Home/NFTCollections";
import "../Style/home.css";
import UseCaseCircle from "../components/Home/UseCaseCircle";
import Googlemap from "../components/Googleaddress/Address";
import Googlecategory from "../components/Googleaddress/Category";
import Googleemail from "../components/Googleaddress/Email";
import Googleconnect from "../components/Googleaddress/Connect";
import AboutUsItem from "../components/Home/AboutUsItem";
import UseCasesItem from "../components/Home/UseCasesItem";
import FaqQuestionItem from "../components/Home/FaqQuestionItem";
import EasAffliateItem from "../components/Home/EasAffliateItem";

function HomePage() {
  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
  };
const [step, setstep] = useState('1')

const changeStep = (id) => {
  setstep(id);
}
  return (
    <React.Fragment>
      {/* ======================= HERO =========================== */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="container">
          <div className="hero-wrapper">
            <span className="focus-color">Ethereum Address Service</span>
            <h1 className="hero-title">
              Mapping the World's Addresses as <span>NFT-based</span> Digital
              Rights
            </h1>
            {
              step == '1' ?
              <Googlemap changeStep={() => changeStep(2)}/>
              : step == '2' ?
              <Googlecategory changeStep = {() => changeStep(3)}/>
              : step == '3' ?
              <Googleemail changeStep = {() => changeStep(4)}/>
              : 
              <Googleconnect/>
            }
            <div className="hero-map-img">
              <LazyLoadImage src="/images/home/map-3d.png" />
            </div>
          </div>
        </div>

        <div className="hero-bg-hover"></div>
      </section>

      {/* ======================= HERO CARD ====================== */}
      <HeroCardItems />

      {/* ====================== ABOUT US ========================== */}
      <AboutUsItem />

      {/* ==================== NFT COLLECTIONS ==================== */}
      <NFTCollections />

      {/* =====================  NFT USE CASES ==================== */}
      <UseCasesItem />

      {/* ========================= FAQ QUESTION  ================== */}
      <FaqQuestionItem />
      
      {/* ======================== EAS AFFILIATE ================== */}
      <EasAffliateItem />

    </React.Fragment>
  );
}

export default HomePage;
