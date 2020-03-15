# Aplana la curva Web Components

It's a set of components ready to works with design tokens.

## Requeriments

_Please note:_ This project uses Yarn [Workspaces](https://classic.yarnpkg.com/en/docs/workspaces). If you want to run all demos locally you need to get [Yarn](https://classic.yarnpkg.com/en/docs/install) and install all depencies by executing `yarn install`.

## How to install

```bash
npm i @aplanalacurva/<package-name>
```

## How to use

### Use a Web Component

```html
<script type="module">
  import '@aplanalacurva/chatbot/alc-chatbot.js';
</script>

<alc-chatbot>My button</alc-chatbot>
```

### Extend a Web Component

```
import { AlcChatbot } from '@aplanalacurva/chat-bot';

class MyCustomChatbot extends AlcChatbot {}
customElements.define('my-custom-chat-bot', MyCustomChatbot);
```

## Coding guidlines

Check out [Lion Web Components coding guidelines](https://github.com/ing-bank/lion/blob/master/docs/README.md) for more detailed information.

## How to contribute

Aplana la curva Web Components are only as good as its contributions. Read our [contribution guide](https://github.com/aplanalacurva/aplanalacurva-components/blob/master/CONTRIBUTING.md) and feel free to enhance/improve Aplana la curva.

## Contact

Feel free to create a gitlab issue for any feedback or questions you might have. You can also find us on Telegram in the [#AplanaLaCurva](https://t.me/joinchat/RC59HVesVDNA4H3V-NOa6w) channel.

## Support and issues

As stated above "support and issues time" is currently rather limited: feel free to open a discussion. However, we can not guarantee any response times.
