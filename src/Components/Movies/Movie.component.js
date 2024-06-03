import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.component";



export const Movie = () => {
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        InitialSlide: 0,
    };

    const PremierImages = [
        {
            src: 'https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
            alt: "Shershaah",
            title: "Shershaah",
            subtitle: "Hindi"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BNTc0MWIzMjYtMDg4Mi00YmM3LWIxNGUtYjQ5NzBlZTM3YWI2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
            alt: "83",
            title: "83",
            subtitle: "Hindi"
        },
        {
            src: 'https://media-cache.cinematerial.com/p/500x/ktl93hjn/sooryavanshi-indian-movie-poster.jpg?v=1617721588',
            alt: "Sooryavanshi",
            title: "Sooryavanshi",
            subtitle: "Hindi"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BZGI2MDk2NGEtNDcwZC00NmU5LTk5NmMtODE1NDRlMDFmODU2XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg',
            alt: "Atrangi Re",
            title: "Atrangi Re",
            subtitle: "Hindi"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BMWUyNzBjNmEtOGM2NS00NDg3LTkzYjEtM2ZkNjc0NTRlODBlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
            alt: "Tadap",
            title: "Tadap",
            subtitle: "Hindi"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BODA1ZTJjODQtNzZmYi00YThmLTg5N2MtODUwNGFiYjRkNzBlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
            alt: "Sanam Re",
            title: "Sanam Re",
            subtitle: "Hindi"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BNmY0MGIzYzktMGRlZC00ODEzLTlkMTMtZTJiZjc0ZjRhMDI0XkEyXkFqcGdeQXVyOTg0MTM1OTU@._V1_.jpg',
            alt: "Antim: The Final Truth",
            title: "Antim: The Final Truth",
            subtitle: "Hindi"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BODViODU5NDEtZGQwOS00OTAzLWIyNjQtNGU5ZmMxZjM5NTQ5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
            alt: "Satyameva Jayate 2",
            title: "Satyameva Jayate 2",
            subtitle: "Hindi"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BOWY0MzZkN2QtODI1MC00Nzg0LWE3YmUtNTNhMWU4YTFjOTA4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
            alt: "Bhuj: The Pride of India",
            title: "Bhuj: The Pride of India",
            subtitle: "Hindi"
        }
        
        
    ]

    return (
        <>
            <div className="pl-4 mb-1 mt-6">
            <p className="text-2xl font-bold mb-5 ">Recommended Movies</p>
            </div>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} />
                ))}
            </Slider>
        </>);
};








