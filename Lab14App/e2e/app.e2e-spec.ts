import { Lab14AppPage } from './app.po';

describe('lab14-app App', () => {
  let page: Lab14AppPage;

  beforeEach(() => {
    page = new Lab14AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
