const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "Axioned Handbook",
	tagline: "Our collective brain",
	url: "https://handbook.axioned.com/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.png",
	organizationName: "axioned", // Usually your GitHub org/user name.
	projectName: "handbook", // Usually your repo name.
	themeConfig: {
		navbar: {
			title: "Axioned Handbook",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.png",
			},
			items: [
				{
					type: "doc",
					docId: "welcome",
					position: "left",
					label: "Docs",
				},
				{
					href: "https://medium.com/axioned",
					label: "Blog",
					position: "right",
				},
				{
					href: "https://github.com/axioned/handbook",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Handbook",
							to: "/docs/welcome",
						},
					],
				},
				{
					title: "Quick Links",
					items: [
						{
							label: "Slack",
							href: "https://axioned.slack.com/",
						},
						{
							label: "Zoho",
							href: "https://projects.zoho.com/portal/axioned",
						},
						{
							label: "Github",
							href: "https://github.com/prdxn-org",
						},
					],
				},
				{
					title: "Contact",
					items: [
						{
							label: "Website",
							href: "https://axioned.com/",
						},
						{
							label: "Email",
							href: "mailto:workwithus@axioned.com",
						},
						{
							label: "Phone",
							href: "tel:+19172757105",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Axioned. Built with Docusaurus.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
