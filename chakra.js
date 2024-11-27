import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: {
			'html, body': {
				margin: 0,
				padding: 0,
				boxSizing: 'border-box',
			},
		},
	},
});

const Chakra = ({ children }) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Chakra;
