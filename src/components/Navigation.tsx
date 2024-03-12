import { navigationItems } from "@/assets/content";
import { IcappsLogo } from "@/assets/icons";
import { Switch } from "@/components";
import { useAppState } from "@/providers/AppStateProvider";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const { isCompliant, toggleCompliancy } = useAppState();

	const toggleNavigation = () => {
		setIsNavOpen((prev) => !prev);
	};

	return (
		<div className="w-full sm:flex sm:items-center sm:justify-between my-4 sm:my-6 lg:my-8">
			<div className="flex items-center justify-between">
				<a
					className="flex-none text-xl font-semibold focus:outline-none focus:ring-1 focus:ring-gray-600"
					title={isCompliant ? "Icapps" : ""}
					href="#!"
				>
					{isCompliant ? (
						<>
							<span className="sr-only">Icapps</span>
							<IcappsLogo title="Icapps logo" aria-hidden />
						</>
					) : (
						<IcappsLogo title="" />
					)}
				</a>
				<div className="sm:hidden">
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						aria-hidden={isCompliant}
						onClick={toggleNavigation}
						className="p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 font-medium text-congress-blue-600 hover:text-congress-blue-400 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm"
					>
						<svg
							className="flex-shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							{isNavOpen ? (
								<>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</>
							) : (
								<>
									<line x1="3" x2="21" y1="6" y2="6" />
									<line x1="3" x2="21" y1="12" y2="12" />
									<line x1="3" x2="21" y1="18" y2="18" />
								</>
							)}
						</svg>
					</button>
				</div>
			</div>
			<div
				className={twMerge(
					"overflow-hidden transition-all duration-300 basis-full grow sm:block",
					isNavOpen ? "max-h-screen" : "max-h-0 sm:max-h-none",
				)}
			>
				<div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 py-2">
					{navigationItems.map((item) => (
						<a
							key={item.title}
							href={item.href}
							className={twMerge(
								"relative",
								"block",
								"font-medium",
								"focus:outline-none",
								isCompliant && [
									"focus:ring-1",
									"focus:ring-white",
									"focus:ring-offset-4",
									"focus:ring-offset-blueZodiac",
									"pb-1",
									'before:content-[""]',
									"before:absolute",
									"before:w-full",
									"before:h-[2px]",
									"before:bg-brightTurquoise",
									"before:bottom-0",
									"before:left-0",
									"before:origin-right",
									"before:scale-x-0",
									"before:transition-transform",
									"before:duration-300",
									"before:hover:scale-x-100",
									"before:hover:origin-left",
								],
								item.isActive && ["font-bold", "text-white/30"],
							)}
						>
							{item.title}
						</a>
					))}

					<Switch
						label="WCAG"
						value={isCompliant}
						onChange={toggleCompliancy}
						className="ml-8"
					/>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
