import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import EasBanner from "./EasBanner";
import SocialMediaShareItem from "../SocialMediaLink/SocialMediaShareItem";
import FaqHelpModel from "./FaqHelpModel";

const FaqQuestionDetails = ({ data1 }) => {
  const id = useParams();
  console.log("id", id);

  const singleData = data1.filter((res) => res.slug === id.id);
  console.log(singleData);

  return (
    <>
      {/* ================= EAS Banner ================== */}

      <EasBanner title={singleData[0].title} />

      <div className="faq-question-details-wrapper cpy-6">
        <div className="container">
          <div className="faq-question-con-wrapper">
            <div className="faq-question-details-content">
              <div className="faq-question-route mb-4 d-flex align-items-center gap-2">
                <Link to={"/"}>
                  {" "}
                  Home{" "}
                  <span>
                    <FaChevronRight />
                  </span>{" "}
                </Link>
                <Link to={"/docs"}>
                  Docs{" "}
                  <span>
                    <FaChevronRight />
                  </span>{" "}
                </Link>
                <Link className="faq-title">{singleData[0].title}</Link>
              </div>
              <h1>{singleData[0].title}</h1>
              <p>{singleData[0].dis}</p>
            </div>
            <div className="faq-question-details-footer mt-5">
              <div className="faq-footer-item">
                <h5 className="faq-sub-question-dis">Was this helpful?</h5>
                <div className="faq-footer-emoji d-flex align-items-center gap-2">
                  <span>
                    <BsEmojiSmile />
                  </span>
                  <span>
                    <BsEmojiSmile />
                  </span>
                  <span>
                    <BsEmojiSmile />
                  </span>
                </div>
              </div>
              <div className="faq-social-media-share-item mt-5 d-flex align-items-center gap-3">
                <span className="faq-sub-question-dis">Share EAS Article:</span>
                <div className="faq-footer-item-social">
                  <SocialMediaShareItem />
                </div>
              </div>
              <div className="faq-help-item-con my-5 d-flex align-items-center justify-content-between">
                <div className="faq-help-left-item">
                  <FaqHelpModel />
                </div>
                <div className="faq-help-right-item">
                  <span>Updated on April 12, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FaqQuestionDetails;
