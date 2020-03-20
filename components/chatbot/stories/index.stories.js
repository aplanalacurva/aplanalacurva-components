import { html, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../alc-chatbot.js';

export default {
  title: 'Chatbot',
  component: 'alc-chatbot',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybookjs/knobs/panel',
    },
  },
};

export const basic = () => html`
  <alc-chatbot
    logo="/components/chatbot/assets/avatar-default.svg"
    chatbot-icon="/components/chatbot/assets/avatar-chatbot.svg"
    close-image="/components/chatbot/assets/icon-close-default.svg"
    user-icon="/components/chatbot/assets/avatar-chatbot.svg"
    bot-icon="/components/chatbot/assets/avatar-chatbot.svg"
    send-icon="/components/chatbot/assets/icon-send-default.svg"
  ></alc-chatbot>
`;

export const basicOpen = () => html`
  <alc-chatbot
    opened
    logo="/components/chatbot/assets/avatar-default.svg"
    chatbot-icon="/components/chatbot/assets/avatar-chatbot.svg"
    close-image="/components/chatbot/assets/icon-close-default.svg"
    user-icon="/components/chatbot/assets/avatar-chatbot.svg"
    bot-icon="/components/chatbot/assets/avatar-chatbot.svg"
    send-icon="/components/chatbot/assets/icon-send-default.svg"
  ></alc-chatbot>
`;

export const basicWithInput = () => html`
  <alc-chatbot
    opened
    logo="/components/chatbot/assets/avatar-default.svg"
    chatbot-icon="/components/chatbot/assets/avatar-chatbot.svg"
    close-image="/components/chatbot/assets/icon-close-default.svg"
    user-icon="/components/chatbot/assets/avatar-chatbot.svg"
    bot-icon="/components/chatbot/assets/avatar-chatbot.svg"
    send-icon="/components/chatbot/assets/icon-send-default.svg"
    default-text-input="Hola!"
  ></alc-chatbot>
`;

export const basicWithMessage = () => html`
  <alc-chatbot
    opened
    logo="/components/chatbot/assets/avatar-default.svg"
    chatbot-icon="/components/chatbot/assets/avatar-chatbot.svg"
    close-image="/components/chatbot/assets/icon-close-default.svg"
    user-icon="/components/chatbot/assets/avatar-chatbot.svg"
    bot-icon="/components/chatbot/assets/avatar-chatbot.svg"
    send-icon="/components/chatbot/assets/icon-send-default.svg"
    .messages=${[
      {
        text: '¡Hola!',
      },
      {
        bot: true,
        text: 'Hola :-)',
      },
    ]}
  ></alc-chatbot>
`;
