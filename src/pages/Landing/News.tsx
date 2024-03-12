import { newsItems } from "@/assets/content";
import { Container, NewsTeaser, Typography } from "@/components";
import { useAppState } from "@/providers/AppStateProvider";
import { Fragment } from "react/jsx-runtime";

function News() {
	const { isCompliant } = useAppState();

	return (
		<Container>
			<Typography
				variant="h1"
				as={isCompliant ? "h2" : "h6"}
				className="mb-6 mt-6"
			>
				News
			</Typography>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
				{newsItems.map(({ key, ...newsItem }) => (
					<Fragment key={`news-${key}`}>
						<NewsTeaser {...newsItem} />
					</Fragment>
				))}
			</div>
		</Container>
	);
}

export default News;
