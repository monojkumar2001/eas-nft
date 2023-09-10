import React from "react";

const AccountDetails = () => {
  return (
    <>
      <div className="content-eas-nft-wrapper">
        <h3 className="page-title-item">Account Details</h3>
        <div className="account-details-from">
          <form action="">
            <div className="input-fulname-fluid-item d-flex algin-items-center gap-3">
              <div className="account-input-fluid-item">
                <label htmlFor="">First name *</label>
                <input type="text" />
              </div>
              <div className="account-input-fluid-item">
                <label htmlFor="">Last name *</label>
                <input type="text" />
              </div>
            </div>
            <div className="account-input-fluid-item">
              <label htmlFor="">Display name *</label>
              <input type="text" />
              <span>
                This will be how your name will be displayed in the account
                section and in reviews
              </span>
            </div>
            <div className="account-input-fluid-item">
              <label htmlFor="">Email *</label>
              <input type="email" />
            </div>                   
            <div className="input-fulname-fluid-item d-flex algin-items-center gap-3">
              <div className="account-input-fluid-item">
                <label htmlFor="">Public ETH Wallet Address* <span><img src="/images/dashboard/what-icon.svg" alt="" /></span> </label>
                <input type="text" />
              </div>
              <div className="account-input-fluid-item">
                <label htmlFor="">Who Referred You?</label>
                <input type="text" />
              </div>
            </div>
            <button className="save-change-btn custom-btn" type="submit">
              SAVE CHANGES
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
