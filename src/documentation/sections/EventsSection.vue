<template>
	<v-row>
		<v-col
			id="events"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#events"
				>#</a>
				Events
			</h2>

			<div>
				Not all of the default Vuetify events for both <code class="inline-code">VDataTable</code> and <code
					class="inline-code"
				>VDataTableServer</code> components work as intended. In most cases the <code
					class="inline-code">update:drilldown</code> and <code class="inline-code">update:options</code> will be the
				events you need. Any specified events below may have different default
				functionality. Please refer to
				the <a
					:href="store.links.vuetify"
					target="_blank"
				>Vuetify</a> documentation for specific events not shown here.
			</div>
		</v-col>

		<v-col cols="12">
			<FeaturesTable
				:headers="tableHeaders"
				:items="events"
				section-id="events-all"
				section-title="All Events"
				subtitle="These all of the available events"
				table-class="events-table"
			/>
		</v-col>
	</v-row>
</template>


<script setup>
import { inject, reactive } from 'vue';
import { useCoreStore } from '@/stores/index';
import { FeaturesTable } from '@/documentation/components';

const classes = inject('classes');
const store = useCoreStore();

const events = reactive([
	{
		desc: 'Currently not working/supported',
		name: 'click:row',
	},
	{
		desc: 'Emits an even when a rows checkbox has been clicked. It will pass the rows <code class="inline-code">item</code> object',
		name: 'click:row:checkbox',
	},
	{
		desc: 'Emits when a row is expanded.<br />This should be used instead of the <code class="inline-code">update:expanded</code> event as it holds the information you will need to determine which drilldown table is being updated.',
		name: 'update:drilldown',
	},
	{
		desc: 'This event will emit the rows props when a row is expanded, but it will not have the necessary information about which drilldown table it is being emitted from.<br />You will most likely want to use the <code class="inline-code">update:drilldown</code> event instead.',
		name: 'update:expanded',
	},
	{
		desc: 'Currently not working/supported',
		name: 'update:groupBy',
	},
	{
		desc: 'This event will emit the <code class="inline-code">itemsPerPage</code> value when changed only on level 1. It will not have the necessary information about which drilldown table is being updated.<br />You should use the <code class="inline-code">update:options</code> event instead.',
		name: 'update:itemsPerPage',
	},
	{
		desc: 'Currently not working/supported',
		name: 'update:modelValue',
	},
	{
		desc: 'Emits an event when one of the following table options are updated. <code class="inline-code">itemsPerPage</code>, <code class="inline-code">page</code>, <code class="inline-code">search</code>, <code class="inline-code">sortBy</code>. You will most likely want to use this over the default <code class="inline-code">update:itemsPerPage</code>, <code class="inline-code">update:page</code>, and <code class="inline-code">update:sortBy</code> events as they do not have the necessary information about which drilldown table is being updated.',
		name: 'update:options',
	},
	{
		desc: 'This event will emit the <code class="inline-code">page</code> value when changed only on level 1. It will not have the necessary information about which drilldown table is being updated. <br />You should use the <code class="inline-code">update:options</code> event instead.',
		name: 'update:page',
	},
	{
		desc: 'This event will emit the <code class="inline-code">search</code> value when changed only on level 1. It will not have the necessary information about which drilldown table is being updated. <br />You should use the <code class="inline-code">update:options</code> event instead.',
		name: 'update:search',
	},
	{
		desc: 'This event will emit the <code class="inline-code">sortBy</code> value when changed only on level 1. It will not have the necessary information about which drilldown table is being updated.<br />You should use the <code class="inline-code">update:options</code> event instead.',
		name: 'update:sortBy',
	},
]);

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
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];

</script>
