# `alc-button-primary`

#### `DOM`

```html
<alc-button-primary role="button" tabindex="0" type="submit">
  button
  <button aria-hidden="true" slot="_button" tabindex="-1" type="submit"></button>
</alc-button-primary>
```

#### `Shadow DOM`

```html
<div class="btn">
  <slot> </slot>
  <slot name="_button"> </slot>
  <div class="click-area"></div>
</div>
```

#### `Light DOM`

```html
button <button aria-hidden="true" slot="_button" tabindex="-1" type="submit"></button>
```
