export type NewsItem = {
	key: string;
	image: string;
	title: string;
	summary: string;
	href: string;
};

const newsItems: NewsItem[] = [
	{
		key: "0",
		title: "Distinguishing between ARIA and native HTML attributes",
		summary:
			"As a developer, you want to create more inclusive and accessible digital experiences for your users. Great! It’s possible, however, that you might be feeling a bit confused or overwhelmed by the element attributes that can affect the usability for users of assistive technology.",
		href: "https://www.deque.com/blog/distinguishing-between-aria-and-native-html-attributes/",
		image:
			"https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=3474&auto=format&fit=crop",
	},
	{
		key: "1",
		title:
			"Uber Must Pay Wheelchair User $35,000, Provide Accessible Rides: B.C. Human Rights Tribunal",
		summary:
			"It was the first time a ride-hailing app in Canada has been the subject of a human rights tribunal, the ruling said Author of the article:Susan Lazaruk",
		href: "https://www.accessibilitynewsinternational.com/uber-must-pay-wheelchair-user-35000-provide-accessible-rides-b-c-human-rights-tribunal/",
		image:
			"https://images.unsplash.com/photo-1505243542579-da5adfe8338f?q=80&w=3540&auto=format&fit=crop",
	},
	{
		key: "2",
		title: "E-inclusion demo",
		summary: "This is a demo of the E-inclusion project.",
		href: "",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop",
	},
	{
		key: "3",
		title: "E-inclusion demo",
		summary: "This is a demo of the E-inclusion project.",
		href: "",
		image:
			"https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=1740&auto=format&fit=crop",
	},
];

export default newsItems;
