import React, { useState } from 'react'
import "../../Style/WelcomeEasWallect.css"
import { Link } from 'react-router-dom';
const WelcomeToEasNftWallet = () => {
    const [easNftWallet, setEasNftWallet]=useState(false);
    const toggleHandleWallet=()=>{
        setEasNftWallet(!easNftWallet);
    }
  return (
    <>
    <button className='custom-btn' onClick={toggleHandleWallet}>Accept and sign</button>
    {
        easNftWallet && (
            <div className="welcome_model">
                <div className="overlay-4">
                    <div className="welcome-wallet-content">
                     <div className="welcome-content-wrapper">
                        <button className='btn-close' onClick={toggleHandleWallet}></button>
                     <div className="welcome-wallet-img">
                            <img src="/images/logo.png" alt="" />
                        </div>
                        <h3>Welcome to EAS NFT</h3>
                        <p>By connecting your wallet and using EAS NFT, you agree to our <Link href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms of Service</Link> and <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> </p>
                    <div className="welcome-btn-items d-flex align-items-center justify-content-center gap-3">
                        <button className='custom-btn cancel-btn'>Cancel</button>
                        <button className='custom-btn'>Accept and sign</button>
                    </div>
                     </div>
                    </div>
                </div>
            </div>
        )
    }
    </>
  )
}

export default WelcomeToEasNftWallet