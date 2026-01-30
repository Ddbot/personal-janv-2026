import { forwardRef, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SvgComponent = ({ className, ...props }: { className: string }, ref: React.Ref<SVGSVGElement>) => {
  return (
	true ? null : <svg
		xmlns="http://www.w3.org/2000/svg"
		// width={800}
		// height={800}
		viewBox="0 0 800 800"
		ref={ref}
		{...props}
		className={className}>
		<defs>
			<clipPath id="pattern-clipPath" filter='url(#blurX)'>
				{/* <rect width="100%" height="100%" fill="white" /> */}
				<circle cx={400} cy={400} r={400} fill="black" />
            </clipPath>
            <filter id="neopan">
                <feColorMatrix type="matrix" values="
                0.5 0.44 0.1 0 -.02
                0.5 0.44 0.1 0 -.02
                0.5 0.44 0.1 0 -.02
                0 0 0 1 0" />
                    <feComponentTransfer>
                    <feFuncR type="linear" slope="1" intercept="-0.02" />
                    <feFuncG type="linear" slope="1" intercept="-0.02" />
                    <feFuncB type="linear" slope="1" intercept="-0.02" />
                </feComponentTransfer>
            </filter>
            <filter id="blurX">
                <feGaussianBlur stdDeviation="12 20">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.85"
                        numOctaves="1"
                        stitchTiles="stitch" />
                </feGaussianBlur>
            </filter>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
                <feColorMatrix
                    in="blur"
                    values="1 0 0 0 0 
                            0 1 0 0 0 
                            0 0 1 0 0 
                            0 0 0 30 -7"
                />
                </filter>
			<style>{'circle{fill:#87345e;stroke:none}'}</style>
		</defs>
		<g
			fill="none"
			stroke="#87345e"
			strokeWidth={3.5}
			// clipPath="url(#pattern-clipPath)"
			filter="url(#blurX)">
			<circle r={7.237} opacity={0.35} />
			<circle cx={66.667} r={7.237} opacity={0.35} />
			<circle cx={133.333} r={7.237} opacity={0.35} />
			<circle cx={200} r={7.237} opacity={0.35} />
			<circle cx={266.667} r={7.237} opacity={0.35} />
			<circle cx={333.333} r={7.237} opacity={0.35} />
			<circle cx={400} r={7.237} opacity={0.35} />
			<circle cx={466.667} r={7.237} opacity={0.35} />
			<circle cx={533.333} r={7.237} opacity={0.35} />
			<circle cx={600} r={7.237} opacity={0.35} />
			<circle cx={666.667} r={7.237} opacity={0.35} />
			<circle cx={733.333} r={7.237} opacity={0.35} />
			<circle cx={800} r={7.237} opacity={0.35} />
			<circle cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={133.333} cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={200} cy={66.667} r={7.237} />
			<circle cx={266.667} cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={333.333} cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={400} cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={466.667} cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={533.333} cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={600} cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={666.667} cy={66.667} r={7.237} />
			<circle cx={733.333} cy={66.667} r={7.237} opacity={0.35} />
			<circle cx={800} cy={66.667} r={7.237} opacity={0.35} />
			<circle cy={133.333} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={133.333} r={7.237} />
			<circle cx={133.333} cy={133.333} r={7.237} opacity={0.35} />
			<circle cx={200} cy={133.333} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={133.333} r={7.237} opacity={0.35} />
			<circle cx={333.333} cy={133.333} r={7.237} opacity={0.35} />
			<circle cx={400} cy={133.333} r={7.237} opacity={0.35} />
			<circle cx={466.667} cy={133.333} r={7.237} />
			<circle cx={533.333} cy={133.333} r={7.237} />
			<circle cx={600} cy={133.333} r={7.237} opacity={0.35} />
			<circle cx={666.667} cy={133.333} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={133.333} r={7.237} opacity={0.35} />
			<circle cx={800} cy={133.333} r={7.237} opacity={0.35} />
			<circle cy={200} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={200} r={7.237} opacity={0.35} />
			<circle cx={133.333} cy={200} r={7.237} opacity={0.35} />
			<circle cx={200} cy={200} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={200} r={7.237} opacity={0.35} />
			<circle cx={333.333} cy={200} r={7.237} opacity={0.35} />
			<circle cx={400} cy={200} r={7.237} />
			<circle cx={466.667} cy={200} r={7.237} opacity={0.35} />
			<circle cx={533.333} cy={200} r={7.237} opacity={0.35} />
			<circle cx={600} cy={200} r={7.237} />
			<circle cx={666.667} cy={200} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={200} r={7.237} />
			<circle cx={800} cy={200} r={7.237} opacity={0.35} />
			<circle cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={266.667} r={7.237} />
			<circle cx={133.333} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={200} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={333.333} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={400} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={466.667} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={533.333} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={600} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={666.667} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={266.667} r={7.237} opacity={0.35} />
			<circle cx={800} cy={266.667} r={7.237} opacity={0.35} />
			<circle cy={333.333} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={333.333} r={7.237} />
			<circle cx={133.333} cy={333.333} r={7.237} opacity={0.35} />
			<circle cx={200} cy={333.333} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={333.333} r={7.237} />
			<circle cx={333.333} cy={333.333} r={7.237} opacity={0.35} />
			<circle cx={400} cy={333.333} r={7.237} opacity={0.35} />
			<circle cx={466.667} cy={333.333} r={7.237} />
			<circle cx={533.333} cy={333.333} r={7.237} opacity={0.35} />
			<circle cx={600} cy={333.333} r={7.237} opacity={0.35} />
			<circle cx={666.667} cy={333.333} r={7.237} />
			<circle cx={733.333} cy={333.333} r={7.237} opacity={0.35} />
			<circle cx={800} cy={333.333} r={7.237} opacity={0.35} />
			<circle cy={400} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={400} r={7.237} opacity={0.35} />
			<circle cx={133.333} cy={400} r={7.237} opacity={0.35} />
			<circle cx={200} cy={400} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={400} r={7.237} opacity={0.35} />
			<circle cx={333.333} cy={400} r={7.237} />
			<circle cx={400} cy={400} r={7.237} />
			<circle cx={466.667} cy={400} r={7.237} opacity={0.35} />
			<circle cx={533.333} cy={400} r={7.237} opacity={0.35} />
			<circle cx={600} cy={400} r={7.237} opacity={0.35} />
			<circle cx={666.667} cy={400} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={400} r={7.237} />
			<circle cx={800} cy={400} r={7.237} opacity={0.35} />
			<circle cy={466.667} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={466.667} r={7.237} opacity={0.35} />
			<circle cx={133.333} cy={466.667} r={7.237} />
			<circle cx={200} cy={466.667} r={7.237} />
			<circle cx={266.667} cy={466.667} r={7.237} opacity={0.35} />
			<circle cx={333.333} cy={466.667} r={7.237} />
			<circle cx={400} cy={466.667} r={7.237} />
			<circle cx={466.667} cy={466.667} r={7.237} opacity={0.35} />
			<circle cx={533.333} cy={466.667} r={7.237} />
			<circle cx={600} cy={466.667} r={7.237} />
			<circle cx={666.667} cy={466.667} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={466.667} r={7.237} opacity={0.35} />
			<circle cx={800} cy={466.667} r={7.237} opacity={0.35} />
			<circle cy={533.333} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={533.333} r={7.237} opacity={0.35} />
			<circle cx={133.333} cy={533.333} r={7.237} />
			<circle cx={200} cy={533.333} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={533.333} r={7.237} opacity={0.35} />
			<circle cx={333.333} cy={533.333} r={7.237} />
			<circle cx={400} cy={533.333} r={7.237} />
			<circle cx={466.667} cy={533.333} r={7.237} />
			<circle cx={533.333} cy={533.333} r={7.237} opacity={0.35} />
			<circle cx={600} cy={533.333} r={7.237} opacity={0.35} />
			<circle cx={666.667} cy={533.333} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={533.333} r={7.237} opacity={0.35} />
			<circle cx={800} cy={533.333} r={7.237} opacity={0.35} />
			<circle cy={600} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={600} r={7.237} opacity={0.35} />
			<circle cx={133.333} cy={600} r={7.237} />
			<circle cx={200} cy={600} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={600} r={7.237} />
			<circle cx={333.333} cy={600} r={7.237} opacity={0.35} />
			<circle cx={400} cy={600} r={7.237} opacity={0.35} />
			<circle cx={466.667} cy={600} r={7.237} />
			<circle cx={533.333} cy={600} r={7.237} opacity={0.35} />
			<circle cx={600} cy={600} r={7.237} opacity={0.35} />
			<circle cx={666.667} cy={600} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={600} r={7.237} opacity={0.35} />
			<circle cx={800} cy={600} r={7.237} opacity={0.35} />
			<circle cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={133.333} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={200} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={333.333} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={400} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={466.667} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={533.333} cy={666.667} r={7.237} />
			<circle cx={600} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={666.667} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={666.667} r={7.237} opacity={0.35} />
			<circle cx={800} cy={666.667} r={7.237} opacity={0.35} />
			<circle cy={733.333} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={733.333} r={7.237} opacity={0.35} />
			<circle cx={133.333} cy={733.333} r={7.237} opacity={0.35} />
			<circle cx={200} cy={733.333} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={733.333} r={7.237} />
			<circle cx={333.333} cy={733.333} r={7.237} opacity={0.35} />
			<circle cx={400} cy={733.333} r={7.237} opacity={0.35} />
			<circle cx={466.667} cy={733.333} r={7.237} />
			<circle cx={533.333} cy={733.333} r={7.237} opacity={0.35} />
			<circle cx={600} cy={733.333} r={7.237} />
			<circle cx={666.667} cy={733.333} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={733.333} r={7.237} opacity={0.35} />
			<circle cx={800} cy={733.333} r={7.237} opacity={0.35} />
			<circle cy={800} r={7.237} opacity={0.35} />
			<circle cx={66.667} cy={800} r={7.237} opacity={0.35} />
			<circle cx={133.333} cy={800} r={7.237} opacity={0.35} />
			<circle cx={200} cy={800} r={7.237} opacity={0.35} />
			<circle cx={266.667} cy={800} r={7.237} opacity={0.35} />
			<circle cx={333.333} cy={800} r={7.237} opacity={0.35} />
			<circle cx={400} cy={800} r={7.237} opacity={0.35} />
			<circle cx={466.667} cy={800} r={7.237} opacity={0.35} />
			<circle cx={533.333} cy={800} r={7.237} opacity={0.35} />
			<circle cx={600} cy={800} r={7.237} opacity={0.35} />
			<circle cx={666.667} cy={800} r={7.237} opacity={0.35} />
			<circle cx={733.333} cy={800} r={7.237} opacity={0.35} />
			<circle cx={800} cy={800} r={7.237} opacity={0.35} />
		</g>
	</svg>
  );
};
    
const PatternComponent = forwardRef(SvgComponent);
export default PatternComponent;
