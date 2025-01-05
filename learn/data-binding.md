---
title: "Data Binding"
layout: "docs.html"
ogDescription: "Automatically update properties when data changes"
---

The experimental _https://ns.mxhx.dev/2024/mxhx_ [language namespace](./language-namespaces.md) supports _data binding_, which makes it possible to automatically update a property after another property has changed. Data bindings may be created declaratively using either the [`<mx:Binding>` tag](./language-tags.md#binding) or by adding Haxe expressions inside curly braces `{` and `}` as part of property assignments.

> **Warning!** Data binding in either form is not currently supported by the _https://ns.mxhx.dev/2024/basic_ language namespace. To use data bindings, you must use the experimental _https://ns.mxhx.dev/2024/mxhx_ language namespace.

The `<mx:Binding>` tag requires a `source` and a `destination`. In the following example, we'll assume that an MXHX document declares a simple GUI containing a numeric slider and a label to display some text. When the slider's value changes, the binding will automatically update the label's text.

```xml
<mx:Binding destination="label.text" source="Std.string(slider.value)"/>
```

Data bindings may also be declared inline by inserting Haxe expressions between curly braces `{` and `}`. We can create the same data binding directly on the declaration of the label. The following example creates the same data binding as the one above with the `<mx:Binding>` tag, but with curly braces instead. The GUI is declared usingh the `HSlider` and `Label` components from Feathers UI, and the numeric value the slider is passed to the label's text.

```xml
<f:HSlider id="slider"/>
<f:Label id="label" text="{Std.string(slider.value)}"/>
```

In both cases, the [`Std.string()](https://api.haxe.org/Std.html#string) method is called to convert the `Float` value to `String`, like one would need to do in plain Haxe code.

```haxe
var f:Float = 123.4;
var s:String = Std.string(f);
```

The expression's type must be allowed to be assigned to the property's type, or a compiler error will be reported.