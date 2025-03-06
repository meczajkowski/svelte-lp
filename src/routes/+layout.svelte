<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../globals.css';
	import type { LayoutProps } from './$types';

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
		padding-top: 60px;
	}
</style>
