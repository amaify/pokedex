import React from "react";
import { PrevAndNext } from "../Types/Pokemon";

interface Props {
	nextAndPrev: PrevAndNext;
	setUrl: (value: string) => void;
}

const Controls = ({ nextAndPrev, setUrl }: Props) => {
	return (
		<div className="flex gap-4 bg-white fixed bottom-0 left-0 w-full p-3 md:relative md:bg-transparent md:p-0">
			{nextAndPrev.prevURI && (
				<button
					className="bg-slate-600 uppercase p-2 text-white rounded-md hover:bg-slate-800 tracking-wider"
					onClick={() => setUrl(nextAndPrev.prevURI ?? "")}
				>
					prev
				</button>
			)}

			{nextAndPrev.nextURI && (
				<button
					className="bg-slate-600 uppercase p-2 text-white rounded-md hover:bg-slate-800 tracking-wider"
					onClick={() => setUrl(nextAndPrev.nextURI ?? "")}
				>
					next
				</button>
			)}
		</div>
	);
};

export default Controls;
