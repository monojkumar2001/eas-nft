import React from "react";
import "../Style/Careers.css";
import EasBanner from "../components/KnowledgeBaseFaq/EasBanner";
import { Link } from "react-router-dom";
import { CareerData } from "../CareersData/CareersData";
import { BiShareAlt, BiMap, BiTime } from "react-icons/bi";

const CareersPage = () => {
  return (
    <>
      {/* ============ Banner ========== */}
      <EasBanner title="Careers" />
      {/* <!-- ================== Careers EAS =============  --> */}

      <section className="careers-eas cpy-6">
        <div className="container">
          <div className="careers-eas-content">
            <h4 className="focus-color">JOIN OUR TEAM</h4>
            <h2 className="section-title careers-title">Open Positions</h2>
          </div>
          <div className="careers-btn">
            <div className="filter-btn">
              <div className="job-filter-btn">
                <select
                  name="job-type-filter"
                  id="job-type-filter"
                  className="filter-btn-change"
                >
                  <option value="">Job Type</option>
                  <option value="full-time">Full Time</option>
                  <option value="internship">Internship</option>
                  <option value="part-time">Part Time</option>
                </select>
              </div>
              <div className="job-filter-btn">
                <select
                  name="job-type-filter"
                  id="job-type-filter"
                  className="filter-btn-change"
                >
                  <option value="">Category</option>
                  <option value="business-development">
                    Business Devlopment
                  </option>
                  <option value="it-networking">It & Networking</option>
                  <option value="sales-and-marketing">Sales & Marketing</option>
                </select>
              </div>
            </div>
            <button className="custom-btn">FIND JOB</button>
          </div>
          <div className="job-listings" >
            {CareerData.map((item, i) => {
              return (
                <div className="list-job-listing" key={i} data-aos="fade-up"
                data-aos-duration="3000">
                  <div className="job-listing-header">
                    <Link
                      to={`/careers/${item.slug}`}
                      className="job-title-group d-flex align-items-center gap-3"
                    >
                      <h2>{item.title}</h2>
                      <div className="job-featured">
                        <img src="/images/careers/star.png" alt="" />
                        <span>Featured</span>
                      </div>
            
                    </Link>
                    <div className="share-job">
                      <span>
                        <BiShareAlt />
                      </span>
                    </div>
                  </div>
                  <div className="job-tags">
                    <div className="job-tag">
                      <span>
                        <BiTime />
                      </span>
                      <p className="job-tag-name">{item.date}</p>
                    </div>
                    <div className="job-tag">
                      <span>
                        <BiMap />
                      </span>
                      <p className="job-tag-name">{item.job}</p>
                    </div>
                    <div className="job-tag">
                      <img src="/images/careers/job-type.svg" alt="" />
                      <p className="job-tag-name">{item.status}</p>
                    </div>
                  </div>
                  <div className="job-details">
                    <p>{item.dis}</p>
                    <Link
                      to={`/careers/${item.slug}`}
                      className="job-details-btn"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;

// const careerData = [
//   {
//     id: 1,
//     title: "Director of Business Development",
//     slug: "Director-of-Business-Development",
//     dis: `We appreciate your interest in joining the team at Ethereum
//     Address Service (EAS) as a Business Development Development.
//     EAS is mapping the world’s addresses as tradable NFTs. With
//     EAS, real-world addresses become transactable digital address
//     rights designed to generate revenue from their commercial use
//     in Web3 and the metaverse. We envision a future where every…`,
//     date: "March 17, 20023",
//     job: "Remote",
//     status: "Full Time",
//   },
//   {
//     id: 2,
//     title: "Affiliate Marketer",
//     slug: "Affiliate-Marketer",
//     dis: `We appreciate your interest in joining the team at Ethereum Address Service (EAS) as an Affiliate Marketer. EAS is mapping the world’s addresses as tradable NFTs. With EAS, real-world addresses become transactable, able to generate revenue from their commercial application in Web3. We envision a future where every real-world address and point of interest has…`,
//     date: "March 17, 20023",
//     job: "Remote",
//     status: "Full Time",
//   },
//   {
//     id: 3,
//     title: "Marketing Internship",
//     slug: "Marketing-Internship",
//     dis: `We appreciate your interest in joining the team at Ethereum Address Service (EAS) as a Marketing Intern. EAS is mapping the world’s addresses as tradable NFTs. With EAS, real-world addresses become transactable digital address rights designed to generate revenue from their commercial use in Web3 and the metaverse. We envision a future where every real-world…`,
//     date: "March 17, 20023",
//     job: "Remote",
//     status: "Full Time",
//   },
// ];
