import React, { useState, useEffect } from "react";
import EasBanner from "../components/KnowledgeBaseFaq/EasBanner";
import BeatLoader from "react-spinners/BeatLoader";
import "../Style/news.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import axios from "axios";
const NewsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("api/blog").then((res) => {
      setData(res.data)
      setLoading(false);
    });
  }, []);

  
  return (
    <>
      {/* ================== Knowledge Base Banner section =================== */}
      <EasBanner title="News & Press Releases" />
      {/*  =========================== News page =================*/}

      <div className="news-page cpy-6">
        <div className="container">
          <div className="news-header-section">
            <h2 className="sec-title">Latest News</h2>
            <p className="sec-des">
              Stay updated with the treasure trove of stellar content that
              inspires, informs, and entertains.
            </p>
          </div>
          <div className="news-container">
            {data.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "10vh",
                
                  
                }}
              >
                <BeatLoader color={"#123abc"} loading={true} size={30} />
              </div>
            ) : (
              data.map((item, i) => {
                return (
                  <div className="news-post" key={i}>
                    <div className="new-img">
                      <LazyLoadImage src={item.main_image} />
                    </div>
                    <div className="news-about-content">
                      <Link to={`/news/${item.slug}`}>{item.title}</Link>
                      <div className="news-date d-flex align-items-center gap-2">
                        <span>{item.created_date}</span>
                        <span className="curcle-item"></span>
                        <span>{item.author}</span>
                      </div>
                      <p
                        className="dis"
                        dangerouslySetInnerHTML={{
                          __html: item.description.substring(0, 100),
                        }}
                      ></p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
