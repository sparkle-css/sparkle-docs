# Components
## The customized building blocks that build the more complex objects of the framework.

### [__Alerts__](../assets/SparkleUI_Alerts_v01.png)
Alerts are used to display information on your screen. Depending on the type of information you want to display (i.e.: danger, warning, success, info, etc.), Sparkle allows you to style it accordingly. Simply add an `alert` class to a `<div>` tag, then add a `make-$type` modifier. 

```html
<div class="alert [make-$type]">
    // Body of element
</div>
```

The `make-$type` modifier is optional, and `$type` represents one of the following modifiers:

| __Modifiers__  | __Effect__                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------- |
| `make-primary` | The BG color of the `alert` is set to `$color-primary`, and the font color to `$color-dark`.  |
| `make-info`    | The BG color of the `alert` is set to `$color-info`, and the font color to `$color-light`.    |
| `make-success` | The BG color of the `alert` is set to `$color-success`, and the font color to `$color-light`. |
| `make-warning` | The BG color of the `alert` is set to `$color-warning`, and the font color to `$color-dark`.  |
| `make-danger`  | The BG color of the `alert` is set to `$color-danger`, and the font color to `$color-light`.  |
| `make-light`   | The BG color of the `alert` is set to `$color-light`, and the font color to `$color-dark`.    |
| `make-dark`    | The BG color of the `alert` is set to `$color-dark`, and the font color to `$color-light`.    |

---
### __Blockquotes__
Sometimes, you just need to take a section from another source and quote it stylistically. Sparkle fulfills that wish too! Simply add a `blockquote` class to your `<blockquote>` tag.

```html
<blockquote class="blockquote">
    // Body of element
    <footer class="blockquote-footer">
        // Body of element
    </footer>
</blockquote>
```
__Note:__ The stylized `blockquote` has been deprecated.

---
### [__Buttons__](../assets/SparkleUI_Buttons_v01.png)
One of the most essential elements in a CSS framework: buttons. Sparkle allows you to style anchor tags, div tags, input:button tags, or buttons by simply putting `button` in its class list. This is also the first step to style a button accordingly (see other styling below).

```html
<a href="#" class="button [make-$type] [make-$size]">Button</a>
<button class="button [make-$type] [make-$size]">Button</button>
<div class="button [make-$type] [make-$size]">Button</div>
<input type="button" class="button [make-$type] [make-$size]" value="Button">
<input type="submit" class="button [make-$type] [make-$size]" value="Button">
<input type="reset" class="button [make-$type] [make-$size]" value="Button">
```

The `make-$type` modifier is optional, and `$type` represents one of the following modifiers:

| __Modifiers__  | __Effect__                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `make-primary` | The BG color of the `button` is set to `$color-primary`, and the font color to `$color-dark`.  |
| `make-info`    | The BG color of the `button` is set to `$color-info`, and the font color to `$color-light`.    |
| `make-success` | The BG color of the `button` is set to `$color-success`, and the font color to `$color-light`. |
| `make-warning` | The BG color of the `button` is set to `$color-warning`, and the font color to `$color-dark`.  |
| `make-danger`  | The BG color of the `button` is set to `$color-danger`, and the font color to `$color-light`.  |
| `make-light`   | The BG color of the `button` is set to `$color-light`, and the font color to `$color-dark`.    |
| `make-dark`    | The BG color of the `button` is set to `$color-dark`, and the font color to `$color-light`.    |

The following modifiers can only be used if one of the `make-$type` is used:

| __Modifiers__   | __Effect__                                                                                |
| --------------- | ----------------------------------------------------------------------------------------- |
| `make-outlined` | Allows the button to become outlined (combinable with `make-reverse`).                    |
| `make-reversed` | Reverses the color of the font with the color of the BG (combinable with `make-outline`). |
| `make-link`     | Allows the button to look like a regular link (no background or outline).                 |

You can also alter the size of the button by adding the `make-$size` class to the class list, where `$size` is either one of the following:

| __Modifiers__  | __Effect__                                                 |
| -------------- | ---------------------------------------------------------- |
| `make-smaller` | Creates a smaller button.                                  |
| `make-small`   | Creates a small button.                                    |
| `make-large`   | Creates a large button.                                    |
| `make-larger`  | Creates a larger button.                                   |
| `make-block`   | Creates a button that spans through 100% of its container. |

Lastly, you can use a `<div>` tag with class `buttons` in order to group button elements together, as followed:
```html

<div class="buttons [make-solid]">
    <button class="button">Button 1</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
    ...
</div>
```

The following classes are modifiers for a button group:

