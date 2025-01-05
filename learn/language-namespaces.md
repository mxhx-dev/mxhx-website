---
title: "Language Namespaces"
layout: "docs.html"
ogDescription: "MXHX basic and full namespaces"
---

MXHX defines two special language [namespaces](./namespaces.md) that represent core Haxe types and special language tags.

Each MXHX document may define exactly one language namespace. It is not allowed for an MXHX document to define more than one language namespace.

## Basic Namespace

The basic namespace represents MXHX documents that are purely declarative. An MXHX document using the basic namespace cannot contain any Haxe code, and must consist of markup only.

```xml
xmlns:mx="https://ns.mxhx.dev/2024/basic"
```

When using `MXHXComponent` with the basic namespace, Haxe code may interact with the markup in two ways:

- Associating the MXHX document with a separate Haxe class using the [`MXHXComponent.build()` macro](./build-macro.md).
- After calling either the `MXHXComponent.withMarkup()` or the `MXHXComponent.withFile()` function, the returned value may be manipulated with Haxe code.

When using `MXHXRuntimeComponent` with the basic namespace, a build macro is not available, but Haxe code may manipulate only value returned by `MXHXRuntimeComponent.withMarkup()`.

## MXHX namespace

The full MXHX namespace allows a mix of declarative markup and imperative Haxe code. It should be considered _experimental_ at this time, and its capabilities may change over time, so developers are warned that any use of this namespace is at your own risk. At this time, the full MXHX namespace adds the ability to add inline event listeners to tags, and it adds support for [data binding](./data-binding.md) syntax with the [`<mx:Binding>` tag](./language-tags.md#binding) and curly braces `{` and `}`.

```xml
xmlns:mx="https://ns.mxhx.dev/2024/mxhx"
```

> **Note:** The _https://ns.mxhx.dev/2024/mxhx_ namespace is supported at compile-time only. In other words, you cannot use `MXHXRuntimeComponent` with the full MXHX namespace. You must use `MXHXComponent`. `MXHXRuntimeComponent` does not support this experimental namespace because it would require a run-time parser and interpreter for Haxe code, which is considered out of scope for at this time.

You may see the following warning when using the experimental MXHX language namespace:

> Namespace 'https://ns.mxhx.dev/2024/mxhx' is experimental. Using namespace 'https://ns.mxhx.dev/2024/basic' instead is recommended

To disable this warning, add the `mxhx_disable_experimental_warning` define to your compiler options.

In an _.hxml_ file:

```hxml
-D mxhx_disable_experimental_warning
```

In an OpenFL _project.xml_ file:

```xml
<define name="mxhx_disable_experimental_warning"/>
```