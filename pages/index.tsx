import type {NextPage} from "next";
import Image from "next/image";
import profilePicture from "../public/profile_picture.png";
import FilterButton from "../components/FilterButton";
import Card from "../components/Card";
import React from "react";

const Home: NextPage = () => {
    return (
        <>
            <div className="relative h-[275px] overflow-hidden rounded-xl bg-whitesmoke bg-cover bg-center drop-shadow-lg"
                 style={{
                     backgroundImage: "url('unsplash.jpg')",
                 }}>
                <div
                    className="box-border flex h-full w-[350px] flex-col justify-between p-8 text-white backdrop-blur-sm">
                    <div className="mt-[10%]">
                        <div className="flex items-center gap-1 text-gray">
                            <Image src={profilePicture} height={32} width={32} className="rounded-full"/>
                            <span>@suiramdev</span>
                        </div>
                        <span className="text-3xl font-semibold">
                            Unsplash #012
                        </span>
                    </div>
                    <div>
                        <span className="mr-5 text-4xl font-bold">
                            03:54:30
                        </span>
                        <button className="rounded-lg bg-blue px-3 py-1 text-sm text-white transition-colors hover:bg-darkblue">
                            <span>Place bid</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <h1>Explore</h1>
                <div className="flex flex-wrap gap-x-5 gap-y-2 py-4">
                    <FilterButton name="Popular" active/>
                    <FilterButton name="Recents"/>
                </div>
                <div className="mt-10 grid grid-cols-autoFill gap-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
};

export default Home;
