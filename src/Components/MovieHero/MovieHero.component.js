import React from "react";
import { BiSolidStar, BiChevronRight } from "react-icons/bi";

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden" style={{ width: "full" }}>
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/munjya-et00398936-1716358299.jpg"
                    alt="Poster" />
            </div>

            {/* ---- */}

            <div className="hidden md:block lg:hidden" style={{ height: "400px" }} >
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/munjya-et00398936-1716358299.jpg"
                    alt="Poster" className="w-full h-full" />
            </div>

            {/* ---- */}

            <div className="relative hidden lg:block" style={{ height: "30rem" }}>

                <div className="absolute h-full w-full z-10" style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }} />
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/munjya-et00398936-1716358299.jpg" alt="poster"
                    className="w-full h-full" />

                <div className="absolute z-20 w-64 h-96 left-64 top-10">
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/munjya-et00398936-1716358299.jpg"
                        alt="poster"
                        className="h-full w-full rounded-xl" />

                </div>

                <div className="absolute z-30 left-[35rem] top-[6rem]">
                    <p className="text-gray-50 text-4xl font-bold ">Munjya</p>
                </div>

                <div className="absolute z-30 left-[35rem] top-[10rem]">
                    <div className="bg-gray-800 px-2 py-3 rounded-xl flex">
                        <p className="text-gray-50 font-semibold ml-2 flex items-center"> <BiSolidStar style={{ color: "red", marginRight: "10px" }} /> 8.2/10 (25.6K Votes) <BiChevronRight /> </p>
                        <button className="bg-slate-50 px-2 py-1 rounded-md ml-20 mr-5 font-semibold hover:bg-gray-300 ">Rate Now</button>
                    </div>
                </div>

                <div className="absolute z-30 left-[35rem] top-[15rem]">
                    <div>
                        <button className="bg-slate-50 px-2 ml-2 mr-3 hover:underline">3D</button>
                        <button className="bg-slate-50 px-2 mr-5 hover:underline">Hindi</button>
                    </div>
                </div>

                <div className="absolute z-30 left-[35rem] top-[18rem]">
                    <div>
                        <p className='text-slate-50 font-semibold ml-2'> 2h 3m • Comedy, Horror • UA • 7 Jun, 2024</p>         
                    </div>
                </div>

                <div className="absolute z-30 left-[35rem] top-[21rem]">
                    <div>
                    <button className="bg-red-500 text-slate-50 text-l font-semibold px-8 py-3 mr-5 rounded-xl hover:bg-red-600 ">Book Tickets</button>
                    </div>
                </div>

            </div>




        </>
    )
}

export default MovieHero;