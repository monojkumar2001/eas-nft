import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Removed useLocation as it's not used
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../wallet/connectors";


const WalletConnet = ({ opt, walletConnect ,setWalletConnect,toggleHandleWallet}) => {
  const {
    library,

    account,
    activate,
    deactivate,
    active,
  } = useWeb3React();
  const navigate = useNavigate();
  // const [provider, setProvider] = useState(null);
  const [option, setOption] = useState(0);
  console.log("option : ", option);

  const [items, setItems] = useState({
    nft: "",
    category: "",
    subCategory: "",
    email: "",
    address: "",
  });

  const message = `Welcome to OpenSea! Click to sign in and accept the OpenSea Terms of Service (https://opensea.io/tos) and Privacy Policy (https://opensea.io/privacy). This request will not trigger a blockchain transaction or cost any gas fees. Your authentication status will reset after 24 hours.`;


  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };
  const handleWalletActivation = async (connector) => {
    try {
      await activate(connector);

      if (library) {
        const signature = await library.provider.request({
          method: "personal_sign",
          params: [message, account],
        });

        console.log("Signature:", signature);

        await verify(message, signature);

        if (connector === connectors.injected) {
          setProvider(connectors.injected);
        } else if (connector === connectors.coinbaseWallet) {
          setProvider(connectors.coinbaseWallet);
        }

        console.log("Login successful");
      } else {
        console.log("Library is not available yet.");
      }
    } catch (error) {
      if (error.code === "USER_DENIED_MESSAGE_SIGNATURE") {
        console.log("User rejected the signing request.");
      } else {
        console.error("Error signing message:", error);
      }
    }
  };

  const handleMetamask = async () => {
    console.log("Handling MetaMask connection...");
    handleWalletActivation(connectors.injected);
  };

  const handleCoinBase = async () => {
    console.log("Handling Coinbase Wallet connection...");
    handleWalletActivation(connectors.coinbaseWallet);
  };

  const verify = async (msg, sig) => {
    if (!library) return;
    try {
      const actualAddress = await library.provider.request({
        method: "personal_ecRecover",
        params: [msg, sig],
      });
      console.log("Actual Address:", actualAddress); // Log the actual address for debugging

      console.log("Option in verify:", option);

      if (actualAddress !== account.toLowerCase()) {
        Swal.fire("error", "Not a Valid Address", "decline");
      } else {
        if (localStorage.getItem("submitOption")) {
          submitForm(account);
        } else {
          axios.get(`api/verifyUser/${account}`).then((res) => {
            console.log("Verification response:", res.data); // Log the verification response
            Swal.fire("success", res.data.message, "success");
          });
          localStorage.setItem("user_id", account);
          window.location.reload();
        }
      }
    } catch (e) {
      console.log("Error in verify:", e);
    }
  };

  const submitForm = () => {
    let formData = new FormData();
    formData.append("nfts", localStorage.getItem("nfts"));
    formData.append("category", localStorage.getItem("category"));
    formData.append("subCategory", localStorage.getItem("sub-category"));
    formData.append("email", localStorage.getItem("email"));
    formData.append("address", account);
    axios.post("/api/nft", formData).then((res) => {
      if (res.data.status === 200) {
        localStorage.setItem("user_id", account);
        var itemsToRemove = [
          "nfts",
          "email",
          "category",
          "sub-category",
          "submitOption",
        ];
        itemsToRemove.forEach(function (item) {
          localStorage.removeItem(item);
        });
        Swal.fire("success", res.data.message, "success");
        navigate("/account/my-nft");
        window.location.reload();
      } else {
        console.log(res.data.message);
      }
    });
  };

  useEffect(() => {
    if (opt == 2) {
      localStorage.setItem("submitOption", 2);
    }
  }, []);

 

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, []);

  //  Model

 
  return (
    <>
      {walletConnect && (
        <div className="wallet_model">
          <div className="overlay2"></div>
          <div className="modal-content wallet-connect-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Connect to your favourite CryptoWallet
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={toggleHandleWallet}
              ></button>
            </div>
            <div className="modal-body" >
              <div className="wallet-content-wrapper d-flex flex-column gap-3">
                <button
                  onClick={handleMetamask}
                  className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center"
                >
                  <div className="wallet-img">
                    <LazyLoadImage src="/images/header/metamask.png" />
                  </div>
                  <h4>Metamask</h4>
                  <span>Connect to your Metamask</span>
                </button>
                <button
                  onClick={() => {
                    handleCoinBase();
                    setProvider("coinbaseWallet");
                  }}
                  className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center"
                >
                  <div className="wallet-img">
                    <LazyLoadImage src="/images/header/coinbase.png" />
                  </div>
                  <h4>Coinbase Wallet</h4>
                  <span>Connect to your Coinbase Wallet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default WalletConnet;
