import React from "react";
import { Route, Routes } from "react-router-dom";

//Layouts
import DefaultLayout from "../Layouts/DefaultLayout";


const DefaultHOC = ({ component:Component, ...rest }) => {
    return (
        <>
            <Routes>
                <Route
                   {...rest}
                   element={
                     <DefaultLayout>
                       <Component />
                     </DefaultLayout>
                    
                    }
                />
            </Routes>
        </>
    );
};

export default DefaultHOC;