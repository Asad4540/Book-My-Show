import React from "react";
import Navbar from "../Components/navbar/navbar.component";


const MovieLayout = (props) => {
    return (
      <>
        <Navbar/>
        {props.children}
      </>
    );
  };  
  
  export default MovieLayout;
  