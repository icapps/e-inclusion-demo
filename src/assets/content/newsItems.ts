export type NewsItem = {
	key: string;
	image: string;
	altText: string;
	title: string;
	summary: string;
	href: string;
};

const newsItems: NewsItem[] = [
	{
		key: "0",
		title:
			"TinyMCE 7 - Revision History, Document Converters, Markdown and more!",
		summary:
			"The latest version of TinyMCE is out and we have several highly requested features including Markdown, Revision History, and Document Converters.",
		href: "https://dev.to/tinymce/tinymce-7-revision-history-document-converters-markdown-and-more-551n",
		image:
			"https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=3474&auto=format&fit=crop",
		altText: "Hands of multiple people",
	},
	{
		key: "1",
		title: "Accessibility tips from an accessibility engineer",
		summary:
			"I am a blind accessibility engineer and programmer and I thought I would write an article detailing some of the common things I see in my day job.",
		href: "https://dev.to/westbrookc16/accessibility-tips-from-an-accessibility-engineer-4kl8",
		image:
			"https://images.unsplash.com/photo-1505243542579-da5adfe8338f?q=80&w=3540&auto=format&fit=crop",
		altText: "Two people giving each other a handshake",
	},
	{
		key: "2",
		title: "Using Aria States To Toggle Tailwind Classes",
		summary:
			"I maintain an internal UI library for a number of large sites. It's got a number of JavaScript interactions for menus, search buttons and similar.",
		href: "https://dev.to/endymion1818/using-aria-states-to-toggle-tailwind-classes-1lef",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop",
		altText: "A group of people sitting at a table with laptops and notebooks",
	},
	{
		key: "3",
		title: "Responsive design and cross-device testing",
		summary:
			'The so-called "browser wars" long before current web standards like HTML 5 made some web developers add badges like "best viewed with Netscape" or "best viewed with Internet Explorer"',
		href: "https://dev.to/ingosteinke/responsive-design-and-cross-device-testing-1hoe",
		image:
			"https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=1740&auto=format&fit=crop",
		altText: "A mother with her 2 kids",
	},
];

export default newsItems;
