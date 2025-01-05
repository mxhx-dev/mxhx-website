---
title: "Create a Document"
layout: "docs.html"
---

An MXHX _document_ (sometimes called a _component_) typically generates a new Haxe class.

## Root tag

The _root tag_ is used to define the superclass that the MXHX document will extend. A document may contain only one root tag.

The following example creates an MXHX document that extends the Haxe class `com.example.components.MyComponent`.

```xml
<?xml version="1.0" encoding="utf-8"?>
<components:MyComponent xmlns:mx="https://ns.mxhx.dev/2024/basic"
  xmlns:components="com.example.components.*">
</components:MyComponent>
```

If an MXHX document should not extend another Haxe class, use the special [`<mx:Object>`](./language-tags.md#object) language tag as the root tag.

```xml
<?xml version="1.0" encoding="utf-8"?>
<mx:Object xmlns:mx="https://ns.mxhx.dev/2024/basic">
</mx:Object>
```

## Namespaces

Generally, [namespace declarations](./namespaces.md) are added to the root tag to make additional types of tags available to be instantiated in the MXHX document. Most MXHX documents will include one of the [MXHX language namespaces](./language-namespaces.md), but additional namespaces may be defined for libraries or Haxe packages.

A namespace declaration always starts with `xmlns:`, it may be given a _prefix_, and always includes the namespace _URI_. For example, the namespace declaration `xmlns:mx="https://ns.mxhx.dev/2024/basic"` has the _mx_ prefix and the URI is _https://ns.mxhx.dev/2024/basic_.

The following example declares three namespaces, including an [MXHX language namespace](./language-namespaces.md), a [library namespace](./namespaces.md#library-namespaces), and a [package namespace](./namespaces.md#package-namespaces).

```xml
<?xml version="1.0" encoding="utf-8"?>
<mx:Object xmlns:mx="https://ns.mxhx.dev/2024/basic"
  xmlns:f="https://ns.feathersui.com/mxhx"
  xmlns:example="com.example.*">
</mx:Object>
```

## Declarations

Each MXHX document may optionally include a [`<mx:Declarations>`](./language-tags.md#declarations) section. This section allows the creation of arbitrary objects. Each object should have an `id`, which allows it to be accessed from Haxe code.

```xml
<?xml version="1.0" encoding="utf-8"?>
<mx:Object xmlns:mx="https://ns.mxhx.dev/2024/basic">
  <mx:Declarations>
    <mx:Int id="quantity" value="98">
  </mx:Declarations>
<mx:Object>
```

## Setting properties

Properties of the superclass may be set by using child tags. The following example sets the `layout` property of a `LayoutGroup` component from Feathers UI:

```xml
<?xml version="1.0" encoding="utf-8"?>
<f:LayoutGroup xmlns:mx="https://ns.mxhx.dev/2024/basic"
  xmlns:f="https://ns.feathersui.com/mxhx">
  <f:layout>
    <f:VerticalLayout gap="10.0"/>
  </f:layout>
</f:LayoutGroup>
```

## Children or Default Properties

Some tags in MXHX allow children, or a default property, to be set. For example, GUI containers may have one or more children added directly as child tags.

```xml
<?xml version="1.0" encoding="utf-8"?>
<f:LayoutGroup xmlns:mx="https://ns.mxhx.dev/2024/basic"
  xmlns:f="https://ns.feathersui.com/mxhx">
  <f:TextInput prompt="Search"/>
  <f:Button text="Submit"/>
</f:LayoutGroup>
```

## IDs and fields

If a tag that represents an instance of a class an `id` attribute, a public field will be added to the generated class to allow Haxe code to reference the instance.

```xml
<?xml version="1.0" encoding="utf-8"?>
<f:LayoutGroup xmlns:mx="https://ns.mxhx.dev/2024/basic"
  xmlns:f="https://ns.feathersui.com/mxhx">
  <f:TextInput id="searchInput" prompt="Search"/>
  <f:Button id="submitButton" text="Submit"/>
</f:LayoutGroup>
```

In the MXHX document above, the `<f:TextInput>` tag is given an `id` of `searchButton` and the `<f:Button>` tag is given an `id` of `submitButton`. In the generated class, this is equivalent to adding the following fields:

```haxe
public var searchInput:TextInput;
public var submitButton:Button;
```