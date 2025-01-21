<script setup lang="ts">
defineProps<{
	query: string;
}>();
</script>

<template>
	<NuxtLink
		class="bg-green-800 text-white p-4"
		v-if="query"
		:to="{ path: 'search', query: { q: query } }"
		>Szukaj >>></NuxtLink
	>
	<div class="bg-green-800 text-white p-4 opacity-25" v-else>Szukaj >>></div>
</template>
