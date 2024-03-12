import type { SVGProps } from "react";

export type SvgIcon = Omit<SVGProps<SVGSVGElement>, "aria-hidden"> &
	(
		| {
				title?: never;
				"aria-hidden": true | "true";
		  }
		| {
				title: string;
				"aria-hidden"?: never;
		  }
	) & {
		width?: number;
		height?: number;
	};
