import React from 'react';

const Button = ({ bgColor, content, textColor }) => {
    return (
        <button
            style={{
                backgroundColor: `${bgColor}`,
                color: `${textColor}`
            }}
            onMouseOver={(e) => {
                if (bgColor) {
                    e.target.style.backgroundColor = "#000";
                }
            }}

            onMouseLeave={(e) => {
                if (bgColor) {
                    e.target.style.backgroundColor = bgColor;
                }
            }}
            className={`text-white rounded-full py-2 px-6 transition-colors`}
        >
            {content}
        </button>
    );
}

export default Button;
