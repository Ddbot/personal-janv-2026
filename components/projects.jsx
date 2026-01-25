"use client";
import { use, useEffect, useRef, useState, ViewTransition } from 'react'
import { LangContext } from '@/contexts/LangContext';
// import { dictionary } from '@/lib/dictionary';
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
import ProjectsContactCardContent from './projects-contact-card-content';
import { useRouter } from 'next/navigation';
import { Geist_Mono } from 'next/font/google';

const geist = Geist_Mono({ subsets: ['latin'], weight: ['200','400'] })    

const Card = (props) => {
    return <BentoCard {...props} />;
}

const Empty = () => {
    return null
}

const Container = ({ className }) => {    
    const { lang } = use(LangContext);
    const ref = useRef(null);
    const containerRef = useRef(null);
    const tl = useRef(null);
    const router = useRouter();

    const dictionary = {
		fr: {
			cta: 'Plus de détails',
			hero: {
				intro: ['Développeur', ' Front End'],
				more: "Plus d'infos",
				contact: 'Contact',
				typing: ['Polyvalent', 'Curieux', 'Fiable', 'Team Player'],
			},
			features: {
				description: [
					'Des compétences diverses et variées',
					'Mesurez votre vitesse de frappe !',
					"Une app pour augmenter la productivité d'une content farm ",
					'Une app mobile pour suivre la croissance de bébé',
					'Ventes, partage, services: tout ce qui se passe dans votre rue',
					<ProjectsContactCardContent
						key="contact"
						className={cn(styles_bento.animate_messages)}
						fn={handleClick_}
						ref={ref}
					/>,
					'Si on se contactait ?',
				],
			},
			skills: [
				{
					name: 'Front End',
					description:
						'Je maîtrise parfaitement les technologies Front End et CSS et me tient constamment informé de leurs évolutions',
					time: 'depuis 9 ans',
					icon: '💸',
					color: '#00C9A7',
				},
				{
					name: 'Back End',
					description:
						'Je me suis familiarisé avec les technologies back-end et serveur. Mon parcours en développement web a débuté avec Ruby on Rails.',
					time: 'depuis 5 ans',
					icon: '👤',
					color: '#FFB800',
				},
				{
					name: 'Full Stack',
					description:
						"En tant que jeune entrepreneur, je me suis familiarisé avec les technologies SaaS, PostgreSQL, Firebase, les services Amazon, etc. Je suis toujours prêt à explorer de nouveaux domaines, et l'IA facilite grandement cette démarche.",
					time: 'depuis 5 ans',
					icon: '💬',
					color: '#FF3D71',
				},
				{
					name: 'Rédaction & Copywriting',
					description:
						"Je suis rédacteur-concepteur pour divers sites web spécialisés en technologie tels que Tom's Guide, 01Net ou Phonandroid.",
					time: 'depuis 15 ans',
					icon: '🗞️',
					color: '#1E86FF',
				},
				{
					name: 'Traduction & SEO',
					description:
						"J'ai travaillé dans le secteur de la traduction et j'ai l'habitude de traduire et/ou de rédiger du contenu technique.",
					time: 'depuis 15 ans',
					icon: '🗞️',
					color: '#1E86FF',
				},
			],
		},
		gb: {
			cta: 'More info',
			hero: {
				intro: ['Front End', ' Developer'],
				more: 'More info',
				contact: 'Contact',
				typing: ['Versatile', 'Curious', 'Reliable', 'Team Player'],
			},
			features: {
				description: [
					'A speed typing app to train your typing skills',
					'A broad skill set',
					'A productivity app to streamline production in a content farm',
					"A mobile app to monitor your baby's evolution",
					'Echanger, vendre, partager, se rendre service: tout ce qui se passe dans ma rue',
					<ProjectsContactCardContent
						key="contact"
						className={cn(styles_bento.animate_messages)}
						fn={handleClick_}
						ref={ref}
					/>,
					"Let's get in touch!",
				],
			},
			skills: [
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
		},
		de: {
			cta: 'Mehr Info',
			hero: {
				intro: ['Frontend-', 'Entwickler'],
				more: 'Mehr Info',
				contact: 'Kontakt',
				typing: [
					'Vielseitig',
					'Neugierig',
					'Zuverlässig',
					'Teamplayer',
				],
			},
			features: {
				description: [
					'Eine Schnellschreib-App zum Trainieren Ihrer Tippfähigkeiten',
					'Vielfältige Fähigkeiten',
					'Eine App, die die Produktivität einer Content-Farm verzehnfacht.',
					'Eine mobile App, die Ihnen hilft, die Entwicklung Ihres Babys zu überwachen',
					'Echanger, vendre, partager, se rendre service: tout ce qui se passe dans ma rue',
					<ProjectsContactCardContent
						key="contact"
						className={cn(styles_bento.animate_messages)}
						fn={handleClick_}
						ref={ref}
					/>,
					'Lass uns Kontakt aufnehmen!',
				],
			},
			skills: [
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
		},
	};    

    function handleClick(e) {
        e.preventDefault();
        
        const type = e.currentTarget.dataset.icon;

        const mm = gsap.matchMedia();

        mm.add("(max-width: 767px)", () => {
            router.push('/contact?type=' + type);
        })

        mm.add("(min-width: 768px)", () => {
            tl.current = gsap.timeline({
                defaults: {
                    duration: 0.1225,
                    ease: 'power2.out',
                },
                onComplete: () => {
                    router.push('/contact?type=' + type);
                },
            });

            const timeline = tl.current;

            gsap.set(containerRef.current, {
                transformOrigin: 'center center 0px',
                gridTemplateColumns: 'var(--col-width) var(--col-width) var(--col-width)',
                gridTemplateRows: 'var(--row-height) var(--row-height)',
                maxHeight: '44rem',
                placeContent: 'end center',
            });

            const otherCards = Array.from(containerRef.current.children);
            const contactCard = otherCards.pop();

            gsap.set(otherCards.at(0), { transformOrigin: 'top left' });
            gsap.set(otherCards.at(1), { transformOrigin: '<bottom right' });
            gsap.set(otherCards.at(2), { transformOrigin: 'bottom left' });
            gsap.set(otherCards.at(3), { transformOrigin: 'top right' });
            gsap.set(otherCards.at(4), { transformOrigin: 'top center' });
            gsap.set(contactCard, {
                transformOrigin: 'top center 0px',
                alignSelf: 'stretch',
                maxHeight: '44rem',
            });

            timeline
                .to(
                    containerRef.current,
                    {
                        gridTemplateColumns: '0fr 1fr 0fr',
                        gridTemplateRows: '0fr 44rem',
                        ease: 'power2.out',
                        gap: 0,
                    },
                    '<',
                )
                .to(
                    otherCards,
                    {
                        scale: 0,
                        opacity: 0,
                        padding: 0,
                        margin: 0,
                        borderWidth: 0,
                    },
                    '<',
                )
                .to(
                    contactCard.querySelectorAll('button'),
                    {
                        duration: .125,
                        opacity: 0,
                    },
                    '<',
                );
        });
    }

function handleClick_(e) {
	e.preventDefault();
	const type = e.currentTarget.dataset.icon;
	router.push('/contact?type=' + type);
}    

    
    
    const features = [
		{
			Icon: PocketKnife,
			name: 'Skills',
			description: dictionary[lang]['features']['description'][0],
			href: '/skills',
			cta: dictionary[lang]['cta'],
			className: 'col-span-3 lg:col-span-1',
			background: (
				<Marquee
					pauseOnHover
					className="absolute top-[50%] lg:top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]">
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
                <div className="relative">
                    <Image
                        src={bg}
                        alt="speed typer"
                        className={styles.speed_typer_image}
					// className="absolute top-[25%] lg:-top-8 lg:right-2 w-full scale-75 border-none mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
				/>
				</div>
			),
		},
		{
			Icon: Share2Icon,
			name: 'Trello <=> Google Apps',
			description: dictionary[lang]['features']['description'][2],
			href: '/blog/api-google-drive-trello-supabase',
			cta: dictionary[lang]['cta'],
			className: 'col-span-3 lg:col-span-1 lg:col-start-1 lg:row-start-2',
			background: (
				<AnimatedBeamMultipleOutputDemo className="absolute left-0 right-0 top-4 lg:right-2 h-auto border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
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
				ref={containerRef}
				className={cn(
                    styles_bento.container,
                    geist.className
					// 'lg:p-32 lg:pb-0',
				)}
				id="projects">
				{features.map((feature, idx) => (
					<ViewTransition key={idx}>
						<Card
							{...feature}
							className={cn(
								styles.card,
								feature.className,
								// 'h-dvh lg:h-auto lg:max-h-[44rem] lg:gap-0 m-4 lg:m-0 lg:aspect-auto',
							)}
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
