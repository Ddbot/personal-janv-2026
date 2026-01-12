import { ThemeProvider } from '@/contexts/ThemeContext';
import { LangProvider } from '@/contexts/LangContext';
export default function Providers({ children }) {
	return (
		<ThemeProvider>
			<LangProvider>
                {children}
			</LangProvider>
		</ThemeProvider>
	);
}
