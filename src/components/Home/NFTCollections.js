import React from "react";
import NFTCollectionsItem from "./NFTCollectionsItem";
import { FaMapMarkerAlt, FaCity } from "react-icons/fa";
import { RiHandHeartFill,RiNftLine } from "react-icons/ri";
const NFTCollections = () => {
  return (
    <>
      <section className="nft-collections" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="container">
          <div className="nft-collections-wrapper">
            <div className="nft-collection-header mb-5">
              <span className="focus-color">learn the Differences</span>
              <h3 className="section-title-2">NFT Collections</h3>
            </div>
            <div className="nft-collection-content">
              <div className="row gap-4">
                <div className="col-lg-5 col-md-12">
                  <NFTCollectionsItem
                    iconImg={<FaMapMarkerAlt />}
                    title="Address NFTs"
                    description="Address NFTs enable NFT buyers to assemble a
                robust collection of digital address rights. EAS NFTs
                participate in the monetization of the data created
                from buying and selling digital addresses. This unique
                data provides valuable market intelligence for real
                estate developers and owners, investors, brokers,
                appraisers, lenders, consumer behavior and data
                analysts, and more. "
                    link="/address-nfts"
                    subText="Learn more"
                  />
                </div>
                <div className="col-lg-5 col-md-12">
                  <NFTCollectionsItem
                    iconImg={<FaCity />}
                    title="Neighborhood NFTs"
                    description="Neighborhood NFTs are rarer and offer a different
                set of economics than Address NFTs.
                Neighborhood NFTs collect royalties from every
                underlying Address NFT within the designated
                neighborhood postal code, allowing it to pay back
                its cost without needing to be traded."
                    link="/address-nfts"
                    subText="Learn more"
                  />
                </div>
                <div className="col-lg-5 col-md-12">
                  <NFTCollectionsItem
                  iconImg={<RiNftLine />}
                    title="Gold & Platinum Collections"
                    description="Selected by EAS, the Gold Collection includes iconic
                buildings and notable addresses, while the Platinum
                Collection includes the most rare and sought-after
                addresses in the world. Just think, you could literally
                own the digital rights to the Empire State Building or
                the Eiffel Tower."
                    link="/"
                    subText="Browse Marketplace"
                  />
                </div>
                <div className="col-lg-5 col-md-12">
                  <NFTCollectionsItem
                    iconImg={<RiHandHeartFill />}
                    title="Charity NFTs"
                    description="Any NFT labeled as a Charity NFT has been hand-
                selected by EAS to receive charitable donations.
                When you buy a Charity NFT, 20% of gross initial
                sale proceeds and a 4% royalty on all trading
                activity will be donated to charity."
                    link="/"
                    subText="Learn more"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTCollections;
