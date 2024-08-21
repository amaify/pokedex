import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import { type PokemonType, pokemonTypeColour } from "../PokemonColourMap";
import useGetPokemon, { useGetPokemonSearch } from "../hooks/useGetPokemon";
import PokeballIcon from "./Icons/Pokeball";
import PokeInfo from "./PokemonInfo/PokeInfo";

const Modal = () => {
	const { data } = useGetPokemon();
	const { data: searchedPokemonData } = useGetPokemonSearch();
	const [searchParams, setSearchParams] = useSearchParams();

	const pokemonName = searchParams.get("name") ?? "";
	const _searchParams = searchParams.get("search") ?? "";
	const showSearch = _searchParams !== "";

	if (pokemonName === "") return null;

	const pokemonData = !showSearch ? data.find((pokemon) => pokemon?.name === pokemonName) : searchedPokemonData;

	const handleCloseModal = () => {
		if (searchParams.size > 1) {
			setSearchParams((currParam) => {
				currParam.delete("name");
				return currParam;
			});
			return;
		}
		setSearchParams();
	};

	return (
		<div className="fixed top-0 left-0 w-screen h-screen z-10">
			<div className="fixed bg-black opacity-90 top-0 left-0 w-screen h-screen z-10" onClick={handleCloseModal}></div>
			<div
				className={clsx(
					"flex flex-col pb-1.5",
					"w-[80%] min-w-[30rem] h-[64rem] max-h-[90%] overflow-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-md",
					"sm:w-[36rem]",
					pokemonData ? `${pokemonTypeColour[pokemonData.types[0].type.name as PokemonType]}` : ""
				)}
			>
				<div className=" relative mb-auto flex justify-between items-center p-4">
					<h1 className="text-center text-4xl uppercase font-bold tracking-[4px]">{pokemonData?.name}</h1>
					<p className="text-black text-5xl" onClick={handleCloseModal}>
						&times;
					</p>
					<div className="absolute top-3 right-4 -z-10">
						<PokeballIcon />
					</div>
				</div>
				<PokeInfo />
			</div>
		</div>
	);
};

export default Modal;
