---
title: "Unsupported features"
layout: "docs.html"
ogDescription: "Features from MXML that are not supported by MXHX"
---

MXHX is heavily inspired by [MXML](https://en.wikipedia.org/wiki/MXML), a markup language originally introduced in [Macromedia Flex](https://en.wikipedia.org/wiki/Macromedia_Flex). However, not all features of MXML are supported by MXHX at this time. Some missing features may be implemented in future versions of MXHX, as need arises and time allows.

## Component `className` attribute

The `className` attribute of the `Component` tag may be used in MXML to specify an AS3 class name to associate with the generated inline component. Specifying a `className` attribute for an inline component with the [`<mx:Component>` tag](./language-tags.md#component) is currently unsupported in MXHX.

## Library and Definition tags

The `<mx:Library>` and `<mx:Definition>` tags were supported in MXML to provide reusable XML graphical assets to an MXML component. They are currently unsupported by MXHX. However, developers may find that the [`<mx:Component>` tag](./language-tags.md#component) is sufficiently similar.

## Metadata tag

The `Metadata` tag was supported in MXML as a way to define AS3 metadata, like `[Event]`, on an MXML class. A similar `<mx:Metadata>` tag for Haxe metadata, like `@:event`, will be added in a future version.

## Model data binding

Binding syntax with curly braces is supported inside an `Model` tag in MXML, but the [`<mx:Model>` tag](./language-tags.md#model) in MXHX does not support binding at this time. An error will be reported.

## Root `implements` attribute

The `implements` attribute was supported in MXML to add an interface to the generated class. It is currently unsupported by MXHX.

## Script tag

In Flex, developers can declare fields and methods on an MXML class using a `<mx:Script>` tag. This is currently unsupported in MXHX. Support for scripts involves integrating a custom Haxe language parser (that will need to be written in Haxe) because the Haxe macro interpreter can only parse expressions inside methods.

Developers can achieve a similar result to an `<mx:Script>` tag in MXHX by defining fields and methods on a superclass that is written in Haxe, or by using the [`MXHXComponent.build()` macro](./build-macro.md).

## Style tag

In Flex, developers can define CSS (Cascading Style Sheets) in an MXML class using a `Style` tag. None of the GUI frameworks currently supported by MXHX include support for CSS, so MXHX does not implement a similar `<mx:Style>` tag yet.

## States

In Flex, MXML components could declare states, which allowed the GUI to change appearance and behavior depending on the currently selected state.  MXHX does not support states yet, and an error will be reported when attempting to use any of the following syntax for states.

- Setting properties for specific states with `propertyName.stateName="value"` syntax
- The `includeIn` and `excludeFrom` attributes
- The `<mx:Reparent>` tag

## Two-way data binding

Two-way data binding syntax is currently unsupported in all forms, including:

- with curly braces, like `destination="@{source}"`
- with the `<mx:Binding twoWay="true"/>` tag

However, one-way [data binding syntax with curly braces or `<mx:Binding>` tags](./data-binding.md) is supported in MXHX.

## XML `format` attribute

The `format` attribute of the `XML` tag can be used in MXML to specify where to use the `XML` class or the `XMLDocument` class in AS3, but MXHX does not support a `format` attribute on the [`<mx:Xml>` tag](./core-types.md#xml). The Haxe `Xml` class is always used. If OpenFL adds an implementation of the `XMLDocument` class in the future, it may make sense to add support for it to MXHX.

## XML data binding

Data binding syntax with curly braces is supported inside an `XML` tag in MXML, but the [`<mx:Xml>` tag](./core-types.md#xml) in MXHX does not support data binding at this time. An error will be reported.

## XMLList tag

MXML could create an AS3 `XMLList` object containing a collection of tags. The [`<mx:Xml>` tag](./core-types.md#xml) in MXHX requires a single root tag, and there isn't an equivalent type for collections of tags in MXHX.