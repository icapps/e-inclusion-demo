import { navigationItems } from "@/assets/content";
import { IcappsLogo } from "@/assets/icons";
import { Switch } from "@/components";
import { useAppState } from "@/providers/AppStateProvider";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const { isCompliant, toggleCompliancy } = useAppState();
	const NavElement = isCompliant ? "nav" : "div";

	const toggleNavigation = () => {
		setIsNavOpen((prev) => !prev);
	};

	return (
		<div className="w-full sm:flex sm:items-center sm:justify-between my-4 sm:my-6 lg:my-8">
			<div className="flex items-center justify-between">
				<a
					className="flex-none text-xl font-semibold"
					title={isCompliant ? "Icapps" : ""}
					href="#!"
				>
					{isCompliant ? (
						<>
							<span className="sr-only">Icapps</span>
							<IcappsLogo aria-hidden />
						</>
					) : (
						<IcappsLogo title="" />
					)}
				</a>
				<div className="sm:hidden">
					<button
						type="button"
						onClick={toggleNavigation}
						className="p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 font-medium text-congress-blue-600 hover:text-congress-blue-400 shadow-sm align-middle transition-all text-sm"
						{...(isCompliant
							? {
									"aria-expanded": isNavOpen,
									"aria-haspopup": "true",
									"aria-controls": "menu",
								}
							: {})}
					>
						{isCompliant && <span className="sr-only">Toggle navigation</span>}
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
				id="menu"
				className={twMerge(
					"overflow-hidden sm:overflow-visible transition-all duration-300 basis-full grow sm:block",
					isNavOpen ? "max-h-screen" : "max-h-0 sm:max-h-none",
				)}
			>
				<NavElement className="flex flex-col items-start gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 py-2">
					{navigationItems.map((item) => (
						<a
							key={item.title}
							href={item.href}
							className={twMerge(
								"relative",
								"font-medium",
								isCompliant && [
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
								item.isActive &&
									(isCompliant
										? ["font-bold", "underline underline-offset-4"]
										: ["font-bold", "text-white/30"]),
							)}
						>
							{item.title}
						</a>
					))}

					<Switch
						label={isCompliant ? "Undo compliancy" : "Make compliant"}
						value={isCompliant}
						onChange={toggleCompliancy}
					/>
				</NavElement>
			</div>
		</div>
	);
}

export default Navigation;
