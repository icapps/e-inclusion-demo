import { Footer, Header, SkipLink } from "@/components";
import { useAppState } from "@/providers/AppStateProvider";
import { type PropsWithChildren, useEffect } from "react";
import { twMerge } from "tailwind-merge";

type Layout = PropsWithChildren;

function Layout({ children }: Layout) {
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
	});

	return (
		<div className={twMerge(["flex", "flex-col", "size-full"])}>
			{isCompliant && (
				<SkipLink target="#main-content">Skip to main content</SkipLink>
			)}
			<Header />

			{isCompliant ? <main id="main-content">{children}</main> : children}
			<Footer />
		</div>
	);
}

export default Layout;
