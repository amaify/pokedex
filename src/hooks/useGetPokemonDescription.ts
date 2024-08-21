import { useQuery } from "@tanstack/react-query";
import type { PokemonSpecies } from "../Types/PokemonDetails";

export default function useGetPokemonDescription(id: number | null) {
	const pokemonDescriptionQuery = useQuery({
		queryKey: ["pokemonDescription", id],
		queryFn: async () => {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
			if (!response.ok) throw new Error("Could not get pokemon description");
			const data: PokemonSpecies = await response.json();
			return data;
		},
		enabled: !!id
	});

	return pokemonDescriptionQuery;
}
