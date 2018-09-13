# Components
## The customized building blocks that build the more complex objects of the framework.

### __Alerts__
Alerts are used to display information on your screen. Depending on the type of information you want to display (i.e.: danger, warning, success, info, etc.), Sparkle allows you to style it accordingly. Simply add an `alert` class to a `<div>` tag, then add a `make-$type` modifier. 

```html
<div class="alert [make-$type]">
    // Body of element
</div>
```

The `make-$type` modifier is optional, and `$type` represents one of the following modifiers:
- `primary`
- `info`
- `success`
- `warning`
- `danger`
- `light`
- `dark`

---
### __Blockquotes__
Sometimes, you just need to take a section from another source and quote it stylistically. Sparkle fulfills that wish too! Simply add a `blockquote` class to your `<blockquote>` tag, then a `make-$type`
modifier if you need it.

```html
<blockquote class="blockquote">
    // Body of element
    <footer class="blockquote__footer">
        // Body of element
    </footer>
</blockquote>
```
__Note:__ The stylized `blockquote` has been deprecated.

---
### [__Buttons__](./assets/SparkleUI_Buttons_v01.png)
One of the most essential elements in a CSS framework: buttons. Sparkle allows you to style anchor tags, div tags, and buttons by simply putting `button` in its class list. This is also the first step to style a button accordingly (see other styling below).

```html
<button class="button [make-$type] [make-$size]">
    // Body of element
</button>
```

The `make-$type` modifier is optional, and `$type` represents one of the following modifiers:
- `primary`
- `info`
- `success`
- `warning`
- `danger`
- `light`
- `dark`

The following modifiers can only be used if one of the `make-$type` is used:
- `make-outline`
- `make-reverse`
- `make-link`

You can also alter the size of the button by adding the `make-$size` class to the class list, where `$size` is either one of the following:
- `xsmall`
- `small`
- `large`
- `xlarge`
- `block`

Lastly, you can use a `<div>` tag with class `buttons` in order to group button elements together, as followed:
```html
<div class="buttons [make-solid]">
    <button class="button">Button 1</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
    ...
</div>
```

The `make-solid` modifier allows you to remove the gaps between each button elements within the group.

---
### __Loaders__
The loaders are great when you want to display something simple while you're waiting for your page, or
another more specific element, to load. In Sparkle, the loaders come in various types and sizes. In order
to create a loader, simply create an empty `<div>` tag and style accordingly. The loader can go inside other
elements, such as buttons.

```html
<div class="loader [make-$type] [make-$size]"></div>
```

The `make-$type` modifier is optional, and `$type` represents one of the following modifiers:
- `primary`
- `info`
- `success`
- `warning`
- `danger`
- `light`
- `dark`

You can also alter the size of the loader by adding the `make-$size` class to the class list, where `$size` is either one of the following:
- `medium`
- `large`

---
### __Tags__
You can use tags to allow you to identify or emphasize important information. One of the most efficient ways to create a tag is to add `<span>` tag with a `tag` class. Tags come in various type (default, primary, info, etc.) and can be either normal, outlined, or reversed.

```html
<span class="tag [make-$type]">
    // Body of element
</span>
```

The `make-$type` modifier is optional, and `$type` represents one of the following modifiers:
- `primary`
- `info`
- `success`
- `warning`
- `danger`
- `light`
- `dark`

The following modifiers can only be used if one of the `make-$type` is used:
- `make-outline`
- `make-reverse`

Like buttons, you can couple multiple tags into one group by creating a `<div>` tag with a class `tags`:
```html
<div class="tags [make-solid]">
    <span class="tag">Tag 1</span>
    <span class="tag">Tag 2</span>
    <span class="tag">Tag 3</span>
    ...
</div>
```
The `make-solid` modifier allows you to remove the gaps between each button elements within the group.