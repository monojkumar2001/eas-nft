import React from "react";
import { FaRegUser, FaEthereum } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function SignUpInfo() {
  return (
    <>
      <div className="info-wrapper">
        <form action="">
          <div className="info-form-items d-flex flex-column gap-3">
            <div className="input-fluid-item">
              <span>@</span>
              <input type="text" placeholder="Username / Email" />
            </div>
            <div className="input-fullName-fluid w-100 d-flex align-items-center gap-4">
              <div className="input-fluid-item">
                <span>
                  <FaRegUser />
                </span>
                <input type="text" placeholder="First Name*" />
              </div>
              <div className="input-fluid-item">
                <span>
                  <FaRegUser />
                </span>
                <input type="text" placeholder="Last Name*" />
              </div>
            </div>
            <div className="input-fluid-info">
              <label htmlFor="">
                Public ETH Wallet Address*{" "}
                <span>
                  <img src="/images/about/what.svg" alt="" />
                </span>
              </label>
              <div className="input-fluid-item">
                <span>
                  <FaEthereum />
                </span>
                <input type="text" placeholder="Ox" />
              </div>
            </div>
            <div className="input-fluid-info">
              <label htmlFor="">Password</label>
              <div className="input-fluid-item mb-3">
                <span>
                  <RiLockPasswordLine />
                </span>
                <input type="password" placeholder="Password*" />
              </div>
              <div className="input-fluid-item">
                <span>
                  <RiLockPasswordLine />
                </span>
                <input type="password" placeholder="Confirm Password*" />
              </div>
            </div>
            <div className="input-fluid-info">
              <label htmlFor="">Who Referred You?</label>
              <div className="input-fluid-item">
                <span>
                  <img src="/images/login/referral.svg" alt="" />
                </span>
                <input type="text" placeholder="Enter Referral Email" />
              </div>
            </div>

            <div className="accept-text-item d-flex align-items-center gap-2">
              <input type="checkbox" />
              <p className="sub-dis">I accept the{" "}
              <span>
                <Link to={"/"}>Terms of Service</Link>
              </span>{" "}
              and
              {" "}
              <span>
                <Link to={"/"}> Privacy Policy</Link>
              </span></p>
            </div>
            <button className="custom-btn" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpInfo;
