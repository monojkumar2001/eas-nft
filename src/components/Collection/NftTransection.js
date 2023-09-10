import React from 'react'

const NftTransection = ({nftData}) => {
  return (
    <div className="nft-owner-wallet-item">
       <div className="table-responsive table-warpper">
       <table class="table ">
  <thead>
    <tr>
      <th scope="col">event</th>
      <th scope="col">from</th>
      <th scope="col">to</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
    {
        nftData.map(item =>
            <tr>
                <th scope="row">{item.event}</th>
                <td>{item.from_address}</td>
                <td>{item.to_address}</td>
                <td>{item.price}</td>
            </tr>
            )
    }
    
   
   
  </tbody>
</table></div>
            </div>
  )
}

export default NftTransection