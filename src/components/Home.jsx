import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen relative">
        <img
          src="images/pura-ulun-danu-bratan.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <nav className="w-full absolute top-0 p-5 flex justify-between text-white z-10">
        <div>
          <h1 className="text-3xl font-bold">B A L I</h1>
        </div>
        <div>
          <ul className="flex space-x-5 text-sm font-bold">
            <li>Visa & Regulations</li>
            <li>Save %</li>
            <li>Stay</li>
            <li>Things to Do</li>
            <li>Events</li>
            <i></i>
          </ul>
          <div className="flex items-center space-x-2 mt-5 text-gray-200">
            <AiOutlineSearch />
            <input
              className="bg-inherit text-xs border-b border-gray-300 outline-0 p-1"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
      </nav>
      <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-2/5 sm:w-1/2 z-0">
        <div className="text-white text-center space-y-7">
          <h2 className="text-3xl font-bold">Island of Gods</h2>
          <h1 className="text-5xl font-bold">
            Bali is unique, Bali is unmatched
          </h1>
          <p className="mx-10 text-gray-400">
            There is no other place like Bali. A magical blend of a colourful
            culture, friendly people, stunning nature, countless activities,
            tropical weather, culinary delights, vibrant nightlife, and
            beautiful accommodation. Bali is rated regularly as one of the best
            travel destinations in the world – for very good reasons. There is
            something great for everyone to explore and discover.
          </p>
        </div>
        <div className="space-x-6">
          <button className="bg-white py-2 px-7 rounded-md">Tourist Tax <FaCheck /></button>
          <button className="text-white border py-2 px-7">Book a trip <FaBookOpen /></button>
        </div>
        <div className="text-white flex space-x-5">
          <AiFillFacebook size={"3rem"} />
          <AiFillInstagram size={"3rem"} />
          <AiFillTwitterSquare size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
