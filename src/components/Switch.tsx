import { useAppState } from "@/providers/AppStateProvider";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type SwitchProps = Omit<HTMLAttributes<HTMLInputElement>, "onChange"> & {
	label: string;
	value?: boolean;
	onChange?: (value: boolean) => void;
};

function Switch({ label, value, onChange, className, ...props }: SwitchProps) {
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
				type="checkbox"
				checked={value}
				className="sr-only peer"
				onChange={handleChange}
				{...props}
			/>
			<div
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
					isCompliant && ["focus:ring-1", "focus:ring-white"],
				)}
			/>
			<span className="ms-3 text-sm font-medium">{label}</span>
		</label>
	);
}

export default Switch;
