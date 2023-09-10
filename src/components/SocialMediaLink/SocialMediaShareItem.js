import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMediaShareItem = () => {
  return (
    <>
      <div className="social-media-link d-flex algin-items-center gap-3">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaPinterest />
        </a>
      </div>
    </>
  );
};

export default SocialMediaShareItem;
