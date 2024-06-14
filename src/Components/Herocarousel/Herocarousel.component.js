import React from "react";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow,NextArrow } from "./Arrows.component";

const HeroCarousel = () => {
    const settingsMd = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    };

    const settingsLg = {
        arrow: true,
        autoplay:true,
        centerMode: true,
        centerPadding :"250px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    };

    const images = [
        "https://miro.medium.com/v2/resize:fit:1400/1*Subc1iyVVKLRT-Wolmj_-A.jpeg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00070957-dtrqeqaamz-landscape.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00037298-jajzylmjkv-landscape.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00122562-atkgmgeywy-landscape.jpg",
        "https://indiaglitz-media.s3.amazonaws.com/telugu/home/12th-fail-review-1.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00323848-uwhyegleds-landscape.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00006184-gprrkscmbw-landscape.jpg"
    ]

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settingsMd}>
                    {
                        images.map((image) => (
                            <div className="w-full h-64 md:h-80 py-3">
                                <img src={image} alt="testing" className="w-full h-full rounded-md " />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {
                        images.map((image) => (
                            <div className="w-full h-96 px-2 py-3">
                                <img src={image} alt="testing" className="w-full h-full rounded-md border-black" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

        </>
    );
}

export default HeroCarousel;



