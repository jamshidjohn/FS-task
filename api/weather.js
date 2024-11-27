import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeatherData = async location => {
	const response = await axios.get(`${BASE_URL}/forecast.json`, {
		params: {
			key: API_KEY,
			q: location,
			days: 7,
		},
	});
	return response.data;
};
