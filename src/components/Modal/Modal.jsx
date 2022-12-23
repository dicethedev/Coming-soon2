import React, {useState, useEffect} from 'react'
import './modal.css'
import {RiCloseFill} from 'react-icons/ri'

const Modal = ({ setOpenModal }) => {

    //  const walletMenu = ["MetaMask", "Coinbase", "WalletConnect"]

  return (
    <div className="modal">
      <div classNme="modal-box">
          <div className="modal-box_heading">
               <p>Opps!!!!</p>
               <div className="modal-box_heading_imgClose">
                 <RiCloseFill 
                  color={"#ffffff"} 
                  onClick={() => setOpenModal(false)} />
               </div>
          </div>
          {/* @dev - el = element, i = index */}
          {/* <div className="model-box_wallet">
           {walletMenu.map(( el, i) => (
               <p key={i + 1} onClick={()=> connectWallet()}>
                    {el}
               </p>
           ))}
          </div>  */}
          <div className="">
             <span className="token-link">You need to be holding atleast 5,000,000 (1%) $ALFA tokens</span>
          </div>
          <p className="modal-box_privacy">
            Supported by <a href="https://app.uniswap.org/#/swap?outputCurrency=0x5609972dD1655455EAbc7019B9Df15F8d00640BA&amp;chain=mainnet" target="_blank" rel="noreferrer noopener">Alfa.society</a> hub and labs.
          </p>
      </div>
    </div>
  )
}

export default Modal
