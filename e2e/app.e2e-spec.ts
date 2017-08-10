import { NgStyleTestPage } from './app.po';

describe('ng-style-test App', () => {
  let page: NgStyleTestPage;

  beforeEach(() => {
    page = new NgStyleTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
