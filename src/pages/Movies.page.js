import React from "react";
import MovieHero from "../Components/MovieHero/MovieHero.component";
import { BiSolidMoviePlay } from "react-icons/bi";

const Movies = () => {
    return (
        <>
            <div>
                <MovieHero />
            </div>
            <div className="container">
                <p className="font-bold text-xl ml-64 mt-10">About the movie</p>
                <p className=" ml-64 mt-4 w-3/5 mb-5">A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic and terrifying adventure.</p>
                <hr className="ml-64 w-1/2" />
                <p className="font-bold text-xl ml-64 mt-4 ">Applicable offers</p>

            <div className="bg-yellow-100 px-2 p-2 w-1/3 mx-64 mt-5 flex border-2 border-yellow-300 border-dashed" >
                <div >< BiSolidMoviePlay className="w-8 h-auto mr-2"/> </div>
                <div className=""> 
                    <p className="font-semibold"> Filmy Pass </p> 
                <p>Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy pass @Rs.99 </p>
                </div>
            </div>
            </div>
            
        </>
    );
};

export default Movies;