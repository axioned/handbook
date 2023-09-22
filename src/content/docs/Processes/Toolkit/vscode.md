---
id: VSCode
title: Visual Studio Code
sidebar:
  label: VS Code
tags: [vscode, ide]
---

## Connecting with Github

TODO

## Syncing your settings

TODO

## Plugins

### Must have

TODO

### Additional

- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

TODO

## Customizing your IDE

### Fonts

```json
"terminal.integrated.fontFamily": "'MonoLisa', 'JetBrains Mono', Consolas",
"editor.fontFamily": "'MonoLisa', 'JetBrains Mono', Consolas",
"editor.codeLensFontFamily": "'MonoLisa', 'JetBrains Mono', Consolas",
"editor.inlayHints.fontFamily": "'MonoLisa', 'JetBrains Mono', Consolas",
"scm.inputFontFamily": "'MonoLisa', 'JetBrains Mono', Consolas",
"debug.console.fontFamily": "'MonoLisa', 'JetBrains Mono', Consolas"
```

### Editor configs

```json
"editor.fontLigatures": true,
"editor.formatOnSave": true,
"editor.tabSize": 2,
"editor.inlineSuggest.enabled": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnPaste": true,
"editor.formatOnType": true,
"editor.linkedEditing": true,
"editor.bracketPairColorization.enabled": true,
"editor.cursorSmoothCaretAnimation": true
```

### Prettier and formatting

```json
"prettier.useTabs": true,
"files.eol": "\n" // really useful to get rid of the LF/CRLF issues
```

### Tailwind CSS

```json
"tailwindCSS.emmetCompletions": true,
"tailwindCSS.includeLanguages": {
  "plaintext": "html",
  "javascript": "javascript",
  "css": "css"
},
"files.associations": {
  "*.css": "tailwindcss"
}
```

### Javascript

```json
"javascript.updateImportsOnFileMove.enabled": "always"
```
