import React from 'react';
import Image  from "next/image";
import {BiSearchAlt2} from "react-icons/bi";
import profilePic from "../public/profile_picture.png";

const Header = () => {
    return (
        <div className="flex justify-between pt-8 pb-16">
            <div className="searchBar">
                <button><BiSearchAlt2/></button>
                <input type="text" placeholder="Search" />
            </div>
            <a className="flex gap-4 text-right items-center hover:cursor-pointer">
                <div className="flex flex-col">
                    <p className="text-sl">Welcome back,</p>
                    <p className="text-sl font-semibold text-blue">@suiramdev</p>
                </div>
                <Image src={profilePic} width={43} height={43} className=" rounded-full"/>
            </a>
        </div>
    );
};

export default Header;