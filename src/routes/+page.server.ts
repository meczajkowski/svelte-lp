import type { PageServerLoad } from './$types';
import { homeData, services } from '$lib/data';

export const load: PageServerLoad = async () => {
	return {
		hero: homeData.hero,
		services,
		sections: homeData.sections
	};
};
