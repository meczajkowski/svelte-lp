<script lang="ts">
	type Props = {
		title: string;
		description?: string;
		centered?: boolean;
	};

	let { title, description = '', centered = true }: Props = $props();
</script>

<header class="section-header" class:section-header--centered={centered}>
	<h2 class="section-header__title">{title}</h2>
	{#if description}
		<p class="section-header__description">{description}</p>
	{/if}
</header>

<style>
	.section-header {
		margin-bottom: 2rem;
	}

	.section-header--centered {
		text-align: center;
	}

	.section-header__title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--color-text);
	}

	.section-header__description {
		max-width: 800px;
		margin: 0 auto;
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--color-text-light);
	}

	@media (max-width: 768px) {
		.section-header__title {
			font-size: 1.8rem;
		}
	}
</style>
