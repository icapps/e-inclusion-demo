import { type FormEvent, type RefObject, useEffect, useState } from "react";

const formErrors: Record<keyof ValidityState, string> = {
	badInput: "Please enter a valid value.",
	customError: "Please double-check the value.",
	patternMismatch: "Please match the requested format.",
	rangeOverflow: "Please enter a smaller value.",
	rangeUnderflow: "Please enter a larger value.",
	stepMismatch: "Please select a valid value.",
	tooLong: "Please shorten this text.",
	tooShort: "Please lengthen this text.",
	typeMismatch: "Please match the requested format.",
	valueMissing: "Please fill in this field.",
	valid: "",
};

const determineValidationMessage = (validity: ValidityState) => {
	for (const key in validity) {
		if (validity[key as keyof ValidityState]) {
			return formErrors[key as keyof ValidityState];
		}
	}

	return false;
};

function useForm(formRef: RefObject<HTMLFormElement>) {
	const [errors, setErrors] = useState<Record<string, string>>();

	const validate = (e: FormEvent<HTMLFormElement>) => {
		formRef.current?.classList.add("validated");

		const isValid = formRef.current?.checkValidity();
		if (!isValid) {
			if (!formRef.current?.checkValidity()) {
				e.preventDefault();
				(
					formRef.current?.querySelector("input:invalid, textarea:invalid") as
						| HTMLInputElement
						| HTMLTextAreaElement
				)?.focus();
				return false;
			}
		}

		return true;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const formElements =
			formRef.current?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
				"input, textarea",
			) ?? [];

		const onInvalid: EventListener = (e) => {
			const target = e.target as HTMLInputElement | HTMLTextAreaElement;
			const message = determineValidationMessage(target.validity);
			if (message) {
				setErrors((prevErrors) => ({
					...prevErrors,
					[target.name]: message,
				}));
			}
		};

		const onInput: EventListener = (e) => {
			const target = e.target as HTMLInputElement | HTMLTextAreaElement;
			if (errors?.[target.name]) {
				setErrors((prevErrors) => {
					const newErrors = { ...prevErrors };
					delete newErrors[target.name];
					return newErrors;
				});
			}
		};

		for (const input of formElements) {
			input.addEventListener("invalid", onInvalid);
			input.addEventListener("input", onInput);
		}

		return () => {
			for (const input of formElements) {
				input.removeEventListener("invalid", onInvalid);
				input.removeEventListener("input", onInput);
			}
		};
	}, [formRef.current]);

	return {
		errors,
		validate,
	};
}

export default useForm;
