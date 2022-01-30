import "../styles/globals.scss";
import type {AppProps} from "next/app";
import SideBar from "../components/SideBar/SideBar";
import {ThirdwebProvider} from "@3rdweb/react";

function App({Component, pageProps}: AppProps) {
    // Put the ethereum chain ids of the chains you want to support
    const supportedChainIds = [80001];

    /**
     * Include the connectors you want to support
     * injected - MetaMask
     * magic - Magic Link
     * walletconnect - Wallet ConnectWallet
     * walletlink - Coinbase Wallet
     */
    const connectors = {
        injected: {},
        magic: {
            apiKey: "pk_...", // Your magic api key
            chainId: 80001, // The chain ID you want to allow on magic
        },
        walletconnect: {},
        walletlink: {
            appName: "thirdweb - demo",
            url: "https://thirdweb.com",
            darkMode: false,
        },
    };

    return (
        <ThirdwebProvider connectors={connectors} supportedChainIds={supportedChainIds}>
            <div className="flex">
                <SideBar/>
                <Component {...pageProps}/>
            </div>
        </ThirdwebProvider>
    );
}

export default App;
