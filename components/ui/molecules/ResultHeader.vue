<script setup>
const route = useRoute();
</script>

<template>
	<div class="p-8 space-y-8">
		<h1 class="text-7xl font-bold text-center">Shoe<b class="text-green-800">Base</b></h1>
		<h1 class="text-4xl text-center">Wyniki wyszukiwania dla: {{ route.query.q }}</h1>
	</div>
</template>
