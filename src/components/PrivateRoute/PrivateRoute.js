import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import WalletConnet from '../Collection/WalletConnet';
import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
const PrivateRoute = () => {
const {active,deactivate} = useWeb3React()


const [walletConnect, setWalletConnect] = useState(false);
const toggleHandleWallet = () => {
  setWalletConnect(!walletConnect);
};
useEffect(()=>{
  if(!active){
    setWalletConnect(true)
  }
},[active])

if(active){
  
}

if(active){
  return <Outlet/>
}else{
  return (
    <WalletConnet setWalletConnect={setWalletConnect} walletConnect={walletConnect} toggleHandleWallet={toggleHandleWallet} />
  )
}

}

export default PrivateRoute