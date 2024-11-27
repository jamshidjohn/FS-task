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
	breakpoints: {
		sm: '320px',
		md: '768px',
		lg: '1024px',
		xl: '1440px',
	},
});

export default theme;
