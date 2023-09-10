import React from 'react'

const ContactUs = () => {
  return (
    <>
     <div className="content-eas-nft-wrapper">
        <h3 className="page-title-item">Contact Us</h3>
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
            <div className="input-fulname-fluid-item d-flex algin-items-center gap-3">
              <div className="account-input-fluid-item">
                <label htmlFor="">Email *</label>
                <input type="text" />
              </div>
              <div className="account-input-fluid-item">
                <label htmlFor="">Your Phone *</label>
                <input type="number" />
              </div>
            </div>
            <div className="account-input-fluid-item">
              <label htmlFor="">Email *</label>
           <textarea name="" id="" cols="30" rows="5" placeholder='How can we help? Have a question for us? Ask away.'></textarea>
            </div>
    
            <button className="save-change-btn custom-btn" type="submit">
              SAND
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs