import { axe } from "jest-axe";
import { render, screen } from "test-utils";
import MissionStatement from "./MissionStatement";

describe("MissionStatement", () => {
	const testElement = (
		<MissionStatement
			title="title"
			body="body"
			src="https://example.com/my-image"
			altText="test"
			quote="quote"
		/>
	);

	it("should have no accessibility violations", async () => {
		const { container } = render(testElement);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});

	it("should render content", async () => {
		render(testElement);

		await screen.findByRole("heading");

		expect(screen.getByRole("heading")).toHaveTextContent("title");
		expect(screen.getByRole("paragraph")).toHaveTextContent("body");
		expect(screen.getByRole("blockquote")).toHaveTextContent("quote");
	});
});
