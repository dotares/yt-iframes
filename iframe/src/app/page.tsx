"use client";

import { useEffect, useRef } from "react";

export default function Home() {
    const videoRef = useRef(null);

    const pauseVideo = () => {
        videoRef.current.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
        );
    };
    const playVideo = () => {
        videoRef.current.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
        );
    };

    const seekTo = (timeStamp: number) => {
        videoRef.current.contentWindow.postMessage(
            `{"event":"command","func":"seekTo","args":[${timeStamp}, true]}`,
            "*"
        );
    };

    const getDuration = () => {
        videoRef.current.contentWindow.postMessage(
            `{"event":"command","func":"getDuration","args":""}`,
            "*"
        );
    };

    return (
        <div>
            <iframe
                id="ytplayer"
                width="1000"
                height="1000"
                src="https://www.youtube.com/embed/SR6iYWJxHqs?enablejsapi=1"
                // allow autoplay for fixing autoplay bug for playVideo function
                allow="autoplay"
                ref={videoRef}
            ></iframe>
            <button
                onClick={() => {
                    pauseVideo();
                }}
            >
                pause
            </button>
            <button
                onClick={() => {
                    playVideo();
                }}
            >
                play
            </button>
            <button
                onClick={() => {
                    seekTo(20);
                }}
            >
                seek to
            </button>
            <button
                onClick={() => {
                    console.log(getDuration());
                }}
            >
                get duration
            </button>
        </div>
    );
}
