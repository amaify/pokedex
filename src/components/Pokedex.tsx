import { useState, useEffect } from "react";
import Card from "./Card";
import {
	ApiResponse,
	Pokemon,
	PokemonData,
	PrevAndNext,
} from "../Types/Pokemon";
import PokeInfo from "./PokeInfo";
import Input from "./Input";
import Modal from "./Modal";
import useGetPokedex from "../hooks/useGetPokedex";
import Controls from "./Control";

const Pokedex = () => {
	const [pokemonInfo, setPokemonInfo] = useState<PokemonData | null>();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon/");

	const {
		pokemonData,
		nextAndPrev,
		requestLoading,
		error,
		value,
		handleSearchPokedex,
	} = useGetPokedex(url);

	if (requestLoading) return <p className="text-[16px]">LOADING...</p>;
	if (error)
		return <p className="text-[16px] text-slate-700 font-semibold">{error}</p>;

	return (
		<>
			<div className="mb-10 flex justify-center">
				<div className="bg-white inline-block rounded-sm rounded-tr-none rounded-br-none p-2 w-[400px]">
					<Input value={value} onChange={handleSearchPokedex} />
				</div>
			</div>

			<div className="flex mt-5 gap-16 relative mb-16 md:mb-5">
				<div className="flex flex-wrap gap-5 w-[100%] hover: cursor-pointer md:w-[50%]">
					{pokemonData.map((item) => (
						<Card
							item={item}
							key={item.id}
							onClick={() => {
								setShowModal(true);
								setPokemonInfo(item);
							}}
						/>
					))}
				</div>
				<div className="bg-white fixed top-[25%] w-[300px] rounded-md hidden md:right-[10%] md:block lg:right-[20%]">
					{pokemonInfo && <PokeInfo pokemonInfo={pokemonInfo} />}
				</div>
			</div>

			{/* This modal is for the mobile view */}
			<div>
				{pokemonInfo && showModal && (
					<Modal pokeInfo={pokemonInfo} setShowModal={setShowModal} />
				)}
			</div>

			{pokemonData.length > 0 && (
				<Controls nextAndPrev={nextAndPrev} setUrl={setUrl} />
			)}
		</>
	);
};

export default Pokedex;
