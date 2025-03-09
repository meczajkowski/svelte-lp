import { services, pageData } from '$lib/data';

export const load = async () => {
	const servicesPageData = pageData.services;

	return {
		services,
		breadcrumbs: servicesPageData.breadcrumbs,
		ctaData: servicesPageData.cta,
		pageData: servicesPageData
	};
};
