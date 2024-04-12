import { type RenderOptions, render } from "@testing-library/react";
import type { PropsWithChildren, ReactElement } from "react";
import { AppStateProvider } from "../src/providers";

const AllTheProviders = ({ children }: PropsWithChildren) => {
	// We'll only test the compliant state, so we'll set it to true
	return (
		<AppStateProvider
			defaultValue={{ isCompliant: true, toggleCompliancy: jest.fn() }}
		>
			{children}
		</AppStateProvider>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
