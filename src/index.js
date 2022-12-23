import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// --------- WAGMI package importation ---------
import { getDefaultProvider } from 'ethers'
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, arbitrum, avalanche, bsc, optimism, polygon } from "wagmi/chains";

// --------- React Toastify importation ---------
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './style.css'
import Home from './views/home'
import ConnectHome from './views/ConnectDapp/connect'

const chains = [ mainnet, arbitrum, avalanche, bsc, optimism, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: process.env.PROJECT_ID }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "alfa.society", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
 
const App = () => {
  return (
    <Router>
      <WagmiConfig client={wagmiClient}>
       <ToastContainer />
       <Routes>
         <Route path="/" element={<ConnectHome />} />
         <Route path="/alpha-teleporthq" element={<Home />} />
      </Routes>
      </WagmiConfig>

      <Web3Modal
        projectId="f34a7a9265b0a2846c88cc89d9407ce5"
        ethereumClient={ethereumClient}
      />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
