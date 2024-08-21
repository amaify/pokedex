import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./lib/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				"card-layout": "repeat(auto-fit, minmax(25rem, 1fr))"
			},
			backgroundColor: {
				bug: "#A7B723",
				dark: "#75574C",
				dragon: "#7037FF",
				electric: "#F9CF30",
				fairy: "#E69EAC",
				fighting: "#C12239",
				fire: "#F57D31",
				flying: "#A891EC",
				ghost: "#70559B",
				grass: "#74CB48",
				ground: "#DEC16B",
				normal: "#AAA67F",
				poison: "#A43E9E",
				psychic: "#FB5584",
				rock: "#B69E31",
				steel: "#B7B9D0",
				water: "#6493EB",
				ice: "#9AD6DF"
			}
		}
	},
	plugins: [
		plugin(({ addBase }) => {
			addBase({
				fontSize: {
					html: "10px"
				}
			});
		})
	]
};

export default config;
