export type PokemonType =
	| "bug"
	| "dark"
	| "dragon"
	| "electric"
	| "fairy"
	| "fighting"
	| "fire"
	| "flying"
	| "ghost"
	| "grass"
	| "ground"
	| "ice"
	| "normal"
	| "poison"
	| "psychic"
	| "rock"
	| "steel"
	| "water";

export const pokemonTypeColour: Record<PokemonType, string> = {
	bug: "bg-[#A7B723]",
	dark: "bg-[#75574C]",
	dragon: "bg-[#7037FF]",
	electric: "bg-[#F9CF30]",
	fairy: "bg-[#E69EAC]",
	fighting: "bg-[#C12239]",
	fire: "bg-[#F57D31]",
	flying: "bg-[#A891EC]",
	ghost: "bg-[#70559B]",
	grass: "bg-[#74CB48]",
	ground: "bg-[#DEC16B]",
	normal: "bg-[#AAA67F]",
	poison: "bg-[#A43E9E]",
	psychic: "bg-[#FB5584]",
	rock: "bg-[#B69E31]",
	steel: "bg-[#B7B9D0]",
	water: "bg-[#6493EB]",
	ice: "bg-[#9AD6DF]"
};

// This styling here overrides the default styling for the <progress /> elememnt!
export const pokemonInputRangeColour: Record<PokemonType, string> = {
	bug: "[&::-webkit-progress-value]:bg-[#A7B723] [&::-webkit-progress-bar]:bg-[#A7B723] [&::-moz-progress-bar]:bg-[#A7B723]",
	dark: "[&::-webkit-progress-value]:bg-[#75574C] [&::-webkit-progress-bar]:bg-[#75574C] [&::-moz-progress-bar]:bg-[#75574C]",
	dragon:
		"[&::-webkit-progress-value]:bg-[#7037FF] [&::-webkit-progress-bar]:bg-[#7037FF] [&::-moz-progress-bar]:bg-[#7037FF]",
	electric:
		"[&::-webkit-progress-value]:bg-[#F9CF30] [&::-webkit-progress-bar]:bg-[#F9CF30] [&::-moz-progress-bar]:bg-[#F9CF30]",
	fairy:
		"[&::-webkit-progress-value]:bg-[#E69EAC] [&::-webkit-progress-bar]:bg-[#E69EAC] [&::-moz-progress-bar]:bg-[#E69EAC]",
	fighting:
		"[&::-webkit-progress-value]:bg-[#C12239] [&::-webkit-progress-bar]:bg-[#C12239] [&::-moz-progress-bar]:bg-[#C12239]",
	fire: "[&::-webkit-progress-value]:bg-[#F57D31] [&::-webkit-progress-bar]:bg-[#F57D31] [&::-moz-progress-bar]:bg-[#F57D31]",
	flying:
		"[&::-webkit-progress-value]:bg-[#A891EC] [&::-webkit-progress-bar]:bg-[#A891EC] [&::-moz-progress-bar]:bg-[#A891EC]",
	ghost:
		"[&::-webkit-progress-value]:bg-[#70559B] [&::-webkit-progress-bar]:bg-[#70559B] [&::-moz-progress-bar]:bg-[#70559B]",
	grass:
		"[&::-webkit-progress-value]:bg-[#74CB48] [&::-webkit-progress-bar]:bg-[#74CB48] [&::-moz-progress-bar]:bg-[#74CB48]",
	ground:
		"[&::-webkit-progress-value]:bg-[#DEC16B] [&::-webkit-progress-bar]:bg-[#DEC16B] [&::-moz-progress-bar]:bg-[#DEC16B]",
	normal:
		"[&::-webkit-progress-value]:bg-[#AAA67F] [&::-webkit-progress-bar]:bg-[#AAA67F] [&::-moz-progress-bar]:bg-[#AAA67F]",
	poison:
		"[&::-webkit-progress-value]:bg-[#A43E9E] [&::-webkit-progress-bar]:bg-[#A43E9E] [&::-moz-progress-bar]:bg-[#A43E9E]",
	psychic:
		"[&::-webkit-progress-value]:bg-[#FB5584] [&::-webkit-progress-bar]:bg-[#FB5584] [&::-moz-progress-bar]:bg-[#FB5584]",
	rock: "[&::-webkit-progress-value]:bg-[#B69E31] [&::-webkit-progress-bar]:bg-[#B69E31] [&::-moz-progress-bar]:bg-[#B69E31]",
	steel:
		"[&::-webkit-progress-value]:bg-[#B7B9D0] [&::-webkit-progress-bar]:bg-[#B7B9D0] [&::-moz-progress-bar]:bg-[#B7B9D0]",
	water:
		"[&::-webkit-progress-value]:bg-[#6493EB] [&::-webkit-progress-bar]:bg-[#6493EB] [&::-moz-progress-bar]:bg-[#6493EB]",
	ice: "[&::-webkit-progress-value]:bg-[#9AD6DF] [&::-webkit-progress-bar]:bg-[#9AD6DF] [&::-moz-progress-bar]:bg-[#9AD6DF]"
};

export const pokemonTextColour: Record<PokemonType, string> = {
	bug: `text-[#A7B723]`,
	dark: `text-[#75574C]`,
	dragon: `text-[#7037FF]`,
	electric: `text-[#F9CF30]`,
	fairy: `text-[#E69EAC]`,
	fighting: `text-[#C12239]`,
	fire: `text-[#F57D31]`,
	flying: `text-[#A891EC]`,
	ghost: `text-[#70559B]`,
	grass: `text-[#74CB48]`,
	ground: `text-[#DEC16B]`,
	normal: `text-[#AAA67F]`,
	poison: `text-[#A43E9E]`,
	psychic: `text-[#FB5584]`,
	rock: `text-[#B69E31]`,
	steel: `text-[#B7B9D0]`,
	water: `text-[#6493EB]`,
	ice: `text-[#9AD6DF]`
};
