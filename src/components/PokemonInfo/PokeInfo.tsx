import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import {
	type PokemonType,
	pokemonInputRangeColour,
	pokemonTextColour,
	pokemonTypeColour
} from "../../PokemonColourMap";
import useGetPokemon, { useGetPokemonSearch } from "../../hooks/useGetPokemon";
import RulerIcon from "../Icons/RulerIcon";
import WeightIcon from "../Icons/WeightIcon";
import PokemonInfoDescription from "./PokemonInfoDescription";
import PokemonInfoFlavourText from "./PokemonInfoFlavourText";
import PokemonLoading from "./PokemonLoading";

export default function PokeInfo() {
	const { data: loadedPokemonData, isLoading: allPokemonLoading } = useGetPokemon();
	const { data: searchedPokemonData, isLoading: searchedPokemonLoading } = useGetPokemonSearch();
	const [searchParams] = useSearchParams();

	const pokemonName = searchParams.get("name") ?? "";
	const _searchParams = searchParams.get("search") ?? "";
	const showSearch = _searchParams !== "";

	if (allPokemonLoading || searchedPokemonLoading) return <PokemonLoading />;

	const pokemonInfo = !showSearch
		? loadedPokemonData.find((pokemon) => pokemon?.name === pokemonName)
		: searchedPokemonData;

	const inputRangeActiveColour = pokemonInputRangeColour[pokemonInfo?.types[0].type.name as PokemonType];
	const inputRangeBgColour = pokemonTypeColour[pokemonInfo?.types[0].type.name as PokemonType];

	return (
		<div className="relative h-[65%]">
			<div className="absolute -top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="size-[20rem]">
					<img
						src={pokemonInfo?.sprites.other?.["official-artwork"].front_default}
						alt={`${pokemonInfo?.name} - Pokemon`}
						className="size-full block"
					/>
				</div>
			</div>

			<div className="pt-20 pb-6 px-10 bg-white overflow-auto w-[98%] h-full mx-auto rounded-md">
				<div className="flex flex-col gap-4">
					<div className="flex flex-wrap items-center justify-center gap-2 mb-3">
						{pokemonInfo?.types.map((ability) => (
							<p
								className={clsx(
									"rounded-lg uppercase text-white p-3 tracking-wider",
									pokemonTypeColour[ability.type.name as PokemonType]
								)}
								key={ability.type.name}
							>
								{ability.type.name}
							</p>
						))}
					</div>
					<div>
						<p
							className={clsx(
								"text-center capitalize text-xl font-bold mb-6",
								pokemonTextColour[pokemonInfo?.types[0].type.name as PokemonType]
							)}
						>
							about
						</p>
						<div
							className={clsx(
								"flex items-center justify-center h-[4.8rem] mx-auto [&>div]:relative",
								"[&>div:not(:last-child)]:after:content-[''] [&>div:not(:last-child)]:after:bg-black/20 [&>div:not(:last-child)]:after:w-[0.1rem]",
								"[&>div:not(:last-child)]:after:absolute [&>div:not(:last-child)]:after:right-0",
								"[&>div:not(:last-child)]:after:h-full [&>div:not(:last-child)]:after:inline-block [&>div:not(:last-child)]:after:align-middle"
							)}
						>
							<PokemonInfoDescription
								title="weight"
								value={pokemonInfo?.weight ?? 0}
								unit="kilogram"
								icon={<WeightIcon />}
							/>

							<PokemonInfoDescription
								title="weight"
								value={pokemonInfo?.height ?? 0}
								unit="meter"
								icon={<RulerIcon />}
							/>

							<div className="flex flex-col items-center h-full w-1/3">
								<div className="flex flex-col items-center mb-auto">
									{pokemonInfo?.moves.slice(0, 2).map((_move) => (
										<p className="capitalize" key={_move.move.name}>
											{_move.move.name}
										</p>
									))}
								</div>
								<p className="capitalize text-sm">moves</p>
							</div>
						</div>
					</div>
					<PokemonInfoFlavourText pokemonInfo={pokemonInfo} />

					<div>
						<p
							className={clsx(
								"text-center capitalize text-xl font-bold mb-6",
								pokemonTextColour[pokemonInfo?.types[0].type.name as PokemonType]
							)}
						>
							base stats
						</p>
						<div className="flex gap-4 items-center">
							<div className="flex flex-col gap-2">
								{pokemonInfo?.stats.map((stat) => (
									<p
										key={stat.stat.name}
										className={clsx(
											"capitalize text-sm font-bold text-right",
											pokemonTextColour[pokemonInfo?.types[0].type.name as PokemonType]
										)}
									>
										{stat.stat.name}
									</p>
								))}
							</div>
							<div className="grow flex flex-col gap-2">
								{pokemonInfo?.stats.map((stat) => (
									<div className="flex items-center gap-4" key={stat.stat.name}>
										<p className="capitalize font-bold text-sm text-right">
											<span>{stat.base_stat}</span>
										</p>
										<progress
											value={stat.base_stat}
											max={200}
											className={clsx(
												"w-full rounded-xl h-2 bg-opacity-30",
												"[&&::-webkit-progress-value]:rounded-l-xl",
												"[&::-webkit-progress-bar]:rounded-xl [&::-webkit-progress-bar]:bg-opacity-30",
												`${inputRangeBgColour} ${inputRangeActiveColour}`
											)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
