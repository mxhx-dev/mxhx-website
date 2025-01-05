---
title: "Run-Time Components"
layout: "docs.html"
ogDescription: "Load MXHX from a file or URL and parse it on-the-fly"
---

The [mxhx-runtime-component](https://github.com/mxhx-dev/mxhx-runtime-component) library allows MXHX documents using the _https://ns.mxhx.dev/2024/basic_ namespace to be parsed at run-time. Run-time MXHX documents may even be loaded from the file system or from web URLs. This allows an application to load MXHX documents that may have been created long after the application was originally compiled, which could make certain workflows more flexible or enable the creation of extensible applications where users create custom GUIs.

## Inline markup

```haxe
var idMap:Map<String, Any> = [];
var instance = MXHXRuntimeComponent.withMarkup('
  <f:LayoutGroup xmlns:mx="https://ns.mxhx.dev/2024/basic"
    xmlns:f="https://ns.feathersui.com/mxhx">
    <f:Button id="myButton" text="Click Me"/>
  </f:LayoutGroup>
', {idMap: idMap});
```

To access the `id` values in the MXHX document, an `idMap` needs to be passed as part of the second argument, which is a configuration object with several optional fields. The values assigned to the IDs will be made available through this map. The document contains a Feathers UI `<f:Button>` tag with the `id` of `myButton`. We can access this field from our Haxe code, to do things like change the button's properties, add event listeners, etc.

```haxe
var myButton = cast(idMap.get("myButton"), Button);
myButton.addEventListener(TriggerEvent.TRIGGER, event -> {
  trace("triggered the button!");
});
```

## Load from file system

Instead of including inline markup at compile-time, MXHX documents may be loaded at run-time from the file system. A string may be passed to the same `MXHXRuntimeComponent.withMarkup()` function. The following example loads a file on `sys` targets synchronously.

```haxe
var markupString = sys.io.File.getContent("path/to/file.mxhx");
var instance = MXHXRuntimeComponent.withMarkup(markupString);
```

In OpenFL projects, you might use [`openfl.filesystem.FileStream`](https://api.openfl.org/openfl/filesystem/FileStream.html) instead.

## Including RTTI

The `MXHXRuntimeComponent` class is powered by [Haxe Run-Time Type Information (RTTI)](https://haxe.org/manual/cr-rtti.html) embedded into the application at compile-time. The information about fields and their types cannot be discovered through reflection alone. Developers need to ensure that `@:rtti` metadata is added to any Haxe classes that might be referenced in MXHX documents loaded at run-time.

It's possible to add `@:rtti` metadata to every class in a package (recursively) using the [`Compiler.addGlobalMetadata()`](https://api.haxe.org/haxe/macro/Compiler.html#addGlobalMetadata) macro built into Haxe.

In an _.hxml_ file:

```hxml
--macro addGlobalMetadata('com.example.components', '@:rtti', true, true, false)
```

In an OpenFL _project.xml_ file:

```xml
<haxeflag name="--macro" value="addGlobalMetadata('com.example.components', '@:rtti', true, true, false)"/>
```

## Including classes

Additionally, it's important to ensure that all classes referenced by MXHX documents at run-time are actually available. It's possible that the regular Haxe code in your application may not reference every class that you want to use in MXHX documents. In that case, you can use the [`Compiler.include()`](https://api.haxe.org/haxe/macro/Compiler.html#include) macro built into Haxe to force the classes to be included.

In an _.hxml_ file:

```hxml
--macro include('com.example.components')
```

In an OpenFL _project.xml_ file:

```xml
<haxeflag name="--macro" value="include('com.example.components')"/>
```