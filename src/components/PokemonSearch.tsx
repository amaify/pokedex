import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import { type PokemonType, pokemonTypeColour } from "../PokemonColourMap";
import { useGetPokemonSearch } from "../hooks/useGetPokemon";
import { LoadingPokemon } from "./Layout";

export default function PokemonSearch() {
	const { data: pokemon, isLoading, error } = useGetPokemonSearch();
	const [_, setSearchParams] = useSearchParams();

	if (isLoading) return <LoadingPokemon numberOfItems={1} className="!flex !justify-center" />;
	if (error) return <p className="text-center text-5xl">{error.message}</p>;

	const handleClickPokemon = (pokemonName: string) => {
		setSearchParams((currentParam) => {
			currentParam.append("name", pokemonName);
			return currentParam;
		});
	};

	return (
		<div className="px-5 py-10 h-full md:px-10 lg:px-20 xl:px-40">
			<div className="flex justify-center">
				<div
					key={pokemon?.name}
					className="border rounded-lg relative transition-transform hover:scale-105 hover:cursor-pointer"
					onClick={() => handleClickPokemon(pokemon?.name ?? "")}
				>
					<p className="p-4 text-xl">{pokemon?.id}</p>
					<div className="size-[25rem] mx-auto">
						<img
							src={pokemon?.sprites.other?.["official-artwork"].front_default}
							alt={pokemon?.name}
							className="size-full block"
						/>
					</div>
					<p className="w-full text-center text-3xl mb-4 capitalize">{pokemon?.name}</p>
					<div
						className={clsx(
							"absolute bottom-0 left-0 w-full h-1/2 -z-10 rounded-t-2xl",
							`${pokemonTypeColour[pokemon?.types[0].type.name as PokemonType]}`
						)}
					/>
				</div>
			</div>
		</div>
	);
}
