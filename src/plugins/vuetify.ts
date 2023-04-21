import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import defaultThemes from './theme';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createVuetify } from 'vuetify';

// ! This is Labs workaround, need to update later //
import * as labs from 'vuetify/labs/components';


export default createVuetify({
	components: {
		components,
		...labs,
	},
	directives,
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		}
	},
	theme: {
		defaultTheme: 'light',
		themes: {
			...defaultThemes,
		},
	},
});
