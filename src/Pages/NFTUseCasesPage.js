
import "../Style/nftUseCases.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NftUseCaseItem from "../components/NftUseCase/NftUseCaseItem";
import { Link } from "react-router-dom";
import RecentNewSlider from "../components/NftUseCase/RecentNewSlider";

const NFTUseCases = () => {

  return (
    <>
      {/* ================ NFT USE CASES ==================== */}
      <section className="nft-use-case cpt-9">
        <div className="container">
          <div className="nft-use-case-wrapper row d-flex align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="nft-use-case-content">
                <span className="focus-color">NFT USE CASES</span>
                <h2 className="section-title mb-4">
                  How Does My NFT Make Money?
                </h2>
                <p>
                  EAS NFTs generate royalties and revenue from buying and
                  trading as well as real-time data not available in today’s
                  real estate market.
                </p>
                <p>
                  Our entire lives can be simplified into our interactions
                  within an ecosystem of addresses. Where we live, where we
                  work, where we eat, and where we socialize to name a few. Our
                  emotional connection with these addresses provides valuable
                  data as to how we view and value our surrounding universe. EAS
                  captures this data and much more.
                </p>
                <p>
                  EAS is also committed to sharing the majority of revenue from
                  data monetization with our NFT owners. In a world where the
                  individual has little control over the monetization of his,
                  her or their personal data, we give the power back to the
                  consumer (in our world, the rich don’t get richer, you do).{" "}
                </p>
                <div className="nft-use-case-list-item">
                  <p>EAS NFTs have three primary use cases:</p>
                  <ul>
                    <li>1. Gaming & Mapping</li>
                    <li>2. Market Intelligence</li>
                    <li>3. Liquid Pricing Comparables</li>
                    <li>4. Real-World Data</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="nft-use-case-img">
                <LazyLoadImage
                  src="/images/use-cases/dripping-metaverse.png"
                  alt="NFT Use Case Images"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NFT USE CASES LIST =================== */}
      <section className="nft-use-case-list cpy-6" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="container">
          <div className="nft-use-case-list-wrapper">
            <div className="nft-use-case-list-Item">
              <span className="focus-color">NFT Use Case</span>
              <h2 className="nft-list-case-title">Gaming & Mapping</h2>
              <p>
                With the EAS proprietary trading card game called Address
                Quest™, EAS NFT owners win <b>real cash and prizes</b> by
                building unique collections of addresses and neighborhoods.
                Follow us on social media, where we will announce ways to win
                each month!
              </p>
              <p>
                NFT owners can also purchase digital plots of land called
                Neighborhood NFTs and generate royalties from the sale of
                Address NFTs within the Neighborhood’s designated postal code.
                EAS Neighborhoods are the only NFTs in the market where buyers,
                and not just creators, participate in royalties. Read more about
                our {""}
                <span>
                  <Link to={""}>Neighborhood NFTs</Link>
                </span>
              </p>
              {/* <span className="item-hovers">1</span> */}
            </div>
            <NftUseCaseItem />

            <div className="img-layer-item-1">
            <LazyLoadImage src="/images/use-cases/ethereum-crystal.webp"/>
          </div>
          <div className="img-layer-item-2">
            <LazyLoadImage src="/images/use-cases/ethereum-crystal.webp"/>
          </div>
          <div className="img-layer-item-3">
            <LazyLoadImage src="/images/use-cases/ethereum-crystal.webp"/>
          </div>
          <div className="img-layer-item-4">
            <LazyLoadImage src="/images/use-cases/ethereum-crystal.webp"/>
          </div>
          </div>
         
        </div>
      </section>

      {/* ================ Recent News & Press Releases =============== */}
      <RecentNewSlider/>
    </>
  );
};

export default NFTUseCases;
