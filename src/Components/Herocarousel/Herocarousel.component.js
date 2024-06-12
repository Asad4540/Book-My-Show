import React from "react";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settingsMd = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<nextArrow/>,
        prevArrow:<prevArrow/>
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
        nextArrow:<nextArrow/>,
        prevArrow:<prevArrow/>
    };

    const images = [
        "https://miro.medium.com/v2/resize:fit:1400/1*Subc1iyVVKLRT-Wolmj_-A.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09NSaUdZZJw3V6g5FCoHNplXi-VVPkQXiIg&s",
        "https://static.toiimg.com/photo/msid-65673119/65673119.jpg",
        "https://www.bollywoodhungama.com/wp-content/uploads/2017/04/Half-Girlfriend-1-9.jpg",
        "https://c8.alamy.com/comp/F762X7/indian-bollywood-hindi-film-movie-poster-of-ek-tha-tiger-F762X7.jpg",
        "https://indiaglitz-media.s3.amazonaws.com/telugu/home/12th-fail-review-1.jpg"
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











































































