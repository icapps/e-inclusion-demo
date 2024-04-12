import { useLocalStorage } from "@/hooks";
import { type PropsWithChildren, createContext, useContext } from "react";

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
	const [isCompliant, setIsCompliant] = useLocalStorage(
		"isCompliant",
		defaultValue?.isCompliant || initialState.isCompliant,
	);

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
