import { useAppState } from "@/providers";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = PropsWithChildren &
	ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ type = "button", className, ...props }: ButtonProps) {
	const { isCompliant } = useAppState();

	return (
		<button
			className={twMerge(
				isCompliant
					? ["bg-orange"]
					: ["bg-blueZodiac", "hover:bg-blueZodiac/60"],
				isCompliant && "font-bold",
				"transition-colors",
				"duration-200",
				isCompliant ? "text-blueZodiac" : "text-white",
				"py-2",
				"px-4",
				"rounded",
				className,
			)}
			type={type}
			{...props}
		/>
	);
}

export default Button;
