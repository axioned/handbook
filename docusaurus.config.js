// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Axioned Handbook",
	tagline: "Our collective brain",
	url: "https://github.com",
	baseUrl: "/handbook/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "axioned", // Usually your GitHub org/user name.
	projectName: "handbook", // Usually your repo name.
	trailingSlash: false,
	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Handbook",
				logo: {
					alt: "Axioned",
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
						href: "https://github.com/facebook/docusaurus",
						label: "GitHub",
						position: "right",
					},
					{
						href: "https://insights.axioned.com/",
						label: "Blog",
						position: "right",
					},
					{
						href: "https://3.basecamp.com/5301242/",
						label: "Basecamp",
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
								label: "Playbook",
								to: "/docs/category/playbook",
							},
							{
								label: "Processes",
								to: "/docs/category/processes",
							},
							{
								label: "Decision Records",
								to: "/docs/category/decision-records",
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
								label: "Github",
								href: "https://github.com/axioned",
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
		}),
};

module.exports = config;
