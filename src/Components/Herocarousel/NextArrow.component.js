// NextArrow.component.js
import React from "react";

const NextArrow = (props) => {
    return (
        <div
            className={props.className}
            style={{ ...props.style, backgroundColor: "black" }}
            onClick={props.onClick}
        >
            <svg
                width="50" // Adjust the size as needed
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9 18L15 12L9 6"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default NextArrow;
