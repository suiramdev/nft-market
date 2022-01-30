import React from "react";
import Image from "next/image";
import {BiSearchAlt2} from "react-icons/bi";
import ConnectWallet from "./Connect/ConnectWallet";
import {useWeb3} from "@3rdweb/hooks";
import {generateFromString} from "generate-avatar";

const Header = () => {
    const {address} = useWeb3();
    const avatar = address && URL.createObjectURL(new Blob([generateFromString(address)], {type: "image/svg+xml"}));

    return (
        <div className="flex justify-between pb-16">
            <div
                className="flex w-[359px] items-center gap-2 rounded border-2 border-blue border-opacity-0 bg-whitesmoke px-4 py-2 text-lg focus-within:border-opacity-100">
                <button><BiSearchAlt2/></button>
                <input type="text" placeholder="Search" className="flex-1"/>
            </div>
            {address ? (
                <a className="flex items-center gap-4 text-right hover:cursor-pointer">
                    <div className="flex flex-col md:hidden">
                        <span className="text-sl">Welcome back,</span>
                        <span className="text-sl font-semibold text-blue">{address?.substring(0, 8)}...</span>
                    </div>
                    { avatar && <Image src={avatar} width={43} height={43} className="rounded-full"/> }
                </a>
            ) : (
                <ConnectWallet/>
            )}
        </div>
    );
};

export default Header;