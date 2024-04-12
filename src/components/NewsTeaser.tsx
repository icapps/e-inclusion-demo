import type { NewsItem } from "@/assets/content";
import { ArrowRight } from "@/assets/icons";
import { useAppState } from "@/providers";
import { Typography } from ".";

type NewsTeaserProps = Omit<NewsItem, "key">;

function NewsTeaser({ image, title, summary, href, altText }: NewsTeaserProps) {
	const { isCompliant } = useAppState();

	return isCompliant ? (
		<article className="relative mb-4 text-black flex flex-col pb-12 bg-white border-2">
			<div className="p-4 order-2">
				<Typography variant="h5" as={isCompliant ? "h3" : "h5"}>
					{title}
				</Typography>

				<p>{summary}</p>

				<a
					href={href}
					target="_blank"
					rel="noreferrer"
					className="absolute bottom-0 right-0 aspect-square bg-background text-white p-2"
				>
					<span className="sr-only">Read more about "{title}"</span>
					<ArrowRight aria-hidden />
				</a>
			</div>

			{/* <a
				href={href}
				aria-hidden
				tabIndex={-1}
				target="_blank"
				rel="noreferrer"
				className="absolute inset-0"
			/> */}

			<img
				src={image}
				alt={altText}
				className="w-full aspect-video object-cover object-center order-1"
			/>
		</article>
	) : (
		<div className="relative mb-4 text-black flex flex-col pb-12 bg-white border-2">
			<img
				src={image}
				alt=""
				className="w-full aspect-video object-cover object-center"
			/>
			<div className="p-4">
				<Typography variant="h5">{title}</Typography>
				<p>{summary}</p>

				<a
					href={href}
					target="_blank"
					rel="noreferrer"
					className="absolute bottom-0 right-0 aspect-square bg-background text-white p-2"
				>
					<ArrowRight aria-hidden />
				</a>
			</div>
		</div>
	);
}

export default NewsTeaser;
