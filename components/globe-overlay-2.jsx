import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils'
export default function GlobeWithCurvedImages({ className = "" }) {
	const globeCanvasRef = useRef();
	const overlayCanvasRef = useRef();
	const containerRef = useRef();

	const markers = [
		{
			location: [48.8566, 2.3522], // Paris
			size: 0.05,
			label: 'Paris',
			imageUrl: 'html_logo.svg',
		},
		{
			location: [40.7128, -74.006], // New York
			size: 0.05,
			label: 'New York',
			imageUrl: 'css_logo.svg',
		},
		{
			location: [35.6762, 139.6503], // Tokyo
			size: 0.05,
			label: 'Tokyo',
			imageUrl: 'js_logo.svg',
		},
		{
			location: [-33.8688, 151.2093], // Sydney
			size: 0.05,
			label: 'Sydney',
			imageUrl: 'ts_logo.svg',
		},
		{
			location: [51.5074, -0.1278], // Londres
			size: 0.05,
			label: 'Londres',
			imageUrl: 'react_logo.svg',
		},
		{
			location: [-23.5505, -46.6333], // São Paulo
			size: 0.05,
			label: 'São Paulo',
			imageUrl: 'nextjs_logo.svg',
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

				const ctx = overlayCanvasRef.current?.getContext('2d');
				if (!ctx) return;

				ctx.clearRect(0, 0, width * 2, width * 2);

				const radius = width;
				const scale = state.scale || 1;
				const currentPhi = state.phi;
				const currentTheta = state.theta || 0.3;

				markers.forEach((marker, index) => {
					const [lat, lon] = marker.location;

					// Conversion lat/lon en coordonnées sphériques (même système que COBE)
					const phi_marker = ((90 - lat) * Math.PI) / 180; // colatitude
					const theta_marker = ((lon + 180) * Math.PI) / 180; // longitude décalée

					// Coordonnées 3D sur la sphère (avant rotation)
					let x = Math.sin(phi_marker) * Math.cos(theta_marker);
					let y = Math.cos(phi_marker);
					let z = Math.sin(phi_marker) * Math.sin(theta_marker);

					// Appliquer la rotation PHI (rotation autour de l'axe Y)
					const cosPhi = Math.cos(currentPhi);
					const sinPhi = Math.sin(currentPhi);
					let x_rotated = x * cosPhi + z * sinPhi;
					let y_rotated = y;
					let z_rotated = -x * sinPhi + z * cosPhi;

					// Appliquer la rotation THETA (inclinaison autour de l'axe X)
					const cosTheta = Math.cos(currentTheta);
					const sinTheta = Math.sin(currentTheta);
					let x_final = x_rotated;
					let y_final = y_rotated * cosTheta - z_rotated * sinTheta;
					let z_final = y_rotated * sinTheta + z_rotated * cosTheta;

					// Ne dessiner que si visible (z > 0)
					if (z_final > 0) {
						// Projection orthographique sur l'écran
						const screenX = x_final * radius * scale + radius;
						const screenY = radius - y_final * radius * scale;

						const img = images[index];

						if (img && img.complete) {
							// Calcul du facteur de profondeur
							const depthFactor = z_final;

							// Taille ajustée par la perspective
							const baseSize = 50;
							const perspectiveScale = 0.6 + depthFactor * 0.4;
							const imgSize = baseSize * perspectiveScale;

							// Calculer le vecteur normal à la surface (après rotations)
							const normalX = x_final;
							const normalY = y_final;
							const normalZ = z_final;

							// Calculer les vecteurs tangents pour l'orientation de l'image
							// Vecteur tangent dans la direction est-ouest (dérivée par rapport à theta)
							let tangent_theta_x =
								-Math.sin(phi_marker) * Math.sin(theta_marker);
							let tangent_theta_y = 0;
							let tangent_theta_z =
								Math.sin(phi_marker) * Math.cos(theta_marker);

							// Vecteur tangent nord-sud (dérivée par rapport à phi)
							let tangent_phi_x =
								Math.cos(phi_marker) * Math.cos(theta_marker);
							let tangent_phi_y = -Math.sin(phi_marker);
							let tangent_phi_z =
								Math.cos(phi_marker) * Math.sin(theta_marker);

							// Appliquer les rotations aux vecteurs tangents
							// Rotation PHI sur tangent_phi
							let tp_x1 =
								tangent_phi_x * cosPhi + tangent_phi_z * sinPhi;
							let tp_y1 = tangent_phi_y;
							let tp_z1 =
								-tangent_phi_x * sinPhi +
								tangent_phi_z * cosPhi;

							// Rotation THETA sur tangent_phi
							let tp_x2 = tp_x1;
							let tp_y2 = tp_y1 * cosTheta - tp_z1 * sinTheta;
							let tp_z2 = tp_y1 * sinTheta + tp_z1 * cosTheta;

							// Rotation PHI sur tangent_theta
							let tt_x1 =
								tangent_theta_x * cosPhi +
								tangent_theta_z * sinPhi;
							let tt_y1 = tangent_theta_y;
							let tt_z1 =
								-tangent_theta_x * sinPhi +
								tangent_theta_z * cosPhi;

							// Rotation THETA sur tangent_theta
							let tt_x2 = tt_x1;
							let tt_y2 = tt_y1 * cosTheta - tt_z1 * sinTheta;
							let tt_z2 = tt_y1 * sinTheta + tt_z1 * cosTheta;

							// Utiliser tangent_phi (vecteur pointant vers le nord) pour l'orientation "haut"
							const angle = Math.atan2(-tp_x2, tp_y2);

							// Calculer le shear (cisaillement) pour la perspective
							const shearX = -normalX / (normalZ + 1);
							const shearY = -normalY / (normalZ + 1);

							ctx.save();

							// Translater au point de dessin
							ctx.translate(screenX, screenY);

							// Appliquer la rotation
							ctx.rotate(angle);

							// Appliquer la transformation de perspective (shear)
							ctx.transform(
								1,
								shearY * 0.5,
								shearX * 0.5,
								1,
								0,
								0,
							);

							// Opacité basée sur la profondeur
							ctx.globalAlpha = 0.3 + depthFactor * 0.7;

							// Effet de lueur
							ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
							ctx.shadowBlur = 20 * perspectiveScale;

							// Dessiner un cercle de fond
							ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
							ctx.beginPath();
							// ctx.arc(0, 0, imgSize / 2 + 4, 0, Math.PI * 2);
							// ctx.fill();

							// Clip circulaire pour l'image
							// ctx.beginPath();
							// ctx.arc(0, 0, imgSize / 2, 0, Math.PI * 2);
							// ctx.clip();

							// Dessiner l'image
							ctx.drawImage(
								img,
								-imgSize / 2,
								-imgSize / 2,
								imgSize,
								imgSize,
							);

							ctx.restore();

							// Bordure blanche
							ctx.save();
							ctx.translate(screenX, screenY);
							ctx.rotate(angle);
							ctx.transform(
								1,
								shearY * 0.5,
								shearX * 0.5,
								1,
								0,
								0,
							);
							ctx.globalAlpha = 0.3 + depthFactor * 0.7;

							ctx.strokeStyle = 'white';
							ctx.lineWidth = 3 * perspectiveScale;
							// ctx.beginPath();
							// ctx.arc(0, 0, imgSize / 2, 0, Math.PI * 2);
							// ctx.stroke();

							ctx.restore();

							// Label
							const labelOpacity = Math.max(0.3, depthFactor);
							const fontSize = 14 * perspectiveScale;

							ctx.save();
							ctx.translate(screenX, screenY);
							ctx.globalAlpha = labelOpacity;

							ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
							ctx.font = `${fontSize}px sans-serif`;
							const textWidth = ctx.measureText(
								marker.label,
							).width;
							const labelY = imgSize / 2 + 20;

							ctx.fillRect(
								-textWidth / 2 - 6,
								labelY - 10,
								textWidth + 12,
								20,
							);

							ctx.fillStyle = 'white';
							ctx.textAlign = 'center';
							ctx.textBaseline = 'middle';
							ctx.fillText(marker.label, 0, labelY);

							ctx.restore();
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
					<canvas
						ref={globeCanvasRef}
						className="absolute inset-0 w-full h-full"
					/>

					<canvas
						ref={overlayCanvasRef}
						className="absolute inset-0 w-full h-full pointer-events-none"
					/>
				</div>
			</div>
		</div>
	);
}
