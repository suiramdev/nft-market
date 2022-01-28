import React, {MutableRefObject, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import nftPlaceholder from "../public/nft_Placeholder.png";
import profilePic from "../public/profile_picture.png";
import ethereum from "../public/ethereum.png";
import Popup from "./Popup";

const Card = () => {
    const bidRef: MutableRefObject<any> = useRef(null);
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
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
                                <Image src={ethereum} width={12} height={18}/>
                                <span className="font-semibold">3.09</span>
                                <span className="text-xs text-gray">ETH</span>
                            </div>
                            <button className="rounded-lg bg-blue px-2 py-1 text-xs text-white transition-colors hover:bg-darkblue"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowPopup(true)
                                    }}>
                                <span>Place bid</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Popup trigger={showPopup}>
                <form className="mt-5 flex h-[75px] items-center overflow-hidden rounded-2xl border-2 border-darkblue text-xl"
                      onSubmit={(e) => {
                          e.preventDefault();
                          bidRef.current?.value > 0 && setShowPopup(!showPopup);
                      }}>
                    <div className="px-5 flex flex-1 items-center">
                        <Image src={ethereum} width={16} height={24}/>
                        <input type="number"
                               min="0"
                               step="0.001"
                               onInput={(e: any) => {
                                   // prettier-ignore
                                   e.target.value = e.target.value >= e.target.min && e.target.value;
                               }}
                               placeholder="0,000"
                               className="h-full flex-1 flex-1 pl-5 outline-none"
                               ref={bidRef}
                               required/>
                        <span className="text-sm font-semibold text-gray">
                                ETH
                            </span>
                    </div>
                    <button className="h-full bg-blue px-6 text-white transition-all hover:bg-darkblue">
                        Place bid
                    </button>
                </form>
                <button className="rounded-lg text-gray transition-all hover:text-red"
                        onClick={() => {
                            setShowPopup(!showPopup);
                        }}>
                    Take me back
                </button>
            </Popup>
        </>
    );
};

export default Card;
