# Layouts
## The overall structural flow of the page.

### __Cards__
Cards allow the user to create a box around several elements. Cards contain 3 different "panels":
the header, the body, and the footer. You can create a card by adding the class `card` to a `<div>`
element, then separate each panel by adding `card__header`, `card__body`, or `card__footer` to its
respective usage. The example below shows how to properly create a card:

```html
<div class="card">
    <div class="card__header">
        <div class="card__title">Card Title</div>
        <div class="card__subtitle">Card Subtitle</div>
    </div>
    <div class="card__body">
        <img src="#" alt="#" class="card__image">
        // Body of element
    </div>
    <div class="card__footer">
        <div class="card__footer__item">
            // Body of element
        </div>
        ...
        <div class="card__footer__item">
            // Body of element
        </div>
    </div>
</div>
```
__Note:__ The use of an `<img>` element is optional elements; and if you wish to use an image,
in the `card__body`, you don't have to add a `card__image` class to it, unless you want to
keep it semantically consistent. In the same way, you don't have to add `card__footer__item`
classes to `<div>` elements, unless you want to separate each footer element in its own "box".

---
### __Containers__
Containers offer you the ability to align all items within a specific width in the HTML page,
as well as control when the responsive elements react within the page. In Sparkle, the maximum
width of the container is `1200px`. In order to "wrap" the elements within your page, you must
create a `<div>` element and give it a class of `wrapper`.

```html
<div class="wrapper">
    // Body of element
</div>
```

---
### __Grid__
The grid (which is also your row) allows you to horizontally arrange your elements on the page, more so efficiently if it is used in conjunction with and inside the `wrapper`. In order to create a proper grid, you must create a parent `<div>` tag and give it a class of `columns`, and then create children `<div>` tags with a class of `column`. By default, Sparkle grid produces a grid with gutters: in order to remove them, you have to add the class `make-no-gaps` to the `columns`.

```html
<div class="columns [make-no-gaps] [make-multiline]">
    <div class="column [make-$type] [make-offset-$type]">
        // Body of element
    </div>
    ...
    <div class="column [make-$type] [make-offset-$type]">
        // Body of element
    </div>
</div>
```

The `columns` class comes with two modifiers: `make-multiline` and `make-no-gaps`. Their effects are written below:

| __Modifiers__    | __Effect__                                                                            |
| ---------------- | ------------------------------------------------------------------------------------- |
| `make-multiline` | Allows the columns to wrap into another row, if the current row length is fully used. |
| `make-no-gaps`   | Removes the gutter between each `column` elements.                                    |

The `make-$type` modifier is optional (which would automatically produce a column with 100%, which will
automatically resize when more columns are added, using the flexbox capabilities), and `$type` represents
one of the following modifiers:

| __Modifiers__         | __Effect__                                                  |
| --------------------- | ----------------------------------------------------------- |
| `make-1` to `make-12` | Creates a column that spans 1/12 to 12/12 of the row width. |
| `make-twelfth`        | Fractional equivalent of `make-1`.                          |
| `make-sixth`          | Fractional equivalent of `make-2`.                          |
| `make-fourth`         | Fractional equivalent of `make-3`.                          |
| `make-third`          | Fractional equivalent of `make-4`.                          |
| `make-half`           | Fractional equivalent of `make-6`.                          |
| `make-thirds`         | Fractional equivalent of `make-8`.                          |
| `make-fourths`        | Fractional equivalent of `make-9`.                          |
| `make-sixths`         | Fractional equivalent of `make-10`.                         |
| `make-twelths`        | Fractional equivalent of `make-11`.                         |
| `make-full`           | Fractional equivalent of `make-12`.                         |

Similarly to `make-$type`, the `make-offset-$type` modifier represents one of the following modifiers:

