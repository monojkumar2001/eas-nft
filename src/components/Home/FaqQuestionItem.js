import React from 'react'
import Faq from "react-faq-component";
import { Data } from "../../FaqData/FaqQuestionData";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const FaqQuestionItem = () => {
    const styles = {
        titleTextColor: "black",
        rowTitleColor: "black",
      };
  return (
    <>    <section className="faq-question cpt-6">
    <div className="container">
      <div className="faq-question-wrapper row d-flex align-items-center">
        <div className="col-lg-7 col-md-12">
          <div className="faq-question-content">
            <div className="faq-question-content-header">
              <span className="focus-color">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h1 className="section-title-2 mb-5">
                Most Popular Questions
              </h1>
            </div>
            <div>
              <Faq data={Data} styles={styles} />
            </div>
            <div className="faq-still-question">
              <p>
                Still have questions? Visit our{" "}
                <span>
                  <Link to={"/docs"}>Knowledge Base</Link>{" "}
                </span>{" "}
                for more answers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="faq-question-img">
            <LazyLoadImage
              className="sfdfsd"
              src="/images/home/faq-question-img.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default FaqQuestionItem