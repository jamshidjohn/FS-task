import { useEffect, useState } from 'react';
import { getWeatherData } from '../api/weather';
import Navbar from '../components/Navbar';
import WeatherDisplay from '../components/WeatherDisplay';

export default function Home() {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		async function fetchWeather() {
			const data = await getWeatherData('London');
			setWeatherData(data);
		}
		fetchWeather();
	}, []);

	return (
		<div>
			<Navbar />
			{weatherData ? <WeatherDisplay weatherData={weatherData} /> : <p>Loading...</p>}
		</div>
	);
}
