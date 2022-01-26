import React from 'react';
import Image from "next/image";
import nftPlaceholder from "../public/nft_Placeholder.png";
import profilePic from "../public/profile_picture.png";
import DimButton from "./DimButton";

const Card = () => {
    return (
        <div className="flex flex-col w-[300px] h-[375px] rounded-2xl bg-whitesmoke overflow-hidden drop-shadow-sm hover:drop-shadow-lg hover:cursor-pointer transition-all">
            <Image src={nftPlaceholder} layout={"responsive"} objectFit={"contain"} height={300}/>
            <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                    <span className="text-xl font-semibold">Doodle owner</span>
                    <div className="flex gap-1 items-center">
                        <Image src={profilePic} width={24} height={24} className="rounded-full"/>
                        <span className="text-sm text-gray">@suiramdev</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <span className="font-semibold">3.09</span>
                        <span className="text-xs text-gray">ETH</span>
                    </div>
                    <DimButton content="Place bid"/>
                </div>
            </div>
        </div>
    );
};

export default Card;