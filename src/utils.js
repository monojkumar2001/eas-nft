// utils.js

const IPFS_GATEWAY = "https://ipfs.io/ipfs/";

export const convertIpfsAddress = (ipfsAddress) => {
  const ipfsUrl = IPFS_GATEWAY + ipfsAddress ;
  const base58Hash = ipfsUrl.replace("ipfs://", "");

  const convertedAddress = `${base58Hash}`;
  return convertedAddress;
}

export const fetchJsonFromIpfs = async (ipfsHash) => {
  
  const ipfsUrl = IPFS_GATEWAY + ipfsHash ;
  try {
    const replace = ipfsUrl.replace("ipfs://","")
    const response = await fetch(replace);
    const data = await response.json();
   
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
