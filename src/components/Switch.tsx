import { useAppState } from "@/providers";
import { type HTMLAttributes, useId } from "react";
import { twMerge } from "tailwind-merge";

type SwitchProps = Omit<
	HTMLAttributes<HTMLButtonElement>,
	"onClick" | "onChange"
> & {
	label: string;
	value?: boolean;
	onChange?: (value: boolean) => void;
};

function Switch({ label, value, onChange, className, ...props }: SwitchProps) {
	const id = useId();
	const { isCompliant } = useAppState();

	const handleChange = () => {
		onChange?.(!value);
	};

	return (
		<div className="inline-flex items-center">
			<button
				type="button"
				role="switch"
				aria-checked={value ? "true" : "false"}
				aria-labelledby={`${id}-label`}
				onClick={handleChange}
				id={id}
				className={twMerge([
					// Common styles
					"relative",
					"w-11",
					"h-6",
					"bg-white/40",
					"rounded-full",
					"text-black",

					// Checked indicator
					"after:content-['']",
					"after:absolute",
					"after:top-[2px]",
					"after:start-[2px]",
					"after:bg-white",
					"after:border-white",
					"after:border",
					"after:rounded-full",
					"after:h-5",
					"after:w-5",

					// Checked state
					value && ["after:translate-x-full", "after:border-white", "bg-green"],

					// Focus
					"focus:outline-none",
					isCompliant && [
						"focus:ring-2",
						"focus:ring-outlineColor",
						"focus:ring-offset-4",
						"focus:ring-offset-blueZodiac",
					],
				])}
				{...props}
			>
				<span className="sr-only">off</span>
				<span className="sr-only">on</span>
			</button>
			<span
				id={`${id}-label`}
				className="ms-3 text-sm font-medium cursor-pointer"
			>
				{label}
			</span>
		</div>
	);
}

export default Switch;
