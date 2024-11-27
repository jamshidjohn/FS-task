import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: 'teal.400',
				color: 'white',
			},
		},
	},
});

export default theme;
