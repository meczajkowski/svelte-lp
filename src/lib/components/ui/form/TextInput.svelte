<script lang="ts">
	import FormField from './FormField.svelte';

	type Props = {
		id: string;
		name: string;
		label: string;
		type?: 'text' | 'email' | 'password' | 'tel' | 'number';
		value?: string;
		placeholder?: string;
		error?: string;
		disabled?: boolean;
		required?: boolean;
	};

	let {
		id,
		name,
		label,
		type = 'text',
		value = '',
		placeholder = '',
		error,
		disabled = false,
		required = false
	}: Props = $props();
</script>

<FormField {id} {label} {error}>
	<input
		class="text-input"
		class:text-input--error={error}
		{id}
		{name}
		{type}
		{value}
		{placeholder}
		{disabled}
		{required}
		aria-invalid={error ? true : undefined}
	/>
</FormField>

<style>
	.text-input {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-input);
		font-family: inherit;
		font-size: 1rem;
		background-color: var(--color-background);
		color: var(--color-text);
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
	}

	.text-input:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
	}

	.text-input--error {
		border-color: var(--color-error);
	}

	.text-input:disabled {
		background-color: var(--color-disabled-bg);
		cursor: not-allowed;
		opacity: 0.7;
		color: var(--color-text-muted);
	}
</style>
