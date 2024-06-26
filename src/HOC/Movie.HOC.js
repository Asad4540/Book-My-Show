import React from "react";
import { Route, Routes } from "react-router-dom";

//Layouts
import MovieLayout from "../Layouts/Movielayout";


const MovieHOC = ({ component:Component, ...rest }) => {
    return (
        <>
            <Routes>
                <Route
                   {...rest}
                   element={
                     <MovieLayout>
                       <Component />
                     </MovieLayout>
                    
                    }
                />
            </Routes>
        </>
    );
};

export default MovieHOC;