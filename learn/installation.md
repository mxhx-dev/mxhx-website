---
title: "Installation"
layout: "docs.html"
ogDescription: "Install MXHX libraries from Haxelib"
---

To use MXHX, a developer typically needs to install two libraries. First, install a library that can parse MXHX documents. There are two choices, depending on when you need to parse MXHX documents:

- [mxhx-component](https://github.com/mxhx-dev/mxhx-component) parses MXHX documents at **compile-time**.
- [mxhx-runtime-component](https://github.com/mxhx-dev/mxhx-runtime-component) parses MXHX documents at **run-time**.

For best performance, and lowest output file size, [mxhx-component](https://github.com/mxhx-dev/mxhx-component) is recommended. It is probably the better choice for anyone just getting started with MXHX. You might consider checking out [mxhx-runtime-component](https://github.com/mxhx-dev/mxhx-runtime-component) later, if you find that you need its run-time capabilities and are willing to accept its tradeoffs.

Second, install a library designed to expose a specific GUI framework to MXHX.

## Feathers UI

To use MXHX with [Feathers UI](https://feathersui.com/), install the [mxhx-feathersui](https://github.com/mxhx-dev/mxhx-feathersui) library.

```sh
haxelib git mxhx-feathersui https://github.com/mxhx-dev/mxhx-feathersui.git
```

Then, add it to your OpenFL _project.xml_ file.

```xml
<haxelib name="mxhx-feathersui" />
```

## MinimalComps

To use MXHX with [MinimalComps](https://github.com/jasonsturges/minimalcomps-openfl), install the [mxhx-minimalcomps](https://github.com/mxhx-dev/mxhx-minimalcomps) library.

```sh
haxelib git mxhx-minimalcomps https://github.com/mxhx-dev/mxhx-minimalcomps.git
```

Then, add it to your OpenFL _project.xml_ file.

```xml
<haxelib name="mxhx-minimalcomps" />
```