import type { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ContainerProps = PropsWithChildren &
	HTMLAttributes<HTMLDivElement> & {
		narrow?: boolean;
	};

function Container({ className, narrow, ...props }: ContainerProps) {
	return (
		<div
			className={twMerge(
				"container",
				"mx-auto",
				"px-4",
				"sm:px-6",
				"lg:px-8",
				narrow && "xl:px-60",
				"py-3",
				"sm:py-4",
				"lg:py-6",
				"my-4",
				"sm:my-6",
				"lg:my-8",
				"xl:my-12",
				className,
			)}
			{...props}
		/>
	);
}

export default Container;
