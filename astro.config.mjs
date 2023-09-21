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
          autogenerate: { directory: "playbook" },
        },
        {
          label: "Learning",
          collapsed: true,
          autogenerate: { directory: "learning" },
        },
        {
          label: "Processes",
          collapsed: true,
          autogenerate: { directory: "processes" },
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
