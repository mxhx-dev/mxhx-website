---
title: "Language Tags"
layout: "docs.html"
ogDescription: "Tags that are provided by MXHX that aren't classes or types"
---

MXHX defines certain special tags that represent language elements rather than Haxe types.

These MXHX language tags are defined by the [MXHX language namespaces](./language-namespaces.md). Add a language namespace to the root tag to make these tags available. The example below uses the _basic_ namespace:

```xml
xmlns:mx="https://ns.mxhx.dev/2024/basic"
```

## Binding

> **Note:** Binding is not supported by the _https://ns.mxhx.dev/2024/basic_ namespace.

The `<mx:Binding>` tag is used to create data bindings between two fields.

```xml
<mx:Binding destination="label.text" source="Std.string(slider.value)"/>
```

## Component

The `<mx:Component>` tag is used to define an inline component to assign to a field or property of type `Class`. It may also be used with a field or property typed as an `abstract` with a `@:from` method that can accept a `Class` value.

```xml
<f:ListView>
  <f:itemRendererRecycler>
    <mx:Component>
      <f:LayoutGroupItemRenderer>
        <f:AssetLoader/>
        <f:Label/>
      </f:LayoutGroupItemRenderer>
    </mx:Component>
  <f:itemRendererRecycler>
</f:ListView>
```

A separate class is generated for this inline component, and it includes a generated property named `outerDocument`, which references the outer component.

## Declarations

The `<mx:Declarations>` tag is used to instantiate objects that should be stored in custom fields that are not defined on the component's superclass. Use the special `id` attribute to specify a name for each field.

```xml
<mx:Declarations>
  <mx:Float id="volume">88.4</mx:Float>
  <mx:Bool id="muted">false</mx:Bool>
</mx:Declarations>
```

The example above generates the following fields in Haxe:

```haxe
public var volume:Float = 88.4;
public var muted:Bool = false;
```

## Model

The `<mx:Model>` tag is used to generate [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html) from XML.

```xml
<mx:Model id="model">
  <root>
    <name>
        <first>Matt</first>
        <last>Murdock</last>
    </name>
    <company>Nelson and Murdock</company>
    <email>dd@example.com</email>
    <email>matt@nelsonandmurdock.example</email>
  </root>
</mx:Model>
```

The following object is generated from the above:

```haxe
public var model:Any = {
  name: {
    first: "Matt",
    last: "Murdock"
  },
  company: "Nelson and Murdock",
  email: [
    "dd@example.com",
    "matt@nelsonmurdock.example"
  ]
}
```

See also: [`Struct`](./core-types.md#struct)

## Object

The `<mx:Object>` tag may be used as the root tag of a document when the generated Haxe class should not extend another class. This tag does not represent a concrete type in Haxe, meaning that a document with this root tag will not inherit any fields, methods, or other symbols from it. It cannot be detected using with Haxe reflection APIs, like `Type.resolveClass()` or `Std.isOfType()`.

```xml
<?xml version="1.0" encoding="utf-8"?>
<mx:Object xmlns:mx="https://ns.mxhx.dev/2024/basic">
</mx:Object>
```

> Note: In many programming languages (including Java, C#, and ActionScript), there is a built-in `Object` class that all other classes derive from (often implicitly, allowing declaration of a superclass to be optional). Haxe doesn't have this sort of universal `Object` class. However, since the root tag in MXHX cannot be omitted, and it is used to declare a superclass, a special tag is required to represent a class with no superclass. The `Object` tag was chosen because of the common naming convention mentioned above, but this doesn't create a new `Object` class in Haxe. It's a special tag only, like `<mx:Declarations>` or `<mx:Component>`.

## Private

The `<mx:Private>` tag may be used to store arbitrary XML-compatible metadata with an MXHX document. It must be the final child tag of the MXHX document's root tag. The contents of this private metadata does not affect run-time behavior, and is mostly intended for use by tools.

```xml
<?xml version="1.0" encoding="utf-8"?>
<mx:Object xmlns:mx="https://ns.mxhx.dev/2024/basic">
  <mx:Private>
    <author>John Q. Developer</author>
  </mx:Private>
</mx:Object>
```