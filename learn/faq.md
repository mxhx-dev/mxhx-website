---
title: "FAQ (Frequently Asked Questions)"
sidebarTitle: "FAQ"
layout: "docs.html"
---

### Does MXHX work with any other libraries or frameworks besides Feathers UI?

As a markup language for [Haxe](https://haxe.org/), MXHX is intended to be library and framework agnostic. Any GUI library in the Haxe ecosystem could theoretically add support for creating components with MXHX. For instance, the [mxhx-minimalcomps](https://github.com/mxhx-dev/mxhx-minimalcomps/) library adds MXHX support for the [minimalcomps-openfl](https://github.com/jasonsturges/minimalcomps-openfl) library by Jason Sturges.

In fact, MXHX isn't necessarily strictly tied to GUI building either. MXHX documents may extend any Haxe class (or none, using the [`<mx:Object>` tag](./language-tags.md#object)), so MXHX could be used for any development task where switching to declarative markup makes code more readable or intuitive.

### Is MXHX the same as MXML?

MXHX is heavily inspired by [MXML](https://en.wikipedia.org/wiki/MXML), a markup language originally introduced in [Macromedia Flex](https://en.wikipedia.org/wiki/Macromedia_Flex). Much of the syntax in MXHX and MXML is clearly identical. There are some differences, of course, since MXML's core types were closely tied to ActionScript 3.0, and [Haxe](https://haxe.org/) has its own idioms as a different programming language. However, the whole idea behind creating MXHX was to bring the intuitive way that GUIs could be built with declarative XML documents to the Haxe and [Feathers UI](https://feathersui.com/) ecosystem.

### Why can't I use `Script`, `Style`, states and other language features that exist in MXML?

In this initial preview, MXHX implements a subset of basic MXML syntax. That's why the [language namespace](./namespaces.md) `https://ns.mxhx.dev/2024/basic` contains the word _basic_. The current version of MXHX is enough to be useful in certain circumstances, with room to grow. It's likely that more language features inspired by MXML will be added in future updates. Most likely, they will be added in a separate namespace for more advanced features, while keeping _basic_ in its simpler form — for those who prefer a strict separation between declarative XML and imperative Haxe.

For more details, see [Unsupported features](./unsupported-features.md).