<script lang="ts">
	import { enhance } from '$app/forms';
	import { ButtonType, ButtonVariant, ButtonSize } from '$lib/types';
	import type { ActionData } from '../../../routes/$types';
	import Button from './Button.svelte';
	import FormAlert from './form/FormAlert.svelte';
	import TextArea from './form/TextArea.svelte';
	import TextInput from './form/TextInput.svelte';

	type Props = {
		form?: ActionData;
	};

	let { form }: Props = $props();
	let isSubmitting = $state(false);
</script>

<form
	class="contact-form"
	method="POST"
	action="?/contact"
	use:enhance={() => {
		isSubmitting = true;
		return async ({ update }) => {
			await update();
			isSubmitting = false;
		};
	}}
>
	{#if form?.error}
		<FormAlert type="error" message={form.error} />
	{/if}

	{#if form?.success}
		<FormAlert type="success" message={form.success} />
	{/if}

	<TextInput
		id="name"
		name="name"
		label="Imię i nazwisko"
		value={form?.name || ''}
		placeholder="Twoje imię i nazwisko"
		error={form?.errors?.name}
		disabled={isSubmitting}
	/>

	<TextInput
		id="email"
		name="email"
		type="email"
		label="Email"
		value={form?.email || ''}
		placeholder="Twój adres email"
		error={form?.errors?.email}
		disabled={isSubmitting}
	/>

	<TextInput
		id="subject"
		name="subject"
		label="Temat"
		value={form?.subject || ''}
		placeholder="Temat wiadomości"
		error={form?.errors?.subject}
		disabled={isSubmitting}
	/>

	<TextArea
		id="message"
		name="message"
		label="Wiadomość"
		value={form?.message || ''}
		placeholder="Treść wiadomości"
		error={form?.errors?.message}
		disabled={isSubmitting}
	/>

	<div class="contact-form__submit">
		<Button
			type={ButtonType.Submit}
			variant={ButtonVariant.Primary}
			size={ButtonSize.Medium}
			disabled={isSubmitting}
		>
			{isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
		</Button>
	</div>
</form>

<style>
	.contact-form {
		width: 100%;
	}

	.contact-form__submit {
		text-align: center;
		margin-top: 2rem;
	}
</style>
