import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />
      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        
        <HomeSearch />
      </div>
    </>
  );
}
