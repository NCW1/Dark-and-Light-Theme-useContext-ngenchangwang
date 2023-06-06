import { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';
import sunImage from './assets/sun.gif';
import moonImage from './assets/moon.png';

export default function Form() {
	const { theme, setTheme } = useContext(ThemeContext);
	const [isButtonClicked, setIsButtonClicked] = useState(false);
	const [title, setTitle] = useState('Welcome');

	const updatedTheme = theme === 'light' ? 'dark' : 'light';

	const handleClick = () => {
		setTheme(updatedTheme);
		setIsButtonClicked(true);
	};

	const handleTitleChange = (newTitle) => {
		setTitle(newTitle);
	};

	const renderThemeImage = () => {
		if (theme === 'light') {
			return <img src={sunImage} alt={theme} />;
		}
		else {
			return <img src={moonImage} alt={theme} />;
		}
	};

	return (
		<Panel title={title}>
			<div>
				<Button onClick={() => handleTitleChange('Sign Up')}>Sign Up</Button>
				<Button onClick={() => handleTitleChange('Login')}>Login</Button>
				<button
					className={theme === 'light' ? 'button-light' : 'button-dark'}
					onClick={handleClick}
				>
					Toggle Theme
				</button>
			</div>
			<div className='theme-image'>{renderThemeImage()}</div>
		</Panel>
	);
}

function Panel({ title, children }) {
	const { theme } = useContext(ThemeContext);
	const className = 'panel-' + theme;

	return (
		<section className={className}>
			<h1>{title}</h1>
			{children}
		</section>
	);
}

function Button({ children, onClick }) {
	const { theme } = useContext(ThemeContext);
	const className = 'button-' + theme;

	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
}