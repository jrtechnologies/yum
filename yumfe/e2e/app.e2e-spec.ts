import { YumfePage } from './app.po';

describe('yumfe App', () => {
  let page: YumfePage;

  beforeEach(() => {
    page = new YumfePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