| __Modifiers__                       | __Effect__                                                                 |
| ----------------------------------- | -------------------------------------------------------------------------- |
| `make-offset-1` to `make-offset-12` | Creates a column that offsets 1/12 to 12/12 from the left side of the row. |
| `make-offset-twelfth`               | Fractional equivalent of `make-offset-1`.                                  |
| `make-offset-sixth`                 | Fractional equivalent of `make-offset-2`.                                  |
| `make-offset-fourth`                | Fractional equivalent of `make-offset-3`.                                  |
| `make-offset-third`                 | Fractional equivalent of `make-offset-4`.                                  |
| `make-offset-half`                  | Fractional equivalent of `make-offset-6`.                                  |
| `make-offset-thirds`                | Fractional equivalent of `make-offset-8`.                                  |
| `make-offset-fourths`               | Fractional equivalent of `make-offset-9`.                                  |
| `make-offset-sixths`                | Fractional equivalent of `make-offset-10`.                                 |
| `make-offset-twelths`               | Fractional equivalent of `make-offset-11`.                                 |
| `make-offset-full`                  | Fractional equivalent of `make-offset-12`.                                 |

You can also make the columns resize according to a specific screen breakpoint by adding one of the following
modifiers into the `make-$type`:

| __Modifiers__    | __Effect__                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `make-$i-xsmall` | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-none`.       |
| `make-$i-small`  | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-small`.      |
| `make-$i-medium` | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-medium`.     |
| `make-$i-large`  | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-large`.      |
| `make-$i-xlarge` | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-widescreen`. |

__Note:__ These breakpoint modifiers are also applicable to the offsets (ex.: `make-offset-4-small`). The value `$i` represents either the numerical value of the span of the column (1 to 12) or the fractional values (ex.: `make-fourth-medium`).

__Note:__ It is important to remember that both columns and offsets must fit within a 12-column grid altogether.
Going over 12 would result is visual problems when laying out your elements, unless the class `make-multiline`
is added to the `columns` element, in which case it will create a new row automatically.

---
### __Heroes__
The `hero` class allows the user to boldly display visual elements on the page, like a banner, for example.
In order to create it, simply add `hero` to a `<div>` element

```html
<div class="hero make-$size [make-$type]">
    <header class="hero__header">
        // Body of element
    </header>
    <div class="hero__body">
        <div class="wrapper">
            // Body of element
        </div>
    </div>
    <div class="hero__footer">
        // Body of element
    </div>
</div>
```

The `hero` class contains two extra subclasses: `make-$size` and `make-$type`. The `make-$size` subclass
is mandatory, in order to give the element a specific spacing to the `hero` element. The sizes are as
followed:

| __Modifiers__      | __Effect__                                                                          |
| ------------------ | ----------------------------------------------------------------------------------- |
| `make-small`       | Creates a relatively small banner-like, full-width box on the screen.               |
| `make-medium`      | Creates a banner-like, full-width spacing that is 3x bigger than `make-small`.      |
| `make-large`       | Creates a banner-like, full-width spacing that is 3x bigger than `make-medium`.     |
| `make-half-height` | Creates a banner-like, full-width spacing that takes half of the viewport's height. |
| `make-full-height` | Creates a banner-like, full-width spacing that takes the entire viewport height.    |

As for the `make-$type` subclass, Sparkle offers the user some pre-made customization. The types,
like most elements that have them, comprise of:

| __Modifiers__  | __Effect__                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------- |
| `make-primary` | The BG color of the `hero` is set to `$color-primary`, and the font color to `$color-dark`.  |
| `make-info`    | The BG color of the `hero` is set to `$color-info`, and the font color to `$color-light`.    |
| `make-success` | The BG color of the `hero` is set to `$color-success`, and the font color to `$color-light`. |
| `make-warning` | The BG color of the `hero` is set to `$color-warning`, and the font color to `$color-dark`.  |
| `make-warning` | The BG color of the `hero` is set to `$color-warning`, and the font color to `$color-light`. |
| `make-danger`  | The BG color of the `hero` is set to `$color-danger`, and the font color to `$color-light`.  |
| `make-light`   | The BG color of the `hero` is set to `$color-light`, and the font color to `$color-dark`.    |
| `make-dark`    | The BG color of the `hero` is set to `$color-dark`, and the font color to `$color-light`.    |

__Note:__ The `hero__header` and `hero__footer` are optional elements, but the `hero__body` is mandatory, more so
if you intend to use the `make-half-height` or `make-full-height` modifiers. Furthermore, the `wrapper` class is
heavily suggested if using the aforementioned modifiers and must be placed __inside__ the `hero__body`.

---
### __Media__
*Description coming soon...*

```html
<div class="media">
    <div class="media__profile">
        <img src="#" alt="#">
    </div>
    <div class="media__body">
        <p class="media__title">John Doe</p>
        <p class="media__subtitle">Web Developer | UX Designer</p>
        // Body of element
    </div>
