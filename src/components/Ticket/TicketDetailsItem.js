import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";
const TicketDetailsItem = () => {
  return (
    <>
      <div className="ticket-details-item">
        <div className="ticket-details-title">
          <h3>Ticket Details</h3>
        </div>
        <div className="ticket-details-wrapper d-flex align-items-center flex-column gap-4">
          <div className="ticket-details-list-item">
            <div className="ticket-details-list-left">
              <div className="ticket-details-list-icon">
                <span>
                  <FaRegUser />
                </span>
              </div>
              <h4>ID TICKET</h4>
            </div>
            <div className="ticket-details-list-right">
              <span>MJ Jibon</span>
            </div>
          </div>
          <div className="ticket-details-list-item">
            <div className="ticket-details-list-left">
              <div className="ticket-details-list-icon">
                <span>
                  <BsCalendarDate />
                </span>
              </div>
              <h4>Date</h4>
            </div>
            <div className="ticket-details-list-right">
              <span>24 Oct, 2021</span>
            </div>
          </div>
          <div className="ticket-details-list-item">
            <div className="ticket-details-list-left">
              <div className="ticket-details-list-icon">
                <span>
                  <FaRegUser />
                </span>
              </div>
              <h4>REQUEST</h4>
            </div>
            <div className="ticket-details-list-right">
              <span>vdsfbvfdd227</span>
            </div>
          </div>
          <div className="ticket-details-list-item">
            <h3>
              Any Question we have Answers Checkout{" "}
              <span>
                <Link to={"/"}>FAQs</Link>{" "}
              </span>
            </h3>
          </div>
          <div className="ticket-details-list-item">
            <h3>
              Have any issues with your order? Visit the{" "}
              <span>
                <Link to={"/"}>Resolution Center</Link>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetailsItem;
