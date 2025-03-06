import type { PageServerLoad } from './$types';
import { hero, services } from '$lib/data';

export const load: PageServerLoad = async () => {
	return {
		hero,
		services
	};
};
