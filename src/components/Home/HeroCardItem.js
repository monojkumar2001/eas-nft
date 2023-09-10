import React from "react";

const HeroCardItem = () => {
  return (
    <>
     {
        cardData.map((item,i)=>{
            return (
                <div className="col-lg-4 col-md-6 col-sm-12 hero-card-item" key={i}>
                <div className="mx-3">
                    <h3>{item.title}</h3>
                    <p className="hero-discs">{item.description}</p>
                </div>
              </div>
            )
        })
     }
    </>
  );
};

export default HeroCardItem;

const cardData=[
    {
        id:1,
        title:"SEARCH & CLAIM REAL- WORLD ADDRESSES",
        description:`Any address in the world can be claimed as an
        Ethereum Address Service NFT. All NFTs are
        instantly tradable on secondary marketplaces.`
    },
    {
        id:2,
        title:"CREATE AN ACCOUNT TO VIEW YOUR NFTs",
        description:`Sign up and provide your public ETH wallet
        address so we can reserve the NFTs for you as
        a private listing on OpenSea.`
    },
    {
        id:3,
        title:"Purchase Your NFTs with Ether",
        description:`We'll send you a unique link when your custom
        Address NFTs are ready. You'll then have 7 days
        to complete your purchase.`
    },
]