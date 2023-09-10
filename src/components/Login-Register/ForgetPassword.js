import React from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginInfo from "./LoginInfo";
import SignUpInfo from "./SignUpInfo";
const ForgetPassword = () => {
  const [isInfoShow, setInfoShow] = useState(1);
  const handleShow = (index) => {
    setInfoShow(index);
  };
  return (
    <>
      <div className="login-sign-up ">
        <div className="container">
          <div className="login-sign-up-wrapper">
            <div className="login-sign-up-header">
              <Link to={'/login-register'}
                className={isInfoShow === 1 ? "login-btn active" : "login-btn"}
                onClick={() => {
                  handleShow(1);
                }}
              >
                Login
              </Link>
              <Link to={'/login-register'}
                className={isInfoShow === 2 ? "login-btn active" : "login-btn"}
                onClick={() => {
                  handleShow(2);
                }}
              >
                Sign Up
              </Link>
            </div>
            <div className="login-sign-up-content">
              <div className="login-contents">
                <div className="info-wrapper">
                  <form action="">
                    <div className="info-form-items d-flex flex-column gap-3">
                    <label htmlFor="">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</label>
                      <div className="input-fluid-item">
                        <span>
                          <FaRegUser />
                        </span>
                        <input type="text" placeholder="Username / Email" />
                      </div>

                      <button className="custom-btn" type="submit">
                        Email Reset Link
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
