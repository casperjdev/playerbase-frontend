<script setup>
const route = useRoute();
</script>

<template>
	<h1 class="text-4xl text-center">Wyniki wyszukiwania dla: {{ route.query.q }}</h1>
</template>
