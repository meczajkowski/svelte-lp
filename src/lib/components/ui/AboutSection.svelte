<script lang="ts">
	import Section from './Section.svelte';
	import SectionHeader from './SectionHeader.svelte';
	import Button from './Button.svelte';
	import { ButtonVariant, type AboutSectionData } from '$lib/types';

	type Props = {
		data: AboutSectionData;
	};

	let { data }: Props = $props();
</script>

<Section id="o-nas">
	<SectionHeader title={data.title} />

	<div class="about">
		<div class="about__image-container">
			<div class="about__image-wrapper">
				<img class="about__image" src={data.imageSrc} alt={data.imageAlt} />
			</div>
		</div>
		<div class="about__content">
			<p class="about__text">{data.description}</p>
			{#if data.ctaText}
				<div class="about__cta">
					<Button href={data.ctaHref} variant={ButtonVariant.Secondary}>
						{data.ctaText}
					</Button>
				</div>
			{/if}
		</div>
	</div>
</Section>

<style>
	.about {
		display: flex;
		align-items: stretch;
		gap: 3rem;
	}

	.about__image-container {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.about__image-wrapper {
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	}

	.about__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.about__image-wrapper:hover .about__image {
		transform: scale(1.03);
	}

	.about__content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.about__text {
		margin-bottom: 1.5rem;
		line-height: 1.8;
		font-size: 1.1rem;
	}

	.about__cta {
		margin-top: auto;
	}

	@media (max-width: 768px) {
		.about {
			flex-direction: column;
			gap: 1.5rem;
		}

		.about__image-container {
			order: 1;
			aspect-ratio: 1/1;
			height: auto;
			max-height: 400px;
			width: 100%;
		}

		.about__image-wrapper {
			height: 100%;
			width: 100%;
		}

		.about__content {
			order: 2;
		}
	}
</style>
