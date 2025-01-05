---
layout: "article.html"
ogDescription: "Markup language for building GUIs in Haxe"
---

MXHX is a markup language designed to generate [Haxe](https://haxe.org/) classes declaratively. It is especially well-suited for creating custom GUI components in frontend projects.

The following example demonstrates a simple search form, created with MXHX for [Feathers UI](https://feathersui.com/)

```xml
<?xml version="1.0" encoding="utf-8"?>
<f:LayoutGroup xmlns:mx="https://ns.mxhx.dev/2024/basic"
    xmlns:f="https://ns.feathersui.com/mxhx">
    <f:layout>
        <f:HorizontalLayout gap="10.0"/>
    </f:layout>
    <f:TextInput id="searchInput" prompt="Search"/>
    <f:Button id="submitButton" text="Submit"/>
</f:LayoutGroup>
```

Like what you see? Let's dive in!

<div class="btn-wrapper">
  <a class="btn" href="/learn/installation/">Get Started →</a>
</div>