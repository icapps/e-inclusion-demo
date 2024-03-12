import { Exclamation } from "@/assets/icons";
import { type InputHTMLAttributes, useId } from "react";
import { twMerge } from "tailwind-merge";

export type InputTypes = HTMLInputElement | HTMLTextAreaElement;
export type InputProps = Omit<InputHTMLAttributes<InputTypes>, "id" | "name"> &
	Required<Pick<InputHTMLAttributes<InputTypes>, "name">> & {
		label: string;
		multiline?: boolean;
		error?: string;
	};

function Input({ label, className, multiline, error, ...props }: InputProps) {
	const id = useId();
	const Element = multiline ? "textarea" : "input";

	return (
		<div className="mb-4">
			<label htmlFor={id} className="block mb-1 uppercase font-light text-sm">
				{label}
			</label>
			<Element
				id={id}
				className={twMerge([
					"w-full",
					"max-w-[80ch]",
					"p-3",
					"text-black",
					"rounded-md",
					"border",
					error ? "border-red" : "border-black",
					className,
				])}
				{...(multiline ? { rows: 5 } : {})} // Only add rows attribute if multiline
				{...props}
			/>

			{error && (
				<span className="text-red text-sm mt-1 flex items-center">
					<Exclamation title="Error: " className="mr-2" />
					{error}
				</span>
			)}
		</div>
	);
}

export default Input;
