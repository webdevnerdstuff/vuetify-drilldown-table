<template>
	<v-container fluid>
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
					class="my-3"
					contain
					height="200"
					src="../assets/vuetify-logo-light-atom.svg"
				/>
			</v-col>

			<v-col class="mb-4">
				<h1 class="v-heading text-h3 text-sm-h3 mb-4">
					Vuetify Drilldown Table
				</h1>
				<v-chip color="primary" size="small" variant="outlined">
					v{{ componentVersion }}
				</v-chip>
			</v-col>
		</v-row>

		<!-- Installation -->
		<v-row id="installation">
			<v-col class="mb-5" cols="12">
				<h2 :class="classes.h2">
					<a :class="classes.headerA" href="#installation">#</a>
					Installation
				</h2>

				<v-row>
					<v-col cols="12">
						<CodeBlock
							code="pnpm add vuetify-drilldown-table"
							highlightjs
							lang="plain"
						>
							<template #label>
								Using <a :href="links.pnpm" target="_blank">pnpm</a>:
							</template>
						</CodeBlock>
					</v-col>
					<v-col cols="12">
						<CodeBlock
							code="npm i vuetify-drilldown-table"
							highlightjs
							lang="plain"
						>
							<template #label>Using npm:</template>
						</CodeBlock>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- Description -->
		<DescriptionComponent />

		<!-- Usage -->
		<UsageComponent />

		<!-- Props -->
		<PropsComponent />

		<!-- Events -->
		<EventsComponent />

		<!-- Slots -->
		<SlotsComponent />

		<!-- SASS Variables -->
		<SassVariables />

		<!-- Example -->
		<ExampleComponent />

		<!-- Dependencies -->
		<DependenciesComponent />

		<!-- License -->
		<LicenseComponent />

		<!-- Legal -->
		<LegalComponent />
	</v-container>
</template>

<script setup lang="ts">
import { inject, provide, reactive, ref } from 'vue';
import packageInfo from '../../package.json';
import {
	DependenciesComponent,
	DescriptionComponent,
	EventsComponent,
	ExampleComponent,
	LegalComponent,
	LicenseComponent,
	PropsComponent,
	SassVariables,
	SlotsComponent,
	UsageComponent,
} from '@/components/docs';

const links: string[] = inject('links');

const classes: string[] = reactive({
	h2: 'v-heading text-h4 text-sm-h4 mb-3',
	h3: 'v-heading text-h5 text-sm-h5 mb-1',
	headerA: 'text-decoration-none text-right text-md-left',
	appLink: 'app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold',
});
const componentVersion: number = ref(packageInfo.version);

provide('classes', classes);
</script>

<style lang="scss">
</style>
