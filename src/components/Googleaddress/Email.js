import axios from 'axios';
import React,{useState} from 'react'
import Swal from 'sweetalert2';
import "../../Style/email.css"


const Email = ({changeStep}) => {
  const [inputField, setInputField] = useState({
    email: "",
    error_log : ''
  });
const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };
const storeLocal = () => {
  if(inputField.email == ""){
    Swal.fire('error','you have to enter your email address','error')
  }else{
    axios.get(`api/verifyEmail/${inputField.email}`).then(res => {
      if(res.data.status == 200){
        localStorage.setItem('email',inputField.email)
        changeStep()
      }else{
        setInputField({
          ...inputField,
          error_log: res.data.error,
        });
      }
    })
  }
}

  return (
    <>
        <div className="meta-forms-item">
            <div className="input-groups">
              <label htmlFor="category"> Enter your Email Address</label>
              <div className="select-form">
                <input
                  name="email"
                  onChange={inputsHandler}
                  value={inputField.email}
                  aria-invalid="false"
                  placeholder='Enter your email address'
                  />
              </div>
              <small style={{ color:'red' }}>{inputField.error_log}</small>
            </div>
          </div>
        <div>
        <div className="claim-my-nft-item">
              <button  className="save-change-btn custom-btn" onClick={storeLocal}>
            Claim Nft</button>
            </div>
        </div>
    </>
  )
}

export default Email