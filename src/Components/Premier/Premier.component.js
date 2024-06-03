import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.component";



export const Premier = () => {
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        InitialSlide: 0,
    };

    const PremierImages = [
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397579-hfnmhnhwae-portrait.jpg',
            alt: "Endeavour",
            title: "Endeavour S4",
            subtitle: "English"
        },
        {
            src: ' https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00391796-xqqnjyqykr-portrait.jpg',
            alt: "Blind",
            title: "The Blind",
            subtitle: "English"
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00398966-urhdanvjab-portrait.jpg',
            alt: "Jules",
            title: "Jules",
            subtitle: "English"
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00396946-talzlpzjea-portrait.jpg',
            alt: "Skins",
            title: "Skins",
            subtitle: "English"
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00392593-ceympcpbag-portrait.jpg',
            alt: "The boys",
            title: "The Boys",
            subtitle: "Tamil"
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399062-jpggjbhrzz-portrait.jpg',
            alt: "Green",
            title: "Green Borer",
            subtitle: "Polish"
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399151-pllzggsjst-portrait.jpg',
            alt: "Luna",
            title: "Lunana",
            subtitle: "japansese"
        },
    ]

    return (
        <>
            <div className="pl-4 mb-1">
            <p className="text-3xl font-bold text-slate-50">Premieres</p>
            <p className=" text-slate-50">Brand new realses every Friday</p>
            </div>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} isDarkMode={true} />
                ))}
            </Slider>
        </>);
};








