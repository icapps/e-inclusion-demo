import {
	type PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

export type AppStateContextProps = PropsWithChildren & {
	defaultValue?: AppStateContext;
};

export type AppStateContext = {
	isCompliant: boolean;
	toggleCompliancy: (newValue?: boolean) => void;
};

const initialState: AppStateContext = {
	isCompliant: false,
	toggleCompliancy: () => {},
};

const AppStateContext = createContext<AppStateContext>(initialState);

export const useAppState = () => useContext(AppStateContext);

function AppStateProvider({ children, defaultValue }: AppStateContextProps) {
	const params = new URLSearchParams(window.location.search);
	const compliantParam = params.get("compliant") === "true";

	const [isCompliant, setIsCompliant] = useState(
		defaultValue?.isCompliant || compliantParam,
	);

	useEffect(() => {
		if (isCompliant) {
			params.set("compliant", "true");
		} else {
			params.delete("compliant");
		}

		const newUrl = `${window.location.pathname}${
			params.size > 0 ? `?${params.toString()}` : ""
		}`;
		window.history.replaceState({}, "", newUrl);
	}, [isCompliant, params.delete, params.set, params.size, params.toString]);

	const toggleCompliancy = (newValue?: boolean) => {
		setIsCompliant((prev) => (newValue !== undefined ? newValue : !prev));
	};

	return (
		<AppStateContext.Provider value={{ isCompliant, toggleCompliancy }}>
			{children}
		</AppStateContext.Provider>
	);
}

export default AppStateProvider;
