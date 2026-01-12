"use client";
import { use, useEffect, useRef, useState, ViewTransition } from 'react'
import { LangContext } from '@/contexts/LangContext';
import { dictionary } from '@/lib/dictionary';
import {
	Baby,
	Keyboard,
	Share2Icon,
	PocketKnife,
	MapPinHouse,
} from 'lucide-react';

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-example"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"

import bg from "@/public/speed_typer.png"
import Image from 'next/image'
import styles from './styles/projects.module.css';
import styles_bento from './styles/bento-grid.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Card = (props) => {
    return <BentoCard {...props} />;
}

const Empty = () => {
    return null
}

const Container = ({ className }) => {    
    const { lang } = use(LangContext);
    const ref = useRef(null);
    
    useGSAP(() => { 
        const q = gsap.utils.selector(ref);
        // gsap.to(ref.current, { duration: 1, scale: .85 });
    }, { scope: ref });
    
    const features = [
		{
			Icon: PocketKnife,
			name: 'Skills',
			description: dictionary[lang]['features']['description'][0],
			href: '#',
			cta: dictionary[lang]['cta'],
			className: 'col-span-3 lg:col-span-1',
			background: (
				<Marquee
					pauseOnHover
					className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]">
					{dictionary[lang]['skills'].map((f, idx) => (
						<figure
							key={idx}
							style={{ backgroundColor: f.color }}
							className={cn(
								'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
								'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
								'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
								'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none',
							)}
							onClick={() => console.log(f.description)}>
							<div className="flex flex-row items-center gap-2">
								<div className="flex flex-col">
									<figcaption className="text-sm font-medium dark:text-white">
										{f.name}
									</figcaption>
								</div>
							</div>
							<blockquote className="mt-2 text-xs">
								{f.description}
							</blockquote>
						</figure>
					))}
				</Marquee>
			),
		},
		{
			Icon: Keyboard,
			name: 'Speed Typer',
			description: dictionary[lang]['features']['description'][1],
			href: '/speed-typer',
			cta: dictionary[lang]['cta'],
			className: 'row-start-2 lg:col-start-3 col-span-3 lg:col-span-1',
			background: (
				// <SpeedTyperContainer className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
				<Image
					src={bg}
					alt="speed typer"
					className="absolute -top-8 right-2 w-full scale-75 border-none mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
				/>
			),
		},
		{
			Icon: Share2Icon,
			name: 'Trello to Google Apps Script',
			description: dictionary[lang]['features']['description'][2],
			href: '/blog/api-google-drive-trello-supabase',
			cta: dictionary[lang]['cta'],
			className: 'col-span-3 lg:col-span-1 lg:col-start-1 lg:row-start-2',
			background: (
				<AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
			),
		},
		{
			Icon: Baby,
			name: 'Baby Log',
			description: dictionary[lang]['features']['description'][3],
			className: 'col-span-3 lg:col-span-1 lg:col-start-3',
			href: '#',
			cta: dictionary[lang]['cta'],
			background: (
				<Calendar
					mode="single"
					selected={new Date(2022, 4, 11, 0, 0, 0)}
					className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
				/>
			),
		},
		{
			Icon: MapPinHouse,
			name: 'Ma Rue',
			description: dictionary[lang]['features']['description'][4],
			className: 'col-span-3 lg:col-span-1 lg:col-start-2 lg:row-start-1',
			href: '#',
			cta: dictionary[lang]['cta'],
			background: <span></span>,
		},
		{
			Icon: Empty,
			name: '',
			description: dictionary[lang]['features']['description'][5],
			className: styles.contact,
			href: '#',
			cta: dictionary[lang]['cta'],
			background: (
				<div
					style={{
						position: 'absolute',
						inset: 0,
					}}
					className="flex items-center justify-center w-full h-full bg-primary">
					CONTACT
				</div>
            ),            
		},
	];
    
    return (
		<BentoGrid
			// style={{ _animation: 'scaleOutIn' }}
			// className={`p-4 md:p-24 ${styles.container}`}
			className={styles_bento.container}
			id="projects"
			ref={ref}>
			{features.map((feature, idx) => (
				<ViewTransition key={idx}>
					<Card
						{...feature}
						className={styles.card + ' ' + feature.className}
					/>
				</ViewTransition>
			))}
		</BentoGrid>
	);
};
    
export default function Projects({ className }) {
    return <Container className={className} />
}

export { Empty };
