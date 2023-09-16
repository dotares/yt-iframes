"use client";

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    return (
        <>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=SR6iYWJxHqs"
                width="1000px"
                height="1000px"
                className="player"
                playing={isPlaying}
                ref={ref}
            />
            <button
                onClick={() => {
                    setIsPlaying(true);
                }}
            >
                Play
            </button>
            <button
                onClick={() => {
                    setIsPlaying(false);
                }}
            >
                Pause
            </button>
            <button onClick={() => {}}>Stop</button>
            <button
                onClick={() => {
                    console.log(ref.current.getDuration());
                }}
            >
                Get Duration
            </button>
        </>
    );
}
