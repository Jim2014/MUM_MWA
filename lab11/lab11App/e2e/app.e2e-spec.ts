import { Lab11AppPage } from './app.po';

describe('lab11-app App', () => {
  let page: Lab11AppPage;

  beforeEach(() => {
    page = new Lab11AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
