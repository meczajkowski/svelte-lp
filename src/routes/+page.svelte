<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import PortfolioSection from '$lib/components/sections/PortfolioSection.svelte';
	import ServicesSection from '$lib/components/sections/ServicesSection.svelte';
	import AboutSection from '$lib/components/ui/AboutSection.svelte';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
	const { sections } = data;

	const servicesData = {
		...sections.services,
		services: data.services
	};

	const contactData = {
		...sections.contact,
		form
	};
</script>

<HeroSection data={data.hero} />
<ServicesSection data={servicesData} />
<AboutSection data={sections.about} />
<PortfolioSection data={sections.portfolio} />
<ContactSection data={contactData} />
