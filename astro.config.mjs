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
      sidebar: [
        {
          label: "Playbook",
          autogenerate: { directory: "playbook" },
        },
        {
          label: "Learning",
          autogenerate: { directory: "learning" },
        },
        {
          label: "Processes",
          autogenerate: { directory: "processes" },
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Glossary", link: "/glossary/" },
            { label: "Contribute", link: "/contribute/" },
          ],
        },
      ],
    }),
  ],
});
