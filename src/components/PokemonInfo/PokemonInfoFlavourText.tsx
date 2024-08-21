import type { PokemonDetails } from "../../Types/PokemonDetails";
import useGetPokemonDescription from "../../hooks/useGetPokemonDescription";
import Skeleton from "../Skeleton";

interface Props {
	pokemonInfo: PokemonDetails | undefined;
}

export default function PokemonInfoFlavourText({ pokemonInfo }: Props) {
	const { data, isLoading } = useGetPokemonDescription(pokemonInfo ? pokemonInfo.id : null);

	if (isLoading) {
		return (
			<div className="mt-8 flex flex-col gap-2">
				<Skeleton className="bg-black/20 w-full h-4" />
				<Skeleton className="bg-black/20 w-1/3 h-4" />
			</div>
		);
	}

	return (
		<div className="mt-8">
			<p>{data?.flavor_text_entries[0].flavor_text.replaceAll("\u000c", " ")}</p>
		</div>
	);
}
