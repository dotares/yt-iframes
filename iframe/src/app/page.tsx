"use client";

import { useRef } from "react";

export default function Home() {
    const ref = useRef(null);

    const pauseVideo = () => {
        ref.current.contentWindow.postMessage(
            '{"event":"command","func":"' + "pauseVideo" + '","args":""}'
        );
    };

    return (
        <div>
            <iframe
                id="ytplayer"
                // type="text/html"
                width="1000"
                height="1000"
                src="https://www.youtube.com/embed/SR6iYWJxHqs"
                ref={ref}
            ></iframe>
            <button
                onClick={() => {
                    pauseVideo();
                }}
            >
                pause
            </button>
        </div>
    );
}
