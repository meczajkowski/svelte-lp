<script lang="ts">
	import { ButtonVariant, ButtonSize } from '$lib/types';
	import Button from '../ui/Button.svelte';

	type HeroData = {
		title: string;
		subtitle: string;
		ctaText: string;
		ctaHref?: string;
		backgroundImage?: string;
	};

	type Props = {
		data: HeroData;
	};

	let { data }: Props = $props();
	const {
		title,
		subtitle,
		ctaText,
		ctaHref = '#kontakt',
		backgroundImage = '/images/hero.jpg'
	} = data;
</script>

<section class="hero" id="home" style="background-image: url('{backgroundImage}')">
	<div class="hero__overlay"></div>
	<div class="hero__container">
		<div class="hero__content">
			<h1 class="hero__title">{title}</h1>
			<p class="hero__subtitle">{subtitle}</p>
			<Button href={ctaHref} variant={ButtonVariant.Primary} size={ButtonSize.Large}>
				{ctaText}
			</Button>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 92vh;
		display: flex;
		align-items: center;
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

	@media (max-width: 768px) {
		.hero__title {
			font-size: 2.2rem;
		}

		.hero__subtitle {
			font-size: 1rem;
		}
	}
</style>
