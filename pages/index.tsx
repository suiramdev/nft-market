import type {NextPage} from 'next';
import Image from "next/image";
import profilePicture from "../public/profile_picture.png";
import DimButton from "../components/DimButton";
import FilterButton from "../components/FilterButton";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
      <div>
          <div className="relative h-[275px] rounded-xl overflow-hidden bg-whitesmoke bg-cover bg-center drop-shadow-lg" style={{
              backgroundImage: "url('unsplash.jpg')"
          }}>
              <div className="flex flex-col justify-between w-[350px] h-full p-8 box-border backdrop-blur-sm text-white">
                  <div className="mt-[10%]">
                      <div className="flex items-center gap-2 text-gray">
                          <Image src={profilePicture} height={32} width={32} className="rounded-full"/>
                          <span>@suiramdev</span>
                      </div>
                      <span className="text-3xl font-semibold">Unsplash #012</span>
                  </div>
                  <div>
                      <span className="text-4xl font-bold mr-5">03:54:30</span>
                      <DimButton content="Place bid"/>
                  </div>
              </div>
          </div>
          <div className="flex flex-col mt-8">
              <h1>Explore</h1>
              <div className="flex flex-wrap gap-x-5 gap-y-2 py-4">
                  <FilterButton name="Popular" active/>
                  <FilterButton name="Recents"/>
              </div>
              <div className="flex flex-wrap gap-10 mt-10">
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
              </div>
          </div>
      </div>
  )
}

export default Home
