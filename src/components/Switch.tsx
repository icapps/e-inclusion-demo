import { useAppState } from "@/providers/AppStateProvider";
import { type HTMLAttributes, useId } from "react";
import { twMerge } from "tailwind-merge";

type SwitchProps = Omit<HTMLAttributes<HTMLInputElement>, "onChange"> & {
	label: string;
	value?: boolean;
	onChange?: (value: boolean) => void;
};

function Switch({ label, value, onChange, className, ...props }: SwitchProps) {
	const id = useId();
	const { isCompliant } = useAppState();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.checked);
	};

	return (
		<label
			className={twMerge(
				"inline-flex",
				"items-center",
				"cursor-pointer",
				className,
			)}
		>
			<input
				id={id}
				type="checkbox"
				checked={value}
				className="sr-only peer"
				onChange={handleChange}
				{...props}
			/>

			<div
				aria-labelledby={`${id}-label`}
				className={twMerge(
					"relative",
					"w-11",
					"h-6",
					"bg-white/40",
					"peer-focus:outline-none",
					"rounded-full",
					"peer",
					"peer-checked:after:translate-x-full",
					"peer-checked:after:border-white",
					"after:content-['']",
					"after:absolute",
					"after:top-[2px]",
					"after:start-[2px]",
					"after:bg-white",
					"after:border-gray-300",
					"after:border",
					"after:rounded-full",
					"after:h-5",
					"after:w-5",
					"after:transition-all",
					"peer-checked:bg-green",
					isCompliant && [
						"peer-focus:ring-2",
						"peer-focus:ring-outlineColor",
						"peer-focus:ring-offset-4",
						"peer-focus:ring-offset-blueZodiac",
					],
				)}
			/>
			{isCompliant ? (
				<label
					className="ms-3 text-sm font-medium"
					htmlFor={id}
					id={`${id}-label`}
				>
					{label}
				</label>
			) : (
				<span id={`${id}-label`} className="ms-3 text-sm font-medium">
					{label}
				</span>
			)}
		</label>
	);
}

export default Switch;
