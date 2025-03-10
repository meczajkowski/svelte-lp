<script lang="ts">
	type Props = {
		title: string;
		description: string;
		imageUrl?: string;
		href?: string;
	};

	let { title, description, imageUrl = '', href = '' }: Props = $props();
</script>

<div class="card">
	<div class="card__image">
		{#if imageUrl}
			<img src={imageUrl} alt={title} class="card__img" />
		{:else}
			<div class="card__placeholder">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="card__placeholder-icon"
				>
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
					<circle cx="8.5" cy="8.5" r="1.5"></circle>
					<polyline points="21 15 16 10 5 21"></polyline>
				</svg>
			</div>
		{/if}
	</div>
	<div class="card__content">
		<h3 class="card__title">{title}</h3>
		<p class="card__description">{description}</p>
		{#if href}
			<a {href} class="card__link">Zobacz więcej</a>
		{/if}
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background-color: var(--color-background);
		height: 100%;
	}

	.card__image {
		width: 100%;
		height: 200px;
		overflow: hidden;
		background-color: #f0f0f0;
	}

	.card__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card__placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #aaa;
	}

	.card__placeholder-icon {
		width: 50px;
		height: 50px;
	}

	.card__content {
		padding: 1.5rem;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	.card__title {
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0 0 0.75rem 0;
		color: var(--color-text);
	}

	.card__description {
		margin: 0 0 1.5rem 0;
		color: var(--color-text-light);
		line-height: 1.5;
		flex-grow: 1;
	}

	.card__link {
		display: inline-block;
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
		margin-top: auto;
	}

	.card__link:hover {
		color: var(--color-primary-dark);
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.card__image {
			height: 180px;
		}
	}
</style>
