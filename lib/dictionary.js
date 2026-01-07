import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import Link from 'next/link';

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
				'Une app mobile pour suivre la croissance et les données vitales de votre nouveau né',
				'Echanger, vendre, partager, se rendre service: tout ce qui se passe dans ma rue',
				<div key="contact" className="w-full flex justify-end gap-4">
					<button data-icon="message-circle">
						<Link
							href={{
								pathname: '/contact',
								query: { type: 'chat' },
							}}>
							<MessageCircle color={'var(--background'} />
						</Link>
					</button>
					<button data-icon="mail">
						<Link
							href={{
								pathname: '/contact',
								query: { type: 'mail' },
							}}>
							<Mail color={'var(--background'} />
						</Link>
					</button>
					<button data-icon="linkedin">
						<a
							href="https://www.linkedin.com/in/andry-rakotoniaina/"
							target="_blank">
							<Linkedin color={'var(--background'} />
						</a>
					</button>
				</div>,
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
			typing: ['Vielseitig', 'Neugierig', 'Zuverlässig', 'Teamplayer'],
		},
		features: {
			description: [
				'Eine Schnellschreib-App zum Trainieren Ihrer Tippfähigkeiten',
				'Vielfältige Fähigkeiten',
				'Eine App, die die Produktivität einer Content-Farm verzehnfacht.',
				'Eine mobile App, die Ihnen hilft, die Entwicklung Ihres Babys zu überwachen',
				'Echanger, vendre, partager, se rendre service: tout ce qui se passe dans ma rue',
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

export { dictionary };