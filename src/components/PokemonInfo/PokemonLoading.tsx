import Skeleton from "../Skeleton";

export default function PokemonLoading() {
	return (
		<div className="relative h-[65%]">
			<div className="absolute -top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="size-[20rem]">
					<Skeleton className="size-full block bg-black/30" />
				</div>
			</div>

			<div className="pt-20 pb-6 px-10 bg-white w-[98%] h-full mx-auto rounded-md">
				<div className="flex flex-col gap-4">
					<div className="flex flex-wrap items-center justify-center gap-2 mb-3">
						<Skeleton className="w-1/3 h-7 bg-black/30 rounded-lg" />
					</div>
					<div>
						<Skeleton className="bg-black/30 w-1/3 mx-auto mb-6 text-center" />

						<div>
							<Skeleton className="w-full bg-black/30 h-[4.8rem] mx-auto" />
						</div>
					</div>

					<div>
						<Skeleton className="mb-6 bg-black/30 w-1/3 mx-auto" />

						<div className="flex gap-4 items-center">
							<Skeleton className="w-full h-20 bg-black/30" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
