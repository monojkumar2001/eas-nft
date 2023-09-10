import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { convertIpfsAddress } from "../../utils";
import DynamicModal from './Dynamicmodel'

const ImageCard = ({nfts}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [price, setPrice] = useState('');

  const openModal = (item) => {
    console.log(item)
    setModalContent(item);
    axios.get(`api/getCategoryPrice/${item.Category_id}`).then(res => {
      setPrice(res.data.data);
    })
    setTimeout(getCategoryPrice,1000);
  };

  const getCategoryPrice = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setModalContent('');
    setIsModalOpen(false);
  };

  return (
    <>
    {
      nfts.map((item,index) => {
        return (
          <>
            <div
            data-bs-toggle="modal"
            data-bs-target="#nft-model"
            className="images-card d-flex align-items-center justify-content-center flex-column"
            key={index}
            onClick={() => openModal(item)}
          >
            <div className="nft-img">
              {
                item.status == 'pending' ?
                <img  src="https://st7yvhbtkj4kdnf3vwyncrotnch5e5b5yuga3um6thhfhgg7fwgq.arweave.net/lP-KnDNSeKG0u62w0UXTaI_SdD3FDA3RnpnOU5jfLY0?ext=png" alt="" />
                :
                <img  src={`https://ipfs.io/ipfs/${item.ipfs}`} alt="" />
              }
            </div>
            <div className="nft-titles">
              <p>{item.address}</p>
              <span>{item.subcategory?.name}</span>
            </div>
          </div>
          <DynamicModal
            price={price}
            item={modalContent}
          />
            
            </>
        )
      } 
      
        
        
        )
    }
    </>
  );
};

export default ImageCard;
