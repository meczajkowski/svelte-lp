import { ButtonVariant } from './types';
import type { ServiceBasic, HomeData, ServicesPageData, ServicePageData } from './types';

// Navigation
export const links = [
	{ label: 'Strona główna', href: '/' },
	{ label: 'Usługi', href: '/uslugi' },
	{ label: 'O nas', href: '/#o-nas' },
	{ label: 'Realizacje', href: '/#realizacje' },
	{ label: 'Kontakt', href: '/#kontakt' }
];

// Home page data
export const homeData: HomeData = {
	hero: {
		title: 'Centrum Reklamowe Wrocław',
		subtitle:
			'Oferujemy kompleksowe usługi poligraficzne i reklamowe, które spełnią Twoje oczekiwania. Z nami stworzysz wyjątkowe materiały promocyjne, które przyciągną uwagę.',
		ctaText: 'Skontaktuj się z nami'
	},
	sections: {
		services: {
			title: 'Nasze usługi poligraficzne i reklamowe',
			description:
				'Oferujemy szeroki wachlarz usług poligraficznych, które spełnią Twoje oczekiwania. Od ulotek po nadruki na odzieży, mamy wszystko, czego potrzebujesz.',
			ctaText: 'Zobacz wszystkie usługi',
			ctaHref: '/uslugi'
		},
		about: {
			title: 'O Nas',
			description:
				'Centrum Reklamowe działa na rynku od ponad 15 lat, oferując kompleksowe usługi poligraficzne i reklamowe dla klientów indywidualnych oraz firm. Nasz zespół doświadczonych specjalistów dba o najwyższą jakość każdego projektu, wykorzystując nowoczesny sprzęt i innowacyjne technologie. Dzięki indywidualnemu podejściu do każdego zlecenia, jesteśmy w stanie sprostać nawet najbardziej wymagającym oczekiwaniom. Zaufało nam już ponad 500 firm z Wrocławia i okolic. Dołącz do grona zadowolonych klientów i przekonaj się, że reklama może być skuteczna i przystępna cenowo.',
			imageSrc: '/images/about-us.webp',
			imageAlt: 'Zespół Centrum Reklamowego przy pracy',
			ctaText: 'Poznaj naszą historię',
			ctaHref: '/#o-nas'
		},
		portfolio: {
			title: 'Nasze Realizacje',
			description: 'Tutaj będzie portfolio'
		},
		contact: {
			title: 'Kontakt',
			description: 'Tutaj będzie formularz kontaktowy'
		}
	}
};

// Services list (for display on home page and services page)
export const services: ServiceBasic[] = [
	{
		id: 'printing',
		title: 'Druk ulotek, plakatów i wizytówek',
		description: 'Tworzymy ulotki, plakaty i wizytówki, które przyciągną uwagę.',
		imageUrl: '/images/services/printing.jpg',
		href: '/uslugi/druk'
	},
	{
		id: 'clothing-printing',
		title: 'Nadruki na ubraniach i akcesoriach',
		description: 'Oferujemy nadruki na odzieży, piłkach i smyczach.',
		imageUrl: '/images/services/clothing.jpg',
		href: '/uslugi/nadruki'
	},
	{
		id: 'copy-plotter',
		title: 'Dodatkowe usługi: ksero i plotery',
		description: 'Nasze usługi obejmują także ksero oraz usługi z zakresu ploterów.',
		imageUrl: '/images/services/copy.jpg',
		href: '/uslugi/ksero-plotery'
	}
];

// Page data
export const pageData: {
	services: ServicesPageData;
	[key: string]: ServicesPageData | ServicePageData;
} = {
	// Services page
	services: {
		title: 'Nasze usługi poligraficzne i reklamowe',
		description:
			'Oferujemy szeroki wachlarz usług poligraficznych, które spełnią Twoje oczekiwania. Od ulotek po nadruki na odzieży, mamy wszystko, czego potrzebujesz.',
		breadcrumbs: [{ label: 'Strona główna', href: '/' }, { label: 'Usługi' }],
		cta: {
			title: 'Potrzebujesz indywidualnej wyceny?',
			description: 'Skontaktuj się z nami, aby omówić szczegóły Twojego projektu.',
			buttons: [
				{
					text: 'Skontaktuj się',
					href: '/#kontakt',
					variant: ButtonVariant.Primary
				},
				{
					text: 'Zadzwoń: +48 123 456 789',
					href: 'tel:+48123456789',
					variant: ButtonVariant.Secondary
				}
			]
		}
	},

	// Copy and plotter services subpage
	'copy-plotter': {
		service: {
			id: 'copy-plotter',
			title: 'Dodatkowe usługi: ksero i plotery',
			description: 'Nasze usługi obejmują także ksero oraz usługi z zakresu ploterów.',
			imageUrl: '/images/services/copy.jpg',
			fullDescription:
				'Oferujemy profesjonalne usługi ksero oraz szeroki zakres usług ploterowych dla klientów indywidualnych i firm.',
			sections: [
				{
					title: 'Nasze usługi ksero',
					description:
						'Oferujemy szybkie i wysokiej jakości usługi ksero zarówno w kolorze, jak i czarno-białe. Niezależnie od tego, czy potrzebujesz jednej kopii czy setek, jesteśmy gotowi spełnić Twoje oczekiwania.',
					listTitle: 'Co oferujemy:',
					listItems: [
						'Ksero czarno-białe i kolorowe',
						'Ksero dokumentów w różnych formatach (A5, A4, A3)',
						'Ksero dwustronne',
						'Zmniejszanie i powiększanie dokumentów',
						'Skanowanie dokumentów'
					]
				},
				{
					title: 'Usługi ploterowe',
					description:
						'Nasze usługi ploterowe to idealne rozwiązanie dla architektów, projektantów, inżynierów oraz wszystkich, którzy potrzebują wydruku wielkoformatowego.',
					listTitle: 'Zakres usług ploterowych:',
					listItems: [
						'Wydruki wielkoformatowe planów, map i projektów',
						'Wydruki plakatów i banerów reklamowych',
						'Wydruki na różnych materiałach (papier, folia, canvas)',
						'Wycinanie po obrysie',
						'Laminowanie wydruków'
					]
				}
			],
			pricing: [
				{ name: 'Ksero A4 czarno-białe', price: '0,30 zł' },
				{ name: 'Ksero A4 kolorowe', price: '1,50 zł' },
				{ name: 'Ksero A3 czarno-białe', price: '0,60 zł' },
				{ name: 'Ksero A3 kolorowe', price: '3,00 zł' },
				{ name: 'Wydruk ploterowy (m²)', price: 'od 50 zł' }
			]
		},
		breadcrumbs: [
			{ label: 'Strona główna', href: '/' },
			{ label: 'Usługi', href: '/uslugi' },
			{ label: 'Ksero i plotery' }
		],
		contactInfo: {
			title: 'Masz pytania?',
			description: 'Skontaktuj się z nami, aby uzyskać więcej informacji lub indywidualną wycenę.'
		},
		priceNote: '* Ceny brutto, mogą ulec zmianie przy większych nakładach',
		relatedTitle: 'Inne usługi, które mogą Cię zainteresować',
		relatedServices: ['printing', 'clothing-printing']
	}
};
