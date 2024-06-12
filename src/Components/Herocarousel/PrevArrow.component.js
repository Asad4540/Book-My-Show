// PrevArrow.component.js
import React from "react";

const PrevArrow = (props) => {
    return (
        <div
            className={props.className}
            style={{ ...props.style, backgroundColor: "transparent" }}
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
                    d="M15 18L9 12L15 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default PrevArrow;
