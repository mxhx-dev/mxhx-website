---
title: "Build Macro"
layout: "docs.html"
ogDescription: "Associate a Haxe class with an MXHX document"
---

The [mxhx-component](https://github.com/mxhx-dev/mxhx-component) library provides the `mxhx.macros.MXHXComponent.build()` macro to allow part of a Haxe class to be generated from the contents of a _.mxhx_ file with the same name. The _.mxhx_ file will contain declarations of the GUI, while the _.hx_ class file will contain methods and fields for the class that can reference elements by `id` from the MXHX side.

Consider the following two files, _MyComponent.hx_ and _MyComponent.mxhx_.

```haxe
// MyComponent.hx
import feathers.controls.LayoutGroup;

@:build(mxhx.macros.MXHXComponent.build())
class MyComponent extends LayoutGroup {
  public function new() {
    super();
  }
}
```

```xml
<!-- MyComponent.mxhx -->
<?xml version="1.0" encoding="utf-8"?>
<f:LayoutGroup xmlns:mx="https://ns.mxhx.dev/2024/basic"
  xmlns:f="https://ns.feathersui.com/mxhx">
  <f:Button id="myButton" text="Click Me"/>
</f:LayoutGroup>
```

Add `@:build(mxhx.macros.MXHXComponent.build())` metadata to your Haxe class declaration to use an _.mxhx_ file to generate part of the class.

By default, the _.hx_ and _.mxhx_ files should have the same name, except for the file extension. If your Haxe class is named _MyComponent.hx_, the corresponding MXHX file should be named _MyComponent.mxhx_.

The Haxe class must extend the same class as the [root tag](./document.md#root-tag) used in the _.mxhx_ file. The example above uses Feathers UI's `<f:LayoutGroup>` as the root tag, which represents the class `feathers.controls.LayoutGroup`.

In _MyComponent.mxhx_ file, a `<f:Button>` component is declared with the `id` set to `myButton`. This will automatically generate a field on `MyComponent` class with the name `myButton`. It may be used like a normal public field, as the following example demonstrates. 

```haxe
var instance = new MyComponent();
myButton.text = "New text";
```

Additionally, inside _MyComponent.hx_, this new `myButton` field may be referenced to add event listeners, or change properties on the `Button` component.

```haxe
// MyComponent.hx
import feathers.controls.LayoutGroup;

@:build(mxhx.macros.MXHXComponent.build())
class MyComponent extends LayoutGroup {
  public function new() {
    super();
    button.addEventListener(TriggerEvent.TRIGGER, onButtonTrigger);
  }

  private function onButtonTrigger(event:TriggerEvent):Void {
    trace("triggered the button!");
  }
}
```