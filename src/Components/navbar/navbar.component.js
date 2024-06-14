import React from "react";
import { BiSearch, BiChevronRight, BiMenu } from "react-icons/bi";
import { IoChevronForward } from "react-icons/io5";
import myimg from "./bms.png"

const NavSm = () => {
    return (
        <>
            <div className=" text-white flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-xl"> It All Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        Pune
                        <IoChevronForward />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full" />
                </div>
            </div >
        </>
    )
};

const NavMd = () => {
    return (
        <>
            <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
                <BiSearch />
                <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
            </div>
        </>
    )
};

const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2">
                    <div className="">
                        <img src={myimg} alt="logo" className=" my-2 h-10 mr-10 " />
                    </div>
                    <div className="w-full flex items-center bg-white gap-3 px-2 py-1 ml-2 rounded-sm">
                        <BiSearch />
                        <input type="search" className="w-full outline-none" placeholder="Search Events,Movies & Sports"></input>
                    </div>
                </div>


                <div className="flex items-center gap-3 ">
                    <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                        Pune
                        <BiChevronRight />
                    </span>
                    <button className=" bg-red-500 rounded text-white text-sm rounded px-2 py-1 font-semibold hover:bg-red-600">Sign in</button>
                    <div className="text-white w-8 h-8">
                        <BiMenu className="h-full w-full" />
                    </div>
                </div>
            </div>
        </>
    )
};

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-900  p-4">
                <div className="md:hidden">{
                    <NavSm />
                    //mobile screen
                }
                </div>
                <div className="hidden lg:hidden md:flex">{
                    //tablet screen
                    <NavMd />

                }
                </div>
                <div className="hidden lg:flex ">{
                    //desktop screen
                    <NavLg />
                }
                </div>
            </nav>
        </>
    )
};

export default Navbar;
