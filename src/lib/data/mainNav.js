export const mainNav = [
	{
		labelMobile: 'View our work',
		labelDesktop: 'portfolio',
		url: '/portfolio'
	},
	{
		labelMobile: 'Read about us',
		labelDesktop: 'about',
		url: '/about'
	},
	{
		labelMobile: 'Our services',
		labelDesktop: 'services',
		type: 'submenu',
		submenu: [
			{ label: 'Conferences', url: '/conference' },
			{ label: 'Brand events', url: '/brand-events' },
			{ label: 'Diplomatic events', url: '/diplomatic-events' },
			{ label: 'Fashion shows', url: '/fashion-shows' }
		]
	},
	{
		labelMobile: 'Discover packages',
		labelDesktop: 'prices',
		url: '/prices'
	},
	{
		labelMobile: 'Check your date',
		labelDesktop: 'contact',
		type: 'popup'
	}
];
