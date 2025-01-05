---
title: "Core Types"
layout: "docs.html"
ogDescription: "Haxe types that are available as MXHX tags"
---

MXHX defines a number of core language data types. The names of these types should look very familiar to Haxe developers, as they are meant to represent the Haxe language's core classes.

These core types are defined by the [MXHX language namespaces](./language-namespaces.md). Add a language namespace to the root tag to make these types available. The example below uses the _basic_ namespace:

```xml
xmlns:mx="https://ns.mxhx.dev/2024/basic"
```

## Array

Creates a Haxe [`Array`](https://api.haxe.org/Array.html) object.

Use the `type` attribute to specify an explicit type of objects stored in the array. The following array is of type `Array<String>`:

```xml
<mx:Array type="String">
  <mx:String>One</mx:String>
  <mx:String>Two</mx:String>
  <mx:String>Three</mx:String>
</mx:Array>
```

If the `type` attribute is omitted, it may be inferred automatically.

- If the array is assigned to a field, the field's type will be used.
- If the array is a standalone declaration, it will infer from the types of the array's items.

The following array is inferred as `Array<Float>`:

```xml
<mx:Array>
  <mx:Float>1.0</mx:Float>
  <mx:Float>2.0</mx:Float>
  <mx:Float>3.0</mx:Float>
</mx:Array>
```

Like in Haxe, if the array contains mixed types that are not compatible, the array's type must be declared explicitly as `Any` or `Dynamic` or a compiler error will be reported.

```xml
<mx:Array type="Any">
  <mx:Bool>true</mx:Bool>
  <mx:Float>2.0</mx:Float>
  <mx:String>Three</mx:String>
</mx:Array>
```

_See also:_

- [Haxe Manual: Array](https://haxe.org/manual/std-Array.html)
- [Haxe API: `Array`](https://api.haxe.org/Array.html)

## Bool

Creates a Haxe [`Bool`](https://api.haxe.org/Bool.html) value. It may be set to either `true` or `false`.

```xml
<mx:Bool>true</mx:Bool>
```

```xml
<mx:Bool>false</mx:Bool>
```

_See also:_

- [Haxe API: `Bool`](https://api.haxe.org/Bool.html)

## Class

References a Haxe [`Class`](https://api.haxe.org/Class.html) object.

```xml
<mx:Class>haxe.io.Bytes</mx:Class>
```

_See also:_

- [Haxe API: `Class`](https://api.haxe.org/Class.html)

## Date

References a Haxe [`Date`](https://api.haxe.org/Date.html) object.

```xml
<mx:Date fullYear="1999" month="11" date="31" hours="11" minutes="59" seconds="0"/>
```

_See also:_

- [Haxe API: `Date`](https://api.haxe.org/Date.html)

## EReg

Creates a Haxe [`EReg`](https://api.haxe.org/EReg.html) regular expression object.

```xml
<mx:EReg>~/[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z][A-Z][A-Z]*/i</mx:EReg>
```

_See also:_

- [Haxe Manual: Regular Expressions](https://haxe.org/manual/std-regex.html)
- [Haxe API: `EReg`](https://api.haxe.org/EReg.html)

## Float

Creates a Haxe [`Float`](https://api.haxe.org/Float.html) value.

```xml
<mx:Float>123.4</mx:Float>
```

```xml
<mx:Float>-56</mx:Float>
```

```xml
<mx:Float>789e-5</mx:Float>
```

```xml
<mx:Float>0xfe3c12</mx:Float>
```

Use the string `NaN` to set the value to [`Math.NaN`](https://api.haxe.org/Math.html#NaN).

```xml
<mx:Float>NaN</mx:Float>
```

_See also:_

- [Haxe API: `Float`](https://api.haxe.org/Float.html)

## Int

Creates a Haxe [`Int`](https://api.haxe.org/Int.html) value.

```xml
<mx:Int>1234</mx:Float>
```

```xml
<mx:Int>-56</mx:Int>
```

```xml
<mx:Int>0xfe3c12</mx:Int>
```

_See also:_

- [Haxe API: `Int`](https://api.haxe.org/Int.html)

## String

Creates a Haxe [`String`](https://api.haxe.org/String.html) value.

```xml
<mx:String>hello world</mx:String>
```

Certain characters must be escaped when included in XML, such as `&`.

```xml
<mx:String>I love MXHX &amp; Haxe</mx:String>
```

Or you may use a `<![CDATA[]]>` block to include unescaped text.

```xml
<mx:String><![CDATA[I love MXHX & Haxe]]></mx:String>
```

_See also:_

- [Haxe API: `String`](https://api.haxe.org/String.html)

## Struct

Creates a Haxe [anonymous structure](https://haxe.org/manual/types-anonymous-structure.html).

```xml
<mx:Struct/>
```

```xml
<mx:Struct>
</mx:Struct>
```

_See also:_

- [Haxe Manual: Anonymous Structure](https://haxe.org/manual/types-anonymous-structure.html)
- [Haxe API: `Dynamic`](https://api.haxe.org/Dynamic.html)

## UInt

Creates a Haxe [`UInt`](https://api.haxe.org/UInt.html) value.

```xml
<mx:UInt>12345</mx:UInt>
```

_See also:_

- [Haxe API: `UInt`](https://api.haxe.org/UInt.html)

## Xml

Creates a Haxe [`Xml`](https://api.haxe.org/Xml.html) object from the markup inside this tag.

```xml
<mx:Xml>
  <items>
    <item text="One"/>
    <item text="Two"/>
    <item text="Three"/>
  </items>
</mx:Xml>
```

_See also:_

- [Haxe Manual: Getting started with XML](https://haxe.org/manual/std-Xml-getting-started.html)
- [Haxe API: `Xml`](https://api.haxe.org/Xml.html)