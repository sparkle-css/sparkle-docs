# Layouts
## The overall structural flow of the page.

### __Cards__
*Description coming soon...*

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
in the `card__body`, you don't have to put a `card__image` class to it, unless you want to
keep it semantically consistent. In the same way, you don't have to include `card__footer__item`
classes to `<div>` elements, unless you want to separate each footer element separately.

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
The grid (which is also your row) allows you to horizontally arrange your elements on the page, more so efficiently if it is used in conjunction with and inside the `wrapper`. In order to create a proper grid,
you must create a parent `<div>` tag and give it a class of `columns`, and then create children
`<div>` tags with a class of `column`. By default, Sparkle grid produces a grid with gutters:
in order to remove them, you have to add the class `make-no-gaps` to the `columns`.

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

The `make-$type` modifier is optional (which would automatically produce a column with 100%, which will
automatically resize when more columns are added, using the flexbox capabilities), and `$type` represents
one of the following modifiers:
- `make-1` to `make-12`
- `make-twelfth` (equivalent to `make-1`)
- `make-sixth` (equivalent to `make-2`)
- `make-fourth` (equivalent to `make-3`)
- `make-third` (equivalent to `make-4`)
- `make-half` (equivalent to `make-6`)
- `make-thirds` (equivalent to `make-8`)
- `make-fourths` (equivalent to `make-9`)
- `make-sixths` (equivalent to `make-10`)
- `make-twelfths` (equivalent to `make-11`)
- `make-full` (equivalent to `make-12`)

Similarly to `make-$type`, the `make-offset-$type` modifier represents one of the following modifiers:
- `make-offset-1` to `make-offset-12`
- `make-offset-twelfth` (equivalent to `make-offset-1`)
- `make-offset-sixth` (equivalent to `make-offset-2`)
- `make-offset-fourth` (equivalent to `make-offset-3`)
- `make-offset-third` (equivalent to `make-offset-4`)
- `make-offset-half` (equivalent to `make-offset-6`)
- `make-offset-thirds` (equivalent to `make-offset-8`)
- `make-offset-fourths` (equivalent to `make-offset-9`)
- `make-offset-sixths` (equivalent to `make-offset-10`)
- `make-offset-twelfths` (equivalent to `make-offset-11`)
- `make-offset-full` (equivalent to `make-offset-12`)

You can also make the columns resize according to a specific screen breakpoint by adding one of the following
modifiers into the `make-$type`:
- `xsmall` (i.e.: `make-3-xsmall` would take a fourth of the screen no matter what the screen size)
- `small` (i.e.: `make-4-small` would take a third of the screen when the screen width is 480px or more)
- `medium` (i.e.: `make-8-medium` would take two-thirds of the screen when the screen width is 640px or more)
- `large` (i.e.: `make-9-large` would take three-fourths of the screen when the screen width is 960px or more)
- `xlarge` (i.e.: `make-6-xlarge` would take half of the screen when the screen width is 1200px or more)

__Note:__ These breakpoint modifiers are also applicable to the offsets (ex.: `make-offset-4-small`).

__Note:__ It is important to remember that both columns and offsets must fit within a 12-column grid.
Going over 12 would result is visual problems when laying out your elements.

---
### __Heroes__
*Description coming soon...*

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

---
### __Media__
*Description coming soon...*

```html
<div class="media make-$size [make-$type]">
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
<div class="menu" style="max-width: 200px;">
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

---
### __Tables__
_Description coming soon..._

```html
<table class="table [make-$type] [make-hoverable]">
    <thead>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Profession</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-table-label="Name">John Doe</td>
            <td data-table-label="ID">1234</td>
            <td data-table-label="Profession">Web Developer, UX Designer</td>
        </tr>
        ...
        <tr>
            <td data-table-label="Name">Suzan Moore</td>
            <td data-table-label="ID">ABCD</td>
            <td data-table-label="Profession">Professional Speaker, Advertiser</td>
        </tr>
    </tbody>
</table>
```