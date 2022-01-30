import React from 'react';
import Image from "next/image";
import {ConnectorOptions, useWeb3} from "@3rdweb/hooks";

interface IWalletButtonProps {
    name: string;
    icon: string | StaticImageData;
    onClick?: () => void;
}

const WalletButton = (props: IWalletButtonProps) => {
    const {connectWallet} = useWeb3();

    return (
        <button className="w-[300px] px-5 py-2 flex items-center justify-between rounded border border-gray hover:bg-lightgray hover:cursor-pointer transition-colors"
                onClick={props.onClick}>
            <span className="font-bold text-lg">{props.name}</span><Image src={props.icon} width={24} height={24}/>
        </button>
    );
};

export default WalletButton;