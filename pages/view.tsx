import type {NextPage} from "next";
import React, {MutableRefObject, useRef, useState} from "react";
import Image from "next/image";
import nftPlaceholder from "../public/nft_placeholder.png";
import profilePicture from "../public/profile_picture.png";
import {BiTransfer} from "react-icons/bi";
import Popup from "../components/Popup";

const View: NextPage = () => {
    const bidRef: MutableRefObject<any> = useRef(null);
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className="flex flex-wrap gap-10">
                <Image src={nftPlaceholder} width={525} height={525} className="rounded-xl"/>
                <div className="flex flex-1 flex-col justify-between gap-14">
                    <div>
                        <div className="flex items-center gap-2 text-gray">
                            <Image
                                src={profilePicture}
                                width={24}
                                height={24}
                                className="rounded-full"
                            />
                            <span>@suiramdev</span>
                        </div>
                        <span className="text-5xl font-bold">Doodle owner</span>
                    </div>
                    <div>
                        <span>Sales ends January 26, 2022 at 3:02am CET</span>
                        <div className="flex gap-12">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold">11</span>
                                <span>Hours</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold">49</span>
                                <span>Minutes</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold">29</span>
                                <span>Seconds</span>
                            </div>
                        </div>
                        <form className="mt-5 flex h-[75px] items-center overflow-hidden rounded-2xl border-2 border-darkblue text-xl"
                              onSubmit={(e) => {
                                  e.preventDefault();
                                  bidRef.current?.value > 0 && setShowPopup(!showPopup);
                              }}>
                            <input type="number"
                                   min="0"
                                   step="0.001"
                                   onInput={(e: any) => {
                                       // prettier-ignore
                                       e.target.value = e.target.value >= e.target.min && e.target.value;
                                   }}
                                   placeholder="0,000"
                                   className="h-full flex-1 pl-5 outline-none"
                                   ref={bidRef}
                                   required/>
                            <span className="px-5 text-sm font-semibold text-gray">
                                ETH
                            </span>
                            <button className="h-full bg-blue px-6 text-white transition-all hover:bg-darkblue">
                                Place bid
                            </button>
                        </form>
                        <Popup trigger={showPopup}>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-3xl font-semibold">
                                    Are you sure ?
                                </span>
                                <span className="text-lg">
                                    You are about to place a bid of {bidRef.current?.value} ETH.
                                </span>
                            </div>
                            <div className="flex gap-8">
                                <button className="rounded-lg bg-blue px-10 py-2 text-white transition-all hover:bg-darkblue"
                                        onClick={() => {
                                            setShowPopup(!showPopup);
                                        }}>
                                    I'm sure
                                </button>
                                <button className="rounded-lg border-2 border-gray px-5 py-2 text-gray transition-all hover:border-red hover:text-red"
                                        onClick={() => {
                                            setShowPopup(!showPopup);
                                        }}>
                                    Take me back
                                </button>
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
            <h2 className="mt-10 mb-5">Trading History</h2>
            <div className="rounded bg-whitesmoke p-5 font-semibold">
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Price</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><BiTransfer />Transfer</td>
                            <td>0.00</td>
                            <td><a>NullAddress</a></td>
                            <td><a>@suiramdev</a></td>
                            <td>now</td>
                        </tr>
                        <tr>
                            <td><BiTransfer />Transfer</td>
                            <td>0.00</td>
                            <td><a>NullAddress</a></td>
                            <td><a>@suiramdev</a></td>
                            <td>now</td>
                        </tr>
                        <tr>
                            <td><BiTransfer />Transfer</td>
                            <td>0.00</td>
                            <td><a>NullAddress</a></td>
                            <td><a>@suiramdev</a></td>
                            <td>now</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default View;
