import { LinkedIn } from "@/assets/icons";
import { useAppState } from "@/providers";
import { Container, Typography } from ".";

const ADDRESS = "Hangar 26/27, Rijnkaai 100 B16, 2000 Antwerp Belgium";

function footer() {
	const { isCompliant } = useAppState();

	return (
		<Container className="my-0 md:my-0 lg:my-0 xl:my-0">
			<div className="py-6 border-t border-opacity-50 lg:flex items-end">
				<div>
					{isCompliant && (
						<Typography variant="h6" as="h2" className="mr-2">
							Adres
							<span className="sr-only">: </span>
						</Typography>
					)}
					<p>
						{isCompliant ? (
							<a
								target="_blank"
								href="https://www.google.com/maps/dir/?api=1&destination=icapps"
								rel="noreferrer"
							>
								{ADDRESS}
							</a>
						) : (
							ADDRESS
						)}
					</p>
				</div>
				<div className="ml-auto mt-4 lg:mt-0">
					<a
						href="https://www.linkedin.com/company/icapps"
						target="_blank"
						rel="noreferrer"
						className="block lg:p-2 lg:-mr-2"
					>
						<LinkedIn title="LinkedIn" />
						{isCompliant && (
							<span className="sr-only">Go to icapps' LinkedIn page</span>
						)}
					</a>
				</div>
			</div>
		</Container>
	);
}

export default footer;
