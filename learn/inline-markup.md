---
title: "Inline Markup (Compile-Time)"
sidebarTitle: "Inline Markup"
layout: "docs.html"
---

The [mxhx-component](https://github.com/mxhx-dev/mxhx-component) library allows MXHX documents to be declared at compile-time as a Haxe expression using the `mxhx.macros.MXHXComponent.withMarkup()` macro function.

```haxe
var instance = MXHXComponent.withMarkup('
  <f:LayoutGroup xmlns:mx="https://ns.mxhx.dev/2024/basic"
    xmlns:f="https://ns.feathersui.com/mxhx">
    <f:Button id="myButton" text="Click Me"/>
  </f:LayoutGroup>
');
```

The `id` values in the MXHX document will be made available on the instance returned by this method. The document contains a Feathers UI `<f:Button>` tag with the `id` of `myButton`. We can access this field from our Haxe code, to do things like change the button's properties, add event listeners, etc.

```haxe
instance.myButton.addEventListener(TriggerEvent.TRIGGER, event -> {
  trace("triggered the button!");
});
```