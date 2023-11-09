import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import defaultThemes from './theme';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createVuetify } from 'vuetify';
import { fa } from 'vuetify/iconsets/fa-svg';


export default createVuetify({
	components: {
		components,
	},
	directives,
	icons: {
		aliases,
		defaultSet: 'mdi',
		sets: {
			fa,
			mdi,
		},
	},
	theme: {
		defaultTheme: 'light',
		themes: {
			...defaultThemes,
		},
	},
});
