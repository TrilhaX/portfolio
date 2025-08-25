import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export type TiltImageProps = {
    src: string;
    alt: string;
    style?: React.CSSProperties;
    id?: string;
};

export function TiltImage({ src, alt, style, id }: TiltImageProps) {
    const tiltRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const node = tiltRef.current;
        if (node) {
            VanillaTilt.init(node, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.5,
            });
        }
        return () => {
            if (node && (node as any).vanillaTilt) {
                (node as any).vanillaTilt.destroy();
            }
        };
    }, []);

    return (
        <img
            ref={tiltRef}
            src={src}
            alt={alt}
            id={id}
            className="w-72 rounded-2xl shadow-xl shadow-black dark:shadow-white transition-all duration-300"
            style={style}
        />
    );
}

export function handleThemeChange(): void {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");

    const applyFilter = (selector: string, filter: string): void => {
        document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
            if (el.id === "github-icon") {
                return;
            } else {
                el.style.filter = filter;
            }
        });
    };

    if (isDark) {
        html.style.filter = "invert(1) hue-rotate(180deg)";
        applyFilter(
            "img, video, svg, .slider-emoji-light, .slider-emoji-afternoon, .slider-emoji-dark",
            "invert(1) hue-rotate(180deg)"
        );
        applyFilter(".slider", "invert(0) hue-rotate(0deg)");
    } else {
        html.style.filter = "invert(0) hue-rotate(0deg)";
        applyFilter(
            "img, video, svg, .slider-emoji-light, .slider-emoji-afternoon, .slider-emoji-dark",
            "invert(0) hue-rotate(0deg)"
        );
        applyFilter(".slider", "invert(0) hue-rotate(0deg)");
    }

    localStorage.setItem("darkMode", isDark ? "true" : "false");
}