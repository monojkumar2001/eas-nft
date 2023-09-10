import React from 'react'
import { Link } from 'react-router-dom';
const TheBasics = ({data5}) => {
  return (
    <>
     <div className="knowledge-faq-item-card">
        <div className="knowledge-faq-item-header d-flex align-items-center justify-content-between">
          <div className="knowledge-faq-item-left d-flex align-item-center gap-4">
            <span>
              <img
                src="/images/knowledge-base/knowledge-file-icon.svg"
                alt=""
              />
            </span>
            <Link to={""} className="faq-title-item">
            The Basics
            </Link>
          </div>
          <div className="knowledge-faq-item-right">
            <span>3</span>
          </div>
        </div>
        <div className="knowledge-faq-list-items mt-4">
          {data5.map((item, id) => {
            return (
              <div className="knowledge-faq-list-item" key={id}>
                <span>
                  <img src={item.fileIcon} alt="" />
                </span>
                <Link to={`/docs/${item.id}`}>{item.faq}</Link>
              </div>
            );
          })}
        </div>
        <Link to={""} className="knowledge-explore-more-btn">
          Explore more
        </Link>
      </div>
    </>
  )
}

export default TheBasics