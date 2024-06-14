import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.component";



export const HollywoodMovies = () => {
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        InitialSlide: 0,
    };

    const PremierImages = [
        {
            src: 'https://m.media-amazon.com/images/I/61G3TAFVdSL._AC_UF1000,1000_QL80_.jpg',
            alt: "Dune",
            title: "Dune",
            subtitle: "English"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
            alt: "No Time to Die",
            title: "No Time to Die",
            subtitle: "English"
        },
        {
            src: 'https://m.media-amazon.com/images/I/81i9V1jlCsL.jpg',
            alt: "Spider-Man: No Way Home",
            title: "Spider-Man: No Way Home",
            subtitle: "English"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
            alt: "The Matrix Resurrections",
            title: "The Matrix Resurrections",
            subtitle: "English"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
            alt: "Eternals",
            title: "Eternals",
            subtitle: "English"
        },
        {
            src: 'https://lumiere-a.akamaihd.net/v1/images/p_20cs_thefrenchdispatch_22167_94874d03.jpeg',
            alt: "The French Dispatch",
            title: "The French Dispatch",
            subtitle: "English"
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKFlQ21Y0VIDebSQ8kTwluN1zANEgNQMU5bNYUKL0aKE5JWWADaH8FozMvile9p5pKeQ&usqp=CAU',
            alt: "House of Gucci",
            title: "House of Gucci",
            subtitle: "English"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BYTcyNmY4ZGEtYmE4Zi00ZDViLTlmYzMtMmQ4ZTM4OWNmZjQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            alt: "King Richard",
            title: "King Richard",
            subtitle: "English"
        },
        {
            src: 'https://m.media-amazon.com/images/M/MV5BMTVkNmVlYzItMjNkYy00MGE0LTk4MmQtOTFmNTUyYzg2NGEzXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_FMjpg_UX1000_.jpg',
            alt: "Ghostbusters: Afterlife",
            title: "Ghostbusters: Afterlife",
            subtitle: "English"
        }




    ]

    return (
        <>
            <div className="pl-4 mb-1 mt-6">
                <p className="text-2xl font-bold mb-5 ">Hollywood Movies</p>
            </div>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} />
                ))}
            </Slider>
        </>
    );
};









