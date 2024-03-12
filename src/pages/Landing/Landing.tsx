import { Layout } from "@/components";
import MissionStatement from "@/pages/Landing/MissionStatement";

import Contact from "./Contact";
import News from "./News";

function Landing() {
	return (
		<Layout>
			<MissionStatement
				title="About us and our mission"
				body="Aliquip anim velit nulla anim mollit do officia officia. Ullamco eu enim id eu ullamco. Esse minim esse nisi reprehenderit magna dolore dolore qui nisi esse nisi irure sit. Laboris minim esse nisi elit dolore nostrud ad ullamco tempor. Sunt magna sit mollit anim. Laborum irure proident eiusmod adipisicing id adipisicing. Eu sunt in nisi in fugiat eiusmod quis aute duis nisi cupidatat excepteur."
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
