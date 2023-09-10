import React from 'react'
import { useParams } from 'react-router-dom'
import EasBanner from '../components/KnowledgeBaseFaq/EasBanner';
import { BiMap, BiTime } from "react-icons/bi";
import { CareerDataDetails } from '../CareersData/CareersDetailsData';
import { Link } from 'react-router-dom';
const CareersPageDetails = () => {
    const id=useParams();

    const singleData=CareerDataDetails.filter((res)=>res.slug===id.id);
  return (
    <>
     {/* ============ Banner ========== */}
     <EasBanner title={singleData[0].title} />

     <div className="careers-page-details cpy-6">
        <div className="container">
            <div className="careers-page-details-wrapper">
                 <div className="job-listing-header">
                    <div
                      className="job-title-group d-flex align-items-center gap-3"
                    >
                      <h2>{singleData[0].title}
                      
                      <span className="job-featured">
                        <img src="/images/careers/star.png" alt="" />
                        <span>Featured</span>
                      </span>
                      </h2>
                     
                    </div>
                  </div>
                 <div className="job-tags">
                    <div className="job-tag">
                      <span>
                        <BiTime />
                      </span>
                      <p className="job-tag-name">{singleData[0].date}</p>
                    </div>
                    <div className="job-tag">
                      <span>
                        <BiMap />
                      </span>
                      <p className="job-tag-name">{singleData[0].job}</p>
                    </div>
                    <div className="job-tag">
                      <img src="/images/careers/job-type.svg" alt="" />
                      <p className="job-tag-name">{singleData[0].status}</p>
                    </div>
                  </div>
                <p><b>Experience:</b> 8 years of related experience</p>
                <div className="careers-description">
                    <p>{singleData[0].dis1}</p>
                    <p>{singleData[0].dis2}</p>
                    <ul>
                        <li>
                        {singleData[0].itemList1}
                        </li>
                        <li>
                        {singleData[0].itemList2}
                        </li>
                        <li>
                        {singleData[0].itemList3}
                        </li>
                        <li>
                        {singleData[0].itemList4}
                        </li>
                    </ul>
                    <p>{singleData[0].dis3}</p>
                    <p>{singleData[0].dis4}</p>
                    <p>{singleData[0].dis5}</p>
                    <p>{singleData[0].dis6}</p>
                    <button className='job-apply-btn custom-btn'>Apply Now</button>
                    <div className='d-flex align-items-center careers-link-item'>
                    <p>Apply now on Smart Recruiters: </p>
                    <span><Link to={'/https://careers.smartrecruiters.com/EthereumAddressServiceEAS'}>https://careers.smartrecruiters.com/EthereumAddressServiceEAS</Link></span>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default CareersPageDetails;

