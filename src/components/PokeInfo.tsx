import { PokemonData } from "../Types/Pokemon";

interface Props {
	pokemonInfo: PokemonData;
}

const PokeInfo = ({ pokemonInfo }: Props) => {
	return (
		<div>
			<div className="relative w-full h-[200px] my-0 mx-auto bg-slate-600 rounded-md rounded-br-none rounded-bl-none">
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`}
					alt={`${pokemonInfo?.name} - Pokemon`}
					className="w-full h-full block"
				/>
			</div>

			<div className="py-6 px-4">
				<h1 className="text-center uppercase font-bold mb-3 tracking-[4px]">
					{pokemonInfo.name}
				</h1>
				<div className="flex flex-wrap gap-2 mb-3">
					{pokemonInfo?.abilities.map((ability) => (
						<p
							className="bg-slate-600 rounded-sm uppercase text-white p-2 tracking-wider"
							key={ability.ability.name}
						>
							{ability.ability.name}
						</p>
					))}
				</div>
				<div className="mb-3">
					{pokemonInfo.stats.map((stat) => (
						<p className="capitalize font-bold mb-2" key={stat.stat.name}>
							{stat.stat.name} :{" "}
							<span className="text-[#d87d4a]">{stat.base_stat}</span>
						</p>
					))}
				</div>
				<p className="capitalize font-bold ">
					Weight: <span className="text-[#d87d4a]">100</span>
				</p>
			</div>
		</div>
	);
};

export default PokeInfo;
