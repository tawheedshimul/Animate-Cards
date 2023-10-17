import React, { useState, useRef } from 'react';

const ShakingCard = () => {
    const [isShaking, setIsShaking] = useState(false);
    const [isResetting, setIsResetting] = useState(false);
    const [value, setValue] = useState(5);
    const timeoutRef = useRef(null);

    const handleButtonClick = (isIncrement) => {
        clearTimeout(timeoutRef.current);

        // Delay the shake effect by 0.5 seconds after the button click
        timeoutRef.current = setTimeout(() => {
            setIsShaking(true);

            // Reset the shake effect after a brief duration
            setTimeout(() => {
                setIsShaking(false);
                setIsResetting(true);
                setTimeout(() => {
                    setIsResetting(false);
                }, 150); // Adjust the duration of the reset animation
            }, 50); // Adjust the duration of the shake animation
        }, 50); // Delay for 0.5 seconds

        if (isIncrement) {
            setValue(value + 1);
        } else {
            setValue(value - 1);
        }
    };

    const cardClassName = `bg-[#ffffffd7] rounded-lg w-1/2 mx-auto border border-gray-300 py-1 px-3 transform ${
        isShaking
            ? 'rotate-[.5deg]'
            : isResetting
            ? 'rotate-[-.5deg] transition-transform duration-50'
            : 'rotate-0'
    }`;

    return (
        <div className={cardClassName}>
            <h2 className="text-xs mb-1">Exchange Rate</h2>
            <div className="flex items-center justify-between">
                <button onClick={() => handleButtonClick(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="black" />
                        <line x1="4" y1="7.5" x2="11" y2="7.5" stroke="white" stroke-width="2" />
                    </svg>
                </button>
                <input
                    type='number'
                    value={value}
                    className='text-center outline-none w-full px-3'
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
                
                <button onClick={() => handleButtonClick(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="black" />
                        <line x1="2.5" y1="7.5" x2="12.5" y2="7.5" stroke="white" stroke-width="2" />
                        <line x1="7.5" y1="2.5" x2="7.5" y2="12.5" stroke="white" stroke-width="2" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ShakingCard;