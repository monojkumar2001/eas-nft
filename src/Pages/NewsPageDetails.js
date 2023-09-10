import React, {useState, useEffect}from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import SocialMediaShareItem from "../components/SocialMediaLink/SocialMediaShareItem";
import NewSubscriber from "../components/NewSubscriber/NewSubscriber";
const NewsPageDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`api/blog/${id}`).then((res)=>{
      setData(res.data)
      setLoading(false);
      console.log(res.data);
    });
  }, [id]);
 


  return (
    <>
      <div className="news-details-page">
        <div className="container">
          <div className="page-route">
            <Link to={"/news"}>
              <p className="blog-page-link">NEWS</p>
            </Link>
            <p> &gt; </p>

            <p>POST DETAILS</p>
          </div>
          <div className="post-top-area">
            <div className="post-top-content">
              <h1 className="urbanist-dark-22">{data.title}</h1>

              <div className="new-img">
                <img
                  height="auto"
                  width="auto"
                  src={data.main_image}
                  alt=''
                />
              </div>
            </div>
            <div className="small-info">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75 3.25C6.09375 3.25 4.75 4.59375 4.75 6.25C4.75 7.90625 6.09375 9.25 7.75 9.25C9.40625 9.25 10.75 7.90625 10.75 6.25C10.75 4.59375 9.40625 3.25 7.75 3.25ZM7.75 7.75C6.90625 7.75 6.25 7.09375 6.25 6.25C6.25 5.4375 6.90625 4.75 7.75 4.75C8.5625 4.75 9.25 5.4375 9.25 6.25C9.25 7.09375 8.5625 7.75 7.75 7.75ZM7.75 0.25C3.46875 0.25 0 3.71875 0 8C0 12.2812 3.46875 15.75 7.75 15.75C12.0312 15.75 15.5 12.2812 15.5 8C15.5 3.71875 12.0312 0.25 7.75 0.25ZM7.75 14.25C6.1875 14.25 4.75 13.6875 3.65625 12.75C4.125 12.0312 4.9375 11.5312 5.84375 11.5312C6.5 11.7188 7.125 11.8125 7.75 11.8125C8.34375 11.8125 8.96875 11.7188 9.625 11.5312C10.5312 11.5625 11.3438 12.0312 11.8125 12.75C10.7188 13.6875 9.28125 14.25 7.75 14.25ZM12.8125 11.625C12.0625 10.6562 10.875 10 9.53125 10C9.21875 10 8.71875 10.3125 7.75 10.3125C6.75 10.3125 6.25 10 5.9375 10C4.59375 10 3.40625 10.6562 2.65625 11.625C1.90625 10.625 1.5 9.375 1.5 8C1.5 4.5625 4.28125 1.75 7.75 1.75C11.1875 1.75 14 4.5625 14 8C14 9.375 13.5625 10.625 12.8125 11.625Z"
                    fill="#6345ED"
                  />
                </svg>

                <p className="urbanist-grey-15">{data.author}</p>
              </div>
              <div>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z"
                    fill="#6345ED"
                  />
                </svg>

                <p className="urbanist-grey-15">{data.created_date}</p>
              </div>
            </div>
          </div>
          <section className="blog-content">

            <div className="tags-media">
              <p className="read-time">10 Min Read</p>

              <div className="progress-bar">
                {/* <div className="progress" style={{ width: `${scroll}%` }} /> */}
              </div>
              <div className="soc-share">
                <p className="urbanist-black-18">Share:</p>
                <SocialMediaShareItem />
              </div>
            </div>


            <div className="blog-side">
              <div className="blog-txt-container">
                <div className="blog-txt">
                  <p className="raleway-grey-14"              
                  > <div
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>
    
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <NewSubscriber/>
      </div>
    </>
  );
};

export default NewsPageDetails;

