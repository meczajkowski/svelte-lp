<script lang="ts">
	import type { PortfolioItem } from '$lib/types';
	import Section from '$lib/components/ui/layout/Section.svelte';
	import SectionHeader from '$lib/components/ui/layout/SectionHeader.svelte';
	import PortfolioSlider from '$lib/components/portfolio/PortfolioSlider.svelte';

	type PortfolioData = {
		title: string;
		description: string;
		items?: PortfolioItem[];
	};

	type Props = {
		data: PortfolioData;
	};

	let { data }: Props = $props();
	const { title, description, items = [] } = data;
</script>

<Section id="realizacje">
	<SectionHeader {title} />
	<p class="portfolio-description">{description}</p>
	{#if items && items.length > 0}
		<PortfolioSlider {items} />
	{/if}
</Section>

<style>
	.portfolio-description {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 2rem auto;
	}
</style>
