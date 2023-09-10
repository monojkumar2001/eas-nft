import React from "react";
const AboutCardItem = () => {
  return (
    <>
      {aboutData.map((item, i) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
            <div className="about-eas-item d-flex align-items-start gap-3">
              <div className="about-icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="about-description">
                <h4>{item.title}</h4>
                <p>{item.dis}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AboutCardItem;

const aboutData = [
  {
    id: 1,
    title: "Address NFTs",
    icon: "/images/about/map.svg",
    dis: "Address NFTs enable participation in the monetization of the data associated with buying and trading digital addresses.",
  },
  {
    id: 2,
    icon: "/images/about/city.svg",
    title: "Neighborhood NFTs",
    dis: "Neighborhood NFTs receive a 10% royalty on new mint sales and a 1% royalty on every trade of EAS NFTs within the neighborhood. ",
  },
  {
    id: 3,
    icon: "/images/about/hand-heart.svg",
    title: "Charity NFTs",
    dis: "20% of gross initial sale proceeds and a 4% royalty on all trading activity of Charity NFTs will be donated to charity through our preferred crypto donation vendor. ",
  },
];
