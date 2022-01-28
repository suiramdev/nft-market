import "../styles/globals.scss";
import type {AppProps} from "next/app";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div className="flex">
            <SideBar/>
            <div className="mx-12 flex w-full flex-col py-8 sm:mx-0">
                <Header/>
                <Component {...pageProps}/>
            </div>
        </div>
    );
}

export default MyApp
