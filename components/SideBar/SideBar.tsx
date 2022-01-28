import React, {useState} from "react";
import Link from "next/link";
import NavCategory from "./Navigation/NavCategory";
import NavLink from "./Navigation/NavLink";
import {BiArrowToLeft, BiArrowToRight, BiCubeAlt, BiLogOut, BiStats, BiWalletAlt,} from "react-icons/bi";
import classNames from "../../utils/classNames";

const SideBar = () => {
    const [collapsed, setCollapse] = useState(false);

    return (
        <>
            <div className={classNames(
                "sticky top-0 left-0 z-50 flex h-full w-[350px] flex-col overflow-hidden whitespace-nowrap bg-whitesmoke px-8 transition-all lg:fixed sm:w-full",
                collapsed && "!w-0 !p-0"
            )}>
                <div className="flex flex-row items-center pt-8 pb-16 text-3xl font-bold text-black">
                    <Link href="/">
                        <a>NFT MARKET</a>
                    </Link>
                </div>
                <div className="flex flex-col flex-wrap">
                    <NavCategory name="Menu">
                        <NavLink href="/" icon={<BiCubeAlt/>} name="Explore" active/>
                        <NavLink icon={<BiStats/>} name="Stats"/>
                        <NavLink icon={<BiWalletAlt/>} name="Wallet"/>
                    </NavCategory>
                    <NavCategory name="Account">
                        <NavLink icon={<BiLogOut/>} name="Log Out"/>
                    </NavCategory>
                </div>
            </div>
            <button className="fixed bottom-5 left-5 z-50 text-3xl"
                    onClick={() => setCollapse(!collapsed)}>
                {collapsed ? <BiArrowToLeft/> : <BiArrowToRight/>}
            </button>
        </>
    );
};

export default SideBar;