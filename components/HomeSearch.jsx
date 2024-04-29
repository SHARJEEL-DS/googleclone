"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { getRandomWord } from "@/utils/helperFunctions";

const HomeSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomWordLoading, setRandomWordLoading] = useState(false);
  const [imageOrientation, setImageOrientation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    let searchQuery = `/search/image?searchTerm=${input}&imageSize=4k`;
    console.log(searchQuery);
    if (imageOrientation) {
      searchQuery += `&orientation=${imageOrientation}`;
      console.log(searchQuery,imageOrientation); // Add orientation filter if selected
    }
    router.push(searchQuery);
  };
  const randomSearch = async () => {
    setRandomWordLoading(true);
    const randomWord = await getRandomWord();
    setRandomWordLoading(false);
    if (!randomWord) return;
    let searchQuery = `/search/image?searchTerm=${randomWord}`;
    if (imageOrientation) {
      searchQuery += `&orientation=${imageOrientation}`; // Add orientation filter if selected
    }
    router.push(searchQuery);

  };
  return (
    <>
    <div className="text-[36px] text-[#7638a8] font-bold">   image Search</div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
        id="search-bar"
      >
      
        <AiOutlineSearch className="text-lg text-gray-500 mr-3 " />
        <input
          type="text"
          className="w-full focus:outline-none "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <select
        className="ml-3 p-2 border border-gray-300 rounded-md"
        value={imageOrientation}
        onChange={(e) => setImageOrientation(e.target.value)}
      >
        <option value="">All</option>
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
      </select>
      </form>
      <div className="flex flex-col space-y-2 mt-4 sm:mt-8 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row">
        <button type="submit" form="search-bar" className="btn bg-[#7638a8] text-white">
          image Search
        </button>
        <button
          className="btn flex justify-center items-center disabled:opacity-80"
          onClick={randomSearch}
          disabled={randomWordLoading}
        >
          {randomWordLoading ? (
            <img
              className="text-sm h-10"
              src={"/spinner-google.svg"}
              alt="loading spinner"
            />
          ) : (
            " I Am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
