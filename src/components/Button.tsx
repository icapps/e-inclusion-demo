import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = PropsWithChildren &
	ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ type = "button", className, ...props }: ButtonProps) {
	return (
		<button
			className={twMerge(
				"bg-blueZodiac",
				"hover:bg-blueZodiac/60",
				"transition-colors",
				"duration-200",
				"text-white",
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
