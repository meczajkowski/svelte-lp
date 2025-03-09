<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';

	type Props = {
		title: string;
		description?: string;
		breadcrumbs?: { label: string; href?: string }[];
	};

	let { title, description = '', breadcrumbs = [] }: Props = $props();
</script>

<header class="page-header">
	{#if breadcrumbs.length > 0}
		<Breadcrumbs items={breadcrumbs} />
	{/if}
	<h1 class="page-header__title">{title}</h1>
	{#if description}
		<p class="page-header__description">{description}</p>
	{/if}
</header>

<style>
	.page-header {
		margin-bottom: 3rem;
		text-align: center;
	}

	.page-header__title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--color-text);
	}

	.page-header__description {
		max-width: 800px;
		margin: 0 auto;
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--color-text-light);
	}

	@media (max-width: 768px) {
		.page-header__title {
			font-size: 2rem;
		}
	}
</style>
