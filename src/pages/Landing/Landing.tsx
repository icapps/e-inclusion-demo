import { Layout } from "@/components";
import MissionStatement from "@/pages/Landing/MissionStatement";

import Contact from "./Contact";
import News from "./News";

function Landing() {
	return (
		<Layout pageTitle="E-inclusion Demo">
			<MissionStatement
				title="About us and our mission"
				body="We are a team of passionate developers, designers, and project managers who love to create digital products. We want to use technology seamlessly to enrich your daily life. We are here to help you with your digital challenges and to make your ideas come to life."
				src="https://icapps.com/uploads/site/_1299xAUTO_fit_center-center_80_none/19418/icapps-79.webp"
				altText="Icapps team photo"
				quote="We want to use technology seamlessly to enrich your daily life."
			/>

			<News />
			<Contact />
		</Layout>
	);
}

export default Landing;
