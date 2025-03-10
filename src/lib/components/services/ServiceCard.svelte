<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';

	type Props = {
		title: string;
		description: string;
		imageUrl?: string;
		href?: string;
	};

	let { title, description, imageUrl = '', href = '' }: Props = $props();
</script>

<div class="service-card">
	<Card {title} {description} {imageUrl} {href} />
</div>

<style>
	.service-card {
		height: 100%;
	}
</style>
