import React from "react";

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start px-3 h-96 ">
                <div className="">
                    <img className="md:h-80" src={props.src} alt={props.title} />
                </div>
                <p className={`text-lg font-bold ${props.isDarkMode ? 'text-white' : 'text-gray-700'
                    }`}
                >{props.title}</p>

                <p className={`text-sm ${props.isDarkMode ? 'text-white' : 'text-gray-700'
                    }`}
                >{props.subtitle}</p>
            </div>
        </>
    )
};

export default Poster;