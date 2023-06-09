<template>
	<v-row>
		<v-col
			id="props"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Props
			</h2>

			<div>
				Most of the Vuetify props for both <code class="inline-code">VDataTable</code> and <code
					class="inline-code">VDataTableServer</code> components work as intended. Any specified props below may have
				different default values. Please refer to the <a
					:href="store.links.vuetify"
					target="_blank"
				>Vuetify</a> documentation for specific props not shown here.
			</div>
		</v-col>

		<v-col cols="12">
			<FeaturesTable
				:headers="store.tableHeaders"
				:items="propsStore.allProps"
				section-id="props-all"
				section-title="All Props"
				subtitle="These all of the available props"
			/>

			<FeaturesTable
				:headers="store.tableHeaders"
				:items="propsStore.tableLoaderProps"
				section-id="props-table-loader"
				section-title="Table Loader"
				subtitle="These are all props intended for the table loader"
			/>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';
import { usePropsStore } from '@/stores/props';
import { FeaturesTable } from '@/documentation/components';

const classes = inject('classes');
const store = useCoreStore();
const propsStore = usePropsStore();
</script>

<style lang="scss" scoped>
</style>
