<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { ButtonVariant } from '$lib/types';
	import type { CTAButton } from '$lib/types';

	type Props = {
		title: string;
		description?: string;
		buttons?: CTAButton[];
		bgColor?: string;
	};

	let {
		title,
		description = '',
		buttons = [],
		bgColor = 'var(--color-background-alt)'
	}: Props = $props();
</script>

<div class="cta" style="--bg-color: {bgColor}">
	<h2 class="cta__title">{title}</h2>
	{#if description}
		<p class="cta__description">{description}</p>
	{/if}
	{#if buttons.length > 0}
		<div class="cta__buttons">
			{#each buttons as button}
				<Button href={button.href} variant={button.variant || ButtonVariant.Primary}>
					{button.text}
				</Button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.cta {
		margin-top: 4rem;
		text-align: center;
		padding: 3rem;
		background-color: var(--bg-color);
		border-radius: 8px;
	}

	.cta__title {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: var(--color-text);
		font-weight: 700;
	}

	.cta__description {
		margin-bottom: 2rem;
		font-size: 1.1rem;
		color: var(--color-text-light);
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta__buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		.cta {
			padding: 2rem;
			margin-top: 3rem;
		}

		.cta__title {
			font-size: 1.8rem;
		}
	}
</style>
