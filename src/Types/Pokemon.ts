interface Ability {
	ability: { name: string };
}

interface Stat {
	base_stat: number;
	stat: {
		name: string;
	};
}

export interface Pokemon {
	name: string;
	url: string;
}

export interface PokemonData {
	id: number;
	abilities: Ability[];
	name: string;
	stats: Stat[];
	sprites: { front_default: string };
	weight: 40;
}

export interface PrevAndNext {
	nextURI: string | null;
	prevURI: string | null;
}

export interface ApiResponse {
	next: string | null;
	previous: string | null;
	results: Pokemon[];
}
