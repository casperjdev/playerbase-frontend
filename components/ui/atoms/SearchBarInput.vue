<script setup lang="ts">
const inputRef = useTemplateRef('input');
const query = defineModel({ type: String });

const adjustSize = () => {
	const input = inputRef.value!;
	const minWidth = 1;
	const length = input.value.length < 1 ? input.placeholder.length : input.value.length;
	input.style.width = `${Math.max(length, minWidth)}ch`;
};

onMounted(() => {
	adjustSize();
});
</script>

<template>
	<input
		ref="input"
		class="text-start outline-none bg-transparent border-b-2 border-b-green-800 text-4xl text-black placeholder:text-green-800 placeholder:text-opacity-25"
		type="text"
		placeholder="Czego szukasz?"
		v-model="query"
		@input="adjustSize" />
</template>
