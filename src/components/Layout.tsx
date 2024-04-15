import { Footer, Header, SkipLink } from "@/components";
import { useAppState } from "@/providers/AppStateProvider";
import { type PropsWithChildren, useEffect } from "react";
import { twMerge } from "tailwind-merge";

type Layout = PropsWithChildren & { pageTitle: string };

function Layout({ pageTitle, children }: Layout) {
	const { isCompliant } = useAppState();

	useEffect(() => {
		if (isCompliant) {
			document.body.classList.add("compliant");
		} else {
			document.body.classList.remove("compliant");
		}
	});

	useEffect(() => {
		document.title = isCompliant ? "E-inclusion demo" : "";
		document.documentElement.lang = isCompliant ? "en" : "";

		const viewportElement = document.querySelector("meta[name=viewport]");
		viewportElement?.setAttribute(
			"content",
			isCompliant
				? "width=device-width, initial-scale=1.0"
				: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
		);
	}, [isCompliant]);

	return (
		<div className={twMerge(["flex", "flex-col", "size-full"])}>
			{isCompliant && (
				<SkipLink target="#main-content">Skip to main content</SkipLink>
			)}
			<Header />

			{isCompliant ? (
				<main id="main-content">
					<h1 className="sr-only">{pageTitle}</h1>
					{children}
				</main>
			) : (
				children
			)}
			<Footer />
		</div>
	);
}

export default Layout;
