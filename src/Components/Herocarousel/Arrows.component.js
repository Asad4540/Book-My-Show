import React from "react";


const NextArrow = () => {
    return (
        <>
            <div
                className={props.className}
                style={{  ...props.style, backgroundColor: "black" }}
                onClick={props.onClick}
            />
        </>
    );
};


const PrevArrow = () => {
    return (
        <>
            <div
                className={props.className}
                style={{  ...props.style, backgroundColor: "black" }}
                onClick={props.onClick}
            />
        </>
    );
};