</div>
```

---
### __Menu__
*Description coming soon...*

```html
<div class="menu">
    <p class="menu__group">Group 1</p>
    <a href="#" class="menu__item">Menu Item 1</a>
    <a href="#" class="menu__item">Menu Item 2</a>
    <a href="#" class="menu__item">Menu Item 3</a>
    <p class="menu__group">Group 2</p>
    <a href="#" class="menu__item">Menu Item 4</a>
    <a href="#" class="menu__item">Menu Item 5</a>
    <div class="submenu">
        <a href="#" class="menu__item">Submenu Item 1</a>
        <a href="#" class="menu__item">Submenu Item 2</a>
        <div class="submenu">
            <a href="" class="menu__item">Sub-Submenu</a>
        </div>
    </div>
    <a href="#" class="menu__item">Menu Item 6</a>
    <p class="menu__group">Group 3</p>
    <a href="#" class="menu__item">Menu Item 7</a>
    <a href="#" class="menu__item">Menu Item 8</a>
</div>
```

---
### __Navigation__
_Description coming soon..._

```html
<nav class="nav [make-fixed]">
    <input type="checkbox" id="id" class="nav__toggle">
    <label for="id"></label>
    <div class="nav__brand">Brand</div>

    <ul class="nav__menu">
        <li class="nav__menu__item [make-active]"><a href="#">Link 1</a></li>
        <li class="nav__menu__item"><a href="#">Link 2</a></li>
        <li class="nav__menu__item"><a href="#">Link 3</a></li>
    </ul>

    <ul class="nav__menu make-right">
        <li class="nav__menu__item"><a href="#">Link 4</a></li>
        <li class="nav__menu__item"><a href="#">Link 5</a></li>
        <li class="nav__menu__item"><a href="#">Link 6</a></li>
    </ul>
</nav>
```

| __Modifiers__ | __Effect__                                                                             |
| ------------- | -------------------------------------------------------------------------------------- |
| `make-fixed`  | Makes the navbar fixed to the top of a parent container that has `position: relative`. |
| `make-right`  | Makes the navbar menu float to the right side of the navbar container.                 |
| `make-active` | Makes the link of the navbar fully opaque.                                             |

---
### __Tables__
_Description coming soon..._

```html
<table class="table [make-scrollable] [make-hoverable]">
    <thead>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Profession</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>1234</td>
            <td>Web Developer, UX Designer</td>
        </tr>
        ...
        <tr>
            <td>Suzan Moore</td>
            <td>ABCD</td>
            <td>Professional Speaker, Advertiser</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Profession</th>
        </tr>
    </tfoot>
</table>
```

The list below describe the table's modifiers and their effects:

| __Modifiers__    | __Effect__                                                                                |
| -----------------| ----------------------------------------------------------------------------------------- |
| `make-hoverable` | Highlights the table row that is being hovered on.                                        |
| `make-scrollable`| Allows the table to be scrolled on the __x-axis__ if the size of the screen is too small. |