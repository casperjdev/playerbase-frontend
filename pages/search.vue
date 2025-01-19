<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<h1>{{ route.query.q }}</h1>
</template>
