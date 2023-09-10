import React from 'react'
import '../../Style/newSubscriber.css';
const NewSubscriber = () => {
  return (
    <>
    <div className="post-subscriber cpy-6">
        <div className="container">
          <div className="post_subscriber_wrapper">
            <div className="post_subscriber_left">
              <div className="post_subscriber_left_content">
                <h3 className="sm-title">SUBSCRIBE OUR NEWSLETTER</h3>
                <h2>Don’t miss anything!</h2>
                <p>
                  Join our community of 15,000 who receive the best in design
                  and marketing content, biweekly.
                </p>
              </div>
              <div className="post_subscriber_from">
                <form className="subscriber_form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  hidden
                />

                  <input
                    type="email"
                    name="email"
                    className="subscriber_input"
                    placeholder="Enter your email address"
                    required
                  />
                  
                  <button type="submit" className="custom-btn">
                    Subscribe
                  </button>
                </form>
                {/* <small style={{ color:'red' }}>{inputField.error_log.email}</small> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewSubscriber