<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		width: 100%;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 1.5rem;
		}
	}
</style>
