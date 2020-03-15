# `al-chat-text`

## `Basic`

#### `DOM`

```html
<alc-chat-text avatar="/components/chat-text/assets/avatar-chatbot.svg" title="Avatar">
  ¿Qué síntomas provoca el coronavirus?
</alc-chat-text>
```

#### `Shadow DOM`

```html
<img alt="Avatar" part="icon" src="/components/chat-text/assets/avatar-chatbot.svg" />
<div part="text">
  <slot> </slot>
</div>
```

#### `Light DOM`

```html
¿Qué síntomas provoca el coronavirus?
```

## `Basic without avatar`

#### `DOM`

```html
<alc-chat-text>
  ¿Qué síntomas provoca el coronavirus?
</alc-chat-text>
```

#### `Shadow DOM`

```html
<div part="text">
  <slot> </slot>
</div>
```

#### `Light DOM`

```html
¿Qué síntomas provoca el coronavirus?
```
