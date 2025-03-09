<script lang="ts">
	import type { Breadcrumb } from '$lib/types';

	type Props = {
		items: Breadcrumb[];
	};

	let { items }: Props = $props();
</script>

<div class="breadcrumbs">
	{#each items as item, index}
		{#if item.href}
			<a href={item.href} class="breadcrumbs__link">{item.label}</a>
		{:else}
			<span class="breadcrumbs__item">{item.label}</span>
		{/if}
		{#if index < items.length - 1}
			<span class="breadcrumbs__separator">/</span>
		{/if}
	{/each}
</div>

<style>
	.breadcrumbs {
		margin-bottom: 1rem;
		color: var(--color-text-light);
		font-size: 0.9rem;
	}

	.breadcrumbs__link {
		color: var(--color-primary);
		text-decoration: none;
	}

	.breadcrumbs__link:hover {
		text-decoration: underline;
	}

	.breadcrumbs__item {
		color: inherit;
	}

	.breadcrumbs__separator {
		margin: 0 0.5rem;
	}
</style>
