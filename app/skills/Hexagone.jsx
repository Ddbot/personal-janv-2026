"use client";

import { forwardRef, use } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
const SvgComponent = (props, ref) => {
    const { theme } = use(ThemeContext);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            ref={ref}
            {...props}>
            <defs>
                <filter
                    id="b"
                    width="400%"
                    height="400%"
                    x="-100%"
                    y="-100%"
                    colorInterpolationFilters="sRGB"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse">
                    <feGaussianBlur
                        width="100%"
                        height="100%"
                        x="0%"
                        y="0%"
                        in="SourceGraphic"
                        result="blur"
                        stdDeviation="17 8"
                    />
                </filter>
                <filter
                    id="c"
                    width="400%"
                    height="400%"
                    x="-100%"
                    y="-100%"
                    colorInterpolationFilters="sRGB"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse">
                    <feGaussianBlur
                        width="100%"
                        height="100%"
                        x="0%"
                        y="0%"
                        in="SourceGraphic"
                        result="blur"
                        stdDeviation="10 17"
                    />
                </filter>
                <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor={theme === 'light' ? "oklch(75.925% 0.13661 68.392)" : "#1B9388"} />
                    <stop offset="100%" stopColor={theme === 'light' ? "#F9F9F9" : "#072448"} />
                    <stop offset="101%" stopColor={theme === 'light' ? "#F9F9F9" : "#072448"} />
                </linearGradient>
            </defs>
            <g fill="none" stroke="url(#a)" strokeWidth={16}>
                <path
                    d="m400 0 400 200v400L400 800 0 600V200L400 0Z"
                    filter="url(#b)"
                />
                <path
                    d="m412 0 400 200v400L412 800 12 600V200L412 0Z"
                    filter="url(#c)"
                    opacity={0.25}
                />
                <path
                    d="m388 0 400 200v400L388 800-12 600V200L388 0Z"
                    filter="url(#c)"
                    opacity={0.25}
                />
                <path d="m400 0 400 200v400L400 800 0 600V200L400 0Z" />
            </g>
        </svg>
    );
}
const Hexagone = forwardRef(SvgComponent);
export default Hexagone;
