import { Landing } from "@/pages";
import { AppStateProvider } from "@/providers";

function App() {
	return (
		<AppStateProvider>
			<Landing />
		</AppStateProvider>
	);
}

export default App;
