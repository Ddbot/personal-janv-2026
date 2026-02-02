'use client';
import { Fragment, use, useRef, ViewTransition } from 'react';
import { LangContext } from '@/contexts/LangContext';
import { ThemeContext } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { BentoGrid } from '@/components/ui/bento-grid';
import styles from './styles.module.css';
import Image from 'next/image';
import { cards_palette } from '@/lib/constants';
import { Geist_Mono } from 'next/font/google';
import Hexagone from './Hexagone';

const geistMono = Geist_Mono({
	weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
	subsets: ['latin'],
	variable: '--font-mono',
});


export default function Skills() {
    const { lang } = use(LangContext); 
    const { theme } = use(ThemeContext);
    const ref = useRef(null);
    const tlRef = useRef(null);  

    const dictionary = {
		fr: [
			{
				name: 'Front End',
				description:
					'Maîtrise des technologies Front End et CSS et me tient constamment informé de leurs évolutions',
				time: 'depuis 9 ans',
				icon: '💸',
				color: cards_palette[theme][0],
				className: '',
			},
			{
				name: 'Back End',
				description:
					"J'utilise fréquemment les technologies back-end et serveur. ",
				time: 'depuis 5 ans',
				icon: '👤',
				color: cards_palette[theme][1],
				className: '',
			},
			{
				name: 'Full Stack',
				description:
					"J'utilise PostgreSQL, Firebase avec Next.js. Toujours prêt à explorer de nouveaux domaines",
				time: 'depuis 5 ans',
				icon: '💬',
				color: cards_palette[theme][2],
				className: '',
			},
			{
				name: '',
				description: '',
				time: 'depuis 15 ans',
				icon: '🗞️',
				color: '#1E86FF00',
				className: '',
			},
			{
				name: 'Rédaction',
				description:
					"Je suis rédacteur-concepteur pour des sites tech tels que Tom's Guide, 01Net ou Phonandroid.",
				time: 'depuis 15 ans',
				icon: '🗞️',
				color: cards_palette[theme][3],
				className: 'dark:text-white',
			},
			{
				name: 'Traduction',
				description:
					"J'ai travaillé dans le secteur de la traduction et j'ai l'habitude de traduire et/ou de rédiger du contenu technique.",
				time: 'depuis 15 ans',
				icon: '🗞️',
				color: cards_palette[theme][4],
				className: 'dark:text-white',
			},
		],
		gb: [
			{
				name: 'Front End',
				description:
					'I master perfectly the Front End technologies and keep myself constantly informed of their evolutions',
				time: '9y ago',
				icon: '🗞️',
				color: cards_palette[theme][0],
			},
			{
				name: 'Back End',
				description:
					'I have accustomed myself to Back End & server technologies.',
				time: '5y ago',
				icon: '🗞️',
				color: cards_palette[theme][1],
			},
			{
				name: 'Full Stack',
				description:
					'As a budding entrepreneur, I have had to learn abour SaaS, PostGresQL, Firebase, Amazon Services and such. I am always willing to explore new domains, and AI makes this endeavour even easier.',
				time: '5y ago',
				icon: '🗞️',
				color: cards_palette[theme][2],
			},
			{
				name: 'Editing & Copywriting',
				description:
					"I've been an Editor for various Tech web sites such as Tom's Guide, 01Net or Phonandroid.",
				time: '15y ago',
				icon: '🗞️',
				color: cards_palette[theme][3],
			},
			{
				name: 'Translation',
				description:
					"I've worked in the Translation sector and I'm used to translating and/or writing technical content.",
				time: '15y ago',
				icon: '🗞️',
				color: cards_palette[theme][4],
			},
		],
		de: [
			{
				name: 'Front End',
				description:
					'Ich beherrsche Front-End-Technologien perfekt und halte mich ständig über deren Weiterentwicklung auf dem Laufenden.',
				time: 'vor 9 Jahren',
				icon: '🗞️',
				color: cards_palette[theme][0],
			},
			{
				name: 'Back End',
				description:
					'Ich habe mich mit Backend- und Servertechnologien vertraut gemacht.',
				time: 'vor 5 Jahren',
				icon: '🗞️',
				color: cards_palette[theme][1],
			},
			{
				name: 'Full Stack',
				description:
					'Als angehender Unternehmer musste ich mich mit SaaS, PostgreSQL, Firebase, Amazon-Diensten und ähnlichem auseinandersetzen. Ich bin stets offen für neue Herausforderungen, und KI erleichtert mir diesen Weg zusätzlich.',
				time: 'vor 5 Jahren',
				icon: '🗞️',
				color: cards_palette[theme][2],
			},
			{
				name: 'Copywriting',
				description:
					"Ich habe für verschiedene Tech-Websites wie Tom's Guide, 01Net oder Phonandroid gearbeitet.",
				time: 'vor 15 Jahren',
				icon: '🗞️',
				color: cards_palette[theme][3],
			},
			{
				name: 'Translation',
				description:
					"Ich habe für verschiedene Tech-Websites wie Tom's Guide, 01Net oder Phonandroid gearbeitet.",
				time: 'vor 15 Jahren',
				icon: '🗞️',
				color: cards_palette[theme][4],
			},
		],
	};   
    
//     useGSAP(() => {
//         const q = gsap.utils.selector(ref.current);
//         tlRef.current = gsap.timeline({
//             defaults: {
//                 duration: 1,
//                 ease: 'power2.out',
//             },
//         });
//         const timeline = tlRef.current;
//         timeline.from(q('figure'), {
//             opacity: 0,
//             y: 100,
//             transform: 'rotateX(-7deg)',
//             ease: 'power4.out',
//             stagger: {
//                 amount: 0.25
//             },
//         });
//     }, { scope: ref });

//     useGSAP(() => {
//         const q = gsap.utils.selector(ref);
//         const tl = gsap.timeline({
// 			defaults: {
// 				repeat: -1,
// 				yoyo: true,
//                 ease: 'none',
//                 duration: 10
// 			},
// 		});
//         const circles = q('circle');
//         if (!circles.length) return;

//         const targets = gsap.utils.shuffle(circles);
        
//         targets.forEach((t, index) => { 
//             const initialColor = gsap.utils.random(cards_palette[theme], true);

//             tl.from(t, {
//                 fill: initialColor,
//                 duration: 10,
//                 ease: 'power2.out',
//             }, '<');
//         });
            
//         tl.to(targets, {
// 			attr: {
// 				r: 16,
// 			},
// 			opacity: 0.5,
// 			stagger: {
// 				amount: 30,
// 				grid: [13, 13],
// 				from: 84,
// 				ease: 'power2.inOut',
// 				yoyo: true,
// 				repeat: -1,
// 			},
//         })         
//   }, { dependencies: [theme], scope: ref });

    return (
        <BentoGrid
			className={cn(
				styles.container,
			)}>        
         {/* <div className={cn(
		 		styles.container,
         )}> */}
            {
            dictionary[lang].map((f, idx) => {
                return (
					<ViewTransition
						key={idx}
						enter={styles.slideIn}
						exit={styles.slideOut}>
						<figure
							style={{
								backgroundColor: f.color,
							}}
							className={cn(
								'relative',
								f.className,
								// idx === 3 ? 'p-0' : 'p-8',
								idx === 0 && 'text-white',
								idx === 3 && 'hidden',
								styles.figure,
								geistMono.variable,
							)}
							data-name={f.name}
							onClick={() => console.log(f.description)}>
							<Fragment key={idx}>
								<blockquote className={styles.blockquote}>
									{f.description}
								</blockquote>
							</Fragment>
							<Hexagone
								className="absolute inset-l-16 -inset-t-16 -translate-y-4"
							/>
						</figure>
					</ViewTransition>
				);
            })
            }
             {/* </div>
         } */}
		</BentoGrid>
	);
}
