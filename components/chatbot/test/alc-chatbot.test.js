import { fixture, expect, fixtureCleanup } from '@open-wc/testing';

import '../alc-chatbot.js';
import { basic, basicWithInput, basicWithMessage } from '../stories/index.stories.js';

describe('alc-chatbot', () => {
  afterEach(() => fixtureCleanup());

  describe('Basic', () => {
    let el;

    beforeEach(async () => {
      el = await fixture(basic());
      return el.updateComplete;
    });

    it('DOM', () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', () => {
      expect(el).shadowDom.to.equalSnapshot();
    });

    it('Light DOM', () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });

    it('Open chatbot', () => {
      el.shadowRoot.querySelector('[part="bubble-btn"]').click();
      expect(el.opened).to.equal(true);
    });

    it('Close chatbot', () => {
      el.shadowRoot.querySelector('[part="icon-close"]').click();
      expect(el.opened).to.equal(false);
    });
  });

  describe('Basic with input', () => {
    let el;

    beforeEach(async () => {
      el = await fixture(basicWithInput());
      return el.updateComplete;
    });

    it('DOM', () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', () => {
      expect(el).shadowDom.to.equalSnapshot();
    });

    it('Light DOM', () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });

    it('Added message', () => {
      expect(el.messages.length).to.equal(0);
      el._addText(
        new CustomEvent('alc-chat-form-send', {
          composed: true,
          bubbles: true,
          detail: {
            text: 'Hi!',
          },
        }),
      );
      expect(el.messages.length).to.equal(1);
    });
  });

  describe('Basic with messages', () => {
    let el;

    beforeEach(async () => {
      el = await fixture(basicWithMessage());
      return el.updateComplete;
    });

    it('DOM', () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', () => {
      expect(el).shadowDom.to.equalSnapshot();
    });

    it('Light DOM', () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });
  });
});
