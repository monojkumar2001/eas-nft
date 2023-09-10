import React from "react";
import { useState } from "react";
import {FiSend} from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
const TicketChatBox = () => {
    const [text, setText] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    // const [inputStr, setInputStr] = useState('');
    // const [showPicker, setShowPicker] = useState(false);
    // const onEmojiClick = (event, emojiObject) => {
    //   setInputStr(prevInput => prevInput + emojiObject.emoji);
    //   setShowPicker(false);
    // };
  return (
    <>
      <div className="ticket-chat-box-wrapper">
        <div className="ticket-chat-box">
          <div className="msg-user-option">
            <div className="msg-user">
              <LazyLoadImage
                src="/images/dashboard/ticket-id.svg"
                alt="User"
              />
              <div className="msg-user-names">
                <h1>Ticket details for: #SP_C5AE4</h1>
                <p>
                Created: 20 Nov, 2021 09:11 AM
                </p>
              </div>
            </div>
            <div className="msg-option">
              <button className="msg-arrow">
                <LazyLoadImage
                  src="/images/dashboard/ticket-arrow.svg"
                  alt="User"
                />
              </button>
            </div>
          </div>
          <div className="msg-box">
            <div className="msg-date">
              <p>MONDAY AUG 29, 2021</p>
            </div>
            <div className="admin-msg">
              <div className="admin-msg-text">
                <p>
                  Hello, so we gonna start the project tomorrow right? Because i
                  wanna prepare to do some sketching.
                </p>
                <span>
                  20:30 pm{" "}
                  <img src="/images/dashboard/ticket-done.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="user-msg">
              <div className="user-msg-img">
              <LazyLoadImage
                src="/images/dashboard/user-img.png"
                alt="User"
              />
              </div>
              <div className="user-msg-text">
                <p>
                  Hai Hassan, That’s gonna to great. Hope will the best for
                  tomorrow project.
                </p>
                <span>20:30 pm</span>
              </div>
            </div>
            <div className="admin-msg">
              <div className="admin-msg-text">
                <p>
                  Hello, so we gonna start the project tomorrow right? Because i
                  wanna prepare to do some sketching.
                </p>
                <span>
                  20:30 pm{" "}
            <img src="/images/dashboard/ticket-done.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="user-msg">
              <div className="user-msg-img">
              <LazyLoadImage
                src="/images/dashboard/user-img.png"
                alt="User"
              />
              </div>
              <div className="user-msg-text">
                <p>
                  Hai Hassan, That’s gonna to great. Hope will the best for
                  tomorrow project.
                </p>
                <span>20:30 pm</span>
              </div>
            </div>
            <div className="msg-date">
              <p>TODAY</p>
            </div>
            <div className="admin-msg">
              <div className="admin-msg-text">
                <p>
                  Hello, so we gonna start the project tomorrow right? Because i
                  wanna prepare to do some sketching.
                </p>
                <span>
                  20:30 pm{" "}
                  <img src="/images/dashboard/ticket-done.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="user-msg">
              <div className="user-msg-img">
              <LazyLoadImage
                src="/images/dashboard/user-img.png"
                alt="User"
              />
              </div>
              <div className="user-msg-text">
                <p>
                  Hai Hassan, That’s gonna to great. Hope will the best for
                  tomorrow project.
                </p>
                <span>20:30 pm</span>
              </div>
            </div>
          </div>
          <div className="text-input">
            <textarea
              name=""
              id=""
              rows="3"
              placeholder="Write a message here..."
              value={text}
              onChange={(e) => {
                const inputValue = e.target.value;
                const currentCharacterCount = inputValue.length;

                if (currentCharacterCount <= 2000) {
                  setText(inputValue);
                  setCharacterCount(currentCharacterCount);
                }
              }}
            />
           <div className="textarea-count">
              <p>{characterCount}/ 2000</p>
            </div>
          </div>
           
          <div className="msg-sending-box">
            <div className="msg-sending-left">
              <div>
                <label htmlFor="file-upload" className="file-upload-label">
                  <div className="attached">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M12 22C10.4491 22.0376 8.94653 21.4587 7.82179 20.3902C6.69705 19.3217 6.0419 17.8508 6 16.3V6.12999C6.02883 5.0089 6.50064 3.94489 7.31216 3.17085C8.12368 2.39682 9.20879 1.97582 10.33 1.99999C11.4529 1.97313 12.5406 2.39294 13.3543 3.16726C14.168 3.94158 14.6412 5.00713 14.67 6.12999V16.31C14.6284 16.9886 14.3295 17.6257 13.8343 18.0915C13.3391 18.5573 12.6849 18.8167 12.005 18.8167C11.3251 18.8167 10.6709 18.5573 10.1757 18.0915C9.68047 17.6257 9.38159 16.9886 9.34 16.31V6.91999C9.34 6.65478 9.44536 6.40042 9.63289 6.21289C9.82043 6.02535 10.0748 5.91999 10.34 5.91999C10.6052 5.91999 10.8596 6.02535 11.0471 6.21289C11.2346 6.40042 11.34 6.65478 11.34 6.91999V16.31C11.3599 16.4723 11.4386 16.6217 11.5611 16.7301C11.6836 16.8385 11.8415 16.8983 12.005 16.8983C12.1685 16.8983 12.3264 16.8385 12.4489 16.7301C12.5714 16.6217 12.6501 16.4723 12.67 16.31V6.12999C12.6389 5.5384 12.3758 4.98294 11.9377 4.58417C11.4996 4.18539 10.9219 3.97548 10.33 3.99999C9.73979 3.97817 9.16467 4.1893 8.72876 4.58779C8.29285 4.98629 8.0311 5.5402 8 6.12999V16.3C8.04163 17.3204 8.48597 18.2828 9.23569 18.9763C9.98541 19.6698 10.9794 20.0379 12 20C13.0206 20.0379 14.0146 19.6698 14.7643 18.9763C15.514 18.2828 15.9584 17.3204 16 16.3V6.12999C16 5.86478 16.1054 5.61042 16.2929 5.42289C16.4804 5.23535 16.7348 5.12999 17 5.12999C17.2652 5.12999 17.5196 5.23535 17.7071 5.42289C17.8946 5.61042 18 5.86478 18 6.12999V16.3C17.9581 17.8508 17.303 19.3217 16.1782 20.3902C15.0535 21.4587 13.5509 22.0376 12 22V22Z"
                          fill="#AAAAAC"
                        />
                      </g>
                    </svg>
                  </div>
                </label>
                <input
                  id="file-upload"
                  className="chat-box-input-file"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setSelectedFile(file);
                  }}
                />
              </div>
              <div className="attached request-call-msg">
                <svg
                  width="21"
                  height="13"
                  viewBox="0 0 21 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.31738 2.61499C3.78695 2.61499 3.27824 2.8257 2.90317 3.20078C2.5281 3.57585 2.31738 4.08456 2.31738 4.61499V8.61499C2.31738 9.14542 2.5281 9.65413 2.90317 10.0292C3.27824 10.4043 3.78695 10.615 4.31738 10.615H10.3174C10.8478 10.615 11.3565 10.4043 11.7316 10.0292C12.1067 9.65413 12.3174 9.14542 12.3174 8.61499V4.61499C12.3174 4.08456 12.1067 3.57585 11.7316 3.20078C11.3565 2.8257 10.8478 2.61499 10.3174 2.61499H4.31738ZM14.2974 4.21999L16.3174 2.19999C16.6925 1.82526 17.2011 1.61484 17.7314 1.61499H18.3174C18.8478 1.61499 19.3565 1.8257 19.7316 2.20078C20.1067 2.57585 20.3174 3.08456 20.3174 3.61499V9.61499C20.3174 10.1454 20.1067 10.6541 19.7316 11.0292C19.3565 11.4043 18.8478 11.615 18.3174 11.615H17.7314C17.201 11.6149 16.6924 11.4041 16.3174 11.029L14.2974 9.00999C14.1994 9.99754 13.7378 10.9134 13.0022 11.5796C12.2667 12.2459 11.3098 12.6149 10.3174 12.615H4.31738C3.25652 12.615 2.2391 12.1936 1.48896 11.4434C0.73881 10.6933 0.317383 9.67586 0.317383 8.61499V4.61499C0.317383 3.55412 0.73881 2.53671 1.48896 1.78656C2.2391 1.03642 3.25652 0.61499 4.31738 0.61499L10.3174 0.61499C11.3098 0.615102 12.2667 0.98412 13.0022 1.65035C13.7378 2.31658 14.1994 3.23244 14.2974 4.21999ZM17.7324 9.61499H18.3174V3.61499H17.7314L14.7314 6.61499L17.7314 9.61499H17.7324ZM5.31738 8.61499C5.05217 8.61499 4.79781 8.50963 4.61028 8.3221C4.42274 8.13456 4.31738 7.88021 4.31738 7.61499C4.31738 7.34977 4.42274 7.09542 4.61028 6.90788C4.79781 6.72035 5.05217 6.61499 5.31738 6.61499C5.5826 6.61499 5.83695 6.72035 6.02449 6.90788C6.21203 7.09542 6.31738 7.34977 6.31738 7.61499C6.31738 7.88021 6.21203 8.13456 6.02449 8.3221C5.83695 8.50963 5.5826 8.61499 5.31738 8.61499Z"
                    fill="#AAAAAC"
                  />
                </svg>
                <span>Request a call</span>
              </div>
            </div>

            <div className="msg-sending-right">
              <div className="attached">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7892 22.781C7.26618 22.781 2.78918 18.304 2.78918 12.781C2.78918 7.25801 7.26618 2.78101 12.7892 2.78101C18.3122 2.78101 22.7892 7.25801 22.7892 12.781C22.7892 18.304 18.3122 22.781 12.7892 22.781ZM12.7892 20.781C14.9109 20.781 16.9457 19.9382 18.446 18.4379C19.9463 16.9376 20.7892 14.9027 20.7892 12.781C20.7892 10.6593 19.9463 8.62444 18.446 7.12415C16.9457 5.62386 14.9109 4.78101 12.7892 4.78101C10.6675 4.78101 8.63262 5.62386 7.13233 7.12415C5.63204 8.62444 4.78918 10.6593 4.78918 12.781C4.78918 14.9027 5.63204 16.9376 7.13233 18.4379C8.63262 19.9382 10.6675 20.781 12.7892 20.781ZM8.86918 16.175C8.81744 16.0542 8.79001 15.9244 8.78844 15.7929C8.78687 15.6615 8.8112 15.5311 8.86005 15.4091C8.90889 15.2871 8.98129 15.1759 9.07311 15.0818C9.16493 14.9878 9.27437 14.9127 9.39518 14.861C9.516 14.8093 9.64582 14.7818 9.77724 14.7803C9.90866 14.7787 10.0391 14.803 10.1611 14.8519C10.2831 14.9007 10.3943 14.9731 10.4884 15.0649C10.5824 15.1567 10.6574 15.2662 10.7092 15.387C10.884 15.7937 11.1742 16.1402 11.5439 16.3837C11.9136 16.6272 12.3465 16.757 12.7892 16.757C13.2319 16.757 13.6648 16.6272 14.0345 16.3837C14.4042 16.1402 14.6944 15.7937 14.8692 15.387C14.9209 15.2662 14.996 15.1567 15.09 15.0649C15.184 14.9731 15.2952 14.9007 15.4172 14.8519C15.5393 14.803 15.6697 14.7787 15.8011 14.7803C15.9325 14.7818 16.0624 14.8093 16.1832 14.861C16.304 14.9127 16.4134 14.9878 16.5053 15.0818C16.5971 15.1759 16.6695 15.2871 16.7183 15.4091C16.7672 15.5311 16.7915 15.6615 16.7899 15.7929C16.7884 15.9244 16.7609 16.0542 16.7092 16.175C16.3807 16.9425 15.8341 17.5966 15.1373 18.0563C14.4405 18.5161 13.624 18.7611 12.7892 18.7611C11.9544 18.7611 11.1379 18.5161 10.4411 18.0563C9.74424 17.5966 9.19769 16.9425 8.86918 16.175ZM9.78918 8.78101C10.0544 8.78101 10.3088 8.88636 10.4963 9.0739C10.6838 9.26144 10.7892 9.51579 10.7892 9.78101V11.781C10.7892 12.0462 10.6838 12.3006 10.4963 12.4881C10.3088 12.6756 10.0544 12.781 9.78918 12.781C9.52397 12.781 9.26961 12.6756 9.08208 12.4881C8.89454 12.3006 8.78918 12.0462 8.78918 11.781V9.78101C8.78918 9.51579 8.89454 9.26144 9.08208 9.0739C9.26961 8.88636 9.52397 8.78101 9.78918 8.78101ZM15.7892 8.78101C16.0544 8.78101 16.3088 8.88636 16.4963 9.0739C16.6838 9.26144 16.7892 9.51579 16.7892 9.78101V11.781C16.7892 12.0462 16.6838 12.3006 16.4963 12.4881C16.3088 12.6756 16.0544 12.781 15.7892 12.781C15.524 12.781 15.2696 12.6756 15.0821 12.4881C14.8945 12.3006 14.7892 12.0462 14.7892 11.781V9.78101C14.7892 9.51579 14.8945 9.26144 15.0821 9.0739C15.2696 8.88636 15.524 8.78101 15.7892 8.78101Z"
                    fill="#AAAAAC"
                  />
                </svg>
              </div>
              <div className="sending-btn">
                <button>
               <FiSend/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketChatBox;
