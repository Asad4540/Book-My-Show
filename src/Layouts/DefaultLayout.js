import React from "react";
import Navbar from "../Components/navbar/navbar.component";
import HeroCarousel from "../Components/Herocarousel/Herocarousel.component";


const DefaultLayout = (props) => {
    return (
      <>
        <Navbar/>
        <HeroCarousel/>
        {props.children}
      </>
    );
  };  
  
  export default DefaultLayout;
  