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
        "x.com": "https://x.com/AxionedTeam",
      },
      editLink: { baseUrl: "https://github.com/axioned/handbook/edit/main/" },
      tableOfContents: true,
      favicon: "/favicon.ico",
      logo: { src: "/public/logo.png", alt: "Axioned" },
      lastUpdated: true,
      sidebar: [
        { label: "Welcome", link: "/welcome" },
        { label: "Playbook", autogenerate: { directory: "Playbook" } },
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
          label: "Design",
          collapsed: true,
          autogenerate: { directory: "Design" },
        },
        {
          label: "Working at Axioned",
          collapsed: true,
          autogenerate: { directory: "Work" },
        },
        { label: "Glossary", link: "/glossary/" },
        { label: "Contribute", link: "/contribute/" },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://www.googletagmanager.com/gtag/js?id=G-DNGX3SW0WQ",
            async: true,
          },
        },
        {
          tag: "script",
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DNGX3SW0WQ');
            `,
        },
        {
          tag: "script",
          content: `
            document.addEventListener('DOMContentLoaded', () => {
              const socialLinks = document.querySelectorAll('div.social-icons a');
              console.log(socialLinks);
              socialLinks.forEach(link => {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
              });
            });
          `,
        },
      ],
    }),
  ],
});
