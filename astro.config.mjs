import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://handbook.axioned.com",
  base: "/",
  integrations: [
    starlight({
      title: "Axioned Handbook",
      description: "Central repository for how we run the company",
      social: {
        github: "https://github.com/axioned",
        linkedin: "https://www.linkedin.com/company/axioned",
        instagram: "https://instagram.com/axionedteam",
        twitter: "https://twitter.com/AxionedTeam",
      },
      editLink: {
        baseUrl: "https://github.com/axioned/handbook/edit/main/",
      },
      tableOfContents: true,
      favicon: "/public/favicon.ico",
      logo: {
        src: "/public/logo.png",
        alt: "Axioned",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "Welcome",
          link: "/welcome",
        },
        {
          label: "Playbook",
          autogenerate: { directory: "Playbook" },
        },
        {
          label: "Learning",
          collapsed: true,
          autogenerate: { directory: "Learning" },
        },
        {
          label: "Processes",
          collapsed: true,
          autogenerate: { directory: "Processes" },
        },
        {
          label: "Roadmap",
          collapsed: true,
          autogenerate: { directory: "Roadmap" },
        },
        {
          label: "Glossary",
          link: "/glossary/",
        },
        {
          label: "Contribute",
          link: "/contribute/",
        },
      ],
    }),
  ],
});
