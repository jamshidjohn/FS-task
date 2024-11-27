import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ForecastCard = ({ day }) => {
	const { date, day: dayData } = day;

	return (
		<Box
			bg='teal.700'
			p={{ base: 2, md: 4 }}
			borderRadius='md'
			textAlign='center'
			width={{ base: '80px', md: '100px' }}
		>
			<Text fontSize={{ base: 'xs', md: 'sm' }}>{new Date(date).toDateString()}</Text>
			<Image
				src={dayData.condition.icon}
				alt={dayData.condition.text}
				boxSize={{ base: '40px', md: '50px' }}
				mx='auto'
				my={2}
			/>
			<Text fontSize={{ base: 'sm', md: 'lg' }}>{dayData.avgtemp_c}°C</Text>
		</Box>
	);
};

export default ForecastCard;
