# Axioned Handbook

A comprehensive knowledge base and documentation for Axioned's development practices, tools, and processes.

## 🚀 Project Structure

```
.
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and other media
│   ├── content/     # Documentation content
│   │   ├── docs/    # Main documentation
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 📚 Documentation Structure

- `src/content/docs/` contains all documentation in Markdown format
- Each `.md` file becomes a route in the documentation
- Images should be placed in `src/assets/` and referenced in Markdown
- Static assets (favicons, etc.) go in `public/`

## 🛠️ Development

Node and Bun versions are pinned in `.tool-versions`, following Buddy's tooling setup. Run `mise install` to install the pinned versions if needed.

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Install dependencies                             |
| `bun run dev`             | Start local dev server at `localhost:4321`       |
| `bun run build`           | Build production site to `./dist/`               |
| `bun run preview`         | Preview production build locally                 |

## 📝 Contributing

1. Create a new branch for your changes
2. Follow the [Code Review Checklist](./src/content/docs/Learning/Git/code-review-checklist.md)
3. Submit a PR with clear description of changes
4. Ensure all documentation is clear and well-formatted

## 🔍 Need Help?

- Check [Starlight's docs](https://starlight.astro.build/) for documentation features
- Join [#handbook](https://axioned.slack.com/archives/C02UV6BREDU) for requests and support
