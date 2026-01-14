import { ThemeProvider } from '@/contexts/ThemeContext';
import { LangProvider } from '@/contexts/LangContext';
import { AuthProvider } from '@/contexts/AuthContext';
export default function Providers({ children }) {
	return (
		<ThemeProvider>
			<LangProvider>
                {children}
			</LangProvider>
		</ThemeProvider>
	);
}

export function UserProvider({ children }) {
    // return <AuthProvider />
}
