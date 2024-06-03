import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
import { Premier } from "../Components/Premier/Premier.component";
import { Movie } from "../Components/Movies/Movie.component";
import { HollywoodMovies } from "../Components/Movies/HollywoodMovies.component";

const Homepage = () => {
    return (
        <>
            <div className="container mx-auto px-4" >
                <Movie />
            </div>

            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-5 ml-3 mt-12">The Best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div style={{ backgroundColor: '#2B3148' }}>
                <div className="container mx-auto px-4">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
                        alt="premier" />
                </div> <br></br>
                <div className="container mx-auto px-4" >
                    <Premier />
                </div>
            </div>

            <div className="container mx-auto px-4" >
                <HollywoodMovies />
            </div>


        </>
    );
};

export default Homepage;