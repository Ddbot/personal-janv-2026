'use client';
import { Fragment, use, useRef, ViewTransition } from 'react';
import { LangContext } from '@/contexts/LangContext';
import { ThemeContext } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { BentoGrid } from '@/components/ui/bento-grid';
import styles from './styles.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import PatternComponent from './[components]/PatternComponent';
import { cards_palette } from '@/lib/constants';

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
					'Je maîtrise parfaitement les technologies Front End et CSS et me tient constamment informé de leurs évolutions',
				time: 'depuis 9 ans',
				icon: '💸',
				color: cards_palette[theme][0],
				className: '',
			},
			{
				name: 'Back End',
				description:
					'Je me suis familiarisé avec les technologies back-end et serveur. Mon parcours en développement web a débuté avec Ruby on Rails.',
				time: 'depuis 5 ans',
				icon: '👤',
				color: cards_palette[theme][1],
				className: '',
			},
			{
				name: 'Full Stack',
				description:
					"Je me suis familiarisé avec les technologies SaaS, PostgreSQL, Firebase, les services Amazon, etc. Je suis toujours prêt à explorer de nouveaux domaines, et l'IA facilite grandement cette démarche.",
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
				name: 'Rédaction & Copywriting',
				description:
					"Je suis rédacteur-concepteur pour divers sites web spécialisés en technologie tels que Tom's Guide, 01Net ou Phonandroid.",
				time: 'depuis 15 ans',
				icon: '🗞️',
				color: cards_palette[theme][3],
				className: 'dark:text-white border-2 border-chart-4',
			},
			{
				name: 'Traduction & SEO',
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
        // <BentoGrid
		// 	className={cn(
		// 		styles.container,
		// 	)}>
        // {
        <div className={cn(
				styles.container,
			)}>{
            dictionary[lang].map((f, idx) => {
                return (
                    <ViewTransition key={idx}>
                        <figure
                            style={{
                                backgroundColor:
                                    f.color
                            }}
                            className={cn(
                                'relative',
                                f.className,
                                // idx === 3 ? 'p-0' : 'p-8',
                                idx === 0 && "text-white",
                                idx === 3 && "hidden",
                                styles.figure,
                            )}
                            onClick={() => console.log(f.description)}>
                            <Fragment key={idx}>
                                <div className={cn("flex flex-row items-start gap-0")}>
                                    <div className="flex flex-col">
                                        <figcaption className="text-xl font-medium dark:text-white">
                                            {f.name}
                                        </figcaption>
                                    </div>
                                </div>
                                <blockquote className="mt-0">
                                    {f.description}
                                </blockquote>
                            </Fragment>
                        </figure>
                    </ViewTransition>
                );
            })
        }</div>
        // }
		// </BentoGrid>
	);
}
