<script lang="ts">
	import Navbar from '$lib/components/ui/layout/Navbar.svelte';
	import type { LayoutProps } from './$types';
	import '$lib/globals.css';

	let { data, children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>Centrum Reklamowe Wrocław</title>
	<meta name="description" content="Centrum Reklamowe Wrocław" />
</svelte:head>

<Navbar links={data.links} />
<main>
	{@render children()}
</main>

<style>
	main {
		padding-block: 60px;
	}
</style>
