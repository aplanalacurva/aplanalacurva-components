# `alc-chatbot`

## `Basic`

#### `DOM`

```html
<alc-chatbot
  bot-icon="/components/chatbot/assets/avatar-chatbot.svg"
  chatbot-icon="/components/chatbot/assets/avatar-chatbot.svg"
  close-image="/components/chatbot/assets/icon-close-default.svg"
  logo="/components/chatbot/assets/avatar-default.svg"
  send-icon="/components/chatbot/assets/icon-send-default.svg"
  user-icon="/components/chatbot/assets/avatar-chatbot.svg"
>
</alc-chatbot>
```

#### `Shadow DOM`

```html
<button
  aria-label="Abrir conversación con Chatbot"
  class="pointer"
  part="bubble-btn"
  style='background-image: url("/components/chatbot/assets/avatar-chatbot.svg");'
></button>
<div hidden="" id="bubble" part="bubble">
  <div part="header">
    <img part="logo" src="/components/chatbot/assets/avatar-default.svg" title="Logo" />
    <img
      class="close pointer"
      part="icon-close"
      src="/components/chatbot/assets/icon-close-default.svg"
      title="Close"
    />
  </div>
  <div id="container" part="container"></div>
  <div part="footer">
    <alc-chat-form
      exportparts="container icon-send"
      icon="/components/chatbot/assets/icon-send-default.svg"
    >
    </alc-chat-form>
  </div>
</div>
```

#### `Light DOM`

```html

```

## `Basic with input`

#### `DOM`

```html
<alc-chatbot
  bot-icon="/components/chatbot/assets/avatar-chatbot.svg"
  chatbot-icon="/components/chatbot/assets/avatar-chatbot.svg"
  close-image="/components/chatbot/assets/icon-close-default.svg"
  default-text-input="Hola!"
  logo="/components/chatbot/assets/avatar-default.svg"
  opened=""
  send-icon="/components/chatbot/assets/icon-send-default.svg"
  user-icon="/components/chatbot/assets/avatar-chatbot.svg"
>
</alc-chatbot>
```

#### `Shadow DOM`

```html
<button
  aria-label="Abrir conversación con Chatbot"
  class="pointer"
  hidden=""
  part="bubble-btn"
  style='background-image: url("/components/chatbot/assets/avatar-chatbot.svg");'
></button>
<div id="bubble" part="bubble">
  <div part="header">
    <img part="logo" src="/components/chatbot/assets/avatar-default.svg" title="Logo" />
    <img
      class="close pointer"
      part="icon-close"
      src="/components/chatbot/assets/icon-close-default.svg"
      title="Close"
    />
  </div>
  <div id="container" part="container"></div>
  <div part="footer">
    <alc-chat-form
      exportparts="container icon-send"
      icon="/components/chatbot/assets/icon-send-default.svg"
    >
    </alc-chat-form>
  </div>
</div>
```

#### `Light DOM`

```html

```

## `Basic with messages`

#### `DOM`

```html
<alc-chatbot
  bot-icon="/components/chatbot/assets/avatar-chatbot.svg"
  chatbot-icon="/components/chatbot/assets/avatar-chatbot.svg"
  close-image="/components/chatbot/assets/icon-close-default.svg"
  logo="/components/chatbot/assets/avatar-default.svg"
  opened=""
  send-icon="/components/chatbot/assets/icon-send-default.svg"
  user-icon="/components/chatbot/assets/avatar-chatbot.svg"
>
</alc-chatbot>
```

#### `Shadow DOM`

```html
<button
  aria-label="Abrir conversación con Chatbot"
  class="pointer"
  hidden=""
  part="bubble-btn"
  style='background-image: url("/components/chatbot/assets/avatar-chatbot.svg");'
></button>
<div id="bubble" part="bubble">
  <div part="header">
    <img part="logo" src="/components/chatbot/assets/avatar-default.svg" title="Logo" />
    <img
      class="close pointer"
      part="icon-close"
      src="/components/chatbot/assets/icon-close-default.svg"
      title="Close"
    />
  </div>
  <div id="container" part="container">
    <alc-chat-text avatar="/components/chatbot/assets/avatar-chatbot.svg" exportparts="icon text">
      ¡Hola!
    </alc-chat-text>
    <alc-chat-text
      avatar="/components/chatbot/assets/avatar-chatbot.svg"
      bot=""
      exportparts="icon text"
    >
      Hola :-)
    </alc-chat-text>
  </div>
  <div part="footer">
    <alc-chat-form
      exportparts="container icon-send"
      icon="/components/chatbot/assets/icon-send-default.svg"
    >
    </alc-chat-form>
  </div>
</div>
```

#### `Light DOM`

```html

```
