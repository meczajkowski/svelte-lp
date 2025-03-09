import { services, pageData } from '$lib/data';
import type { ServiceBasic, ServicePageData } from '$lib/types';

export const load = async () => {
	const pageId = 'copy-plotter';
	const pageInfo = pageData[pageId] as ServicePageData;

	if (!pageInfo) {
		throw new Error(`Page data for ${pageId} not found`);
	}

	const relatedServices = pageInfo.relatedServices
		? (pageInfo.relatedServices
				.map((id) => services.find((s) => s.id === id))
				.filter(Boolean) as ServiceBasic[])
		: [];

	return {
		service: pageInfo.service,
		relatedServices,
		breadcrumbs: pageInfo.breadcrumbs,
		contactInfo: pageInfo.contactInfo,
		priceNote: pageInfo.priceNote,
		relatedTitle: pageInfo.relatedTitle
	};
};
