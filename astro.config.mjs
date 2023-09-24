import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://axionedhandbook.github.io",
  base: "/",
  integrations: [
    starlight({
      title: "Axioned Handbook",
      social: {
        github: "https://github.com/axioned/handbook",
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
