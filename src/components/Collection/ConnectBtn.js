import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { truncateAddress } from "../../wallet/utils";
import WalletConnet from "./WalletConnet";

const ConnectBtn = () => {
  const { active, account,deactivate} = useWeb3React();
  const disconnect = () => {
    deactivate();
    window.localStorage.setItem("provider", undefined);
    localStorage.removeItem("provider");
    localStorage.removeItem("user_id");
  };

  const [walletConnect, setWalletConnect] = useState(false);

  const toggleHandleWallet = () => {
    setWalletConnect(!walletConnect);
  };

  return (
    <>
      {active ? (
        <button className="custom-btn" onClick={disconnect}>
          {truncateAddress(account)}
        </button>
      ) : (
        <button className="custom-btn" onClick={toggleHandleWallet}>Connect wallet</button>
      )}

      <WalletConnet
        setWalletConnect={walletConnect}
        walletConnect={walletConnect}
        toggleHandleWallet={toggleHandleWallet}
      />
    </>
  );
};

export default ConnectBtn;
