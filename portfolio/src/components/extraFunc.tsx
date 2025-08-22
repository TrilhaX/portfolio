import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type TiltImageProps = {
    src: string;
    alt: string;
};

function TiltImage({ src, alt, style }: TiltImageProps) {
    const tiltRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.5,
            });
        }
    }, []);

    return (
        <img
            ref={tiltRef}
            src={src}
            alt={alt}
            className="w-72 rounded-2xl shadow-xl shadow-black dark:shadow-white"
            style={style}
        />
    );
}

export default TiltImage;