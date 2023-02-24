
import React, { useState } from 'react'


export default function Hzbutton({ hz }: { hz: number }) {




    const [isPlaying, setIsPlaying] = useState(false);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const handleMouseDown = (e) => {
        const button = e.target
        setIsPlaying(true);
        const audioContext = new AudioContext();
        const oscillator = audioContext.createOscillator();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(hz, audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        oscillator.start();
        button.oscillator = oscillator;

    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const handleMouseUp = (e) => {
        setIsPlaying(false);
        const button = e.target;
        const oscillator = button.oscillator;
        if (oscillator) {
            oscillator.stop();
            button.oscillator = null;
        }
    }



    return (
        <>
            <button
                className={` bg-white select-none bg-opacity-90 text-black rounded-3xl
                 text-2xl font-bold  py-4 px-8 flex items-center justify-center

                ${isPlaying ? "bg-gradient-to-r from-[#2e026d] to-[#15162c] text-white" : "bg-white text-black"}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onMouseOut={handleMouseUp}
            >
                <span>{hz} Hz</span>
            </button>
        </>

    )
}
