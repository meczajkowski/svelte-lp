<script lang="ts">
	import type { PortfolioItem } from '$lib/types';

	type Props = {
		items: PortfolioItem[];
	};

	const { items }: Props = $props();

	let currentIndex = $state(0);
	let interval = $state<ReturnType<typeof setInterval> | undefined>(undefined);
	let touchStartX = $state(0);
	let touchEndX = $state(0);

	function startAutoSlide() {
		interval = setInterval(() => {
			next();
		}, 5000);
	}

	function stopAutoSlide() {
		if (interval) {
			clearInterval(interval);
			interval = undefined;
		}
	}

	function goToSlide(index: number) {
		stopAutoSlide();
		currentIndex = index;
		startAutoSlide();
	}

	function next() {
		if (!items || items.length === 0) return;
		currentIndex = (currentIndex + 1) % items.length;
	}

	function prev() {
		if (!items || items.length === 0) return;
		currentIndex = (currentIndex - 1 + items.length) % items.length;
	}

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e: TouchEvent) {
		touchEndX = e.changedTouches[0].clientX;
		handleSwipe();
	}

	function handleSwipe() {
		const swipeDistance = touchEndX - touchStartX;
		if (swipeDistance > 50) {
			prev();
		} else if (swipeDistance < -50) {
			next();
		}
	}

	$effect(() => {
		if (items && items.length > 0) {
			startAutoSlide();
		}

		return () => {
			stopAutoSlide();
		};
	});
</script>

<div class="portfolio" ontouchstart={handleTouchStart} ontouchend={handleTouchEnd}>
	<div class="portfolio__container">
		<button class="portfolio__nav portfolio__nav--prev" onclick={prev} aria-label="Previous slide">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="15 18 9 12 15 6"></polyline>
			</svg>
		</button>

		<div class="portfolio__slide">
			<div class="portfolio__slide-image">
				<img src={items[currentIndex].imageUrl} alt={items[currentIndex].title} />
			</div>
			<div class="portfolio__slide-content">
				<span class="portfolio__category">{items[currentIndex].category || ''}</span>
				<h3 class="portfolio__title">{items[currentIndex].title}</h3>
				<p class="portfolio__description">{items[currentIndex].description}</p>
			</div>
		</div>

		<button class="portfolio__nav portfolio__nav--next" onclick={next} aria-label="Next slide">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="9 18 15 12 9 6"></polyline>
			</svg>
		</button>
	</div>

	<div class="portfolio__indicators">
		{#each items as _, i}
			<button
				class="portfolio__indicator {i === currentIndex ? 'portfolio__indicator--active' : ''}"
				onclick={() => goToSlide(i)}
				aria-label="Go to slide {i + 1}"
			></button>
		{/each}
	</div>
</div>

<style>
	.portfolio {
		position: relative;
		margin: 2rem 0;
	}

	.portfolio__container {
		position: relative;
		height: 700px;
	}

	.portfolio__slide {
		display: flex;
		flex-direction: column;
		height: 100%;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		background-color: var(--color-surface);
		border-radius: 8px;
		overflow: hidden;
	}

	.portfolio__slide-image {
		height: 70%;
	}

	.portfolio__slide-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.portfolio__slide-content {
		padding: 2rem;
		height: 30%;
	}

	.portfolio__category {
		font-size: 0.875rem;
		color: var(--color-primary);
		margin-bottom: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.portfolio__title {
		margin: 0 0 1rem 0;
		font-size: 1.75rem;
	}

	.portfolio__description {
		margin: 0;
		font-size: 1.1rem;
		color: var(--color-text-light);
		line-height: 1.6;
	}

	.portfolio__nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: var(--color-background-alt);
		opacity: 0.7;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 1;
		transition: all 0.2s ease;
	}

	.portfolio__nav:hover {
		background-color: var(--color-primary);
		opacity: 0.9;
		color: var(--color-on-primary);
	}

	.portfolio__nav--prev {
		left: 1rem;
	}

	.portfolio__nav--next {
		right: 1rem;
	}

	.portfolio__nav svg {
		width: 20px;
		height: 20px;
	}

	.portfolio__indicators {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
	}

	.portfolio__indicator {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: var(--color-background-alt);
		margin: 0 5px;
		border: none;
		cursor: pointer;
	}

	.portfolio__indicator--active {
		background-color: var(--color-primary);
		transform: scale(1.2);
	}

	@media (max-width: 768px) {
		.portfolio__container {
			height: 600px;
		}

		.portfolio__slide-content {
			padding: 1.5rem;
		}

		.portfolio__title {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.portfolio__container {
			height: 550px;
		}

		.portfolio__slide-image {
			height: 60%;
		}

		.portfolio__slide-content {
			height: 40%;
			padding: 1.25rem;
		}

		.portfolio__title {
			font-size: 1.3rem;
			margin-bottom: 0.5rem;
		}

		.portfolio__description {
			line-height: 1.5;
		}
	}
</style>
