import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
const SocialMediaLinkItem = () => {
  return (
    <>
      <div className="social-media-link d-flex algin-items-center gap-2 mb-3">
        <a href="https://twitter.com/eas_nft" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/eas_nft/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        <a href="https://www.youtube.com/@easNFT" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/easNFT/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Feasnft%2Fabout%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Feasnft%2Fabout%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7875 4.89893C15.9125 4.80518 16.1 4.89893 16.1 5.05518V11.4302C16.1 12.2739 15.4125 12.9302 14.6 12.9302H1.6C0.75625 12.9302 0.1 12.2739 0.1 11.4302V5.05518C0.1 4.89893 0.25625 4.80518 0.38125 4.89893C1.1 5.46143 2.00625 6.14893 5.19375 8.46143C5.85 8.93018 6.975 9.96143 8.1 9.96143C9.19375 9.96143 10.35 8.93018 10.975 8.46143C14.1625 6.14893 15.0688 5.46143 15.7875 4.89893ZM8.1 8.93018C7.35 8.96143 6.31875 8.02393 5.7875 7.64893C1.63125 4.64893 1.31875 4.36768 0.38125 3.61768C0.19375 3.49268 0.1 3.27393 0.1 3.02393V2.43018C0.1 1.61768 0.75625 0.930176 1.6 0.930176H14.6C15.4125 0.930176 16.1 1.61768 16.1 2.43018V3.02393C16.1 3.27393 15.975 3.49268 15.7875 3.61768C14.85 4.36768 14.5375 4.64893 10.3813 7.64893C9.85 8.02393 8.81875 8.96143 8.1 8.93018Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default SocialMediaLinkItem;
