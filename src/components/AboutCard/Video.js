import "../../Style/video.css";
function Video({ isPlay, handlePlay }) {
  return (
    <>
      {isPlay && (
        <div className="new-ticket-model">
          <div className="overlay">
            <button className="close-btn" onClick={handlePlay}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="container">
            <div className="new-ticket-content">
              <iframe
                frameborder="0"
                allowfullscreen
                allow="autoplay"
                src="https://www.youtube.com/embed/EwIPtiCdOP0?feature=oembed&amp;loop=0&amp;autoplay=1"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Video;
