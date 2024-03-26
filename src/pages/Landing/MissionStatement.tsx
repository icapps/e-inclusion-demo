import { useAppState } from "@/providers/AppStateProvider";
import { twMerge } from "tailwind-merge";
import Container from "../../components/Container";
import Typography from "../../components/Typography";

export type MissionStatementProps = {
	title: string;
	body: string;
	src: string;
	altText: string;
	quote: string;
};

function MissionStatement({
	title,
	body,
	src,
	altText,
	quote,
}: MissionStatementProps) {
	const { isCompliant } = useAppState();
	const GroupTag = isCompliant ? "hgroup" : "div";

	return (
		<Container narrow>
			<GroupTag className="gap-12 mb-12">
				<Typography variant="h1" as="h2" className="mb-6">
					{title}
				</Typography>
				<Typography variant="p">{body}</Typography>
			</GroupTag>

			<div className="lg:flex justify-stretch gap-12 items-stretch">
				<div className="lg:w-3/5">
					<img
						src={src}
						alt={isCompliant ? altText : undefined}
						className=" rounded-lg shadow-lg aspect-video object-cover object-center"
					/>
				</div>
				<div className="hidden lg:flex items-center lg:w-2/5 bg-white/90 text-background p-8 rounded-lg shadow-lg">
					<blockquote
						className={twMerge(
							"text-xl/normal",
							"font-bold",
							"text-center",
							isCompliant && "text-blueZodiac",
						)}
					>
						{quote}
					</blockquote>
				</div>
			</div>
		</Container>
	);
}

export default MissionStatement;
