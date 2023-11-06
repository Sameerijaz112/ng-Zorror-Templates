import { NewTempTemplatePage } from './app.po';

describe('NewTemp App', function() {
  let page: NewTempTemplatePage;

  beforeEach(() => {
    page = new NewTempTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
