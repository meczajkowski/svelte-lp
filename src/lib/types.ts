export type Link = {
	label: string;
	href: string;
};

export type Breadcrumb = {
	label: string;
	href?: string;
};

export type CTAButton = {
	text: string;
	href: string;
	variant?: ButtonVariant;
};

export enum ButtonVariant {
	Primary = 'primary',
	Secondary = 'secondary'
}

export enum ButtonSize {
	Small = 'small',
	Medium = 'medium',
	Large = 'large'
}

export enum ButtonType {
	Button = 'button',
	Submit = 'submit',
	Reset = 'reset'
}

// Basic service information (used for listings)
export type ServiceBasic = {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	href: string;
};

// Service section with optional list items
export type ServiceSection = {
	title: string;
	description: string;
	listTitle?: string;
	listItems?: string[];
};

// Pricing item for service
export type PricingItem = {
	name: string;
	price: string;
};

// Contact information block
export type ContactInfo = {
	title: string;
	description: string;
};

// Page specific data for service subpages
export type ServicePageData = {
	service: {
		id: string;
		title: string;
		description: string;
		imageUrl: string;
		fullDescription: string;
		sections?: ServiceSection[];
		pricing?: PricingItem[];
	};
	breadcrumbs: Breadcrumb[];
	contactInfo: ContactInfo;
	priceNote: string;
	relatedTitle: string;
	relatedServices: string[];
};

// Services page data
export type ServicesPageData = {
	title: string;
	description: string;
	breadcrumbs: Breadcrumb[];
	cta: {
		title: string;
		description: string;
		buttons: CTAButton[];
	};
};

export type AboutSectionData = {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	ctaText: string;
	ctaHref: string;
};

export type PortfolioItem = {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	category?: string;
};

// Home page data structure
export type HomeData = {
	hero: {
		title: string;
		subtitle: string;
		ctaText: string;
	};
	sections: {
		services: {
			title: string;
			description: string;
			ctaText: string;
			ctaHref: string;
		};
		about: AboutSectionData;
		portfolio: {
			title: string;
			description: string;
			items?: PortfolioItem[];
		};
		contact: {
			title: string;
			description: string;
		};
	};
};
