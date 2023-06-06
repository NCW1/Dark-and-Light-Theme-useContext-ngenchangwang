import { useState } from 'react';
import ThemeContext from './ThemeContext';
import Form from './Form';
import Footer from './Footer';
import './App.css';

export default function App() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Form />
			<label>
				<input
					type='checkbox'
					checked={theme === 'dark'}
					onChange={(e) => {
						setTheme(e.target.checked ? 'dark' : 'light')
					}}
				/>
				Use Dark Mode
			</label>
			<Footer />
		</ThemeContext.Provider>
	)
}