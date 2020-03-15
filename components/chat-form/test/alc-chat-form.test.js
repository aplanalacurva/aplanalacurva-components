import { fixture, expect, fixtureCleanup, oneEvent } from '@open-wc/testing';
import '../alc-chat-form.js';
import { basic, basicWithValue, basicWithoutIcon } from '../stories/index.stories.js';

describe('al-chat-form', () => {
  let el;
  let elementShadowRoot;

  afterEach(() => fixtureCleanup());

  describe('Basic', () => {
    beforeEach(async () => {
      el = await fixture(basic());
      elementShadowRoot = el.shadowRoot;

      return el.updateComplete;
    });

    it('DOM', async () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', async () => {
      expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes: ['id', 'aria-labelledby'] });
    });

    it('Light DOM', async () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });

    it('Enter key code 13 fires "alc-chat-form-send"', async () => {
      const textarea = elementShadowRoot.querySelector('textarea');
      const event = new CustomEvent('keypress');
      event.keyCode = 13;
      setTimeout(() => textarea.dispatchEvent(event));
    });
  });

  describe('Basic with value', () => {
    beforeEach(async () => {
      el = await fixture(basicWithValue());
      elementShadowRoot = el.shadowRoot;

      return el.updateComplete;
    });

    it('DOM', async () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', async () => {
      expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes: ['id', 'aria-labelledby'] });
    });

    it('Light DOM', async () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });

    it('Clicking button fires "alc-chat-form-send"', async () => {
      const button = elementShadowRoot.querySelector('button');
      setTimeout(() => button.click());
      const { detail } = await oneEvent(el, 'alc-chat-form-send');
      expect(detail.text).to.equal('Hola!');
    });

    it('Enter key code 13 fires "alc-chat-form-send"', async () => {
      const textarea = elementShadowRoot.querySelector('textarea');
      const event = new CustomEvent('keypress');
      event.keyCode = 13;
      setTimeout(() => textarea.dispatchEvent(event));

      const { detail } = await oneEvent(el, 'alc-chat-form-send');
      expect(detail.text).to.equal('Hola!');
    });
  });

  describe('Basic without icon', () => {
    beforeEach(async () => {
      el = await fixture(basicWithoutIcon());
      elementShadowRoot = el.shadowRoot;

      return el.updateComplete;
    });

    it('DOM', async () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', async () => {
      expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes: ['id', 'aria-labelledby'] });
    });

    it('Light DOM', async () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });
  });
});
