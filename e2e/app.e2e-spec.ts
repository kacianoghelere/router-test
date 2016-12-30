import { RouterTestPage } from './app.po';

describe('router-test App', function() {
  let page: RouterTestPage;

  beforeEach(() => {
    page = new RouterTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
