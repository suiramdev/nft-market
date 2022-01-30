import React from 'react';
import {NextPage} from "next";
import {useRouter} from "next/router";

const FourOFour: NextPage = () => {
    const router = useRouter();

    return (
        <div className="relative h-screen w-screen flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-2">
                <span className="text-9xl font-bold text-gray z-10">404</span>
                <span className="text-xl z-10">Ah, shit... Here we go again.</span>
            </div>
            <button className="px-5 py-2 rounded text-white bg-blue text-white drop-shadow-lg hover:bg-darkblue" onClick={router.back}>Go back</button>
        </div>
    );
};

export default FourOFour;