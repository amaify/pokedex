import { useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import type { Pokemon } from "../Types/PokemonDetails";
import type { PokemonDetails } from "../Types/PokemonDetails";
import useDebounce from "./useDebounce";

export interface PokemonApiResponse {
	next: string | null;
	previous: string | null;
	results: Array<Pokemon>;
}

async function getPokemon(url: string) {
	const response = await fetch(url);
	const pokemonBaseData: PokemonApiResponse = await response.json();
	return pokemonBaseData;
}

async function getPokemonByUri(uri: string) {
	const response = await fetch(uri);
	const pokemonData: PokemonDetails = await response.json();
	return pokemonData;
}

export default function useGetPokemon() {
	const { data, error, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ["pokemonInfinite"],
		queryFn: ({ pageParam }) => getPokemon(pageParam),
		initialPageParam: "https://pokeapi.co/api/v2/pokemon",
		getNextPageParam: (_, pages, _lastPageParam) => {
			const pageIndex = pages.length > 0 ? pages.length - 1 : 0;
			const nextPage = pages[pageIndex].next;
			return nextPage;
		}
	});

	const initialPokemonData = data?.pages
		.flat()
		.map((res) => res.results)
		.flat();

	const allPokemon = useQueries({
		queries: initialPokemonData
			? initialPokemonData.map((pokemon) => ({
					queryKey: ["pokemon", pokemon.name],
					queryFn: () => getPokemonByUri(pokemon.url)
				}))
			: [],
		combine(result) {
			return {
				data: result.map((response) => response.data),
				isLoading: result.map((response) => response.isLoading),
				error: result.map((response) => response.error)
			};
		}
	});

	return {
		isLoading: allPokemon.isLoading.some((item) => item === true),
		error,
		data: allPokemon.data,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage
	};
}

async function getSearchedPokemon(pokemonCharacter: string) {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonCharacter}`);
		if (response.status === 404) throw new Error("Pokemon not found");
		const pokemonBaseData: PokemonDetails = await response.json();
		return pokemonBaseData;
	} catch (error) {
		if (error instanceof Error) throw new Error(error.message);
	}
}
export function useGetPokemonSearch() {
	const [params] = useSearchParams();
	const _searchParams = params.get("search") ?? "";

	const debouncedValue = useDebounce({ value: _searchParams, delay: 500 });

	const { data, isLoading, error } = useQuery({
		queryKey: ["pokemonSearch", debouncedValue],
		queryFn: () => getSearchedPokemon(debouncedValue),
		enabled: !!debouncedValue,
		retry: 2
	});

	return { data, isLoading, error };
}
