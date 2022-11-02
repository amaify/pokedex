import React, { SetStateAction } from "react";
import { PokemonData } from "../Types/Pokemon";
import PokeInfo from "./PokeInfo";

interface Props {
	pokeInfo: PokemonData;
	setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ pokeInfo, setShowModal }: Props) => {
	return (
		<div className="fixed  top-0 left-0 w-screen h-screen z-10 md:hidden">
			<div
				className="fixed bg-black opacity-90 top-0 left-0 w-screen h-screen z-10"
				onClick={() => setShowModal(false)}
			></div>
			<div className="bg-white w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-md">
				<p
					className="absolute -top-[3%] left-[3%] text-white z-30 rounded-full text-[48px]"
					onClick={() => setShowModal(false)}
				>
					&times;
				</p>
				<PokeInfo pokemonInfo={pokeInfo} />
			</div>
		</div>
	);
};

export default Modal;
