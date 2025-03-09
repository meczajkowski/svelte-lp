<script lang="ts">
	import ServiceCard from '$lib/components/services/ServiceCard.svelte';
	import type { ServiceBasic } from '$lib/types';

	type Props = {
		services: ServiceBasic[];
	};

	let { services }: Props = $props();
</script>

<div class="service-grid">
	{#each services as service}
		<div class="service-grid__item">
			<ServiceCard
				title={service.title}
				description={service.description}
				imageUrl={service.imageUrl}
				href={service.href}
			/>
		</div>
	{/each}
</div>

<style>
	.service-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		margin: 2rem 0;
	}

	@media (max-width: 768px) {
		.service-grid {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
			gap: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.service-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
