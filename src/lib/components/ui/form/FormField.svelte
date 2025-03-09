<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id: string;
		label: string;
		error?: string;
		children: Snippet;
	};

	let { id, label, error, children }: Props = $props();
</script>

<div class="form-field">
	<label class="form-field__label" for={id}>{label}</label>
	{@render children()}
	{#if error}
		<p class="form-field__error-message">{error}</p>
	{/if}
</div>

<style>
	.form-field {
		margin-bottom: 1.5rem;
	}

	.form-field__label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	.form-field__error-message {
		color: var(--color-error);
		font-size: 0.875rem;
		margin-top: 0.25rem;
		margin-bottom: 0;
	}
</style>
