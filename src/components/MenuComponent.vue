<template>
	<v-list :color="drawerOptions.color ? 'white' : 'primary'">
		<v-list-item
			v-for="item in menuItems"
			:key="item.title"
			:class="{
				'v-list-item--active': active === item.href,
			}"
			:color="drawerOptions.color ? 'white' : 'primary'"
			:href="item.href"
			link
			:title="item.title"
		>
			<template v-slot:prepend>
				<v-icon :icon="item.icon"></v-icon>
			</template>
		</v-list-item>
	</v-list>
</template>

<script setup lang="ts">
import { inject, onMounted, reactive, ref } from 'vue';

const drawerOptions = inject('drawerOptions');

const active = ref(true);
const menuItems = reactive([
	{ title: 'Home', icon: 'mdi-home', href: '#home' },
	{ title: 'Installation', icon: 'mdi-plus-thick', href: '#installation' },
	{ title: 'Description', icon: 'mdi-information-outline', href: '#description' },
	{ title: 'Props', icon: 'mdi-cog', href: '#props' },
	{ title: 'Events', icon: 'mdi-calendar-star', href: '#events' },
	{ title: 'Slots', icon: 'mdi-slot-machine', href: '#slots' },
	{ title: 'SASS Variables', icon: 'mdi-sass', href: '#sass-variables' },
	{ title: 'Example', icon: 'mdi-code-json', href: '#example' },
	{ title: 'Dependencies', icon: 'mdi-asterisk-circle-outline', href: '#dependencies' },
	{ title: 'License', icon: 'mdi-card-account-details-outline', href: '#license' },
	{ title: 'Legal', icon: 'mdi-scale-balance', href: '#legal' },
]);

onMounted(() => {
	smoothScroll();

	active.value = window.location.hash || '#home';
});

function smoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e) => {
			e.preventDefault();

			const hash = anchor.hash;
			const id = hash.replace('#', '');
			const yOffset = -55;
			const element = document.getElementById(id);
			const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			active.value = hash;

			window.location.hash = hash;
			window.scrollTo({ top: y, behavior: 'smooth' });
		});
	});
}

</script>

<style lang="scss"></style>
