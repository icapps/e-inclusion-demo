import type { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type SkipLinkProps = PropsWithChildren &
	Omit<HTMLAttributes<HTMLAnchorElement>, "href"> & { target: string };

function SkipLink({ target, ...props }: SkipLinkProps) {
	return (
		<a
			className={twMerge([
				"transition",
				"left-0",
				"bg-white",
				"text-background",
				"absolute",
				"p-3",
				"m-3",
				"-translate-y-16",
				"focus:translate-y-0",
			])}
			href={target}
			{...props}
		/>
	);
}

export default SkipLink;
