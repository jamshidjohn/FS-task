import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import ForecastCard from './ForecastCard';

const WeatherDisplay = ({ weatherData }) => {
	const { location, current, forecast } = weatherData;

	return (
		<Box p={{ base: 4, md: 6 }} bg='teal.500' color='white' textAlign='center'>
			{/* Location Name */}
			<Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight='bold'>
				{location.name}
			</Text>

			{/* Current Temperature */}
			<Text fontSize={{ base: '5xl', md: '6xl' }}>{current.temp_c}°C</Text>
			<Text fontSize={{ base: 'md', md: 'xl' }}>{current.condition.text}</Text>

			{/* Forecast Section */}
			<SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={4} mt={{ base: 4, md: 6 }}>
				{forecast.forecastday.map((day, index) => (
					<ForecastCard key={index} day={day} />
				))}
			</SimpleGrid>
		</Box>
	);
};

export default WeatherDisplay;
