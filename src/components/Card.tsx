import { Pokemon, PokemonData } from "../Types/Pokemon";

interface Props {
	item: PokemonData;
	onClick: () => void;
}

const Card = ({ item, onClick }: Props) => {
	return (
		<div
			className="bg-slate-600 flex items-center w-full h-[100px] rounded-lg pl-4 shadow-xl md:w-[300px] md:h-[100px] "
			onClick={onClick}
		>
			<p className="mr-auto p-2 border w-8 h-8 rounded-full relative text-[#d87d4a]">
				<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					{item.id}
				</span>
			</p>
			<h1 className="mr-auto capitalize tracking-widest text-white">
				{item.name}
			</h1>
			<div className="w-[35%] h-full">
				<img
					src={item.sprites.front_default}
					alt={`${item.name} - Pokemon`}
					className="w-[100%] h-[100%] block object-contain"
				/>
			</div>
		</div>
	);
};

export default Card;
