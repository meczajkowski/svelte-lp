<script lang="ts">
	import { ButtonVariant } from '$lib/types';
	import type { ServiceBasic } from '$lib/types';
	import Button from '../ui/Button.svelte';
	import Section from '../ui/Section.svelte';
	import SectionHeader from '../ui/SectionHeader.svelte';
	import ServiceGrid from '../services/ServiceGrid.svelte';

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
