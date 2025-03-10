<script lang="ts">
	import type { ActionData } from '../../../routes/$types';
	import ContactForm from '../ui/ContactForm.svelte';
	import Section from '../ui/Section.svelte';
	import SectionHeader from '../ui/SectionHeader.svelte';

	type ContactData = {
		title: string;
		description: string;
		imageSrc?: string;
		imageAlt?: string;
		phone?: string;
		email?: string;
		form?: ActionData;
	};

	type Props = {
		data: ContactData;
	};

	let { data }: Props = $props();
	const {
		title,
		description,
		imageSrc = '/images/about-us.webp',
		imageAlt = 'Skontaktuj się z nami',
		phone = '+48 123 456 789',
		email = 'kontakt@example.com',
		form
	} = data;
</script>

<Section id="kontakt">
	<div class="contact-section__header">
		<SectionHeader {title} {description} />
	</div>

	<div class="contact-section__content">
		<div class="contact-section__form-wrapper">
			<ContactForm {form} />
		</div>

		<div class="contact-section__image-wrapper">
			<div class="contact-section__image-container">
				<img src={imageSrc} alt={imageAlt} class="contact-section__image" />
				<div class="contact-section__image-decoration contact-section__image-decoration--top"></div>
				<div
					class="contact-section__image-decoration contact-section__image-decoration--bottom"
				></div>
			</div>
			<div class="contact-section__info">
				<div class="contact-section__info-item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						></path>
					</svg>
					<span>{phone}</span>
				</div>
				<div class="contact-section__info-item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
						></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
					<span>{email}</span>
				</div>
			</div>
		</div>
	</div>
</Section>

<style>
	.contact-section__header {
		margin-bottom: 3rem;
	}

	.contact-section__content {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.contact-section__form-wrapper {
		flex: 1;
		min-width: 0;
	}

	.contact-section__image-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.contact-section__image-container {
		position: relative;
		padding: 1rem;
		border-radius: var(--radius-lg, 8px);
		overflow: hidden;
	}

	.contact-section__image {
		width: 100%;
		height: 400px;
		border-radius: var(--radius-lg, 8px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		object-fit: cover;
		display: block;
		z-index: 1;
		position: relative;
	}

	.contact-section__image-decoration {
		position: absolute;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		z-index: 0;
	}

	.contact-section__image-decoration--top {
		top: -30px;
		right: -30px;
		background-color: rgba(0, 112, 243, 0.1);
	}

	.contact-section__image-decoration--bottom {
		bottom: -30px;
		left: -30px;
		background-color: rgba(0, 112, 243, 0.15);
	}

	.contact-section__info {
		background-color: var(--color-background-alt, #f8f9fa);
		border-radius: var(--radius-lg, 8px);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

	.contact-section__info-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--color-text, #333);
		font-weight: 500;
	}

	.contact-section__info-item svg {
		color: var(--color-primary, #0070f3);
		flex-shrink: 0;
	}

	@media (max-width: 992px) {
		.contact-section__content {
			flex-direction: column;
		}

		.contact-section__image-wrapper {
			order: -1;
			margin-bottom: 1rem;
		}

		.contact-section__image {
			height: 300px;
		}
	}

	@media (max-width: 576px) {
		.contact-section__header {
			margin-bottom: 2rem;
		}

		.contact-section__image {
			height: 250px;
		}

		.contact-section__image-decoration {
			width: 100px;
			height: 100px;
		}
	}
</style>
