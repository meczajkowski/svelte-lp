<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ButtonVariant, ButtonSize, ButtonType } from '$lib/types';

	type Props = {
		href?: string;
		variant?: ButtonVariant;
		size?: ButtonSize;
		type?: ButtonType;
		children: Snippet;
		disabled?: boolean;
	};

	let {
		children,
		href,
		variant = ButtonVariant.Primary,
		size = ButtonSize.Medium,
		type = ButtonType.Button,
		disabled = false
	}: Props = $props();
</script>

{#if href && !disabled}
	<a {href} class="btn btn--{variant} btn--{size}">
		{@render children()}
	</a>
{:else if href && disabled}
	<span class="btn btn--{variant} btn--{size} btn--disabled">
		{@render children()}
	</span>
{:else}
	<button {type} class="btn btn--{variant} btn--{size}" class:btn--disabled={disabled} {disabled}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		display: inline-block;
		border-radius: var(--radius-btn);
		font-weight: 500;
		text-decoration: none;
		transition: all 0.2s;
		cursor: pointer;
		border: none;
		text-align: center;
	}

	.btn--primary {
		background-color: var(--color-primary);
		color: var(--color-on-primary);
	}

	.btn--primary:hover:not(.btn--disabled) {
		background-color: var(--color-primary-dark);
	}

	.btn--secondary {
		background-color: transparent;
		color: var(--color-primary);
		border: 1px solid var(--color-primary);
	}

	.btn--secondary:hover:not(.btn--disabled) {
		background-color: rgba(0, 112, 243, 0.1);
	}

	.btn--disabled {
		opacity: 0.65;
		cursor: not-allowed;
		pointer-events: none;
	}

	.btn--small {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}

	.btn--medium {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
	}

	.btn--large {
		padding: 0.9rem 2rem;
		font-size: 1.125rem;
	}
</style>
