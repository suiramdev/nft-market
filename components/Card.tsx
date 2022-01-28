import React from "react";
import Image from "next/image";
import Link from "next/link";
import nftPlaceholder from "../public/nft_Placeholder.png";
import profilePic from "../public/profile_picture.png";

const Card = () => {
    return (
        <Link href="/view">
            <div className="flex flex-col overflow-hidden rounded-2xl bg-whitesmoke drop-shadow-sm transition-all hover:cursor-pointer hover:drop-shadow-lg">
                <Image src={nftPlaceholder} layout={"responsive"} objectFit={"contain"} height={300}/>
                <div className="min-h-[150px] flex flex-1 flex-col justify-between p-5">
                    <div>
                        <span className="text-xl font-semibold">Doodle owner</span>
                        <div className="flex items-center gap-1">
                            <Image src={profilePic} width={24} height={24} className="rounded-full"/>
                            <span className="text-sm text-gray">@suiramdev</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">3.09</span>
                            <span className="text-xs text-gray">ETH</span>
                        </div>
                        <Link href="/view">
                            <button className="rounded-lg bg-blue px-2 py-1 text-xs text-white transition-colors hover:bg-darkblue">
                                <span>Place bid</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
