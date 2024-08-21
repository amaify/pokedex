import { clsx } from "clsx";
import { useSearchParams } from "react-router-dom";
import { type PokemonType, pokemonTypeColour } from "../PokemonColourMap";
import useGetPokemon from "../hooks/useGetPokemon";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Modal from "./Modal";
import PokemonSearch from "./PokemonSearch";
import Skeleton from "./Skeleton";

export default function Layout() {
	const { data, isLoading, error, hasNextPage, isFetchingNextPage, fetchNextPage } = useGetPokemon();
	const { observerElement } = useIntersectionObserver({ hasNextPage, fetchNextPage, options: { threshold: 1 } });

	const [params, setSearchParams] = useSearchParams();
	const searchParams = params.get("search") ?? "";

	if (isLoading) return <LoadingPokemon numberOfItems={15} />;
	if (error) return <p className="text-center text-5xl">{error.message}</p>;

	const handleClickPokemon = (pokemonName: string) => {
		setSearchParams(`?name=${pokemonName}`);
	};

	const showSearch = searchParams !== "";

	return (
		<>
			{showSearch && <PokemonSearch />}
			{!showSearch && (
				<div className="px-5 py-10 h-full md:px-10 lg:px-20 xl:px-40 [overflow-anchor:none]">
					<div className="grid grid-cols-card-layout gap-7">
						{data.map((pokemon) => {
							return pokemon ? (
								<div
									key={pokemon.name}
									className="border rounded-lg relative transition-transform hover:scale-105 hover:cursor-pointer"
									onClick={() => handleClickPokemon(pokemon.name)}
								>
									<p className="p-4 text-xl">{pokemon?.id}</p>
									<div className="size-[25rem] mx-auto">
										<img
											src={pokemon.sprites.other?.["official-artwork"].front_default}
											alt={pokemon.name}
											className="size-full block"
										/>
									</div>
									<p className="w-full text-center text-3xl mb-4 capitalize">{pokemon.name}</p>
									<div
										className={clsx(
											"absolute bottom-0 left-0 w-full h-1/2 -z-10 rounded-t-2xl",
											`${pokemonTypeColour[pokemon.types[0].type.name as PokemonType]}`
										)}
									/>
								</div>
							) : null;
						})}
					</div>
					<div ref={observerElement} />
					{isFetchingNextPage && <LoadingPokemon numberOfItems={5} />}
				</div>
			)}
			<Modal />
		</>
	);
}

export function LoadingPokemon({ numberOfItems, className }: { numberOfItems: number; className?: string }) {
	const loadingLength = Array.from({ length: numberOfItems }, (_, i) => i);

	return (
		<div className="px-5 py-10 h-full md:px-10 lg:px-20 xl:px-40">
			<div className={clsx("grid grid-cols-card-layout gap-7", className)}>
				{loadingLength.map((_loader) => (
					<div key={_loader} className="border rounded-lg relative transition-transform">
						<div className="p-4">
							<Skeleton className="w-12 h-8 bg-black/30" />
						</div>
						<div className="size-[25rem] mb-5 mx-auto">
							<Skeleton className="size-full bg-black/30" />
						</div>
						<div className="mb-4">
							<Skeleton className="w-1/2 mx-auto h-10 bg-black/30" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
