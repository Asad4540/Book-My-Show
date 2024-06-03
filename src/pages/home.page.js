import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
import { Premier } from "../Components/Premier/Premier.component";

const Homepage = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-5 ml-3 mt-12">The Best of Entertainment
                </h1>
                <EntertainmentCardSlider /> <br></br>
                <Premier/>
            </div>
        </>
    );
};

export default Homepage;