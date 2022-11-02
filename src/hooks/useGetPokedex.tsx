import React, { useEffect, useState } from "react";
import {
	ApiResponse,
	Pokemon,
	PokemonData,
	PrevAndNext,
} from "../Types/Pokemon";

const useGetPokedex = (url: string) => {
	const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
	const [filterData, setFilterData] = useState<PokemonData[]>([]);
	const [requestLoading, setRequestLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>();
	const [nextAndPrev, setNextAndPrev] = useState<PrevAndNext>({
		prevURI: null,
		nextURI: null,
	});
	const [value, setValue] = useState("");

	const getPokeResource = async (signal: AbortSignal) => {
		setRequestLoading(true);
		const response = await fetch(url, { signal });
		const data: ApiResponse = await response.json();

		getPokemonData(data.results);
		setNextAndPrev({ nextURI: data.next, prevURI: data.previous });
		setRequestLoading(false);
	};

	const getPokemonData = async (data: Pokemon[]) => {
		data.map(async (item) => {
			const response = await fetch(item.url);
			const data = await response.json();

			setPokemonData((prevState) => {
				prevState = [...prevState, data];
				prevState.sort((a, b) => a.id - b.id);
				setFilterData(prevState);
				return prevState;
			});
		});
	};

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		getPokeResource(signal).catch((error) => {
			if (error.name === "AbortError") {
				console.log("cancelled");
			} else {
				setRequestLoading(false);
				setError(error.message);
			}
		});

		return () => {
			setPokemonData([]);
			controller.abort();
		};
	}, [url]);

	const handleSearchPokedex = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setValue(value);

		const filteredPokemon = filterData?.filter((item) =>
			item.name.toLowerCase().includes(value)
		);

		setPokemonData(filteredPokemon);
	};

	return {
		pokemonData,
		requestLoading,
		error,
		nextAndPrev,
		value,
		handleSearchPokedex,
	};
};

export default useGetPokedex;
