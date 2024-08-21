import type { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

interface Props<T> {
	fetchNextPage: (
		value?: FetchNextPageOptions
	) => Promise<InfiniteQueryObserverResult<InfiniteData<T, unknown>, Error>>;
	options: IntersectionObserverInit;
	hasNextPage: boolean;
}

export default function useIntersectionObserver<T extends any>({ fetchNextPage, hasNextPage, options }: Props<T>) {
	const observerElement = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && hasNextPage) fetchNextPage();
		}, options);

		if (observerElement.current) observer.observe(observerElement.current);

		return () => {
			if (observerElement.current) observer.unobserve(observerElement.current);
		};
	}, [options]);

	return { observerElement };
}
