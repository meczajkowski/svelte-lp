<script lang="ts">
	import { ButtonVariant } from '$lib/types';
	import type { ServiceBasic } from '$lib/types';
	import Button from '$lib/components/ui/Button.svelte';
	import Section from '$lib/components/ui/layout/Section.svelte';
	import SectionHeader from '$lib/components/ui/layout/SectionHeader.svelte';
	import ServiceGrid from '$lib/components/services/ServiceGrid.svelte';

	type ServicesData = {
		title: string;
		description: string;
		ctaText: string;
		ctaHref: string;
		services: ServiceBasic[];
	};

	type Props = {
		data: ServicesData;
	};

	let { data }: Props = $props();
	const { title, description, ctaText, ctaHref, services } = data;
</script>

<Section id="uslugi">
	<SectionHeader {title} {description} />
	<ServiceGrid {services} />
	<div class="services__cta">
		<Button href={ctaHref} variant={ButtonVariant.Secondary}>
			{ctaText}
		</Button>
	</div>
</Section>

<style>
	.services__cta {
		margin-top: 2rem;
		text-align: center;
	}
</style>
