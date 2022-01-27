import React from "react";
import Image from "next/image";
import {BiSearchAlt2} from "react-icons/bi";
import profilePic from "../public/profile_picture.png";

const Header = () => {
    return (
        <div className="flex justify-between pb-16">
            <div className="flex w-[359px] items-center gap-2 rounded border-2 border-blue border-opacity-0 bg-whitesmoke px-4 py-2 text-lg focus-within:border-opacity-100">
                <button>
                    <BiSearchAlt2 />
                </button>
                <input type="text" placeholder="Search" className="flex-1" />
            </div>
            <a className="flex items-center gap-4 text-right hover:cursor-pointer">
                <div className="flex flex-col">
                    <p className="text-sl">Welcome back,</p>
                    <p className="text-sl font-semibold text-blue">
                        @suiramdev
                    </p>
                </div>
                <Image
                    src={profilePic}
                    width={43}
                    height={43}
                    className="rounded-full"
                />
            </a>
        </div>
    );
};

export default Header;