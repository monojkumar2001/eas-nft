import React, { useEffect, useState } from "react";


const TicketNewModel = ({subject,serchHandle,handleOption,inputValue,handleInput,submitForm,actionModel,showModel}) => {

  const [ticket, setTicket] = useState(false);
  const handleTicket = () => {
    setTicket(!ticket);
  };

  return (
    <>
    <div>
      <div className="tickets-btn-1">
        <span>Status : </span>
        <select className="form-select" aria-label="Default select example" onChange={handleOption}>
          <option value="any">Any</option>
          <option style={{ padding: "20px" }} value="Pending">
            Pending
          </option>
          <option style={{ padding: "20px" }} value="Awaiting your reply">
            Awaiting your reply
          </option>
          <option style={{ padding: "20px" }} value="Solved">
            Solved
          </option>
        </select>
      </div>
      <button
        type="button"
        className="create-ticket-btn custom-btn"
        onClick={actionModel}
      >
        Create New Ticket
      </button>
    </div>
      
      {/* <!-- Create Ticket Modal --> */}
      {showModel && (
      <div
        className="ticket-models"
      >
          <div className="overlay3"></div>

          <div className="modal-content ticket-model-contentss">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
              Open a New Ticket <span><img src="/images/dashboard/ticket-id.svg" alt="" /></span>
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={actionModel}
              ></button>
            </div>
            <div className="modal-body ticket-model-content_item">
              <div className="ticket-model-input-fluid">
              <input type="text" placeholder="Order ID(Optional)" />
              </div>
              <div className="ticket-model-input-fluid">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Any</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              </div>
              <div className="ticket-model-input-fluid">
              <input type="text" placeholder="What can we help you with ?" />
              </div>
              <div className="ticket-model-input-fluid">
              <textarea name="" id="" cols="30" rows="4" placeholder="Message....."></textarea>
              </div>
              <div className="ticket-model-input-fluid">
                <label htmlFor="">Attachment (Optional)</label>
              <input type="file"/>
              </div>
              <button className="ticket-model-open-now-btn custom-btn">
             OPEN NOW
              </button>
            </div>
          </div>
      </div>
      )}
    </>
  );
};

export default TicketNewModel;
