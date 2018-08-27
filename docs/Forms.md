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

---
### __Inputs__
This is probably the most popular and important aspect of any forms. Sparkle allows you to customize the inputs, labels, textareas, and selections by applying the `input`, `label`, `textarea`, and `select` classes to each respective elements. The following shows a good example on how to create a form
and style its elements:

```html
<form>
    <div class="inputs">
        <div class="grid">
            <div class="column make-third">
                <label for="text1" class="label">Test Input:</label>
            </div>
            <div class="column make-thirds">
                <input type="text" id="text1" name="text1" class="input [make-$type]" placeholder="Insert text here...">
            </div>
        </div>
    </div>
    <div class="inputs">
        <div class="grid">
            <div class="column make-third">
                <label for="text2" class="label">Test Textarea:</label>
            </div>
            <div class="column make-thirds">
                <textarea id="text2" name="text2" class="textarea [make-$type]" placeholder="Type message here..."></textarea>
            </div>
        </div>
    </div>
    <div class="inputs">
        <div class="grid">
            <div class="column make-third">
                <label for="text3" class="label">Test Selection:</label>
            </div>
            <div class="column make-thirds">
                <select id="text3" name="text3" class="select [make-$type]">
                    <option slected disabled>Select an option below...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button type="button" class="button">Button</button>
        <button type="button" class="button make-info">Button</button>
    </div>
</form>
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
