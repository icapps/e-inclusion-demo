import type { NewsItem } from "@/assets/content";
import { ArrowRight } from "@/assets/icons";
import { useAppState } from "@/providers";
import { Typography } from ".";

type NewsTeaserProps = Omit<NewsItem, "key">;

function NewsTeaser({ image, title, summary }: NewsTeaserProps) {
	const { isCompliant } = useAppState();

	return (
		<div className="relative mb-4 text-black flex flex-col pb-12 bg-white border-2">
			<img
				src={image}
				alt={isCompliant ? title : ""}
				className="w-full aspect-video object-cover object-center"
			/>
			<div className="p-4">
				<Typography variant="h5">{title}</Typography>
				<p>{summary}</p>

				<a
					href="#!"
					target="_blank"
					rel="noreferrer"
					className="absolute bottom-0 right-0 aspect-square bg-background text-white p-2"
				>
					{isCompliant && (
						<span className="sr-only">Read more about "{title}"</span>
					)}
					<ArrowRight aria-hidden={isCompliant as true} />
				</a>
			</div>
		</div>
	);
}

export default NewsTeaser;
