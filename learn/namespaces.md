---
title: "Namespaces"
layout: "docs.html"
---

In MXHX, a _namespace_ defines a set of Haxe classes that may be used as tags. MXHX has a special language namespace, which defines tags for the [core MXHX data types](./core-types.md) and [special language tags](./language-tags.md) that don't represent classes. Namespaces may also by used by Haxe libraries to expose their classes as tags in MXHX. However, even if a Haxe class isn't associated with a namespace, a developer may declare a custom namespace in any document using a package name to expose virtually any class as a tag in MXHX.

Namespaces make it possible to use multiple sets of tags in the same document, even if some of those tags might have conflicting names.

## Declare a namespace

In MXHX, most documents will include a declaration for one of the [MXHX language namespaces](./language-namespaces.md).

```xml
xmlns:mx="https://ns.mxhx.dev/2024/basic"
```

A namespace declaration consists of two parts, a _prefix_  and a _URI_. The prefix is included on tags to indicate which namespace defines them. The URI is a unique identifer assigned to the namespace. In the namespace declaration above, the `mx` prefix is associated with the `https://ns.mxhx.dev/2024/basic` URI.

Namespaces are typically declared on the root tag of an MXHX document.

```xml
<?xml version="1.0" encoding="utf-8"?>
<mx:Object xmlns:mx="https://ns.mxhx.dev/2024/basic">
</mx:Object>
```

A prefix is added before a tag name to indicate which namespace the tag comes from. In the example above the `mx` prefix is added to the [`Object`](./language-tags.md#object) tag. The colon (`:`) character separates a tag's prefix from its name.

> Even though it may look like you can copy/paste a namespace URI into your web browser to load a page, these URIs are not required or expected to be used to retrieve information. The idea behind using a URI is to avoid conflicts by suggesting that everyone uses a domain name under their control. In short, namespace URIs should simply be treated as unique strings.

Developers following best practices generally use the same prefix for a specific namespace URI across multiple MXHX documents. However, when declaring a namespace in a document, any prefix may be chosen, as long as the prefix is not already in use in that particular document. In the example below, the `hello` prefix is associated with the `https://ns.mxhx.dev/2024/basic` URI instead of the `mx` prefix.

```xml
<?xml version="1.0" encoding="utf-8"?>
<hello:Object xmlns:hello="https://ns.mxhx.dev/2024/basic">
</hello:Object>
```

Each document may also optionally declare one namespace without a prefix, as shown in the example below.

```xml
<?xml version="1.0" encoding="utf-8"?>
<Object xmlns="https://ns.mxhx.dev/2024/basic">
</Object>
```

If a namespace declaration doesn't have a prefix, tags from that namespace shouldn't include the prefix or `:` character either.

> It is generally considered best practice to always include a prefix in a namespace declaration.

## Library namespaces

Haxe libraries that support MXHX, such as [Feathers UI](https://feathersui.com/), may provide their own namespaces that define a separate set of tags. The example below defines the namespace for Feathers UI.

```xml
xmlns:f="https://ns.feathersui.com/mxhx"
```

Additional namespace declarations are typically added to the root tag after the MXHX language namespace declaration.

```xml
<?xml version="1.0" encoding="utf-8"?>
<f:Application
  xmlns:mx="https://ns.mxhx.dev/2024/basic"
  xmlns:f="https://ns.feathersui.com/mxhx">
</f:Application>
```

## Package namespaces

Sometimes, a developer may need to use a Haxe class that isn't defined in an MXHX namespace. Consider the following Haxe class `com.example.WidgetInfo`.

```haxe
package com.example;

class WidgetInfo {
  public function new() {}
  public var numWidgets:Int = 0;
}
```

To use this class in MXHX without a namespace URI, a declaration may be added to the document using its package name `com.example`, followed by `.*` instead of a URI. All classes from the `com.example` package will be available for use with the chosen prefix.

```xml
xmlnx:example="com.example.*"
```

The example below declares the custom namespace for the package name and uses the `<example:WidgetInfo>` tag that becomes available.

```xml
<?xml version="1.0" encoding="utf-8"?>
<mx:Object
  xmlns:mx="https://ns.mxhx.dev/2024/basic"
  xmlnx:example="com.example.*">
  <mx:Declarations>
    <example:WidgetInfo numWidgets="5"/>
  </mx:Declarations>
</mx:Object>
```