<template>
	<v-row>
		<v-col
			id="description"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#description"
				>#</a>
				Description
			</h2>

			<v-row>
				<v-col cols="12">
					The Vuetify Drilldown Table is a powerful component that enhances the functionality of the Vuetify framework's
					<code class="inline-code">v-data-table</code> and <code class="inline-code">v-data-table-server</code>. It
					provides a recursive table structure,
					allowing you to display hierarchical data in a nested format.
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					The Drilldown Table functionality is designed to handle large and complex datasets by utilizing client-side
					processing. It leverages the <code class="inline-code">v-data-table</code> capabilities to efficiently display
					data, while also
					providing the ability to drill down into nested levels of data.
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					The Drilldown Table Server functionality is designed to handle large and complex datasets by utilizing
					server-side processing. It leverages the <code class="inline-code">v-data-table-server</code> server's
					capabilities to efficiently
					retrieve and display data, while also providing the ability to drill down into nested levels of data.
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					By leveraging the recursive nature of the Drilldown Table, you can create expandable rows that reveal
					additional nested data when clicked. This enables you to present complex information in a structured and
					user-friendly manner. Users can navigate through the levels of data by expanding or collapsing rows, revealing
					deeper levels of information as needed.
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					In summary, the Vuetify Drilldown Table extends the functionality of the <code
						class="inline-code">v-data-table</code> and
					<code class="inline-code">v-data-table-server</code> components by providing a recursive table structure. It
					requires an
					understanding of recursiveness to effectively utilize its capabilities and display hierarchical data in a nested
					format. With the Drilldown Table, you can present complex datasets in a user-friendly manner, allowing users to
					explore hierarchical relationships at multiple levels.
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-alert
						color="primary"
						density="compact"
						icon="$info"
					>
						To understand how to use the Drilldown Table effectively, it is important to have a grasp on recursive
						structures. Recursiveness enables a function or component to call itself repeatedly, creating a nested
						structure. In the case of the Drilldown Table, this feature makes it easier for users to navigate through
						multiple levels of nested data, facilitating the exploration of hierarchical relationships.</v-alert>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';

const classes = inject('classes');
const links = inject('links');
</script>

<style lang="scss" scoped>
</style>

