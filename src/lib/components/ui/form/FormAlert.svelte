<script lang="ts">
	type AlertType = 'success' | 'error';

	type Props = {
		type: AlertType;
		message: string;
	};

	let { type, message }: Props = $props();
</script>

<div
	class="form-alert"
	class:form-alert--success={type === 'success'}
	class:form-alert--error={type === 'error'}
>
	{message}
</div>

<style>
	.form-alert {
		padding: 0.75rem;
		border-radius: var(--radius-input);
		margin-bottom: 1.5rem;
		font-weight: 500;
	}

	.form-alert--success {
		background-color: rgba(40, 167, 69, 0.1);
		color: var(--color-success);
	}

	.form-alert--error {
		background-color: rgba(220, 53, 69, 0.1);
		color: var(--color-error);
	}
</style>
