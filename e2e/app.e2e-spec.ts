import { GenerateDomNodePage } from './app.po';

describe('generate-dom-node App', () => {
  let page: GenerateDomNodePage;

  beforeEach(() => {
    page = new GenerateDomNodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
