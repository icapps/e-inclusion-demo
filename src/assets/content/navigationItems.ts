export type NavigationItem = {
	title: string;
	href: string;
	isActive?: boolean;
};

const navigationItems: NavigationItem[] = [
	{ title: "Home", href: "#!", isActive: true },
	{ title: "Services", href: "#!" },
	{ title: "About", href: "#!" },
	{ title: "Contact", href: "#!" },
];

export default navigationItems;
