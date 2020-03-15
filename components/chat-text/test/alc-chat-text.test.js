import { fixture, expect, fixtureCleanup } from '@open-wc/testing';
import '../alc-chat-text.js';
import { basic, basicWithoutAvatar } from '../stories/index.stories.js';

describe('al-chat-text', () => {
  let el;

  afterEach(() => fixtureCleanup());

  describe('Basic', () => {
    beforeEach(async () => {
      el = await fixture(basic());
      return el.updateComplete;
    });

    it('DOM', async () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', async () => {
      expect(el).shadowDom.to.equalSnapshot();
    });

    it('Light DOM', async () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });
  });

  describe('Basic without avatar', () => {
    beforeEach(async () => {
      el = await fixture(basicWithoutAvatar());
      return el.updateComplete;
    });

    it('DOM', async () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', async () => {
      expect(el).shadowDom.to.equalSnapshot();
    });

    it('Light DOM', async () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });
  });
});
