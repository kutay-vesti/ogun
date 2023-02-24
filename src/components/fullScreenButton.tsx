import React, { useState } from "react";

const FullscreenButton: React.FC = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleFullscreenToggle = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <button onClick={handleFullscreenToggle} className={`${isFullscreen ? "opacity-0 cursor-none" : "bg-red-200"}   absolute top-0 left-0 py-2`}>
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
    );
};

export default FullscreenButton;