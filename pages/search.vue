<script setup lang="ts">
import { VueSpinnerTail } from 'vue3-spinners';
import Result from '~/components/ui/organisms/Result.vue';
</script>

<template>
	<Suspense>
		<template #fallback>
			<div class="grid place-items-center grid-flow-row gap-8">
				<VueSpinnerTail size="64" color="#166534" />
				<h1 class="text-green-800">Chwileczkę...</h1>
			</div>
		</template>
		<Result />
	</Suspense>
</template>
