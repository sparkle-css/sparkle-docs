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
### __Inputs__
This is probably the most popular and important aspect of any forms. Sparkle allows you to customize the inputs, labels, textareas, and selections by applying the `input`, `label`, `textarea`, and `select` classes to each respective elements. The following shows a good example on how to create a form and style its elements:

```html
<!-- LABEL -->
<label for="#" class="label">Label</label>

<!-- INPUTS -->
<input type="text" class="input" [placeholder="Optional text here..."]>

<!-- TEXTAREA -->
<textarea class="textarea" [placeholder="Optional text here..."]></textarea>

<!-- SELECT -->
<select class="select">
    <option name="selection" selected disabled>Make a selection</option>
    <option name="selection" value="A">Option A</option>
    <option name="selection" value="B">Option B</option>
    <option name="selection" value="C">Option C</option>
</select>
```

The `make-$type` modifier is optional, and `$type` represents one of the following modifiers:
- `primary`
- `info`
- `success`
- `warning`
- `danger`

__Note:__ The `input` class is also valid to style the following:
- `text="password"`
- `text="email"`
- `text="tel"`
- `text="number"`
- Etc...