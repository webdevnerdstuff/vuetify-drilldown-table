import { defineStore } from 'pinia';
import { useCoreStore } from './index';


export const useMenuStore = defineStore('menu', () => {
	const coreStore = useCoreStore();
	const links = coreStore.links;

	const vuetifyLinks = [
		{
			icon: 'mdi:mdi-github',
			key: 'vuetify-github',
			link: links.vuetifyGithub,
			title: 'Github',
		},
		{
			key: 'vuetify',
			link: `${links.vuetify}en/components/all/`,
			title: 'Vuetify Components',
		},
		{
			icon: 'mdi:mdi-table',
			key: 'vuetify',
			link: `${links.vuetify}en/api/v-data-table/`,
			title: 'VDataTable',
		},
		{
			icon: 'mdi:mdi-table-network',
			key: 'vuetify',
			link: `${links.vuetify}en/api/v-data-table-server/`,
			title: 'VDataTableServer',
		},
		{
			icon: 'mdi:mdi-form-textbox',
			key: 'v-text-field',
			link: `${links.vuetify}en/api/v-text-field/`,
			title: 'VTextField',
		},
	];

	const menuItems = [
		{
			href: '#home',
			icon: 'mdi:mdi-home',
			title: 'Home',
		},
		{
			href: '#installation',
			icon: 'mdi:mdi-plus-thick',
			title: 'Installation',
		},
		{
			href: '#description',
			icon: 'mdi:mdi-information-outline',
			title: 'Description',
		},
		{
			href: '#props',
			icon: 'mdi:mdi-cog',
			items: [
				{
					href: '#props',
					icon: 'mdi:mdi-cog',
					key: 'shared-props',
					title: 'Props',
				},
				{
					href: '#props-table-loader',
					icon: 'mdi:mdi-circle-outline',
					key: 'props-table-loader',
					title: 'Table Loader',
				},
			],
			title: 'Props',
		},
		{
			href: '#cell-rendering',
			icon: 'mdi:mdi-table-cog',
			title: 'Cell Rendering',
		},
		{
			href: '#events',
			icon: 'mdi:mdi-calendar-star',
			title: 'Events',
		},
		{
			href: '#slots',
			icon: 'mdi:mdi-slot-machine',
			title: 'Slots',
		},
		{
			href: '#example',
			icon: 'mdi:mdi-code-json',
			title: 'Example',
		},
		{
			href: '#dependencies',
			icon: 'mdi:mdi-asterisk-circle-outline',
			title: 'Dependencies',
		},
		{
			href: '#license',
			icon: 'mdi:mdi-card-account-details-outline',
			title: 'License',
		},
		{
			href: '#legal',
			icon: 'mdi:mdi-scale-balance',
			title: 'Legal',
		},
	];

	return {
		menuItems,
		vuetifyLinks,
	};
});
