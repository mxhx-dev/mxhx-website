---
title: "Tags"
layout: "docs.html"
---

Most tags in MXHX represent instances of Haxe classes, and the properties of those objects that should be set.

The following examples will show how to use this Haxe class in MXHX.

```haxe
// src/com/example/Widget.hx
package com.example;

class Widget {
  public var name:String;
  public var price:Float;
  public var inStock:Bool;

  public function new() {}
}
```

To use this class in MXHX, you must first declare a [namespace](./namespaces.md). We can add a [package namespace](./namespaces.md#package-namespaces) for the `com.example` package.

```xml
xmlns:example="com.example.*"
```

To create an instance without setting any properties, you may add the tag like this:

```xml
<example:Widget/>
```

The prefix of the tag anme is the same as the prefix in the namespace declaration. In this case, _example_. The rest of the tag's name is the name of the Haxe class.

> _Tip:_ To use a Haxe class in MXHX, it's constructor function signature must either have zero parameters, or all parameters must be optional.

It's possible to set properties of basic types using XML attributes. We can set the `name` string value, the `price` float value, and the `inStock` boolean values, like this:

```xml
<example:Widget name="Cog" price="6.99" inStock="true"/>
```

Alternatively, properties may be set using child tags. Property names used as child tags must include the same namespace as their parent.

```xml
<example:Widget>
  <example:name>Cog</example:name>
  <example:price>6.99</example:price>
  <example:inStock>6.99</example:inStock>
</example:Widget>
```

It is possible to set properties with a combination of attributes and child tags as well:

```xml
<local:Widget name="Cog" inStock="true">
  <local:price>6.99</local:price>
</local:Widget>
```