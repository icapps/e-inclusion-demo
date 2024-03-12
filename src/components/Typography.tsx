import type { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type TypographyTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TypographyTypeMap = {
	h1: HTMLHeadingElement;
	h2: HTMLHeadingElement;
	h3: HTMLHeadingElement;
	h4: HTMLHeadingElement;
	h5: HTMLHeadingElement;
	h6: HTMLHeadingElement;
	p: HTMLParagraphElement;
	span: HTMLSpanElement;
};

export type TypographyProps<Type extends TypographyTypes> = PropsWithChildren &
	HTMLAttributes<TypographyTypeMap[Type]> & {
		variant: Type;
		as?: TypographyTypes;
	};

const styles: Record<TypographyTypes, string> = {
	h1: "text-4xl/tight font-bold",
	h2: "text-3xl font-bold",
	h3: "text-2xl font-bold",
	h4: "text-xl font-bold",
	h5: "text-lg font-bold",
	h6: "font-bold",
	p: "",
	span: "",
};

function Typography<Type extends TypographyTypes = "p">({
	variant,
	as: Tag = variant,
	children,
	className,
}: TypographyProps<Type>) {
	return <Tag className={twMerge(styles[variant], className)}>{children}</Tag>;
}

export default Typography;
