import { fixture, expect } from '@open-wc/testing';
import '../alc-button-secondary.js';

const fixtures = {
  default: `<alc-button-secondary>button</alc-button-secondary>`,
};

describe('alc-button-secondary', () => {
  it('DOM', async () => {
    const el = await fixture(fixtures.default);

    expect(el).dom.to.equalSnapshot();
  });

  it('Shadow DOM', async () => {
    const el = await fixture(fixtures.default);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('Light DOM', async () => {
    const el = await fixture(fixtures.default);

    expect(el).lightDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(fixtures.default);

    await expect(el).shadowDom.to.be.accessible();
  });
});
