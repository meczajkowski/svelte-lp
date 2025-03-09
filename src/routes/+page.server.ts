import type { PageServerLoad, Actions } from './$types';
import { homeData, services } from '$lib/data';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		hero: homeData.hero,
		services,
		sections: homeData.sections
	};
};

export const actions: Actions = {
	contact: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name')?.toString() || '';
		const email = formData.get('email')?.toString() || '';
		const subject = formData.get('subject')?.toString() || '';
		const message = formData.get('message')?.toString() || '';

		const errors: Record<string, string> = {};

		if (!name.trim()) {
			errors.name = 'Imię jest wymagane';
		}

		if (!email.trim()) {
			errors.email = 'Email jest wymagany';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Proszę podać poprawny adres email';
		}

		if (!subject.trim()) {
			errors.subject = 'Temat jest wymagany';
		}

		if (!message.trim()) {
			errors.message = 'Wiadomość jest wymagana';
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, {
				errors,
				name,
				email,
				subject,
				message
			});
		}

		try {
			await new Promise((resolve) => setTimeout(resolve, 10000));
			console.log('Form submitted:', { name, email, subject, message });
			return {
				success: 'Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.'
			};
		} catch (error) {
			console.error('Form submission error:', error);
			return fail(500, {
				error: 'Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie.',
				name,
				email,
				subject,
				message
			});
		}
	}
};
