<script lang="ts">
	import FormField from './FormField.svelte';

	type Props = {
		id: string;
		name: string;
		label: string;
		value?: string;
		placeholder?: string;
		rows?: number;
		error?: string;
		disabled?: boolean;
		required?: boolean;
	};

	let {
		id,
		name,
		label,
		value = '',
		placeholder = '',
		rows = 5,
		error,
		disabled = false,
		required = false
	}: Props = $props();
</script>

<FormField {id} {label} {error}>
	<textarea
		class="textarea"
		class:textarea--error={error}
		{id}
		{name}
		{rows}
		{placeholder}
		{disabled}
		{required}
		aria-invalid={error ? true : undefined}>{value}</textarea
	>
</FormField>

<style>
	.textarea {
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
		resize: vertical;
		min-height: 120px;
	}

	.textarea:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
	}

	.textarea--error {
		border-color: var(--color-error);
	}

	.textarea:disabled {
		background-color: var(--color-disabled-bg);
		cursor: not-allowed;
		opacity: 0.7;
		color: var(--color-text-muted);
	}
</style>
