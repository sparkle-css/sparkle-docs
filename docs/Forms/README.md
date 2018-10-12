# Forms
## The elements essential to style a clean form UI.

### __Checkboxes__
_Description coming soon_. 

```html
<label class="checkbox [make-inline]">
    <input type="checkbox" class="checkbox__toggle">
    <i class="checkbox__icon"></i>
</label>
```

The optional `make-inline` class allows the checkbox to be displayed inline. Each checkbox element
must have the `make-inline` class in order to have them displayed on one line.

---
### __Radios__
_Description coming soon_.

```html
<label class="radio [make-inline]">
    <input type="radio" class="radio__toggle">
    <i class="radio__icon"></i>
</label>
```

The optional `make-inline` class allows the checkbox to be displayed inline. Each radio element
must have the `make-inline` class in order to have them displayed on one line.

---
### __Switches__
_Description coming soon_.

```html
<label class="switch">
    <input type="checkbox" class="switch__toggle">
    <i class="switch__handle"></i>
    <i class="switch__label"></i>
</button>
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
<input type="text" class="input">

<!-- Textarea -->
<textarea class="textarea"></textarea>

<!-- Select -->
<select class="select">
    <option name="selection" selected disabled>Make a selection</option>
    <option name="selection" value="A">Option A</option>
    <option name="selection" value="B">Option B</option>
    <option name="selection" value="C">Option C</option>
    ...
</select>
```

The `make-$type` modifier is optional, and `$type` represents one of the following modifiers:
- `primary`
- `info`
- `success`
- `warning`
- `danger`

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
### __Form Groups__
Form groups allow the user to prepend or append a button to an input field, as seen in some modern forms or search bars, in many popular websites. In order to create a form group, simply create a `<div>` element with a class `form-group`, then add a bottom before or after (or both) a `button` element with a class of `button`, as seen in the example below:

```html
<!-- Prepend -->
<div class="form-group">
    <button class="button">Button</button>
    <input type="text" class="input">
</div>

<!-- Append -->
<div class="form-group">
    <input type="text" class="input">
    <button class="button">Button</button>
</div>

<!-- Both -->
<div class="form-group">
    <button class="button">Button 1</button>
    <input type="text" class="input">
    <button class="button">Button 2</button>
</div>
```