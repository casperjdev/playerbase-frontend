<script setup lang="ts">
import { VueSpinnerTail } from 'vue3-spinners';
import Result from '~/components/ui/organisms/Result.vue';
</script>

<template>
	<div class="w-full h-full">
		<Transition name="fade" mode="out-in">
			<Suspense>
				<template #fallback>
					<div class="h-full flex justify-center items-center grid-flow-row gap-8">
						<VueSpinnerTail size="64" color="#166534" />
						<h1 class="text-green-800">Szukanie najtrafniejszych ofert...</h1>
					</div>
				</template>
				<Result />
			</Suspense>
		</Transition>
	</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
