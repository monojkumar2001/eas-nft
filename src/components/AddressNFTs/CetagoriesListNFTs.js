import React from 'react'
const CetagoriesListNFTs = () => {
  return (
    <>
    {
      listData.map((item,i)=>{
        return (
          <div className="add-cetagory-list-item d-flex align-items-center gap-2" key={i}>
            <span>
              <img src="/images/addressnfts/checkmark.svg" alt="" />
            </span>
            <p>{item.cetaList}</p>
          </div>
        )
      })
    }
    </>
  )
}

export default CetagoriesListNFTs;

const listData=[
  {
    id:1,
    cetaList:'Bridges, Tunnels & Dams',    
  },
  {
    id:2,
    cetaList:'Commercial',    
  },
  {
    id:3,
    cetaList:'Government, Police & Fire',    
  },
  {
    id:4,
    cetaList:'Historic Landmarks',    
  },
  {
    id:5,
    cetaList:'Hospitality',    
  },
  {
    id:6,
    cetaList:'Hospitals & Health Care',    
  },
  {
    id:7,
    cetaList:'Industrial',    
  },
  {
    id:7,
    cetaList:'Museums & Libraries',    
  },
  {
    id:8,
    cetaList:'Parks & Recreation',    
  },
  {
    id:9,
    cetaList:'Residential',    
  },
  {
    id:10,
    cetaList:'Schools & Colleges',    
  },
  {
    id:11,
    cetaList:'Stadiums & Venues',    
  },
  {
    id:12,
    cetaList:'Travel Hubs',    
  },
  {
    id:13,
    cetaList:'Zoos & Aquariums',    
  },
]