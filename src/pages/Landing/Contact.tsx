import { Button, Container, Input, Typography } from "@/components";
import { useForm } from "@/hooks";
import { useAppState } from "@/providers";
import { type FormEvent, useEffect, useRef } from "react";

function Contact() {
	const formRef = useRef<HTMLFormElement>(null);
	const { isCompliant } = useAppState();
	const { validate, errors } = useForm(formRef);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		if (!isCompliant) return;
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
			<Typography variant="h2" as="h1" className="mb-8">
				Contact
			</Typography>

			<form onSubmit={handleSubmit} noValidate={isCompliant} ref={formRef}>
				{isCompliant ? (
					<>
						<Input
							type="text"
							name="name"
							label="Name"
							placeholder="John Doe"
							error={errors?.name}
							required
						/>
						<Input
							type="email"
							name="email"
							label="E-mail"
							placeholder="john.doe@example.com"
							error={errors?.email}
							required
						/>
						<Input
							label="Message"
							name="message"
							placeholder="Ad culpa duis aute veniam ullamco in cillum cupidatat cupidatat"
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
							placeholder="Name"
							className="w-full mb-4 p-3 bg-transparent border-2"
							required
						/>
						<input
							type="text"
							placeholder="E-mail address"
							className="w-full mb-4 p-3 bg-transparent border-2"
							required
						/>

						<textarea
							className="w-full p-3 bg-transparent border-2"
							rows={10}
							placeholder="Message"
							required
						/>

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
