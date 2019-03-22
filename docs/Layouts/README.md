# Layouts
## The overall structural flow of the page.

### __Breadcrumbs__
Breadcrumbs, like navigation bars, allow the user to easily determine where he is at within a website's site map
and go back to a previous page within a chain link. In order to create a breadcrumb, you can add the class `breadcrumb` to a `<ul>` tag, then add `breadcrumb-item` to all its children `<li>`:

```html
<ul class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Docs</a></li>
    <li class="breadcrumb-item"><a href="#">Components</a></li>
    <li class="breadcrumb-item make-active">Buttons</li>
</ul>
```

The `breadcrumb-item` class comes with one modifiers: `make-active`, which the effect is written below:

| __Modifiers__ | __Effect__                                           |
| ------------- | ---------------------------------------------------- |
| `make-active` | Alters the font weight and color of the active item. |

---
### __Cards__
Cards allow the user to create a box around several elements. Cards contain 3 different "panels":
the header, the body, and the footer. You can create a card by adding the class `card` to a `<div>`
element, then separate each panel by adding `card-header`, `card-body`, or `card-footer` to its
respective usage. The example below shows how to properly create a card:

```html
<div class="card">
    <div class="card-header">
        // Body of element
    </div>
    <div class="card-body">
        <img src="#" alt="#" class="card-image">
        // Body of element
    </div>
    <div class="card-footer">
        // Body of element
    </div>
</div>
```

__Note:__ The use of an `<img>` element is optional elements; and if you wish to use an image,
simply add the `card-image` class to it. Unlike previous iterations of this element, you can now place the card image anywhere within the `card` (i.e: in the `card-header`, `card-body`, and even `card-footer`); and the `card-image` class is now required to use the proper image styling inside a `card` container.

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
| `make-twelfths`       | Fractional equivalent of `make-11`.                         |
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
| `make-offset-twelfths`              | Fractional equivalent of `make-offset-11`.                                 |
| `make-offset-full`                  | Fractional equivalent of `make-offset-12`.                                 |

You can also make the columns resize according to a specific screen breakpoint by adding one of the following
modifiers into the `make-$type`:

| __Modifiers__     | __Effect__                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| `make-$i-smaller` | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-none`.       |
| `make-$i-small`   | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-small`.      |
| `make-$i-medium`  | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-medium`.     |
| `make-$i-large`   | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-large`.      |
| `make-$i-larger`  | Creates a column that spans $i/12 of the created row of the screen width set by `$bp-widescreen`. |

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
    <header class="hero-header">
        // Body of element
    </header>
    <div class="hero-body">
        <div class="wrapper">
            // Body of element
        </div>
    </div>
    <div class="hero-footer">
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
    <div class="media-profile">
        <img src="#" alt="#">
    </div>
    <div class="media-body">
        // Body of element
    </div>
</div>
```

__Note:__ As of version 3.0.0, the `media__title` and `media__subtitle` have been deprecated to allow user to put his own title/subtitle styling to the element.

---
### __Menu__
*Description coming soon...*

```html
<div class="menu">
    <p class="menu-group">Group 1</p>
    <a href="#" class="menu-item">Menu Item 1</a>
    <a href="#" class="menu-item">Menu Item 2</a>
    <a href="#" class="menu-item">Menu Item 3</a>
    <p class="menu-group">Group 2</p>
    <a href="#" class="menu-item">Menu Item 4</a>
    <a href="#" class="menu-item">Menu Item 5</a>
    <div class="submenu">
        <a href="#" class="menu-item">Submenu Item 1</a>
        <a href="#" class="menu-item">Submenu Item 2</a>
        <div class="submenu">
            <a href="" class="menu-item">Sub-Submenu</a>
        </div>
    </div>
    <a href="#" class="menu-item">Menu Item 6</a>
    <p class="menu-group">Group 3</p>
    <a href="#" class="menu-item">Menu Item 7</a>
    <a href="#" class="menu-item">Menu Item 8</a>
</div>
```

---
### __Navigation__
_Description coming soon..._

```html
<nav class="nav [make-fixed]">
    <!-- TOGGLER -->
    <input type="checkbox" id="id_name">
    <label for="id_name" class="nav-toggle"></label>
    <!-- BRAND -->
    <div class="nav-brand">
        // Body of element goes here
    </div>
    <!-- MENU -->
    <ul class="nav-menu [make-right]">
        <li class="nav-menu-item [make-active]"><a href="#">Link 1</a></li>
        <li class="nav-menu-item"><a href="#">Link 2</a></li>
        <li class="nav-menu-item"><a href="#">Link 3</a></li>
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
Tables allow the user to display a series of data on the screen. Sparkle does, for the most part, the heavy lifting for you by styling the table in an efficient way. It even goes the extra mile by allowing the user to use either two (2) different approaches to create a table: the traditional way, or the unconventional way. In Sparkle, tables are styled using flexbox.

```html
<table class="table [make-default] [make-striped] [make-hoverable]">
    <!-- CAPTION (Optional) -->
    <caption>Table using &lt;table&gt;</caption>

    <!-- HEADER -->
    <thead>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Profession</th>
        </tr>
    </thead>

    <!-- BODY -->
    <tbody>
        <tr class="[make-selected]">
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

    <!-- FOOTER (Optional) -->
    <tfoot>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Profession</th>
        </tr>
    </tfoot>
</table>
```

You can also use `<div>`s to create a table too!

```html
<div class="table [make-default] [make-striped] [make-hoverable]">
    <!-- CAPTION (Optional) -->
    <div class="table-caption">Table using &lt;div&gt;</div>

    <!-- HEADER -->
    <div class="table-header">
        <div class="table-row">
            <div class="table-cell">Name</div>
            <div class="table-cell">ID</div>
            <div class="table-cell">Profession</div>
        </div>
    </div>

    <!-- BODY -->
    <div class="table-body">
        <div class="table-row [make-selected]">
            <div class="table-cell">John Doe</div>
            <div class="table-cell">1234</div>
            <div class="table-cell">Web Developer, UX Designer</div>
        </div>
        ...
        <div class="table-row">
            <div class="table-cell">Suzan Moore</div>
            <div class="table-cell">ABCD</div>
            <div class="table-cell">Professional Speaker, Advertiser</div>
        </div>
    </div>

    <!-- FOOTER (Optional) -->
    <div class="table-footer">
        <div class="table-row">
            <div class="table-cell">Name</div>
            <div class="table-cell">ID</div>
            <div class="table-cell">Profession</div>
        </div>
    </div>
</div>
```

The table's optional modifiers and their effects are as followed:

| __Modifiers__    | __Effect__                                                                       |
| ---------------- | -------------------------------------------------------------------------------- |
| `make-default`   | Adds a line at the bottom of each row, except the last.                          |
| `make-striped`   | Adds a zebra-like styling to the table body.                                     |
| `make-hoverable` | Highlights the table row that is being hovered on.                               |
| `make-selected`  | Highlights the styled table row (must be applied to the row, and not the table). |

__Note:__ All of the modifiers that are applicable to the `table` class can be combined altogether. The same modifiers are applied, whether you use the conventional `<table>` approach or the `<div>` approach.