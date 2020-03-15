# `al-chat-form`

## `Basic`

#### `DOM`

```html
<alc-chat-form icon="/components/chat-form/assets/icon-send-default.svg"> </alc-chat-form>
```

#### `Shadow DOM`

```html
<div part="container">
  <textarea placeholder="Escribe" type="text"> </textarea>
  <span style="display: none;">
    Enviar mensaje
  </span>
  <button>
    <img alt="Enviar" part="icon-send" src="/components/chat-form/assets/icon-send-default.svg" />
  </button>
</div>
```

#### `Light DOM`

```html

```

## `Basic with value`

#### `DOM`

```html
<alc-chat-form icon="/components/chat-form/assets/icon-send-default.svg" value="Hola!">
</alc-chat-form>
```

#### `Shadow DOM`

```html
<div part="container">
  <textarea placeholder="Escribe" type="text"> </textarea>
  <span style="display: none;">
    Enviar mensaje
  </span>
  <button>
    <img alt="Enviar" part="icon-send" src="/components/chat-form/assets/icon-send-default.svg" />
  </button>
</div>
```

#### `Light DOM`

```html

```

## `Basic without icon`

#### `DOM`

```html
<alc-chat-form> </alc-chat-form>
```

#### `Shadow DOM`

```html
<div part="container">
  <textarea placeholder="Escribe" type="text"> </textarea>
  <span style="display: none;">
    Enviar mensaje
  </span>
</div>
```

#### `Light DOM`

```html

```
