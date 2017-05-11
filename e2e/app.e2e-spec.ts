import { EjemploFileUploadPage } from './app.po';

describe('ejemplo-file-upload App', () => {
  let page: EjemploFileUploadPage;

  beforeEach(() => {
    page = new EjemploFileUploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
