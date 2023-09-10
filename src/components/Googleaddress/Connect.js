import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import Walletconnect from "../Collection/WalletConnet";

const Connect = () => {
  const [pagelocation, setPageLocation] = useState(useLocation().pathname);
  const navigate = useNavigate();
  const [items, setItems] = useState({
    nft: "",
    category: "",
    subCategory: "",
    email: "",
    address: "",
  });
  useEffect(() => {
    setItems({
      ...items,
      nft: localStorage.getItem("nfts"),
      category: localStorage.getItem("category"),
      subCategory: localStorage.getItem("sub-category"),
      email: localStorage.getItem("email"),
    });
  }, []);

  const message = `
Welcome to OpenSea!
Click to sign in and accept the OpenSea Terms of Service (https://opensea.io/tos) and Privacy Policy (https://opensea.io/privacy).
This request will not trigger a blockchain transaction or cost any gas fees.
Your authentication status will reset after 24 hours.
`;

  const handleLogin = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const { chainId } = await provider.getNetwork();
        console.log("chainId", chainId);
        if (chainId === 80001 || chainId === "80001") {
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((result) => {
              handleSign(new ethers.providers.Web3Provider(window.ethereum));
            })
            .catch((error) => {
              console.log("Could not detect Account");
            });
        } else {
          const walletProvider = window.ethereum.providers.find(
            (x) => x.isCoinbaseWallet
          );

          if (!walletProvider) {
            console.log("Coinbase wallet provider not found.");
            return;
          }

          let provider = new ethers.providers.Web3Provider(walletProvider);

          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          if (accounts.length > 0) {
            handleSign(provider);
          } else {
            console.log("No accounts detected.");
          }
        }
      } else {
        // window.open(
        //   `https://metamask.app.link/dapp${pagelocation}`
        // );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSign = async (provider) => {
    try {
      const signer = await provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();
      verify(message, signature, address);
    } catch (e) {
      console.log(e);
    }
  };

  const verify = (msg, sig, add) => {
    const actualAddress = ethers.utils.verifyMessage(msg, sig);
    if (actualAddress !== add) {
      Swal.fire("error", "Not a Valid Address", "decline");
    } else {
      submitForm(add);
    }
  };

  const submitForm = (add) => {
    let formData = new FormData();
    formData.append("nfts", items.nft);
    formData.append("category", items.category);
    formData.append("subCategory", items.subCategory);
    formData.append("email", items.email);
    formData.append("address", add);
    axios.post("/api/nft", formData).then((res) => {
      if (res.data.status === 200) {
        localStorage.setItem("user_id", res.data.data);
        var itemsToRemove = ["nfts", "email", "category", "sub-category"];
        itemsToRemove.forEach(function (item) {
          localStorage.removeItem(item);
        });
        console.log(res.data.message);
        navigate("/account/my-nft");
      } else {
        console.log(res.data.message);
      }
    });
  };

  const [walletConnect, setWalletConnect] = useState(false);

  const toggleHandleWallet = () => {
    setWalletConnect(!walletConnect);
  };

  return (
    <div>
      <div className="claim-my-nft-item">
        <button className="save-change-btn custom-btn" onClick={toggleHandleWallet}>
          Connect wallet
        </button>
        <Walletconnect
          setWalletConnect={walletConnect}
          walletConnect={walletConnect}
          toggleHandleWallet={toggleHandleWallet}
          opt="2"
        />
      </div>
    </div>
  );
};

export default Connect;
