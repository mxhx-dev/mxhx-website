---
title: "Manifests"
layout: "docs.html"
ogDescription: "How to associate Haxe classes with MXHX tags"
---

A library that wants to expose new tags to MXHX may create an XML _manifest_ that maps tag names to fully-qualified class names.

The following example manifest creates two new tags.

```xml
<componentPackage>
  <component id="MyComponent" class="com.example.MyComponent"/>
  <component id="AnotherComponent" class="com.example.AnotherComponent"/>
</componentPackage>
```

A manifest may be registered with `mxhx.macros.MXHXComponent` in a [Haxe initialization macro](https://haxe.org/manual/macro-initialization.html).

The following example creates a class with a static `initialize()` method that may be used as an initialization macro. If this class is located at _./src/com/example/macros/MXHXMacro.hx_, it assumes that the manifest may be found at _./mxhx-manifest.xml_ (in the parent directory of _src_).

```haxe
package com.example.macros;

#if macro
import haxe.io.Path;
import haxe.macro.Context;
import haxe.macro.Expr;

class MXHXMacro {
	private static final NS_URI = "https://ns.example.com/mxhx";
	private static final MANIFEST_FILE_NAME = "mxhx-manifest.xml";

	public static function initialize():Void {
		var libraryPath = getLibraryPath();
		if (libraryPath == null) {
			return;
		}
		var manifestPath = Path.join([libraryPath, MANIFEST_FILE_NAME]);
		mxhx.macros.MXHXComponent.registerManifest(NS_URI, manifestPath);
  }

	private static function getLibraryPath():String {
		var t = Context.getModule("com.example.macros.MXHXMacro");
		var filePath:String = null;
		switch (t[0]) {
			case TInst(t, params):
				filePath = Context.getPosInfos(t.get().pos).file;
			default:
				return null;
		}
		return Path.join([Path.directory(filePath), "..", "..", ".."]);
	}
}
```

To use this initialization macro, specify the `--macro` compiler option.

In an _.hxml_ file:

```hxml
--macro com.example.macros.MXHXMacro.initialize()
```

In an OpenFL _project.xml_ file:

```xml
<haxeflag name="--macro" value="com.example.macros.MXHXMacro.initialize()"/>
```