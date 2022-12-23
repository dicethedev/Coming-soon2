import React, {useState} from 'react'
import './connect.css'
import Modal from '../../components/Modal/Modal'
//walletconnect uses wagmi
import { Web3Button, useWeb3Modal } from '@web3modal/react'
import { useContractRead, useAccount } from "wagmi";
import contractABI from '../../abi/abi.json'
import { toast } from 'react-toastify';
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

// import Component2 from '../../components/component2'

const connect = () => {

  //  const [openModal, setOpenModal] = useState(false);
   const { address, isConnected } = useAccount();
   const { open } = useWeb3Modal()
  
   let navigate = useNavigate();
 
  // Alfa Token mainnet address is the contract address here
   const contractAddress = "0x5609972dd1655455eabc7019b9df15f8d00640ba";

  const { data: balanceOfCheck } = useContractRead({
    mode: "recklesslyUnprepared",
    address: contractAddress,
    abi: contractABI,
    functionName: "balanceOf",
    args: [address]
  })
  //  console.log(balanceOfCheck ? balanceOfCheck : "", "token balance")

  //converting hex to normal number // note - .toLocalString("en")
  const hexToDecimal = (hex) => parseInt(hex, 16);

  const balance = (balanceOfCheck ? hexToDecimal(balanceOfCheck._hex)/1e18 : 0 );
  console.log(balance);

  //function to enter Dapp
  const enterDapp = () => {
    if (balance >= 5000000) {
     navigate('/alpha-teleporthq')
    } else {
     toast.warning('You need to be holding atleast 5,000,000 (1%) $ALFA tokens before you can continue! Proceed by getting $ALFA token', {
     position: toast.POSITION.TOP_CENTER,
     autoClose: 9000
    });
 }
}

  return (
    <div className="connect-container">
      <div className="header"><span className="header-text">PROTOTYPE</span></div>

       {!isConnected ? 
       <div className="right">
         <button onClick={() => open()}
       className="connectButton"
       >
        Connect Wallet
       </button>
       </div> : 
       <div className="right">
        <button className="connectButton" onClick={() => open()}>{address?.slice(0, 10)}...</button>
        </div>
      }

       <div className="connect-card">
          <div className="connect-card_container">
            <h1 className="text-alfa">alfa.dapp</h1>
             <span className="link">Enter Alfa Dapp</span>
             <div className="logo">
              <img
              alt="pastedImage"
              src="https://static.wixstatic.com/media/7dc126_c6de0b84b0b944afbecf7e89b44b273d~mv2.gif"
              className="home-logo"
            />
             </div>
             <span className="token-link">You need to be holding atleast 5,000,000 (1%) $ALFA tokens</span>
             <span className="token-link2">
              <a href="https://app.uniswap.org/#/swap?outputCurrency=0x5609972dD1655455EAbc7019B9Df15F8d00640BA&amp;chain=mainnet" target="_blank" rel="noreferrer noopener">Get $ALFA tokens</a>
             </span>
             {/* <Component2 rootClassName="component1-root-class-name"></Component2> */}
             <div className="enterdapp">
              <button onClick={enterDapp} className="component2-button themebutton2 button2">
               Enter Dapp
             </button>
             </div>
             <div>
             </div>
          </div>
       </div>
    </div>
  )
}
export default connect
