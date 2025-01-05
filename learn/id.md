---
title: "Declaring IDs"
layout: "docs.html"
---

Each tag in an MXHX document that represents an instance of a class may optionally be assigned an ID using the reserved `id` attribute. When an object has an `id`, it can be [referenced as a field](https://haxe.org/manual/expression-field-access.html) with the same name in Haxe code.

Consider the following tag that creates an integer value. It has an `id` attribute with the value `quantity`.

```xml
<mx:Int id="quantity">1024</mx:Int>
```

This tag creates a `quantity` field on the generated Haxe class similar to the following declaration.

```haxe
public var quantity:Int = 1024;
```

Assuming that we have an instance returned by `MXHXComponent.withMarkup()`, the value of `quantity` is accessed like any field in Haxe code.

```haxe
var q:Float = instance.quantity;
```

An `id` value may not be used more than once in the same MXHX document (but separate MXHX documents may generally use the same `id` without conflicts). If an MXHX document defines an `id` that has the same name as an existing field from a superclass, a new field will not be created, and the existing field will be set. The type of the object with the `id` in the MXHX document must be compatible with the type of the existing field.