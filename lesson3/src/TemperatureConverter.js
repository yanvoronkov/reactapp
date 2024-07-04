import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TemperatureConverter() {
	const [celsius, setCelsius] = React.useState('');
	const [fahrenheit, setFahrenheit] = React.useState('');

	const handleCelsiusChange = (event) => {
		setCelsius(event.target.value);
		setFahrenheit((parseFloat(event.target.value) * 9 / 5) + 32);
	};

	const handleFahrenheitChange = (event) => {
		setFahrenheit(event.target.value);
		setCelsius((parseFloat(event.target.value) - 32) * 5 / 9);
	};

	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="outlined-controlled"
				label="по Цельсию"
				value={celsius}
				onChange={handleCelsiusChange}
			/>
			<TextField
				id="outlined-uncontrolled"
				label="по Фаренгейту"
				value={fahrenheit}
				onChange={handleFahrenheitChange}
			/>
		</Box>
	);
}

export { TemperatureConverter };