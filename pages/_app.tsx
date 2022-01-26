import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="flex">
        <SideBar/>
        <div className="w-full flex flex-col mx-12">
            <Header/>
          <Component {...pageProps} />
        </div>
      </div>
  )
}

export default MyApp
