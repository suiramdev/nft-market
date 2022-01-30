import React, {useState} from 'react';
import Popup from "../Popup";
import {FaTimes} from "react-icons/fa";
import {BiLink} from "react-icons/bi";
import metaMask from "../../public/images/wallets/metamask-fox.svg";
import walletConnect from "../../public/images/wallets/walletconnect-logo.svg";
import coinBase from "../../public/images/wallets/coinbase-wallet-logo.svg";
import WalletButton from "./WalletButton";
import {ConnectorOptions, useWeb3} from "@3rdweb/hooks";

const ConnectWallet = () => {
    const {connectWallet} = useWeb3();
    const [showPopup, setShowPopup] = useState(false);

    async function handleButton(connector: keyof ConnectorOptions) {
        await connectWallet(connector);
        setShowPopup(false);
    }

    return (
        <>
            <button
                className="min-w-[125px] px-5 py-2 flex items-center justify-center gap-1 rounded-xl bg-blue text-white drop-shadow-lg hover:bg-darkblue"
                onClick={() => setShowPopup(true)}>
                <BiLink/>Sign In
            </button>
            <Popup trigger={showPopup} className="gap-2">
                <div className="w-full flex justify-between items-center">
                    <span className="font-semibold">Choose your wallet</span>
                    <button className="p-2 flex items-center justify-center rounded hover:bg-lightgray transition-colors"
                            onClick={() => setShowPopup(false)}>
                        <FaTimes/>
                    </button>
                </div>
                <WalletButton name="MetaMask" icon={metaMask} onClick={() => handleButton("injected")}/>
                <WalletButton name="Wallet" icon={walletConnect} onClick={() => handleButton("walletconnect")}/>
                <WalletButton name="Coinbase" icon={coinBase} onClick={() => handleButton("walletlink")}/>
            </Popup>
        </>
    );
};

export default ConnectWallet;