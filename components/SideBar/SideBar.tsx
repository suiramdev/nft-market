import React, {useState} from 'react';
import NavCategory from "./Navigation/NavCategory";
import NavLink from "./Navigation/NavLink";
import {BiArrowToLeft, BiArrowToRight, BiCubeAlt, BiLogOut, BiStats, BiWalletAlt} from "react-icons/bi";

const SideBar = () => {
    const [collapsed, setCollapse] = useState(false);

    return (
        <>
            <div className={["sideBar", collapsed && "collapse"].join(" ")}>
                <div className="flex flex-row items-center pt-8 pb-16 font-bold text-2xl">
                    <h1 className="text-black">NFT MARKET</h1>
                </div>
                <div className="flex flex-wrap flex-col">
                    <NavCategory name="Menu">
                        <NavLink icon={<BiCubeAlt/>} name="Explore" active/>
                        <NavLink icon={<BiStats/>} name="Stats"/>
                        <NavLink icon={<BiWalletAlt/>} name="Wallet"/>
                    </NavCategory>
                    <NavCategory name="Account">
                        <NavLink icon={<BiLogOut/>} name="Log Out"/>
                    </NavCategory>
                </div>
            </div>
            <button className="fixed bottom-5 left-5 text-3xl z-50" onClick={() => setCollapse(!collapsed)}>{collapsed ? (<BiArrowToLeft/>) : <BiArrowToRight/>}</button>
        </>
    );
}

export default SideBar;