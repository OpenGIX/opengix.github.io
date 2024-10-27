---
title: Getting Started Guide
prev: false
next:
  text: "Review the Schema API"
  link: /schema
editLink: true
lastUpdated: true
---

# {{ $frontmatter.title }}

## Usage

The latest specification can be imported directly from [GitHub Schema repository](https://github.com/OpenGIX/schema/blob/latest/spec/gix.json).

```yaml
# yaml-language-server: $schema=https://github.com/OpenGIX/schema/blob/latest/spec/gix.json
```

# Versioning

OpenGIX uses the [SEMVER]() standard but also offers [`nightly`](), [`latest`](), and [`stable`]() tags for conveneince.

- `stable` is considered feature locked and only security vulnerability patches will be back ported.
- `latest` includes the current stable release with all minor (or `Y`) releases merged.
- `nightly` is the current latest version with all minor and patch (or `Z`) releases merged.
