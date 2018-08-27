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
you must create a parent `<div>` tag and give it a class of `grid`, and then create children
`<div>` tags with a class of `column`. By default, Sparkle grid produces a grid with no gutters:
in order to create them, you have to add the class `make-gutters` to the `grid`.

```html
<div class="grid [make-gutters]">
    <div class="column [make-$type] [offset-$type]">
        // Body of element
    </div>
    ...
    <div class="column [make-$type] [offset-$type]">
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

Similarly to `make-$type`, the `offset-$type` modifier represents one of the following modifiers:
- `offset-1` to `offset-12`
- `offset-twelfth` (equivalent to `offset-1`)
- `offset-sixth` (equivalent to `offset-2`)
- `offset-fourth` (equivalent to `offset-3`)
- `offset-third` (equivalent to `offset-4`)
- `offset-half` (equivalent to `offset-6`)
- `offset-thirds` (equivalent to `offset-8`)
- `offset-fourths` (equivalent to `offset-9`)
- `offset-sixths` (equivalent to `offset-10`)
- `offset-twelfths` (equivalent to `offset-11`)
- `offset-full` (equivalent to `offset-12`)

__Note:__ It is important to remember that both columns and offsets must fit within a 12-column grid.
Going over 12 would result is visual problems when laying out your elements.

---
### __Heroes__
*Description coming soon...*

```html
<div class="hero make-$size [make-$type]">
    <div class="hero__header">
        // Body of element
    </div>
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
        <div class="media__title">John Doe</div>
        <div class="media__subtitle">Web Developer | UX Designer</div>
        // Body of element
    </div>
</div>
```

---
### __Menu__
*Description coming soon...*

```html
<div class="media make-$size [make-$type]">
    <div class="media__profile">
        <img src="#" alt="#">
    </div>
    <div class="media__body">
        <div class="media__title">John Doe</div>
        <div class="media__subtitle">Web Developer | UX Designer</div>
        // Body of element
    </div>
</div>
```

---
### __Navigation__
*Description coming soon...*

```html
<div class="media make-$size [make-$type]">
    <div class="media__profile">
        <img src="#" alt="#">
    </div>
    <div class="media__body">
        <div class="media__title">John Doe</div>
        <div class="media__subtitle">Web Developer | UX Designer</div>
        // Body of element
    </div>
</div>
```

---
### __Tables__
*Description coming soon...*

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