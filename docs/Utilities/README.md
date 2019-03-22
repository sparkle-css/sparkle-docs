# Utilities
## The additional functionalities for optimum designs.

### __Backgrounds__ [NEW in 3.0.0]

| __Modifiers__             | __Effect__                                                           |
| ------------------------- | -------------------------------------------------------------------- |
| `make-background-primary` | Changes the background of the current container to `$color-primary`. |
| `make-background-info`    | Changes the background of the current container to `$color-info`.    |
| `make-background-success` | Changes the background of the current container to `$color-success`. |
| `make-background-warning` | Changes the background of the current container to `$color-warning`. |
| `make-background-danger`  | Changes the background of the current container to `$color-danger`.  |
| `make-background-light`   | Changes the background of the current container to `$color-light`.   |
| `make-background-dark`    | Changes the background of the current container to `$color-dark`.    |

---
### __Displays__

| __Modifiers__               | __Effect__                                                 |
| --------------------------- | ---------------------------------------------------------- |
| `make-display-block`        | Allows the container to behave as a block element.         |
| `make-display-inline-block` | Allows the container to behave as an inline-block element. |
| `make-display-inline`       | Allows the container to behave as an inline element.       |
| `make-display-flex`         | Allows the container to behave as a flex element.          |
| `make-display-inline-flex`  | Allows the container to behave as an inline-flex element.  |

---
### __Elevations__ [NEW in v3.0.0]

| __Modifiers__            | __Effect__                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------ |
| `make-hoverable`         | Creates a box-shadow under the container when it is _not_ hovered upon.              |
| `make-hoverable-high`    | Creates a bigger box-shadow under the container when it is _not_ hovered upon.       |
| `make-hoverable-higher`  | Creates an even bigger box-shadow under the container when it is _not_ hovered upon. |
| `make-hoverable-highest` | Creates a much bigger box-shadow under the container when it is _not_ hovered upon.  |
| `make-raised`            | Creates a permanent box-shadow under the container.                                  |
| `make-raised-high`       | Creates a bigger permanent box-shadow under the container element.                   |
| `make-raised-higher`     | Creates an even bigger permanent box-shadow under the container.                     |
| `make-raised-highest`    | Creates a much bigger permanent box-shadow under the container.                      |
| `make-raisable`          | Creates a box-shadow under the container when it is hovered upon.                    |
| `make-raisable-high`     | Creates a bigger box-shadow under the container when it is hovered upon.             |
| `make-raisable-higher`   | Creates an even bigger box-shadow under the container when it is hovered upon.       |
| `make-raisable-highest`  | Creates a much bigger box-shadow under the container when it is hovered upon.        |

---
### __Placements__

| __Modifiers__              | __Effect__                                                                                |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| `make-float-left`          | Forces element to float left.                                                             |
| `make-float-center`        | Forces element to be horizontally centered.                                               |
| `make-float-right`         | Forces elements to float right.                                                           |
| `make-float-none`          | Removes any floating properties of the current element.                                   |
| `make-justify-left`        | Allows the children elements to horizontally align at the start of the container.         |
| `make-justify-center`      | Allows the children elements to horizontally align at the center of the container.        |
| `make-justify-right`       | Allows the children elements to horizontally align at the end of the container.           |
| `make-justify-equal`       | Allows the children elements to be equally and horizontally distributed in the container. |
| `make-justify-around`      | _Description coming soon_.                                                                |
| `make-align-v-top`         | Allows the children elements to vertically align at the top of the (flex) container.      |
| `make-align-v-center`      | Allows the children elements to vertically align at the center of the (flex) container.   |
| `make-align-v-bottom`      | Allows the children elements to vertically align at the bottom of the (flex) container.   |
| `make-align-v-baseline`    | _Description coming soon_.                                                                |
| `make-align-v-self-start`  | Allows the children elements to vertically align at the left of the (flex) container.     |
| `make-align-v-self-center` | Allows the children elements to vertically align at the left of the (flex) container.     |
| `make-align-v-self-end`    | Allows the children elements to vertically align at the left of the (flex) container.     |
| `make-full-center`         | Allows the children elements to be fully centered within the (flex) container.            |

---
### __Spacings__

