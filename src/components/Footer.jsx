import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-4/5 m-auto py-10">
      <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center my-10">
        <div className="space-y-5 py-5 border-b">
          <h1 className="text-3xl font-bold">B A L I</h1>
          <div className="flex space-x-5">
            <AiFillFacebook size={"2.0rem"} />
            <AiFillInstagram size={"2.0rem"} />
            <AiFillTwitterSquare size={"2.0rem"} />
            <AiOutlineWhatsApp size={"2.0rem"} />
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>+62 813 5368 4470</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Contact</h1>
          <a className="text-xs text-gray-400" href="/">
            About Us
          </a>
          <a className="text-xs text-gray-400" href="/">
            Services
          </a>
          <a className="text-xs text-gray-400" href="/">
            Blog
          </a>
          <a className="text-xs text-gray-400" href="/">
            Contact Us
          </a>
          <a className="text-xs text-gray-400" href="/">
            How we work
          </a>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Countries</h1>
          <a className="text-xs text-gray-400" href="/">
            Regions
          </a>
          <a className="text-xs text-gray-400" href="/">
            Cities
          </a>
          <a className="text-xs text-gray-400" href="/">
            Districts
          </a>
          <a className="text-xs text-gray-400" href="/">
            Airports
          </a>
          <a className="text-xs text-gray-400" href="/">
            Hotels
          </a>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">User</h1>
          <a className="text-xs text-gray-400" href="/">
            Signup
          </a>
          <a className="text-xs text-gray-400" href="/">
            Login
          </a>
          <a className="text-xs text-gray-400" href="/">
            View Trips
          </a>
          <a className="text-xs text-gray-400" href="/">
            Reviews
          </a>
          <a className="text-xs text-gray-400" href="/">
            Traveller Review Awards
          </a>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Download</h1>
          <button className="flex items-center space-x-5 text-left px-5 py-2 border rounded-xl">
            <FaGooglePlay size={"2rem"} />
            <h1>
              <p className="text-m font-semibold">Open On</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
          <button className="flex items-center space-x-5 text-left px-5 py-2 border rounded-xl">
            <FaAppStore size={"2rem"} />
            <h1>
              <p className="text-m font-semibold">Open On</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
