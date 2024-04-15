import { axe } from "jest-axe";
import { render, screen } from "test-utils";
import Button from "./Button";

describe("Button", () => {
	it("should render a button", () => {
		render(<Button>Click me</Button>);

		expect(screen.getByRole("button")).toBeInTheDocument();
		expect(screen.getByRole("button")).toHaveTextContent("Click me");
	});

	it("should have no accessibility violations", async () => {
		const { container } = render(<Button>Click me</Button>);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});

	it("can be a submit button", () => {
		render(<Button type="submit">Submit</Button>);
		expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
	});

	it("should execute the onClick handler when clicked", async () => {
		const onClick = jest.fn();
		const { user } = render(<Button onClick={onClick}>Click me</Button>);

		await user.click(screen.getByRole("button"));

		expect(onClick).toHaveBeenCalled();
	});

	it("can be disabled", async () => {
		const onClick = jest.fn();
		const { user } = render(
			<Button disabled onClick={onClick}>
				Click me
			</Button>,
		);

		await user.click(screen.getByRole("button"));

		expect(screen.getByRole("button")).toBeDisabled();
		expect(onClick).not.toHaveBeenCalled();
	});
});
