import React from 'react'

const AttributesCard = ({item}) => {
  return (
    <>
      <div className="filter-nft-content-items">
              <div className="filter-nft-content-item" >
                      <div className="filter-content-title">
                      <h5>STANDARD TYPE</h5>
                        <span>{item.category?.name}</span>
                       
                      </div>
                    </div>
              <div className="filter-nft-content-item" >
                      <div className="filter-content-title">
                      <h5>ADDRESS TYPE</h5>
                        <span>{item.subcategory?.name}</span>
                      </div>
                    </div>
              <div className="filter-nft-content-item" >
                      <div className="filter-content-title">
                      <h5>ROAD</h5>
                        <span>{item.road}</span>
                      </div>
                    </div>
              <div className="filter-nft-content-item" >
                      <div className="filter-content-title">
                      <h5>CITY</h5>
                        <span>{item.city}</span>
                        
                      </div>
                    </div>
              <div className="filter-nft-content-item" >
                      <div className="filter-content-title">
                      <h5>STATE</h5>
                        <span>{item.state}</span>
                      
                      </div>
                    </div>
              <div className="filter-nft-content-item" >
                      <div className="filter-content-title">
                      <h5>POSTAL CODE</h5>
                        <span>{item.postCode}</span>
                      
                      </div>
                    </div>
              <div className="filter-nft-content-item" >
                      <div className="filter-content-title">
                      
                        <h5>COUNTRY</h5>
                        <span>{item.country}</span>
                      </div>
                    </div>
            
              </div>
    </>
  )
}

export default AttributesCard