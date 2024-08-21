import clsx from "clsx";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function Skeleton({ className, ...props }: Props) {
	return <div className={clsx("animate-pulse rounded-md bg-primary/20", className)} {...props} />;
}
