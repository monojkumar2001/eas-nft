import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaChevronRight } from "react-icons/fa";
import { Pagination, A11y } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const RecentNewSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.nftconstructer.com/api/blog")
      .then((res) => setData(res.data));
    setLoading(false);

  }, []);
  console.log(data);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <section className="recent_news_press cpy-6" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="recent_news-overlay"></div>
        <div className="recent_new_header cpb-7">
          <span className="focus-color">What's Going on?</span>
          <h4 className="recent-title">Recent News & Press Releases</h4>
        </div>
        <div className="recent-news-press-content">
          <div className="recent-news-wrapper">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, A11y]}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                680: {
                  slidesPerView: 1.5,
                },
                1050: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="recent-new-slider-con recent-new-slider-con-2">
                      <Link to={`/news/${item.slug}`}>
                        <div className="recent-news-content">                 
                          <button className="alt-custom-btn">
                            Press Releases
                          </button>
                          <div className="recent-item-content">
                            <p>{item.created_date}</p>
                            <h3>{item.title}</h3>
                            <p
                        className="dis"
                        dangerouslySetInnerHTML={{
                          __html: item.description.substring(0, 100),
                        }}
                      ></p>
                            <p className="read-more">
                              Read More{" "}
                              <span>
                                <FaChevronRight />
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                      <div className="recent-bg-img">
                        <img src={item.main_image} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}           
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentNewSlider;
