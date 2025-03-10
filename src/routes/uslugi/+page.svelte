<script lang="ts">
	import ServiceGrid from '$lib/components/services/ServiceGrid.svelte';
	import Container from '$lib/components/ui/layout/Container.svelte';
	import PageHeader from '$lib/components/ui/layout/PageHeader.svelte';
	import CTASection from '$lib/components/ui/CTASection.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Container>
	<PageHeader
		title={data.pageData.title}
		description={data.pageData.description}
		breadcrumbs={data.breadcrumbs}
	/>

	<ServiceGrid services={data.services} />

	<CTASection
		title={data.ctaData.title}
		description={data.ctaData.description}
		buttons={data.ctaData.buttons}
	/>
</Container>
