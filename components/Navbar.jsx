import { Box, Text } from '@chakra-ui/react';

const Navbar = () => {
	return (
		<Box bg='teal.600' p={4} textAlign='center' fontSize={{ base: 'lg', md: 'xl' }} color='white'>
			<Text fontWeight='bold'>Weather App</Text>
		</Box>
	);
};

export default Navbar;
