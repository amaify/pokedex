import { useEffect, useState } from "react";

export default function useScrollToTop() {
	const [showBackToTopButton, setShowBackToTopButton] = useState(false);
	const scrollContainer: Element | null = document.querySelector("html");

	const handleScroll = () => {
		if (scrollContainer && scrollContainer.scrollTop > 1500) {
			setShowBackToTopButton(true);
			return;
		}

		setShowBackToTopButton(false);
	};

	const onBackToTopButtonClick = () => {
		scrollContainer?.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window?.addEventListener("scroll", handleScroll);

		return () => {
			window?.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return {
		showBackToTopButton,
		onBackToTopButtonClick
	};
}
