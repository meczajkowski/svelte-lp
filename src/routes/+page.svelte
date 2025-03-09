<script lang="ts">
	import ServiceGrid from '$lib/components/services/ServiceGrid.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import AboutSection from '$lib/components/ui/AboutSection.svelte';
	import PortfolioSlider from '$lib/components/portfolio/PortfolioSlider.svelte';
	import ContactForm from '$lib/components/ui/ContactForm.svelte';
	import { ButtonVariant, ButtonSize } from '$lib/types';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
	const { sections } = data;
</script>

<section class="hero" id="home">
	<div class="hero__overlay"></div>
	<div class="hero__container">
		<div class="hero__content">
			<h1 class="hero__title">{data.hero.title}</h1>
			<p class="hero__subtitle">{data.hero.subtitle}</p>
			<Button href="#kontakt" variant={ButtonVariant.Primary} size={ButtonSize.Large}>
				{data.hero.ctaText}
			</Button>
		</div>
	</div>
</section>

<Section id="uslugi">
	<SectionHeader title={sections.services.title} description={sections.services.description} />
	<ServiceGrid services={data.services} />
	<div class="services__cta">
		<Button href={sections.services.ctaHref} variant={ButtonVariant.Secondary}>
			{sections.services.ctaText}
		</Button>
	</div>
</Section>

<AboutSection data={sections.about} />

<Section id="realizacje">
	<SectionHeader title={sections.portfolio.title} />
	<p class="portfolio-description">{sections.portfolio.description}</p>
	{#if sections.portfolio.items && sections.portfolio.items.length > 0}
		<PortfolioSlider items={sections.portfolio.items} />
	{/if}
</Section>

<Section id="kontakt">
	<SectionHeader title={sections.contact.title} />
	<p class="contact-description">{sections.contact.description}</p>
	<ContactForm {form} />
</Section>

<style>
	.hero {
		min-height: 85vh;
		display: flex;
		align-items: center;
		/* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); TODO: change to image */
		background-image: url('/images/hero.jpg');
		background-size: cover;
		background-position: center;
		position: relative;
	}

	.hero__overlay {
		content: '';
		position: absolute;
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
	}

	.hero__container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		width: 100%;
		position: relative;
		z-index: 1;
	}

	.hero__content {
		max-width: 700px;
		position: relative;
		margin: 0 auto;
		z-index: 900;
	}

	.hero__title {
		font-size: 3rem;
		line-height: 1.2;
		margin-bottom: 1.5rem;
		color: var(--color-on-primary);
	}

	.hero__subtitle {
		font-size: 1.25rem;
		line-height: 1.6;
		color: var(--color-on-primary);
		margin-bottom: 2rem;
	}

	.services__cta {
		margin-top: 2rem;
		text-align: center;
	}

	.portfolio-description {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 2rem auto;
	}

	.contact-description {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 2rem auto;
	}

	@media (max-width: 768px) {
		.hero__title {
			font-size: 2.2rem;
		}

		.hero__subtitle {
			font-size: 1rem;
		}
	}
</style>
