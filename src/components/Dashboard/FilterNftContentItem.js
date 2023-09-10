import React from "react";

const FilterNftContentItem = ({ nftInfo }) => {
  return (
    <>
      <div className="filter-nft-content-item">
        <div className="nft-content-item-icon">
          <img src="/images/fire.svg" alt="" />
        </div>
        <div className="filter-content-title">
          <span>{nftInfo.value}</span>
          {/* <h5></h5> */}
        </div>
      </div>
      {/* {
        nftData.map((item, i)=>{
            return(
                <div className="filter-nft-content-item" key={i}>
                <div className="nft-content-item-icon">
                    <img src={item.img} alt="" />
                </div>
                <div className="filter-content-title">
                    <span>{item.subTitle}</span>
                    <h5>{item.title}</h5>
                </div>
            </div>
            )
        })
    } */}
    </>
  );
};

export default FilterNftContentItem;

// const nftData=[
//     {
//         id:1,
//         title:'FIRE',
//         subTitle:'DOMAIN',
//         img:"/images/fire.svg"
//     },
//     {
//         id:2,
//         title:'Human',
//         subTitle:'Type',
//         img:"/images/human.svg"
//     },
//     {
//         id:3,
//         title:'Classic',
//         subTitle:'Subtype',
//         img:"/images/classic.svg"
//     },
//     {
//         id:4,
//         title:'Slicked Back - Teal',
//         subTitle:'Hair',
//         img:"/images/teal.svg"
//     },
//     {
//         id:5,
//         title:'Enticing',
//         subTitle:'Eyes',
//         img:"/images/eyes.svg"
//     },
//     {
//         id:6,
//         title:'Sure',
//         subTitle:'Mouth',
//         img:"/images/sure.svg"
//     },
//     {
//         id:7,
//         title:'Carabiner',
//         subTitle:'Ear',
//         img:"/images/carabiner.svg"
//     },

//     {
//         id:8,
//         title:'Clothing',
//         subTitle:'Leather Jacket with Square Studs',
//         img:"/images/jacket.svg"
//     },
//     {
//         id:9,
//         title:'Off White B',
//         subTitle:'Background',
//         img:"/images/off-white.svg"
//     },
// ]
