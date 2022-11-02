import React, { useState } from "react";
import Input from "./Input";
import Pokedex from "./Pokedex";

const Layout = () => {
	return (
		<div className="[ App ] px-5 py-10 h-[100%] md:px-10  lg:px-20 xl:px-40">
			<h1 className="text-5xl text-center font-medium text-slate-100 mb-10">
				Pokedex
			</h1>
			<Pokedex />
		</div>
	);
};

export default Layout;
