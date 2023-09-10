import React from 'react'
const EasPriceItem = () => {
  return (
    <>
    {
        priceData.map((item,i)=>{
            return (
                <div className="col-lg-4 col-md-12" key={i}>
                    <div className="eas-price-item">
                        <h4>{item.count}</h4>
                        <p>{item.dis}</p>
                    </div>
                </div>
            )
        })
    }
    </>
  )
}

export default EasPriceItem;

const priceData=[
    {
        id:1,
        count:"40.000+",
        dis:"Neighborhood NFTs in the U.S."
    },
    {
        id:2,
        count:"1.700.000+",
        dis:"Neighborhood NFTs Worldwide"
    },
    {
        id:3,
        count:"1.000.000.000+",
        dis:"Address NFTs Worldwide"
    }
]