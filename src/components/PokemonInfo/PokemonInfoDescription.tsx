import type { ReactNode } from "react";

function formatCharacteristicNumber(value: number, unit: string) {
	const formatNumber = new Intl.NumberFormat("en", { style: "unit", unit }).format(value / 10);
	return formatNumber;
}

interface Props {
	value: number;
	title: string;
	unit?: string;
	icon?: ReactNode;
}

export default function PokemonInfoDescription({ value, title, icon, unit }: Props) {
	return (
		<div className="flex flex-col items-center h-full w-1/3">
			<div className="flex items-center gap-4 mb-auto">
				{icon}
				<p>{formatCharacteristicNumber(value, unit ?? "")}</p>
			</div>
			<p className="capitalize text-sm">{title}</p>
		</div>
	);
}
