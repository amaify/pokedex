import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Header() {
	const [inputValue, setInputValue] = useState("");
	const [searchParam, setSearchParams] = useSearchParams();

	const inputParams = searchParam.get("search") ?? "";

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchParams(`?search=${value.toLowerCase()}`);
		setInputValue(value);

		if (value === "") setSearchParams();
	};

	return (
		<div className="px-5 py-10 h-[100%] md:px-10 lg:px-20 xl:px-40">
			<h1 className="text-5xl text-center font-medium text-slate-100 mb-10">Pokedex</h1>
			<div className="w-full sm:w-1/2 mx-auto">
				<input
					type="text"
					name="character"
					value={inputValue !== "" ? inputValue : inputParams}
					onChange={onInputChange}
					placeholder="Enter pokemon name or id"
					className="border-0 p-4 rounded-md text-xl bg-white focus:border-0 focus:outline-none w-full"
				/>
			</div>
		</div>
	);
}
