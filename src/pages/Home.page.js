import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";

const Homepage = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800">The Best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>
        </>
    );
};

export default Homepage;