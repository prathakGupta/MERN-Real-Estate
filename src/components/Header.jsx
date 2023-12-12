import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6lx mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-xl flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600 " />
        </form>
        <div className="flex item-center ">
          <BiMenu className="inline sm:hidden" />
          <ul className="gap-4 flex ">
            <Link to="/">
              <li className=" hidden sm:inline text-slate-700 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className=" hidden sm:inline text-slate-700 hover:underline">
                About
              </li>
            </Link>
            <Link to="/sign-in">
              <li className=" hidden sm:inline text-slate-700 hover:underline">
                Sign In
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
