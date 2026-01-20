'use client';
import { use, ViewTransition } from 'react';
import { LangContext } from '@/contexts/LangContext';
import { ThemeContext } from '@/contexts/ThemeContext';
import { dictionary } from '@/lib/dictionary';
import { Baby, Keyboard, Share2Icon, PocketKnife } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import AnimatedBeamMultipleOutputDemo from '@/components/animated-beam-example';
import AnimatedListDemo from '@/components/animated-list-demo';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { Marquee } from '@/components/ui/marquee';
import styles_bento from '../../components/styles/bento-grid.module.css';


export default function Skills() {
	const { lang } = use(LangContext);
    // const { theme } = use(ThemeContext);
    const dictionary = {
		fr: [
			{
				name: 'Front End',
				description:
					'Je maîtrise parfaitement les technologies Front End et CSS et me tient constamment informé de leurs évolutions',
				time: 'depuis 9 ans',
				icon: '💸',
				color: '#00C9A780',
			},
			{
				name: 'Back End',
				description:
					'Je me suis familiarisé avec les technologies back-end et serveur. Mon parcours en développement web a débuté avec Ruby on Rails.',
				time: 'depuis 5 ans',
				icon: '👤',
				color: '#FFB80080',
			},
			{
				name: 'Full Stack',
				description:
					"En tant que jeune entrepreneur, je me suis familiarisé avec les technologies SaaS, PostgreSQL, Firebase, les services Amazon, etc. Je suis toujours prêt à explorer de nouveaux domaines, et l'IA facilite grandement cette démarche.",
				time: 'depuis 5 ans',
				icon: '💬',
				color: '#FF3D7180',
			},
			{
				name: 'Rédaction & Copywriting',
				description:
					"Je suis rédacteur-concepteur pour divers sites web spécialisés en technologie tels que Tom's Guide, 01Net ou Phonandroid.",
				time: 'depuis 15 ans',
				icon: '🗞️',
				color: '#1E86FF00',
				className:
					'dark:text-white border-2 border-chart-4 lg:col-start-3 lg:col-end-4',
			},
			{
				name: 'Traduction & SEO',
				description:
					"J'ai travaillé dans le secteur de la traduction et j'ai l'habitude de traduire et/ou de rédiger du contenu technique.",
				time: 'depuis 15 ans',
				icon: '🗞️',
                color: '#1E86FF80',
                className: 'dark:text-white lg:col-start-2 lg:col-end-3 lg:row-start-2',
			},
		],
		gb: [
			{
				name: 'Front End',
				description:
					'I master perfectly the Front End technologies and keep myself constantly informed of their evolutions',
				time: '9y ago',
				icon: '🗞️',
				color: '#1E86FF',
			},
			{
				name: 'Back End',
				description:
					'I have accustomed myself to Back End & server technologies. My journey in web dev has begun with Ruby on Rails.',
				time: '5y ago',
				icon: '🗞️',
				color: '#1E86FF',
			},
			{
				name: 'Full Stack',
				description:
					'As a budding entrepreneur, I have had to learn abour SaaS, PostGresQL, Firebase, Amazon Services and such. I am always willing to explore new domains, and AI makes this endeavour even easier.',
				time: '5y ago',
				icon: '🗞️',
				color: '#1E86FF',
			},
			{
				name: 'Editing & Copywriting',
				description:
					"I've long been an Editor Copywriter for various Tech web sites such as Tom's Guide, 01Net or Phonandroid.",
				time: '15y ago',
				icon: '🗞️',
				color: '#1E86FF',
			},
			{
				name: 'Translation & SEO',
				description:
					"I've worked in the Translation sector and I'm used to translating and/or writing technical content.",
				time: '15y ago',
				icon: '🗞️',
				color: '#1E86FF',
			},
		],
		de: [
			{
				name: 'Front End',
				description:
					'Ich beherrsche Front-End-Technologien perfekt und halte mich ständig über deren Weiterentwicklung auf dem Laufenden.',
				time: 'vor 9 Jahren',
				icon: '🗞️',
				color: '#1E86FF',
			},
			{
				name: 'Back End',
				description:
					'Ich habe mich mit Backend- und Servertechnologien vertraut gemacht. Meine Reise in der Webentwicklung begann mit Ruby on Rails.',
				time: 'vor 5 Jahren',
				icon: '🗞️',
				color: '#1E86FF',
			},
			{
				name: 'Full Stack',
				description:
					'Als angehender Unternehmer musste ich mich mit SaaS, PostgreSQL, Firebase, Amazon-Diensten und ähnlichem auseinandersetzen. Ich bin stets offen für neue Herausforderungen, und KI erleichtert mir diesen Weg zusätzlich.',
				time: 'vor 5 Jahren',
				icon: '🗞️',
				color: '#1E86FF',
			},
			{
				name: 'Editing & Copywriting',
				description:
					"Ich bin seit langer Zeit als Texter für verschiedene Tech-Websites wie Tom's Guide, 01Net oder Phonandroid tätig.",
				time: 'vor 15 Jahren',
				icon: '🗞️',
				color: '#1E86FF',
			},
			{
				name: 'Translation & SEO',
				description:
					"Ich bin seit langer Zeit als Texter für verschiedene Tech-Websites wie Tom's Guide, 01Net oder Phonandroid tätig.",
				time: 'vor 15 Jahren',
				icon: '🗞️',
				color: '#1E86FF',
			},
		],
	};   

	return (
		<BentoGrid
			className={cn(
				styles_bento.container,
				'lg:p-32 lg:pb-0 lg:m-0 lg:scale-85',
			)}>
			{/* <Marquee
				pauseOnHover
				className="absolute top-[50%] lg:top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"> */}
			<ViewTransition>
				{dictionary[lang].map((f, idx) => (
					<figure
						key={idx}
						style={{ backgroundColor: f.color }}
						className={cn(
							'w-full h-full flex flex-row flex-wrap align-start rounded-xl p-8',
                            f.className,                            
						)}
						// className={cn(
						// 	'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
						// 	'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
						// 	'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
						// 	'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none',
						// )}

						onClick={() => console.log(f.description)}>
						<div className="flex flex-row items-start gap-4 lg:h-[10dvh]">
							<div className="flex flex-col">
								<figcaption className="text-xl font-medium dark:text-white">
									{f.name}
								</figcaption>
							</div>
						</div>
						<blockquote className="mt-2 text-md">
							{f.description}
						</blockquote>
					</figure>
				))}
			</ViewTransition>
			{/* </Marquee> */}
		</BentoGrid>
	);
}
