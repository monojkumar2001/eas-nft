import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const EasBanner = ({title}) => {
  return (
    <>
      <div className="knowledge-base-banner">
        <div className="knowledge-base-banner-wrapper">
          <h2 className="eas-knowledge-title">{title}</h2>
        </div>
      </div>
    </>
  )
}

export default EasBanner