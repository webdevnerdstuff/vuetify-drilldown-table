import { defineStore } from 'pinia';
import packageJson from '@root/package.json';


export const useCoreStore = defineStore('core', () => {
	const packageName = packageJson.name;
	const storageName = 'vuetify-drilldown-table';

	// Links //
	const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;
	const links = {
		changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
		github: repoBaseUrl,
		githubProfile: 'https://github.com/webdevnerdstuff',
		license: `${repoBaseUrl}/blob/main/LICENSE.md`,
		npm: `https://www.npmjs.com/package/${packageName}`,
		vue: 'https://vuejs.org/',
		vueUse: 'https://vueuse.org/',
		vuetify: 'https://vuetifyjs.com/',
		vuetifyGithub: 'https://github.com/vuetifyjs/vuetify',
	};

	const tableHeaders = [
		{
			align: 'start',
			filterable: true,
			key: 'name',
			sortable: true,
			title: 'Name',
			width: '20%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'type',
			sortable: false,
			title: 'Type',
			width: '20%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'default',
			sortable: false,
			title: 'Default',
		},
		{
			align: 'start',
			filterable: false,
			key: 'desc',
			sortable: false,
			title: 'Description',
		},
	];

	const actions = {
		setLocalStorage(val: string): string {
			const oldValue = localStorage.getItem(storageName);
			const newValue = val ?? oldValue;

			localStorage.setItem(storageName, newValue);
			return newValue;
		},
		setTheme(val: string): string {
			const themeName = val === 'dark' ? 'light' : 'dark';
			const currentTheme = localStorage.getItem(`${storageName}-theme`);
			const newTheme = themeName ?? currentTheme;

			localStorage.setItem(`${storageName}-theme`, newTheme);
			return newTheme;
		},
	};

	const getters = {
		getLocalStorage: () => (): unknown => {
			const value = localStorage.getItem(storageName);
			return value;
		},
		getTheme: () => {
			const value = localStorage.getItem(`${storageName}-theme`);
			return value;
		},
	};

	return {
		...actions,
		...getters,
		links,
		package: packageJson,
		pluginVersion: packageJson.version,
		storageName,
		tableHeaders,
	};
});
