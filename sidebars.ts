module.exports = {
	docs: [
		'introduction',
		{
			type: 'link',
			label: 'Example Projects',
			href: 'https://miroiu.github.io/nodify/showcase#examples',
		},
		{
			type: 'category',
			label: 'Getting Started',
			items: [
				'getting-started/installation',
				'getting-started/hierarchy',
				'getting-started/usage',
				'getting-started/async-loading',
			],
			collapsed: false,
		},
		{
			type: 'category',
			label: 'Components',
			items: [
				'components/editor',
				'components/item-container',
				'components/nodes',
				'components/connectors',
				'components/connections',
			],
			collapsed: true,
		},
		'faq',
	],
};
