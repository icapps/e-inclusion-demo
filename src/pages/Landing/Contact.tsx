import { Button, Container, Input, Typography } from "@/components";
import { useForm } from "@/hooks";
import { useAppState } from "@/providers";
import { type FormEvent, useEffect, useRef } from "react";

function Contact() {
	const formRef = useRef<HTMLFormElement>(null);
	const { isCompliant } = useAppState();
	const { validate, errors } = useForm(formRef);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		if (!formRef.current) return;

		const isValid = validate(e);

		if (!isValid) return;

		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData);

		e.preventDefault();
		formRef.current.reset();
		alert(`
      Your message has been sent!

      Name: ${data.name}
      E-mail: ${data.email}
      Message: ${data.message}
    `);
	};

	useEffect(() => {
		if (!isCompliant) return;
	}, [isCompliant]);

	return (
		<Container narrow>
			<Typography variant="h2" as={isCompliant ? "h2" : "h1"} className="mb-8">
				{isCompliant ? "Contacteer ons" : "Contact"}
			</Typography>

			<form onSubmit={handleSubmit} noValidate ref={formRef}>
				{isCompliant ? (
					<>
						<Input
							type="text"
							name="name"
							label="Name"
							error={errors?.name}
							required
						/>
						<Input
							type="email"
							name="email"
							label="E-mail address"
							error={errors?.email}
							required
						/>
						<Input
							label="Message"
							name="message"
							error={errors?.message}
							multiline
							required
						/>

						<Button type="submit">Send your message</Button>
					</>
				) : (
					<>
						<input
							type="text"
							name="name"
							placeholder="Name"
							className="w-full mb-4 p-3 bg-transparent border-2 border-gray"
							required
						/>

						<input
							type="text"
							name="email"
							placeholder="E-mail address"
							className="w-full mb-4 p-3 bg-transparent border-2 border-gray"
							required
						/>

						<textarea
							name="message"
							className="w-full p-3 bg-transparent border-2 border-gray"
							rows={10}
							placeholder="Message"
							required
						/>

						{errors && (
							<span className="text-red">Please fill in all fields</span>
						)}

						<button
							type="submit"
							className="border-2 py-3 px-6 mt-2 block ml-auto"
						>
							Submit
						</button>
					</>
				)}
			</form>
		</Container>
	);
}

export default Contact;
