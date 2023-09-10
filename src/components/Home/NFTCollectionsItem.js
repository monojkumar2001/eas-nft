import React from 'react'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const NFTCollectionsItem = ({iconImg, title, description, link, subText}) => {
  return (
    <>
    <div className="nft-collections-item d-flex align-items-start gap-3">
        <div className="nft-collection-icon">
            <span>{iconImg}</span>
        </div>
        <div className="nft-collection-item-content">
            <h4>{title}</h4>
            <p>{description}</p>
            <Link to={link} className='nft-collection-learn-more-btn'>{subText}  <FaChevronRight /></Link>
        </div>
    </div>
    </>
  )
}

export default NFTCollectionsItem