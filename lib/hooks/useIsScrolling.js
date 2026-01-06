import { useEffect, useState } from "react";

// Hook to detect if window is currently being scrolled
const useIsScrolling = (delay = 400) => {
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		let timeoutId = null;

		const handleScroll = () => {
			// Set scrolling to true immediately
			setIsScrolling(true);

			// Clear existing timeout
			if (timeoutId) {
				clearTimeout(timeoutId);
			}

			// Set scrolling to false after delay
			timeoutId = setTimeout(() => {
				setIsScrolling(false);
			}, delay);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [delay]);

	return isScrolling;
};

export default useIsScrolling;