| __Modifiers__                | __Effect__                                                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| `make-no-margins`            | Removes all margins surrounding an element.                                                          |
| `make-margin-$i`             | Adds $i margin around the current element, where $i is ranging from 5px to 100px.                    |
| `make-margin-$i-top`         | Adds $i margin at the top of the current element, where $i is ranging from 5px to 100px.             |
| `make-margin-$i-bottom`      | Adds $i margin at the bottom of the current element, where $i is ranging from 5px to 100px.          |
| `make-margin-$i-vertical`    | Adds $i margin at the top and bottom of the current element, where $i is ranging from 5px to 100px.  |
| `make-margin-$i-left`        | Adds $i margin at the left of the current element, where $i is ranging from 5px to 100px.            |
| `make-margin-$i-right`       | Adds $i margin at the right of the current element, where $i is ranging from 5px to 100px.           |
| `make-margin-$i-horizontal`  | Adds $i margin at the left and right of the current element, where $i is ranging from 5px to 100px.  |
| `make-no-paddings`           | Removes all paddings inside an element.                                                              |
| `make-padding-$i`            | Adds $i padding around the current element, where $i is ranging from 5px to 100px.                   |
| `make-padding-$i-top`        | Adds $i padding at the top of the current element, where $i is ranging from 5px to 100px.            |
| `make-padding-$i-bottom`     | Adds $i padding at the bottom of the current element, where $i is ranging from 5px to 100px.         |
| `make-padding-$i-vertical`   | Adds $i padding at the top and bottom of the current element, where $i is ranging from 5px to 100px. |
| `make-padding-$i-left`       | Adds $i padding at the left of the current element, where $i is ranging from 5px to 100px.           |
| `make-padding-$i-right`      | Adds $i padding at the right of the current element, where $i is ranging from 5px to 100px.          |
| `make-padding-$i-horizontal` | Adds $i padding at the left and right of the current element, where $i is ranging from 5px to 100px. |

---
### __Visibilities__

| __Modifiers__                 | __Effect__                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------ |
| `make-hidden`                 | Hides an element.                                                              |
| `make-phone-hidden`           | Hides an element when the screen width is less than 40rem.                     |
| `make-hidden-phone-only`      | Hides an element when the screen width is between 0 and 40rem.                 |
| `make-tablet-hidden`          | Hides an element when the screen width is greater than 40rem.                  |
| `make-hidden-tablet-only`     | Hides an element when the screen width is between 40rem and 60rem.             |
| `make-hidden-tablet-down`     | Hides an element when the screen width is less than 60rem.                     |
| `make-desktop-hidden`         | Hides an element when the screen width is greater than 60rem.                  |
| `make-hidden-desktop-only`    | Hides an element when the screen width is between 60rem and 75rem.             |
| `make-hidden-desktop-down`    | Hides an element when the screen width is less than 75rem.                     |
| `make-widescreen-hidden`      | Hides an element when the screen width is greater than 75rem.                  |
| `make-invisible`              | Renders an element invisible.                                                  |
| `make-phone-invisible`        | Renders an element invisible when the screen width is less than 40rem.         |
| `make-invisible-phone-only`   | Renders an element invisible when the screen width is between 0 and 40rem.     |
| `make-tablet-invisible`       | Renders an element invisible when the screen width is greater than 40rem.      |
| `make-invisible-tablet-only`  | Renders an element invisible when the screen width is between 40rem and 60rem. |
| `make-invisible-tablet-down`  | Renders an element invisible when the screen width is less than 60rem.         |
| `make-desktop-invisible`      | Renders an element invisible when the screen width is greater than 60rem.      |
| `make-invisible-desktop-only` | Renders an element invisible when the screen width is between 60rem and 75rem. |
| `make-invisible-desktop-down` | Renders an element invisible when the screen width is less than 75rem.         |
| `make-widescreen-invisible`   | Renders an element invisible when the screen width is greater than 75rem.      |

---
### __Extra__

| __Modifiers__           | __Effect__                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `make-clearfix`         | Adds clearfix to an element.                                                           |
| `make-text-size$i`      | Adjusts the font size, where `$i` is 1 to 6, according to `<h1>` to `<h6>`.            |
| `make-text-$weight`     | Adjusts the font weight, where $weight is either `thin`, `normal`, `bold`, or `heavy`. |
| `make-text-italic`      | Makes the text italic.                                                                 |
| `make-text-$style`      | Adds color to the text, where `$style` is either of the thematic colors.               |
| `make-text-muted`       | Reduces the opacity of the text by 50%.                                                |
| `make-text-title`       | Makes the text fitting for a title.                                                    |
| `make-text-subtitle`    | Makes the text fitting for a subtitle.                                                 |
| `make-text-left`        | Aligns the text to the left (also the default).                                        |
| `make-text-centered`    | Aligns the text to the center.                                                         |
| `make-text-right`       | Aligns the text to the right.                                                          |
| `make-text-justified`   | Justifies the text.                                                                    |
| `make-text-uppercased`  | Transforms the text into all uppercased letters.                                       |
| `make-text-lowercased`  | Transforms the text into all lowercased letters.                                       |
| `make-text-capitalized` | All first letters of each word are capitalized.                                        |