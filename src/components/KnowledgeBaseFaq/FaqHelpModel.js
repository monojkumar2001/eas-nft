import React from "react";
import { RiMailUnreadLine } from "react-icons/ri";
const FaqHelpModel = () => {
  return (
    <>
      <button
        type="button"
        className="faq-help-btn"
        data-bs-toggle="modal"
        data-bs-target="#faq-help-model"
      >
        <span>
          <RiMailUnreadLine />
        </span>
        <span>Still stuck? How can we help?</span>
      </button>
      {/* <!-- Create Ticket Modal --> */}
      <div
        className="modal fade"
        id="faq-help-model"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ticket-model-content_item faq-help-model-item">
              <div className="ticket-model-input-fluid">
              <label htmlFor="name">Name: *</label>
                <input type="text" name="name" placeholder="Name..." />
              </div>
              <div className="ticket-model-input-fluid">
              <label htmlFor="email">Email: *</label>
                <input type="email" name="email" placeholder="Email..." />
              </div>
              <div className="ticket-model-input-fluid">
              <label htmlFor="email">Message: *</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Message..."
                ></textarea>
              </div>
              <button className="faq-help-model-item custom-btn">
              SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHelpModel;
