import { Navigation } from "@/components";
import { useAppState } from "@/providers/AppStateProvider";
import { twMerge } from "tailwind-merge";
import Container from "./Container";

function Header() {
	const { isCompliant } = useAppState();

	return (
		<header
			className={twMerge(
				"mb-auto",
				"text-sm",
				isCompliant && ["bg-gradient-to-b", "from-blueZodiac", "to-background"],
				"lg:min-h-screen",
				"flex",
				"flex-col",
			)}
		>
			<Container className="grow flex flex-col">
				<Navigation />

				<div className="pt-12 my-auto">
					<div className="uppercase text-4xl lg:text-7xl/normal">
						{isCompliant && (
							<span className="block uppercase text-xl font-bold">
								E-inclusion demo
								<span className="sr-only">: </span>
							</span>
						)}
						The only <strong>disability</strong> is when people cannot see{" "}
						<strong>human potential</strong>.
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Header;
