<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import { ButtonVariant } from '$lib/types';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const service = data.service!;
</script>

<Container>
	<PageHeader
		title={service.title}
		description={service.fullDescription}
		breadcrumbs={data.breadcrumbs}
	/>

	<div class="service__image">
		<img src={service.imageUrl} alt={service.title} class="service__img" />
	</div>

	<div class="service__content">
		<div class="service__description">
			{#each service.sections || [] as section}
				<h2 class="service__heading">{section.title}</h2>
				<p class="service__text">{section.description}</p>

				{#if section.listItems && section.listItems.length > 0}
					<h3 class="service__subheading">{section.listTitle}</h3>
					<ul class="service__list">
						{#each section.listItems as item}
							<li class="service__list-item">{item}</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</div>

		<div class="service__sidebar">
			<div class="service__info-card">
				<h3 class="service__info-title">Cennik podstawowy</h3>
				<ul class="service__price-list">
					{#each service.pricing || [] as item}
						<li class="service__price-item">
							<span class="service__price-name">{item.name}</span>
							<span class="service__price-value">{item.price}</span>
						</li>
					{/each}
				</ul>
				<p class="service__price-note">{data.priceNote}</p>
			</div>

			<div class="service__contact-card">
				<h3 class="service__contact-title">{data.contactInfo.title}</h3>
				<p class="service__contact-text">
					{data.contactInfo.description}
				</p>
				<Button href="/kontakt" variant={ButtonVariant.Primary}>Skontaktuj się</Button>
			</div>
		</div>
	</div>

	<div class="service__related">
		<SectionHeader title={data.relatedTitle} centered={true} />
		<div class="service__related-grid">
			{#each data.relatedServices || [] as relatedService}
				{#if relatedService}
					<Card
						title={relatedService.title}
						description={relatedService.description}
						imageUrl={relatedService.imageUrl}
						href={relatedService.href}
					/>
				{/if}
			{/each}
		</div>
	</div>
</Container>

<style>
	.service__image {
		margin-bottom: 2rem;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	.service__img {
		width: 100%;
		height: auto;
		display: block;
	}

	.service__content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.service__heading {
		font-size: 1.8rem;
		margin: 1.5rem 0 1rem;
		color: var(--color-text);
	}

	.service__subheading {
		font-size: 1.3rem;
		margin: 1.5rem 0 0.5rem;
		color: var(--color-text);
	}

	.service__text {
		margin-bottom: 1rem;
		line-height: 1.6;
		color: var(--color-text);
	}

	.service__list {
		margin-bottom: 2rem;
		padding-left: 1.5rem;
	}

	.service__list-item {
		margin-bottom: 0.5rem;
		line-height: 1.6;
	}

	.service__sidebar {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.service__info-card,
	.service__contact-card {
		background-color: var(--color-background-alt);
		border-radius: 8px;
		padding: 1.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	.service__info-title,
	.service__contact-title {
		font-size: 1.3rem;
		margin-bottom: 1rem;
		color: var(--color-text);
	}

	.service__price-list {
		list-style: none;
		padding: 0;
		margin-bottom: 1rem;
	}

	.service__price-item {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.service__price-note {
		font-size: 0.8rem;
		color: var(--color-text-light);
		font-style: italic;
	}

	.service__contact-text {
		margin-bottom: 1.5rem;
	}

	.service__related {
		margin-top: 4rem;
	}

	.service__related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
	}

	@media (max-width: 768px) {
		.service__content {
			grid-template-columns: 1fr;
		}

		.service__related-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
