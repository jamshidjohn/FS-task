import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ForecastCard from './ForecastCard';

const WeatherDisplay = ({ weatherData }) => {
	const { location, current, forecast } = weatherData;

	return (
		<Box p={6} bg='teal.500' color='white' textAlign='center'>
			<Text fontSize='3xl' fontWeight='bold'>
				{location.name}
			</Text>
			<Text fontSize='6xl'>{current.temp_c}°C</Text>
			<Text fontSize='xl'>{current.condition.text}</Text>
			<Flex justify='center' mt={6}>
				{forecast.forecastday.map((day, index) => (
					<ForecastCard key={index} day={day} />
				))}
			</Flex>
		</Box>
	);
};

export default WeatherDisplay;
