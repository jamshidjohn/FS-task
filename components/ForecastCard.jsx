import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ForecastCard = ({ day }) => {
	const { date, day: dayData } = day;

	return (
		<Box bg='teal.700' p={4} borderRadius='md' m={2} textAlign='center' width='100px'>
			<Text fontSize='sm'>{new Date(date).toDateString()}</Text>
			<Image src={dayData.condition.icon} alt={dayData.condition.text} boxSize='50px' mx='auto' />
			<Text fontSize='lg'>{dayData.avgtemp_c}°C</Text>
		</Box>
	);
};

export default ForecastCard;
