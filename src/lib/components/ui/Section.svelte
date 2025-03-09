<script lang="ts">
	import type { Snippet } from 'svelte';
	import Container from '$lib/components/ui/Container.svelte';

	type Props = {
		id?: string;
		padding?: string;
		bgColor?: string;
		children: Snippet;
	};

	let {
		id = '',
		padding = '5rem 0',
		bgColor = 'transparent',

		children
	}: Props = $props();
</script>

<section {id} class="section" style="--padding: {padding}; --bg-color: {bgColor}">
	<Container>
		{@render children()}
	</Container>
</section>

<style>
	.section {
		padding: var(--padding);
		background-color: var(--bg-color);
	}

	@media (max-width: 768px) {
		.section {
			padding: 3rem 0;
		}
	}
</style>
