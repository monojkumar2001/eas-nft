import React from "react";
import TicketChatBox from "./TicketChatBox";
import TicketDetailsItem from "./TicketDetailsItem";

const TicketMessages = () => {
  return (
    <>
      <div className="content-eas-nft-wrapper">
        <div className="ticket-messages">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <TicketChatBox />
            </div>
            <div className="col-lg-4 col-md-12">
                <TicketDetailsItem/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketMessages;
