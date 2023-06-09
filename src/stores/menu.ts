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
			href: '#usage',
			icon: 'mdi:mdi-power-plug',
			title: 'Usage',
		},
		{
			href: '#examples',
			icon: 'mdi:mdi-code-json',
			title: 'Examples',
		},
		{
			href: '#playground',
			icon: 'mdi:mdi-seesaw',
			title: 'Playground',
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
					href: '#props-cell-rendering',
					icon: 'mdi:mdi-table-cog',
					key: 'props-cell-rendering',
					title: 'Cell Rendering',
				},
				{
					href: '#props-colors',
					icon: 'mdi:mdi-palette',
					key: 'props-colors',
					title: 'Colors',
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
			href: '#events',
			icon: 'mdi:mdi-calendar-star',
			items: [
				{
					href: '#events',
					icon: 'mdi:mdi-calendar-star',
					key: 'events-all',
					title: 'All Events',
				},
				{
					href: '#events-drilldown',
					icon: 'mdi:mdi-table-arrow-down',
					key: 'events-drilldown',
					title: 'Drilldown Event',
				},
			],
			title: 'Events',
		},
		{
			href: '#slots',
			icon: 'mdi:mdi-slot-machine',
			items: [
				{
					href: '#slots',
					icon: 'mdi:mdi-plus',
					key: 'custom-slots',
					title: 'Custom Slots',
				},
				{
					href: '#slots-supported',
					icon: 'mdi:mdi-check',
					key: 'slots-supported',
					title: 'Supported',
				},
				{
					href: '#slots-not-supported',
					icon: 'mdi:mdi-close',
					key: 'slots-not-supported',
					title: 'Not Supported',
				},
			],
			title: 'Slots',
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
