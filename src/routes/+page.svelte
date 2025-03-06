<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section class="hero" id="home">
	<div class="container">
		<div class="hero-content">
			<h1>{data.hero.title}</h1>
			<p>{data.hero.subtitle}</p>
			<a href="#kontakt" class="cta-button">{data.hero.ctaText}</a>
		</div>
	</div>
</section>

<section id="uslugi" class="services">
	<div class="container">
		<h2>Nasze Usługi</h2>
		<p>Tutaj będzie lista usług</p>
	</div>
</section>

<section id="o-nas" class="about">
	<div class="container">
		<h2>O Nas</h2>
		<p>Tutaj będzie sekcja o firmie</p>
	</div>
</section>

<section id="portfolio" class="portfolio">
	<div class="container">
		<h2>Nasze Realizacje</h2>
		<p>Tutaj będzie portfolio</p>
	</div>
</section>

<section id="kontakt" class="contact">
	<div class="container">
		<h2>Kontakt</h2>
		<p>Tutaj będzie formularz kontaktowy</p>
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	section {
		padding: 5rem 0;
	}

	.hero {
		min-height: 85vh;
		display: flex;
		align-items: center;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); /* TODO: change to image */
	}

	.hero-content {
		max-width: 700px;
	}

	h1 {
		font-size: 3rem;
		line-height: 1.2;
		margin-bottom: 1.5rem;
		color: var(--text-color);
	}

	h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	.hero p {
		font-size: 1.25rem;
		line-height: 1.6;
		color: var(--text-color-light);
		margin-bottom: 2rem;
	}

	.cta-button {
		display: inline-block;
		background-color: var(--primary-color);
		color: var(--on-primary-color);
		padding: 0.8rem 1.8rem;
		border-radius: 4px;
		font-weight: 500;
		text-decoration: none;
		transition: background-color 0.2s;
	}

	.cta-button:hover {
		background-color: var(--primary-color-dark);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.2rem;
		}

		h2 {
			font-size: 1.8rem;
		}

		.hero p {
			font-size: 1rem;
		}
	}
</style>
