"use client";
import { use, ViewTransition } from 'react'
import { LangContext } from '@/contexts/LangContext';
import { dictionary } from '@/lib/dictionary';
import { Baby, Keyboard, Share2Icon, PocketKnife } from 'lucide-react';

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-example"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"
import bg from "@/public/speed_typer_.png"
import Image from 'next/image'
import styles from './styles/projects.module.css';

const Container = ({ className }) => {
	const { lang } = use(LangContext);
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
			className: 'row-start-2 lg:col-start-2 col-span-3 lg:col-span-2',
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
	];
    
    return (
		<BentoGrid
			style={{ _animation: 'scaleOutIn' }}
			className={'p-4 md:p-24 ' + className + ' ' + styles.container}
			id="projects">
			{features.map((feature, idx) => (
				<ViewTransition key={idx}>
					<BentoCard {...feature} />
				</ViewTransition>
			))}
		</BentoGrid>
	);
};
    
export default function Projects({ className }) {
	const skills = [
		{
			name: 'Front End',
			body: 'Je maîtrise parfaitement les technologies Front End et CSS et me tient constamment informé de leurs évolutions',
		},
		{
			name: 'Back End',
			body: 'Je maîtrise parfaitement les technologies Back End et me tient constamment informé de leurs évolutions',
		},
		{
			name: 'Full Stack',
			body: 'Je maîtrise parfaitement les technologies Full Stack et me tient constamment informé de leurs évolutions',
		},
		{
			name: 'Rédaction & Copywriting',
			body: 'Je maîtrise parfaitement les technologies Rédaction & Copywriting et me tient constamment informé de leurs évolutions',
		},
		{
			name: 'Traduction & SEO',
			body: 'Je maîtrise parfaitement les technologies Traduction & SEO et me tient constamment informé de leurs évolutions',
		},
	];

    return <Container className={className} />
}
