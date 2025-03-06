import type { LayoutServerLoad } from './$types';
import { links } from '$lib/data';

export const load: LayoutServerLoad = async () => {
	return {
		links
	};
};
