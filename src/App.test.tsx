import { axe } from "jest-axe";
import { render } from "test-utils";
import { Landing } from "./pages";

describe("App", () => {
	it("should have no accessibility violations", async () => {
		const { container } = render(<Landing />);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});
});
