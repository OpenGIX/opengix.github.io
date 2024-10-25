---
title: About
prev: false
next:
  text: Let's get started ->
  link: /docs/getting-started
editLink: true
lastUpdated: true
---

![Static Badge](https://img.shields.io/badge/version-alpha-blue)

# About OpenGIX

OpenGIX is a protocol for working with layered geometry and arbitrary use case specific data. **Open** means all work materials are open source and will always be free to use, modify and redistribute. **GIX** is an intialism of **geometrical** **interpolation** and **transformation**—fancy words that suggest usage and function in that geometry can be imbued with artibrary data points, organized into layers and exportable to simple user-friendly graphs.

> _GIX is sometimes referred to as **geospacial information transformation** in reference to its most common implementation in mapping and geographical applications._

OpenGIX is comprised of two primary components. [`Layers`]() collate [GeoJSON](https://geojson.org) and [TopoJSON](https://github.com/topojson/topojson) geometry types with arbitrary user defined data points using the [YAML](https://yaml.org) language format. The [`Schema`](https://opengix.org/schema) is a specification that enforces standards for working with layered objects and provides linting and code completion with in IDE's.

## Why OpenGIX

**[JSON](https://www.json.org) is not developer friendly**. JSON's syntax is unforgiving, error prone and difficult to read through its rigid structure. GeoJSON and TopoJSON add complexity with the inclusion of large shape lists and unstructured data. Furthermore, any attempt to simulate a layered structure means addind new large statements to the document, compounding the complexity.

OpenGIX reduces the noise by helping developers focus on key areas of interest. Layers help isolate data from geometry so citizen data scientists and developers can work together shortening development time and accelerating productivity to end users and customers.

## Use Cases

OpenGIX technically works with any data-driven geometrical use case. The most common however include a third component: the [`Canvas`]().

The original inspiration for this project

## Community

OpenGIX is an open source community organized project whos goal is to develop intelligent tools for cataloging, maniuplating and interrogating geographical data.
