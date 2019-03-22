# Forms
## The elements essential to style a clean form UI.

### __Checkboxes__
_Description coming soon_. 

```html
<label class="checkbox [make-inline]">
    <input type="checkbox" class="checkbox-toggle">
    <i class="checkbox-icon"></i>
</label>
```

| __Modifiers__ | __Effect__                                                                     |
| --------------| ------------------------------------------------------------------------------ |
| `make-inline` | Allows the `checkbox` to be displayed inline. Each `checkbox` element must have the `make-inline` class in order to have them displayed on one line. |

---
### __Radios__
_Description coming soon_.

```html
<label class="radio [make-inline]">
    <input type="radio" class="radio-toggle">
    <i class="radio-icon"></i>
</label>
```

| __Modifiers__ | __Effect__                                                                     |
| --------------| ------------------------------------------------------------------------------ |
| `make-inline` | Allows the `radio` to be displayed inline. Each `radio` element must have the `make-inline` class in order to have them displayed on one line. |

---
### __Switches__
_Description coming soon_.

```html
<label class="switch">
    <input type="checkbox" class="switch-toggle">
    <i class="switch-handle"></i>
    <i class="switch-label"></i>
</label>
```
*__Note:__* At the moment, Sparkle doesn't offer the possibility to make the Switches inline. This feature
will be implemented in the subsequent release.

---
### [__Inputs__](../assets/SparkleUI_Inputs_v01.png)
This is probably the most popular and important aspect of any forms. Sparkle allows you to customize the inputs, labels, textareas, and selections by applying the `input`, `label`, `textarea`, and `select` classes to each respective elements. The following shows a good example on how to create a form and style its elements:

```html
<!-- Label -->
<label for="#" class="label">Label</label>

<!-- Inputs -->
<input type="text" class="input [make-$type] [make-$size] [make-rounded]">

<!-- Textarea -->
<textarea class="textarea [make-$type]"></textarea>

<!-- Select -->
<select class="select [make-$type]">
    <option name="selection" selected disabled>Make a selection</option>
    <option name="selection" value="A">Option A</option>
    <option name="selection" value="B">Option B</option>
    <option name="selection" value="C">Option C</option>
    ...
</select>
```

The `make-$type` modifier is optional, and the table below represents the list of the available modifiers:

| __Modifiers__  | __Effect__                                                                     |
| ---------------| ------------------------------------------------------------------------------ |
| `make-primary` | Creates an input field with an outline with the color set by `$color-primary`. |
| `make-info`    | Creates an input field with an outline with the color set by `$color-info`.    |
| `make-success` | Creates an input field with an outline with the color set by `$color-success`. |
| `make-warning` | Creates an input field with an outline with the color set by `$color-warning`. |
| `make-warning` | Creates an input field with an outline with the color set by `$color-warning`. |
| `make-danger`  | Creates an input field with an outline with the color set by `$color-danger`.  |

Furthermore, the `make-$size` modifier is optional, and the table below represents the list of the available modifiers:

| __Modifiers__  | __Effect (NEW in 3.0.0)__                                       |
| ---------------| --------------------------------------------------------------- |
| `make-smaller` | Creates an input field with a very small padding and font-size. |
| `make-small`   | Creates an input field with a small padding and font-size.      |
| `make-large`   | Creates an input field with a large padding and font-size.      |
| `make-larger`  | Creates an input field with a larger padding and font-size.     |

Lastly, the `make-rounded` modifier class allows the user to create a rounded edge on the input field:

| __Modifiers__  | __Effect (NEW in 3.0.0)__               |
| ---------------| --------------------------------------- |
| `make-rounded` | Adds a rounded edge on the input field. |

__Note:__ The `input` class is also used to style the following:
- `type="password"`
- `type="email"`
- `type="tel"`
- `type="number"`
- Etc..., except `type="button"`, `type="submit"`, or `type="clear"` which pertain to buttons.

---
### __Input Groups__
Input groups allow the user to create a margin to vertically separate a set of input elements from other surrounding
elements on the page. Simply add the class `inputs` to a `<div>` element, then add the desired children form elements.
The example below will create a set of `label` and `input` field, then create a margin at the top and bottom of the
parent `<div>` element.

```html
<div class="inputs">
    <label for="#" class="label">Label</label>
    <input type="text" class="input" id="#">
</div>
```

---
### __Input Addons__
Form groups allow the user to prepend or append a button to an input field, as seen in some modern forms or search bars, in many popular websites. In order to create an input addon, simply create a `<div>` element with a class `input__addon`, then add, before or after (or both), a `<button>` element with a class of `button`, as seen in the examples below:

```html
<!-- Prepend -->
<div class="input-addon">
    <button class="button">Button</button>
    <input type="text" class="input">
</div>

<!-- Append -->
<div class="input-addon">
    <input type="text" class="input">
    <button class="button">Button</button>
</div>

<!-- Both -->
<div class="input-addon[s]">
    <button class="button">Button 1</button>
    <input type="text" class="input">
    <button class="button">Button 2</button>
</div>
```