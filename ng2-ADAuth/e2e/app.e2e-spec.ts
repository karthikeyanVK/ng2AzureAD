import { AngularCliWebAuthPage } from './app.po';

describe('angular-cli-web-auth App', function() {
  let page: AngularCliWebAuthPage;

  beforeEach(() => {
    page = new AngularCliWebAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
