---
title: Getting Started
prev: false
next:
  text: "Review the Schema API"
  link: /schema
editLink: true
lastUpdated: true
outline: deep
---

# {{ $frontmatter.title }}

OpenGIX is a single manifest file that catalogs layered resources in [`.yaml|.yml`](https://yaml.org) format. Each layer is an extended [GeoJSON]() or [TopoJSON]() object. Working with raw geometrical objects in layers is possible but challenging. The OpenGIX community is deveoping the [OpenGIX Editor for VSCode](#opengix-vscode) and [OpenGIX Editor](#opengix-editor) to simplify development, testing and release management.

### OpenGIX Editor for VSCode <Badge text="recommended" /> {#opengix-vscode}

The [OpenGIX Editor for VSCode](https://opengix.org/vscode-extension) is an IDE extension for working with OpenGIX files. It provides a UI for working with geometrical objects like maps and the layers that make up an OpenGIX project. This extension also provides tools for scaffolding and managing entire workspaces and projects.

Features include:

- Import maps and layers from the web or from other projects
- Manage entire workspaces and projects
- Interact with charts and maps to add data points
- Drag, drop and group layers
- Export layers or projects for use within applications
- Quickly scaffold a project or new layers with wizards

Visit the [OpenGIX Editor for VSCode](https://opengix.org/vscode-extension) to get started.

### OpenGIX Editor

## Node.js

`npm add -D @opengix/builder`

`npx @opegix/builder layer add new-layer --type geojson --label "Hello World!"`

`npx @opengix/{insert-scaffolding-solution}`

The latest specification can be imported directly from [GitHub Schema repository](https://github.com/OpenGIX/schema/blob/latest/spec/gix.json).

```yaml
# yaml-language-server: $schema=https://github.com/OpenGIX/schema/blob/latest/spec/gix.json
```

# Versioning

OpenGIX uses the [SEMVER]() standard but also offers [`nightly`](), [`latest`](), and [`stable`]() tags for conveneince.

- `stable` is considered feature locked and only security vulnerability patches will be back ported.
- `latest` includes the current stable release with all minor (or `Y`) releases merged.
- `nightly` is the current latest version with all minor and patch (or `Z`) releases merged.
