"use client"
import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils'

export default function GlobeWithCanvasOverlay({ className = "" }) {
	const globeCanvasRef = useRef();
	const overlayCanvasRef = useRef();
	const containerRef = useRef();

	const markers = [
		{
			location: [48.8566, 2.3522], // Paris
			size: 0.05,
			label: '',
			imageUrl: 'css_logo.svg',
		},
		{
			location: [40.7128, -74.006], // New York
			size: 0.05,
			label: 'New ',
			imageUrl: 'html_logo.svg',
		},
		{
			location: [35.6762, 139.6503], // Tokyo
			size: 0.05,
			label: '',
			imageUrl: 'js_logo.svg',
		},
		{
			location: [-33.8688, 151.2093], // Sydney
			size: 0.05,
			label: '',
			imageUrl: 'ts_logo.svg',
		},
	];

	useEffect(() => {
		let phi = 0;
		let width = 0;
		const images = {};

		// Précharger les images
		markers.forEach((marker, index) => {
			const img = new Image();
			img.crossOrigin = 'anonymous';
			img.src = marker.imageUrl;
			images[index] = img;
		});

		const onResize = () => {
			if (
				globeCanvasRef.current &&
				overlayCanvasRef.current &&
				containerRef.current
			) {
				width = containerRef.current.offsetWidth;

				globeCanvasRef.current.width = width * 2;
				globeCanvasRef.current.height = width * 2;

				overlayCanvasRef.current.width = width * 2;
				overlayCanvasRef.current.height = width * 2;
			}
		};

		window.addEventListener('resize', onResize);
		onResize();

		const globe = createGlobe(globeCanvasRef.current, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			phi: 0,
			theta: 0.3,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: markers.map((m) => ({
				location: m.location,
				size: m.size,
			})),
			onRender: (state) => {
				state.phi = phi;
				phi += 0.005;

				// Dessiner sur le canvas de superposition
				const ctx = overlayCanvasRef.current?.getContext('2d');
				if (!ctx) return;

				// Effacer le canvas
				ctx.clearRect(0, 0, width * 2, width * 2);

				// Dessiner chaque marqueur
				markers.forEach((marker, index) => {
					const [lat, lon] = marker.location;
					const phi = ((90 - lat) * Math.PI) / 180;
					const theta = ((lon + 180) * Math.PI) / 180;

					const rotatedTheta = theta - state.phi;

					const radius = width;
					const scale = state.scale || 1;

					const x = radius * Math.sin(phi) * Math.cos(rotatedTheta);
					const y = radius * Math.cos(phi);
					const z = radius * Math.sin(phi) * Math.sin(rotatedTheta);

					// Ne dessiner que si visible
					if (z > 0) {
						const screenX = x * scale + radius;
						const screenY = radius - y * scale;

						const img = images[index];
						const imgSize = 100;

						if (img && img.complete) {
							// Effet de lueur
							ctx.save();
							ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
							ctx.shadowBlur = 15;

							// Dessiner l'image
							ctx.beginPath();
							ctx.arc(
								screenX,
								screenY,
								imgSize / 1,
								0,
								Math.PI * 2,
							);
							ctx.clip();
							ctx.drawImage(
								img,
								screenX - imgSize / 2,
								screenY - imgSize / 2,
								imgSize,
								imgSize,
							);
							ctx.restore();

							// Bordure blanche
							// ctx.strokeStyle = 'white';
							// ctx.lineWidth = 3;
							// ctx.beginPath();
							// ctx.arc(
							// 	screenX,
							// 	screenY,
							// 	imgSize / 2,
							// 	0,
							// 	Math.PI * 2,
							// );
							// ctx.stroke();

							// Label
							ctx.fillStyle = 'rgba(0, 0, 0, 0)';
							ctx.font = '14px sans-serif';
							const textWidth = ctx.measureText(
								marker.label,
							).width;
							ctx.fillRect(
								screenX - textWidth / 2 - 6,
								screenY + 30,
								textWidth + 12,
								20,
							);

							// ctx.fillStyle = 'white';
							// ctx.textAlign = 'center';
							// ctx.fillText(marker.label, screenX, screenY + 44);
						}
					}
				});
			},
		});

		return () => {
			globe.destroy();
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return (
		    <div
              className={cn(
                "mx-auto aspect-square w-full max-w-[600px] translate-x-64 translate-y-24",
                className
              )}
            >
			<div className="relative w-full max-w-2xl">
				<div
					ref={containerRef}
					className="relative w-full aspect-square flex items-center justify-center"
					style={{ maxHeight: '600px' }}>
					{/* Canvas du globe WebGL */}
					<canvas
						ref={globeCanvasRef}
                        className=
                        {cn("absolute inset-0 w-full h-full",
                            // "size-full opacity-1 transition-opacity duration-500 contain-[layout_paint_size]"
                        )}
					/>

					{/* Canvas de superposition pour les images */}
					<canvas
						ref={overlayCanvasRef}
						className="absolute inset-0 w-full h-full pointer-events-none"
					/>
				</div>
			</div>
		</div>
	);
}
