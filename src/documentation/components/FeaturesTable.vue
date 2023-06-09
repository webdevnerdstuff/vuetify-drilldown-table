<template>
	<v-row :id="sectionId">
		<v-col cols="12">
			<h3 :class="classes.h3">
				<a
					:class="classes.headerA"
					:href="`#${sectionId}`"
				>#</a>
				{{ sectionTitle }}
			</h3>
		</v-col>

		<v-col
			v-if="subtitle"
			cols="12"
		>
			<div v-html="subtitle"></div>
		</v-col>
	</v-row>

	<v-row>
		<v-col cols="12">
			<v-card>
				<v-card-title>
					<v-text-field
						v-model="search"
						append-icon="mdi:mdi-magnify"
						hide-details
						label="Search"
						single-line
						variant="underlined"
					></v-text-field>
				</v-card-title>

				<v-data-table
					v-bind="$attrs"
					class="features-table"
					:class="tableClass"
					:headers="headers"
					hide-default-footer
					:items="items"
					:items-per-page="-1"
					:search="search"
					:sort-by="[{ key: 'name', order: 'asc' }]"
				>
					<template #[`item.name`]="{ item }">
						<div
							:id="slugifyString(sectionId, item.raw.name)"
							class="name-item text-mono ml-n2"
						>
							<span class="text-primary">#</span>
							<a
								class="text-primary"
								:class="classes.appLink"
								:href="`#${slugifyString(sectionId, item.raw.name)}`"
							>{{ item.raw.name }}</a>
						</div>
					</template>

					<template #[`item.type`]="{ item }">
						<div class="text-success">
							{{ item.raw.type }}
						</div>
					</template>

					<template #[`item.default`]="{ item }">
						<div
							class="text-accent"
							v-html="item.raw.default"
						></div>
					</template>

					<template #[`item.desc`]="{ item }">
						<div v-html="item.raw.desc"></div>
					</template>
				</v-data-table>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useSlugifyString } from '@/documentation/composables/slugifyStringHelper';


const classes = inject('classes');

defineProps({
	headers: {
		default: () => [],
		type: Array,
	},
	items: {
		default: () => [],
		type: Array,
	},
	sectionId: {
		default: '',
		type: String,
	},
	sectionTitle: {
		default: null,
		type: String,
	},
	subtitle: {
		default: null,
		type: String,
	},
	tableClass: {
		default: null,
		type: String,
	},
});

const search = ref('');

function slugifyString(sectionId, name) {
	const id = sectionId ? `${sectionId}-${name}` : name;

	return useSlugifyString(id);
}
</script>

<style lang="scss">
.features-table {
	td {
		line-height: 2rem !important;

		> div {
			padding: 0.5rem 0 !important;
		}
	}
}
</style>
