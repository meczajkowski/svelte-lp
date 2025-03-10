<script lang="ts">
	import ContactSection from '$lib/components/contact/ContactSection.svelte';
	import HeroSection from '$lib/components/hero/HeroSection.svelte';
	import PortfolioSection from '$lib/components/portfolio/PortfolioSection.svelte';
	import ServicesSection from '$lib/components/services/ServicesSection.svelte';
	import AboutSection from '$lib/components/about/AboutSection.svelte';
	import type { PageProps } from './$types';
	import CTASection from '$lib/components/ui/CTASection.svelte';
	import { ButtonVariant } from '$lib/types';

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
<CTASection
	title={sections.cta.title}
	description={sections.cta.description}
	buttons={sections.cta.buttons}
/>
<PortfolioSection data={sections.portfolio} />
<ContactSection data={contactData} />