| __Modifiers__   | __Effect__                                                                      |
| --------------- | ------------------------------------------------------------------------------- |
| `make-solid`    | It allows you to remove the gaps between each button elements within the group. |
| `make-centered` | It allows you to center the button group within a container.                    |
| `make-right`    | It allows you to place the button group to the right side of a container.       |

---
### __Loaders__
The loaders are great when you want to display something simple while you're waiting for your page, or
another more specific element, to load. In Sparkle, the loaders come in various types and sizes. In order
to create a loader, simply create an empty `<div>` tag and style accordingly. The loader can go inside other
elements, such as buttons.

```html
<div class="loader [make-$type] [make-$size]"></div>
```

The `make-$type` is optional, and `$type` represents one of the following modifiers:

| __Modifiers__  | __Effect__                                                       |
| -------------- | ---------------------------------------------------------------- |
| `make-primary` | The BG color of the `loader` spinner is set to `$color-primary`. |
| `make-info`    | The BG color of the `loader` spinner is set to `$color-info`.    |
| `make-success` | The BG color of the `loader` spinner is set to `$color-success`. |
| `make-warning` | The BG color of the `loader` spinner is set to `$color-warning`. |
| `make-danger`  | The BG color of the `loader` spinner is set to `$color-danger`.  |
| `make-light`   | The BG color of the `loader` spinner is set to `$color-light`.   |
| `make-dark`    | The BG color of the `loader` spinner is set to `$color-dark`.    |

You can also alter the size of the loader by adding the `make-$size` class to the class list, where `$size` is either one of the following:

| __Modifiers__ | __Effect__                            |
| ------------- | ------------------------------------- |
| `make-large`  | It creates a large `loader` spinner.  |
| `make-larger` | It creates a larger `loader` spinner. |

---
### __Progress Bars__ [NEW in 3.0.0]
_Description coming soon..._

```html
<progress class="progress [make-$type]" value="$value">$value</progress>
```

The `make-$type` is optional, and `$type` represents one of the following modifiers:

| __Modifiers__  | __Effect__                                                     |
| -------------- | -------------------------------------------------------------- |
| `make-primary` | The BG color of the `progress` bar is set to `$color-primary`. |
| `make-info`    | The BG color of the `progress` bar is set to `$color-info`.    |
| `make-success` | The BG color of the `progress` bar is set to `$color-success`. |
| `make-warning` | The BG color of the `progress` bar is set to `$color-warning`. |
| `make-danger`  | The BG color of the `progress` bar is set to `$color-danger`.  |
| `make-light`   | The BG color of the `progress` bar is set to `$color-light`.   |
| `make-dark`    | The BG color of the `progress` bar is set to `$color-dark`.    |

---
### __Tags__
You can use tags to allow you to identify or emphasize important information. One of the most efficient ways to create a tag is to add `<span>` tag with a `tag` class. Tags come in various type (default, primary, info, etc.) and can be either normal, outlined, or reversed.

```html
<span class="tag [make-$type]">Tag</span>
```

The `make-$type` modifier is optional, and `$type` represents one of the following modifiers:

| __Modifiers__  | __Effect__                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------- |
| `make-primary` | The BG color of the `tag` is set to `$color-primary`, and the font color to `$color-dark`.  |
| `make-info`    | The BG color of the `tag` is set to `$color-info`, and the font color to `$color-light`.    |
| `make-success` | The BG color of the `tag` is set to `$color-success`, and the font color to `$color-light`. |
| `make-warning` | The BG color of the `tag` is set to `$color-warning`, and the font color to `$color-dark`.  |
| `make-danger`  | The BG color of the `tag` is set to `$color-danger`, and the font color to `$color-light`.  |
| `make-light`   | The BG color of the `tag` is set to `$color-light`, and the font color to `$color-dark`.    |
| `make-dark`    | The BG color of the `tag` is set to `$color-dark`, and the font color to `$color-light`.    |

The following modifiers can only be used if one of the `make-$type` is used:

| __Modifiers__   | __Effect__                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------- |
| `make-outlined` | Allows the `tag` to become outlined (__not__ combinable with `make-reverse`).                   |
| `make-reversed` | Reverses the color of the font with the color of the BG (*not* combinable with `make-outline`). |

Like buttons, you can couple multiple tags into one group by creating a `<div>` tag with a class `tags`:
```html
<div class="tags [make-solid]">
    <span class="tag">Tag 1</span>
    <span class="tag">Tag 2</span>
    <span class="tag">Tag 3</span>
    ...
</div>
```

There is only one modifier for a tag group:

| __Modifiers__ | __Effect__                                                                   |
| ------------- | ---------------------------------------------------------------------------- |
| `make-solid`  | It allows you to remove the gaps between each tag elements within the group. |