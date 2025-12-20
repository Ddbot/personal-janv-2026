import React, { useState } from 'react';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
	const [selectedArticle, setSelectedArticle] = useState(null);

	const articles = [
		{
			id: 1,
			title: "L'Ère du Jazz Transforme la Culture",
			category: 'Culture',
			author: 'Marie Dubois',
			date: '15 Décembre 1925',
			excerpt:
				"Le jazz révolutionne les salles de bal parisiennes. Cette nouvelle musique venue d'Amérique enchante la jeunesse et bouleverse les codes établis...",
			content:
				"Le jazz révolutionne les salles de bal parisiennes. Cette nouvelle musique venue d'Amérique enchante la jeunesse et bouleverse les codes établis de la société traditionnelle. Les orchestres se multiplient dans les cabarets de Montmartre.",
		},
		{
			id: 2,
			title: "Les Progrès de l'Aviation Commerciale",
			category: 'Technologie',
			author: 'Pierre Martin',
			date: '12 Décembre 1925',
			excerpt:
				"L'aviation connaît des avancées remarquables. Les liaisons postales aériennes se développent à travers l'Europe et promettent de révolutionner le transport...",
			content:
				"L'aviation connaît des avancées remarquables. Les liaisons postales aériennes se développent à travers l'Europe et promettent de révolutionner le transport du courrier et des passagers dans un avenir proche.",
		},
		{
			id: 3,
			title: 'La Mode Féminine Libère les Silhouettes',
			category: 'Mode',
			author: 'Coco Delaunay',
			date: '10 Décembre 1925',
			excerpt:
				"Les robes raccourcissent, les cheveux se coupent. La femme moderne s'affranchit des contraintes vestimentaires du siècle passé...",
			content:
				"Les robes raccourcissent, les cheveux se coupent. La femme moderne s'affranchit des contraintes vestimentaires du siècle passé. Le style garçonne triomphe dans les rues de la capitale.",
		},
		{
			id: 4,
			title: "L'Électricité dans Tous les Foyers",
			category: 'Société',
			author: 'Jean Voltaire',
			date: '8 Décembre 1925',
			excerpt:
				"L'électrification des villes progresse rapidement. Bientôt, chaque foyer bénéficiera de cet éclairage moderne qui transforme le quotidien...",
			content:
				"L'électrification des villes progresse rapidement. Bientôt, chaque foyer bénéficiera de cet éclairage moderne qui transforme le quotidien des familles et permet l'usage d'appareils révolutionnaires.",
		},
		{
			id: 5,
			title: 'Le Cinéma Muet Captive les Foules',
			category: 'Divertissement',
			author: 'Lucien Lumière',
			date: '5 Décembre 1925',
			excerpt:
				'Les salles obscures attirent chaque soir des milliers de spectateurs. Charlie Chaplin et Buster Keaton sont les vedettes incontestées...',
			content:
				'Les salles obscures attirent chaque soir des milliers de spectateurs. Charlie Chaplin et Buster Keaton sont les vedettes incontestées de cet art naissant qui fascine toutes les classes sociales.',
		},
		{
			id: 6,
			title: 'Architecture Art Déco: Un Nouveau Style',
			category: 'Architecture',
			author: 'Robert Mallet',
			date: '3 Décembre 1925',
			excerpt:
				"L'Exposition des Arts Décoratifs laisse son empreinte sur la ville. Un style géométrique et élégant émerge dans la construction...",
			content:
				"L'Exposition des Arts Décoratifs laisse son empreinte sur la ville. Un style géométrique et élégant émerge dans la construction des nouveaux bâtiments, combinant luxe et modernité.",
		},
		{
			id: 7,
			title: 'La Radio Connecte les Nations',
			category: 'Communication',
			author: 'Henri Marconi',
			date: '1 Décembre 1925',
			excerpt:
				"La radiodiffusion permet désormais d'écouter des émissions depuis son salon. Cette invention prodigieuse rapproche les peuples...",
			content:
				"La radiodiffusion permet désormais d'écouter des émissions depuis son salon. Cette invention prodigieuse rapproche les peuples et diffuse instantanément nouvelles et musique à travers les continents.",
		},
		{
			id: 8,
			title: 'Les Automobiles Envahissent les Rues',
			category: 'Transport',
			author: 'André Citroën',
			date: '28 Novembre 1925',
			excerpt:
				"La production automobile s'intensifie. Les voitures ne sont plus réservées aux plus fortunés et commencent à transformer la circulation urbaine...",
			content:
				"La production automobile s'intensifie. Les voitures ne sont plus réservées aux plus fortunés et commencent à transformer la circulation urbaine ainsi que nos habitudes de déplacement.",
		},
	];

	return (
		<div className="min-h-screen bg-amber-50">
			{/* En-tête du journal */}
			<header className="border-b-4 border-double border-black bg-white py-6">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center">
						<div className="text-xs uppercase tracking-widest mb-2">
							Paris, France
						</div>
						<h1
							className="text-6xl font-serif mb-2"
							style={{ fontFamily: 'Georgia, serif' }}>
							LE COURRIER
						</h1>
						<div className="text-sm italic">
							Journal Quotidien d'Information et de Culture
						</div>
						<div className="flex justify-center items-center gap-8 mt-3 text-xs">
							<span>Samedi 20 Décembre 2025</span>
							<span className="border-x border-black px-3">
								Édition Matinale
							</span>
							<span>Prix: 2 Francs</span>
						</div>
					</div>
				</div>
			</header>

			{/* Ligne décorative */}
			<div className="bg-black h-1"></div>
			<div className="bg-white h-2"></div>
			<div className="bg-black h-0.5"></div>

			{/* Contenu principal */}
			<main className="max-w-7xl mx-auto px-4 py-8">
				{/* Grille 4 colonnes */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{articles.map((article, index) => (
						<article
							key={article.id}
							className="bg-white border border-gray-300 p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
							onClick={() => setSelectedArticle(article)}>
							{/* Catégorie */}
							<div className="text-xs uppercase tracking-wider border-b border-black pb-1 mb-3 font-bold">
								{article.category}
							</div>

							{/* Titre */}
							<h2
								className="text-lg font-serif leading-tight mb-3 font-bold"
								style={{ fontFamily: 'Georgia, serif' }}>
								{article.title}
							</h2>

							{/* Métadonnées */}
							<div className="flex flex-col gap-1 text-xs text-gray-600 mb-3 border-t border-gray-300 pt-2">
								<div className="flex items-center gap-1">
									<User size={12} />
									<span className="italic">
										{article.author}
									</span>
								</div>
								<div className="flex items-center gap-1">
									<Calendar size={12} />
									<span>{article.date}</span>
								</div>
							</div>

							{/* Extrait */}
							<p
								className="text-sm leading-relaxed text-justify"
								style={{
									columnCount: index % 2 === 0 ? 1 : 1,
								}}>
								{article.excerpt}
							</p>

							{/* Ornement */}
							<div className="text-center mt-3 text-xs">◆◆◆</div>
						</article>
					))}
				</div>

				{/* Article sélectionné (modal) */}
				{selectedArticle && (
					<div
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
						onClick={() => setSelectedArticle(null)}>
						<div
							className="bg-white border-4 border-double border-black max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
							onClick={(e) => e.stopPropagation()}>
							<div className="text-xs uppercase tracking-wider border-b-2 border-black pb-2 mb-4 font-bold">
								{selectedArticle.category}
							</div>
							<h2
								className="text-3xl font-serif leading-tight mb-4 font-bold"
								style={{ fontFamily: 'Georgia, serif' }}>
								{selectedArticle.title}
							</h2>
							<div className="flex gap-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-300">
								<div className="flex items-center gap-1">
									<User size={14} />
									<span className="italic">
										Par {selectedArticle.author}
									</span>
								</div>
								<div className="flex items-center gap-1">
									<Calendar size={14} />
									<span>{selectedArticle.date}</span>
								</div>
							</div>
							<div
								className="text-base leading-relaxed text-justify mb-6"
								style={{ columnCount: 2, columnGap: '2rem' }}>
								{selectedArticle.content}
							</div>
							<div className="text-center">
								<button
									onClick={() => setSelectedArticle(null)}
									className="border-2 border-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
									Fermer
								</button>
							</div>
						</div>
					</div>
				)}
			</main>

			{/* Pied de page */}
			<footer className="bg-black text-white py-4 mt-12">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<div className="text-sm">
						<p className="mb-1">
							Bureau de Rédaction: 12 Boulevard des Capucines,
							Paris
						</p>
						<p className="text-xs opacity-75">
							Télégramme: LECOURRIER - Téléphone: GUTENBERG 45-67
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Blog;
